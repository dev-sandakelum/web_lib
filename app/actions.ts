"use server"

import { getDatasetById } from "@/lib/question-gen/types/dataset"
import { callOpenAI } from "@/lib/question-gen/openai-client"

export async function generateQuestion(categoryId: string): Promise<string> {
  const dataset = getDatasetById(categoryId)
  
  if (!dataset) {
    throw new Error("Dataset not found")
  }

  const prompt = `Based on the following content about ${dataset.category}, generate a thoughtful question that tests understanding:\n\n${dataset.content}\n\nGenerate only the question, no additional text.`

  const messages = [
    {
      role: "system",
      content: "You are a helpful educational assistant that generates quiz questions.",
    },
    {
      role: "user",
      content: prompt,
    },
  ]

  return await callOpenAI(messages)
}

export async function evaluateAnswer(
  question: string,
  answer: string,
  categoryId: string
): Promise<{ stars: number; feedback: string; improvements: string[] }> {
  const dataset = getDatasetById(categoryId)
  
  if (!dataset) {
    throw new Error("Dataset not found")
  }

  const prompt = `Evaluate this answer based on the content about ${dataset.category}:

Content: ${dataset.content}

Question: ${question}
Answer: ${answer}

Provide:
1. A rating from 1-5 stars
2. Brief feedback (2-3 sentences)
3. If less than 4 stars, provide 2-3 specific improvements

Format your response as JSON:
{
  "stars": number,
  "feedback": "string",
  "improvements": ["string"]
}`

  const messages = [
    {
      role: "system",
      content: "You are an educational evaluator. Respond only with valid JSON.",
    },
    {
      role: "user",
      content: prompt,
    },
  ]

  const response = await callOpenAI(messages)
  
  try {
    const parsed = JSON.parse(response)
    return {
      stars: parsed.stars || 3,
      feedback: parsed.feedback || "Good attempt!",
      improvements: parsed.improvements || [],
    }
  } catch {
    return {
      stars: 3,
      feedback: "Unable to evaluate properly. Please try again.",
      improvements: ["Provide more detailed explanations"],
    }
  }
}