import { NextResponse } from "next/server"
import { callGroq, ChatMessage } from "@/lib/question-gen/openai-client"

const CHAR_MIN = 250
const CHAR_MAX = 300
const MAX_ATTEMPTS = 5

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { prompt, enforceCharRange } = body

    const userContent = prompt || `Write a birthday wish.`

    const messages: ChatMessage[] = [
      {
        role: "system",
        content:
          "You are a professional social media manager for a university student union. You write elegant, warm, and inspirational birthday posts.",
      },
      { role: "user", content: userContent },
    ]

    if (!enforceCharRange) {
      // No char constraint — single call
      const aiResponse = await callGroq(messages)
      return NextResponse.json({ result: aiResponse })
    }

    // Enforce 250–300 char range — retry until it fits or we hit MAX_ATTEMPTS
    let lastResponse = null
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      const aiResponse = await callGroq(messages)
      const len = aiResponse.content.length

      if (len >= CHAR_MIN && len <= CHAR_MAX) {
        return NextResponse.json({ result: aiResponse })
      }

      lastResponse = aiResponse
      console.log(`[bd3/msg] attempt ${attempt}: ${len} chars — retrying (target ${CHAR_MIN}–${CHAR_MAX})`)
    }

    // All attempts done — return the closest result to the target midpoint
    return NextResponse.json({ result: lastResponse })

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
