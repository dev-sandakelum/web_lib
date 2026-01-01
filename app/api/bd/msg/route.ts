import { NextResponse } from "next/server"
import { callGroq, ChatMessage } from "@/lib/question-gen/openai-client"

export async function POST(req: Request) {
  try {
    // 1. Parse the incoming JSON body from the frontend
    const body = await req.json()
    
    // 2. Destructure the data (Match these to what your frontend sends)
    // Example: If your frontend sends { name: "Alice", relation: "Sister" }
    const { prompt } = body

    // 3. Construct the prompt for the AI
    // We prefer using the 'prompt' if sent, otherwise we build one from details
    const userContent = prompt || `Write a birthday wish for my  named .`

    const messages: ChatMessage[] = [
      { role: "system", content: "You are a helpful creative assistant that generates social media birthday posts." },
      { role: "user", content: userContent }
    ]

    // 4. Call your Groq helper function
    // (Assuming callGroq returns the string response directly)
    const aiResponse = await callGroq(messages)

    // 5. Return the result to the frontend
    return NextResponse.json({ result: aiResponse })

  } catch (error) {
    console.error("Error generating birthday message:", error)
    
    // Return a JSON error so the frontend doesn't just crash with 500
    return NextResponse.json(
      { error: "Failed to generate message", details: String(error) }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: "Use POST method to send messages to Groq AI" 
  }, { status: 405 })
}