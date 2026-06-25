import { NextResponse } from "next/server"
import { callBd3 } from "@/lib/bd3/client"
import type { ChatMessage } from "@/lib/question-gen/openai-client"

const CHAR_MIN = 250
const CHAR_MAX = 300
const MAX_ATTEMPTS = 5

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { prompt, enforceCharRange } = body

    const userContent = prompt || "Write a birthday wish."

    const messages: ChatMessage[] = [
      {
        role: "system",
        content:
          "You are a professional social media manager for a university student union. You write elegant, warm, and inspirational birthday posts.",
      },
      { role: "user", content: userContent },
    ]

    if (!enforceCharRange) {
      const result = await callBd3(messages)
      return NextResponse.json({ result })
    }

    // Retry until content is within 250–300 chars
    let lastResult = null
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      const result = await callBd3(messages)
      const len = result.content.length

      if (len >= CHAR_MIN && len <= CHAR_MAX) {
        return NextResponse.json({ result })
      }

      lastResult = result
      console.log(
        `[bd3/msg] attempt ${attempt}: ${len} chars — retrying (target ${CHAR_MIN}–${CHAR_MAX})`
      )
    }

    // Return best effort if all attempts miss the range
    return NextResponse.json({ result: lastResult })
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
