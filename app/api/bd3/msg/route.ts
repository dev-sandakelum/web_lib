import { callBd3 } from "@/lib/bd3/client"
import type { ChatMessage } from "@/lib/question-gen/openai-client"

// ── Image message constraints ──────────────────────
const CHAR_MIN = 250
const CHAR_MAX = 300
const MAX_ATTEMPTS = 8   // fewer needed — trimming handles the range

const STYLE_VARIANTS = [
  "warm and energetic",
  "calm and sincere",
  "uplifting and motivational",
  "gentle and heartfelt",
  "bright and joyful",
  "friendly and celebratory",
  "inspiring and forward-looking",
  "sincere and grounded",
  "grateful and appreciative",
  "playful and fun",
  "thoughtful and meaningful",
  "enthusiastic and upbeat",
]

// Opening hooks to force varied sentence starts
const OPENING_STARTERS = [
  "Happy birthday to",
  "Wishing our amazing batchmate",
  "From all of us in the batch,",
  "Happy birthday!",
  "On this special day,",
  "Our batch is truly lucky to have you —",
  "Sending the warmest birthday wishes",
  "Here's wishing you",
  "Wishing you the happiest of birthdays",
  "Happy birthday to a true gem of our batch!",
  "The whole batch is celebrating you today —",
  "Happy birthday to someone who makes our batch",
  "From lectures to laughter,",
  "May this birthday mark",
  "Wishing a birthday filled with",
  "Cheers to you on your special day!",
  "Our batch would not be the same without you —",
  "Happy birthday, and thank you",
  "To one of the best people in our batch —",
  "Here's to celebrating you today!",
]

// Thematic focus angles to further diversify content
const FOCUS_ANGLES = [
  "shared batch memories and friendships",
  "achievements and success in the year ahead",
  "joy, laughter, and good vibes in the batch",
  "appreciation for their positive energy and kindness",
  "wishing health, happiness, and exciting new adventures",
  "gratitude for being a wonderful batchmate",
  "celebrating their unique presence in the batch",
  "the journey ahead and all the dreams to chase",
  "the good times shared and the great ones coming",
  "how much the batch values and cherishes them",
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
            "You write warm, friendly, and inspirational birthday posts on behalf of the 9th Batch. " +
            "Write like a close batchmate — genuine, direct, and human. Never overly poetic or abstract. " +
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
          const opener = OPENING_STARTERS[Math.floor(Math.random() * OPENING_STARTERS.length)]
          const focus = FOCUS_ANGLES[Math.floor(Math.random() * FOCUS_ANGLES.length)]
          const variationTag = `v${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`

          controller.enqueue(sseChunk("attempt", { attempt, maxAttempts: MAX_ATTEMPTS }))

          const messages: ChatMessage[] = [
            {
              role: "system",
              content:
                `You are a birthday message writer for a university batch group. ` +
                `Write genuine, friendly birthday wishes — like a warm batchmate, not a poet. ` +
                `Keep language simple, direct, and human. Never use abstract metaphors. ` +
                `Output ONLY the message text — no headers, no sign-off, no quotes.`,
            },
            {
              role: "user",
              content:
                `Write a birthday wish as ONE short paragraph (2–3 sentences, roughly 50 words).\n` +
                `Rules:\n` +
                `• START the message with this exact opener: "${opener}"\n` +
                `• Focus angle: ${focus}\n` +
                `• Write like a warm, genuine batchmate — simple, direct, human. No poetry.\n` +
                `• Reference "batch", "batchmates", or "all of us" naturally somewhere\n` +
                `• NO abstract metaphors (no sunrise, garden, river, blossom, dawn, petals, etc.)\n` +
                `• Use real, grounded words: joy, laughter, memories, dreams, success, journey, happiness\n` +
                `• Place 1–2 emojis (✨ 💛 🌸 🎂 🌿) only at the END of sentences, never mid-clause\n` +
                `• Max 3 sentences. Do not exceed this.\n` +
                `• Tone: ${style}\n` +
                `• Variation seed: ${variationTag}`,
            },
          ]

          try {
            const result = await callBd3(messages, 0.8)
            const raw = cleanContent(result.content)
            const fitted = fitToRange(raw)

            console.log(
              `[bd3/msg] attempt ${attempt}/${MAX_ATTEMPTS}: raw=${raw.length} fitted=${fitted?.length ?? "null"} — ${style}`
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
    `3. Warm opener (1–2 sentences) — friendly, like a close batchmate\n` +
    `4. Core message about joy, memories, dreams, and success ahead (2–3 sentences)\n` +
    `5. Closing sentence wishing them a wonderful day\n` +
    `6. Sign-off: "Best wishes from," followed by sender name (use the batch name, not "student union")\n` +
    `7. 3–5 relevant hashtags\n\n` +
    `Tone: warm, genuine, friendly, and inspiring — like a real batchmate, not a poet.\n` +
    `IMPORTANT:\n` +
    `• Never use the words "student union" — the sender is the 9th Batch\n` +
    `• No abstract metaphors (no sunrise, garden, river, blossom imagery)\n` +
    `• Use real, human language: joy, laughter, memories, success, journey\n` +
    `• Use elegant emojis (✨ 🌟 🥂 🎂 🤍) at the end of lines, not mid-sentence\n` +
    `• Use actual line breaks between sections`
  )
}