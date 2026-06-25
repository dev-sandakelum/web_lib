import { NextResponse } from "next/server"
import { callGroq, ChatMessage } from "@/lib/question-gen/openai-client"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { prompt } = body

    const userContent = prompt || `Write a birthday wish.`

    const messages: ChatMessage[] = [
      { role: "system", content: "You are a professional social media manager for a university student union. You write elegant, warm, and inspirational birthday posts." },
      { role: "user", content: userContent }
    ]

    const aiResponse = await callGroq(messages)

    return NextResponse.json({ result: aiResponse })

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
