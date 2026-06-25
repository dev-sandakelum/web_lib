import { NextResponse } from "next/server"
import { callBd3 } from "@/lib/bd3/client"
import type { ChatMessage } from "@/lib/question-gen/openai-client"

const CHAR_MIN = 250
const CHAR_MAX = 300
const MAX_ATTEMPTS = 20

// Different style seeds so every attempt produces genuinely different output
const STYLE_VARIANTS = [
  "poetic and metaphorical, start with a nature image",
  "warm and energetic, start with a celebration phrase",
  "calm and reflective, start with a thoughtful observation",
  "uplifting and motivational, start with an empowering statement",
  "gentle and heartfelt, start with a tender greeting",
  "bright and joyful, start with light or sunshine imagery",
  "inspiring and forward-looking, start with future possibilities",
  "sincere and grounded, start with an honest appreciation",
  "lyrical and musical, start with a rhythm-driven opener",
  "vivid and colorful, start with a sensory description",
]

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { prompt, enforceCharRange } = body

    const userContent = prompt || "Write a birthday wish."

    if (!enforceCharRange) {
      const messages: ChatMessage[] = [
        {
          role: "system",
          content: "You are a professional social media manager for a university student union. You write elegant, warm, and inspirational birthday posts.",
        },
        { role: "user", content: userContent },
      ]
      const result = await callBd3(messages)
      return NextResponse.json({ result })
    }

    // Retry loop — each attempt uses a different style variant
    let lastResult = null
    let lastLen = 0

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      const style = STYLE_VARIANTS[(attempt - 1) % STYLE_VARIANTS.length]
      const uniqueTag = Math.random().toString(36).slice(2, 9)

      const messages: ChatMessage[] = [
        {
          role: "system",
          content: `You are a creative birthday message writer. Write ONLY the message text — no labels, no quotes, no explanations. Style: ${style}. Be ${style.split(",")[0]}.`,
        },
        {
          role: "user",
          content: `Write a warm birthday wish with these rules:
- NO names or titles
- Use elegant emojis (✨ 💛 🥂 🌿 🎂 🌸) woven naturally into the text
- MUST be between ${CHAR_MIN} and ${CHAR_MAX} characters total (including spaces and emojis)
- Output ONLY the wish — nothing else
- Style hint: ${style}
- Variation: ${uniqueTag}`,
        },
      ]

      try {
        const result = await callBd3(messages)
        // Strip any accidental quotes or labels the model might add
        const clean = result.content.replace(/^["']|["']$/g, "").trim()
        const len = clean.length

        console.log(`[bd3/msg] attempt ${attempt}/${MAX_ATTEMPTS}: ${len} chars (target ${CHAR_MIN}–${CHAR_MAX})`)

        if (len >= CHAR_MIN && len <= CHAR_MAX) {
          return NextResponse.json({
            result: { ...result, content: clean },
            attempts: attempt,
            maxAttempts: MAX_ATTEMPTS,
            matched: true,
            ts: Date.now(),
          })
        }

        // Keep the closest result to midpoint (275 chars)
        const target = (CHAR_MIN + CHAR_MAX) / 2
        if (
          lastResult === null ||
          Math.abs(len - target) < Math.abs(lastLen - target)
        ) {
          lastResult = { ...result, content: clean }
          lastLen = len
        }
      } catch (err: any) {
        console.warn(`[bd3/msg] attempt ${attempt} failed: ${err?.message}`)
        // Don't abort the whole loop on a single failed attempt
      }
    }

    // Return closest match found
    return NextResponse.json({
      result: lastResult,
      attempts: MAX_ATTEMPTS,
      maxAttempts: MAX_ATTEMPTS,
      matched: false,
    })
  } catch (error) {
    console.error("[bd3/msg] Error:", error)
    return NextResponse.json(
      { error: "Failed to generate message", details: String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Use POST method to send messages to Groq AI" },
    { status: 405 }
  )
}
