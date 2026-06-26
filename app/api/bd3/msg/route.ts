import { callBd3 } from "@/lib/bd3/client"
import type { ChatMessage } from "@/lib/question-gen/openai-client"

// ── Image message constraints ──────────────────────
const CHAR_MIN = 250
const CHAR_MAX = 300
const MAX_ATTEMPTS = 8   // fewer needed — trimming handles the range

const STYLE_VARIANTS = [
  "poetic and metaphorical, open with a nature image",
  "warm and energetic, open with a celebration phrase",
  "calm and reflective, open with a thoughtful observation",
  "uplifting and motivational, open with an empowering statement",
  "gentle and heartfelt, open with a tender greeting",
  "bright and joyful, open with light or sunshine imagery",
  "inspiring and forward-looking, open with future possibilities",
  "sincere and grounded, open with an honest appreciation",
]

// Closing emojis to pad a message that lands slightly under CHAR_MIN
const CLOSING_EMOJIS = ["✨", "💛", "🌸", "🌿", "🥂", "🎂"]

const NO_CACHE = {
  "Cache-Control": "no-store, no-cache, must-revalidate",
  "Pragma": "no-cache",
}

// ── Helpers ────────────────────────────────────────

function cleanContent(raw: string): string {
  return raw
    .replace(/^["'`]|["'`]$/g, "")
    .replace(/^(message|wish|caption)[:\s]*/i, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

/**
 * Trim `text` to fit within [CHAR_MIN, CHAR_MAX].
 *
 * Strategy:
 *  1. If already in range → return as-is.
 *  2. If too long → cut at the last word boundary before CHAR_MAX,
 *     then append a closing emoji so it reads naturally.
 *  3. If too short → pad with a space + closing emoji until ≥ CHAR_MIN.
 *     If still too short even after all emojis, return null (retry needed).
 */
function fitToRange(text: string): string | null {
  if (text.length >= CHAR_MIN && text.length <= CHAR_MAX) return text

  if (text.length > CHAR_MAX) {
    // Leave room for " ✨" (3 chars) at the end
    const budget = CHAR_MAX - 3
    const cut = text.slice(0, budget)
    // Walk back to the last space so we don't cut mid-word
    const lastSpace = cut.lastIndexOf(" ")
    const trimmed = lastSpace > CHAR_MIN - 3 ? cut.slice(0, lastSpace) : cut
    const result = trimmed.trimEnd() + " ✨"
    // Final check — if still over (rare), hard-slice
    if (result.length > CHAR_MAX) {
      return text.slice(0, CHAR_MAX - 2).trimEnd() + " ✨"
    }
    return result.length >= CHAR_MIN ? result : null
  }

  // Too short — pad with emojis
  let padded = text
  for (const emoji of CLOSING_EMOJIS) {
    if (padded.length >= CHAR_MIN) break
    padded = padded.trimEnd() + " " + emoji
  }
  return padded.length >= CHAR_MIN && padded.length <= CHAR_MAX ? padded : null
}

function sseChunk(event: string, data: unknown): Uint8Array {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
  return new TextEncoder().encode(payload)
}

// ── Route handlers ─────────────────────────────────

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { enforceCharRange, name, batch, faculty, university, prompt } = body

    // ── Mode A: Full social-post ───────────────────────────────────────────
    if (!enforceCharRange) {
      const userContent = prompt ?? buildSocialPostPrompt({ name, batch, faculty, university })

      const messages: ChatMessage[] = [
        {
          role: "system",
          content:
            "You are a social media manager for the 9th Batch of the Faculty of Technology, University of Ruhuna. " +
            "You write elegant, warm, and inspirational birthday posts on behalf of the 9th Batch. " +
            "Never mention 'student union'. Follow the structure and formatting instructions precisely.",
        },
        { role: "user", content: userContent },
      ]

      const result = await callBd3(messages, 0.85)
      const content = cleanContent(result.content)

      return new Response(JSON.stringify({ result: { ...result, content } }), {
        headers: { "Content-Type": "application/json", ...NO_CACHE },
      })
    }

    // ── Mode B: Short image message — SSE stream ───────────────────────────
    const stream = new ReadableStream({
      async start(controller) {
        let bestResult: { content: string; model: string } | null = null
        let bestLen = 0
        const target = (CHAR_MIN + CHAR_MAX) / 2 // 275

        for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
          const style = STYLE_VARIANTS[(attempt - 1) % STYLE_VARIANTS.length]
          const variationTag = `v${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`

          controller.enqueue(sseChunk("attempt", { attempt, maxAttempts: MAX_ATTEMPTS }))

          // Ask for a natural short paragraph — no character-counting instruction.
          // The model reliably produces 2-3 sentences when asked this way.
          // We enforce the exact range server-side via fitToRange().
          const messages: ChatMessage[] = [
            {
              role: "system",
              content:
                `You are a birthday message writer. ` +
                `Write a single short paragraph — no headers, no lists, no sign-off. ` +
                `Style: ${style}. Output ONLY the message text.`,
            },
            {
              role: "user",
              content:
                `Write a warm, professional birthday wish as ONE short paragraph (2–3 sentences, roughly 50 words).\n` +
                `Rules:\n` +
                `• No names or titles\n` +
                `• 2–3 elegant emojis (✨ 💛 🌿 🎂 🌸) woven in naturally\n` +
                `• Tone: Professional, inspiring, and focused on growth, success, and future milestones\n` +
                `• Style: ${style}\n` +
                `• Keep it concise — do not write more than 3 sentences\n` +
                `• Variation: ${variationTag}`,
            },
          ]

          try {
            const result = await callBd3(messages, 0.8)
            const raw = cleanContent(result.content)
            const fitted = fitToRange(raw)

            console.log(
              `[bd3/msg] attempt ${attempt}/${MAX_ATTEMPTS}: raw=${raw.length} fitted=${fitted?.length ?? "null"} — ${style.split(",")[0]}`
            )

            if (fitted !== null) {
              // ✅ Fits the range — done immediately
              controller.enqueue(
                sseChunk("done", {
                  result: { ...result, content: fitted },
                  attempts: attempt,
                  maxAttempts: MAX_ATTEMPTS,
                  matched: true,
                })
              )
              controller.close()
              return
            }

            // Keep closest to midpoint as fallback (raw — will be fitted at end)
            const len = raw.length
            if (
              bestResult === null ||
              Math.abs(len - target) < Math.abs(bestLen - target)
            ) {
              bestResult = { ...result, content: raw }
              bestLen = len
            }
          } catch (err: any) {
            console.warn(`[bd3/msg] attempt ${attempt} error: ${err?.message}`)
          }
        }

        // All attempts done — force-fit the best raw result
        const fallback = bestResult
          ? (fitToRange(bestResult.content) ?? bestResult.content.slice(0, CHAR_MAX).trimEnd() + " ✨")
          : null

        controller.enqueue(
          sseChunk("done", {
            result: fallback ? { ...bestResult, content: fallback } : null,
            attempts: MAX_ATTEMPTS,
            maxAttempts: MAX_ATTEMPTS,
            matched: false,
          })
        )
        controller.close()
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive",
        ...NO_CACHE,
      },
    })
  } catch (error) {
    console.error("[bd3/msg] Fatal error:", error)
    return new Response(
      JSON.stringify({ error: "Failed to generate message", details: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json", ...NO_CACHE } }
    )
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: "Use POST to generate birthday messages." }),
    { status: 405, headers: { "Content-Type": "application/json", ...NO_CACHE } }
  )
}

// ── Prompt builder ─────────────────────────────────

function buildSocialPostPrompt({
  name,
  batch,
  faculty,
  university,
}: {
  name?: string
  batch?: string
  faculty?: string
  university?: string
}): string {
  const sender = [batch, faculty, university].filter(Boolean).join(", ") || "9th Batch, Faculty of Technology, University of Ruhuna"
  return (
    `Write a birthday post for ${name || "a student"} from the ${sender}.\n\n` +
    `Structure:\n` +
    `1. Header line with festive emojis (✨ 🎂 🌟)\n` +
    `2. Salutation: "Dear ${name || "Friend"},"\n` +
    `3. Warm opener (1–2 sentences)\n` +
    `4. Core message about growth, light, strength, and success (2–3 sentences)\n` +
    `5. Closing sentence\n` +
    `6. Sign-off: "Best wishes from," followed by sender name (use the batch name, not "student union")\n` +
    `7. 3–5 relevant hashtags\n\n` +
    `Tone: formal, warm, inspirational, slightly poetic.\n` +
    `IMPORTANT: Never use the words "student union" — the sender is the 9th Batch.\n` +
    `Use elegant emojis (✨ 🌟 🥂 🎂 🤍) at the end of each line.\n` +
    `Use actual line breaks between sections.`
  )
}
