// app/api/ai/route.ts
import { NextResponse } from "next/server"
import { callGroq, ChatMessage } from "@/lib/question-gen/openai-client"

export async function POST(req: Request) {
  try {
    interface MessageInput {
        role: string
        content: string
    }

    interface RequestBody {
        messages?: MessageInput[]
    }

    const body: RequestBody = await req.json()
    const messages: ChatMessage[] = (body.messages ?? []).map(msg => ({
        role: msg.role as "system" | "user" | "assistant",
        content: msg.content,
    }))

    if (!messages.length) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 })
    }

    const { content, model } = await callGroq(messages)
    return NextResponse.json({ content, model })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
