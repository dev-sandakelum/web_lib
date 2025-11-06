"use server"

import { datasets } from "@/lib/question-gen/openai-client"
import { callOpenAI, type EvaluationResult } from "@/lib/question-gen/openai-client"

export async function generateQuestion(categoryId: string): Promise<string> {
  const dataset = datasets.find((d) => d.id === categoryId)
  if (!dataset) throw new Error("Category not found")

  const messages = [
    {
      role: "system" as const,
      content:
        "You are an expert educator creating challenging questions that test deep understanding. Generate only ONE specific question without any preamble or explanation.",
    },
    {
      role: "user" as const,
      content: `Based on this content: ${dataset.content}\n\nGenerate ONE specific, challenging question that tests understanding of key concepts. Ask only the question.`,
    },
  ]

  const response = await callOpenAI(messages)
  return response.trim()
}

export async function evaluateAnswer(question: string, answer: string, categoryId: string): Promise<EvaluationResult> {
  const dataset = datasets.find((d) => d.id === categoryId)
  if (!dataset) throw new Error("Category not found")

  if (!answer.trim()) {
    throw new Error("Please write an answer before submitting.")
  }

  const messages = [
    {
      role: "system" as const,
      content: "You evaluate student answers and respond ONLY in valid JSON format, no other text.",
    },
    {
      role: "user" as const,
      content: `Evaluate this student answer:

Question: ${question}
Student Answer: ${answer}
Reference Content: ${dataset.content}

Respond in EXACTLY this JSON format:
{
  "stars": <0-5 integer>,
  "feedback": "<1-2 sentence evaluation>",
  "improvements": ["<step1>", "<step2>", "<step3>"]
}

If stars < 4, provide 3-5 specific improvement steps. If stars >= 4, provide 1-2 helpful tips.`,
    },
  ]

  const response = await callOpenAI(messages)

  try {
    const parsed = JSON.parse(response)
    return {
      stars: Math.max(0, Math.min(5, parsed.stars || 0)),
      feedback: parsed.feedback || "No feedback provided",
      improvements: Array.isArray(parsed.improvements) ? parsed.improvements : [],
    }
  } catch {
    throw new Error("Failed to parse evaluation response. Please try again later.")
  }
}
