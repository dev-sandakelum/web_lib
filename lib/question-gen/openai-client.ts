import OpenAI from "openai"

let currentKeyIndex = 0

const API_KEYS = [
  process.env.NEXT_PUBLIC_OPENROUTER_API_KEY_1,
  process.env.NEXT_PUBLIC_OPENROUTER_API_KEY_2,
  process.env.NEXT_PUBLIC_OPENROUTER_API_KEY_3,
].filter((key): key is string => key !== undefined && key !== "")

if (API_KEYS.length === 0) {
  throw new Error(
    "No OpenRouter API keys configured. Please add OPENROUTER_API_KEY_1, OPENROUTER_API_KEY_2, or OPENROUTER_API_KEY_3 environment variables."
  )
}

// Dataset interface with full PDF content as text
export interface Dataset {
  id: string
  category: string
  description: string
  content: string // Full text content extracted from PDF
}

// Import datasets from separate files
import { ancientHistoryDataset } from "./datasets/ancient-history"

export const datasets: Dataset[] = [
  ancientHistoryDataset
]

// Helper functions
export function getDatasetById(id: string): Dataset | undefined {
  return datasets.find(dataset => dataset.id === id)
}

export function getAllCategories(): string[] {
  return datasets.map(dataset => dataset.category)
}

export function getNextApiKey(): string {
  const key = API_KEYS[currentKeyIndex]
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length
  return key
}

export async function callOpenAI(
  messages: Array<{ role: string; content: string }>,
  retries = 3
): Promise<string> {
  for (let i = 0; i < retries; i++) {
    try {
      const apiKey = getNextApiKey()
      
      const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
      })

      const response = await openai.chat.completions.create({
        model: "deepseek/deepseek-chat",
        messages: messages.map(msg => ({
          role: msg.role as "user" | "assistant" | "system",
          content: msg.content,
        })),
        temperature: 0.7,
        max_tokens: 1024,
      })

      const content = response.choices[0]?.message?.content

      if (!content) {
        throw new Error("No content in response")
      }

      return content
    } catch (error: unknown) {
      const err = error as Record<string, unknown>
      if (
        ((typeof err.status === "number" && err.status === 429) ||
          (typeof err.message === "string" && err.message.includes("429"))) &&
        i < retries - 1
      ) {
        continue
      }
      throw error
    }
  }

  throw new Error("Failed to call OpenRouter API after retries")
}

export interface EvaluationResult {
  stars: number
  feedback: string
  improvements: string[]
}