import OpenAI from "openai"

let currentKeyIndex = 0

const API_KEYS = [
  process.env.OPENROUTER_API_KEY_1,
  process.env.OPENROUTER_API_KEY_2,
  process.env.OPENROUTER_API_KEY_3,
].filter((key): key is string => key !== undefined && key !== "")

const HAS_API_KEYS = API_KEYS.length > 0

export function getNextApiKey(): string {
  if (!HAS_API_KEYS) {
    throw new Error(
      "No OpenRouter API keys configured. Please add OPENROUTER_API_KEY_1 (or _2/_3) to your environment."
    )
  }

  const key = API_KEYS[currentKeyIndex]
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length
  return key
}

export async function callOpenAI(
  messages: Array<{ role: string; content: string }>,
  retries = 3,
  temperature = 0.7  // Add temperature parameter
): Promise<string> {
  if (!HAS_API_KEYS) {
    throw new Error(
      "OpenRouter API keys are not configured. Set OPENROUTER_API_KEY_1 (or _2/_3) to enable AI features."
    )
  }

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
        temperature: temperature,  // Use parameter
        max_tokens: 2048,  // Increased from 1024
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
        await new Promise(resolve => setTimeout(resolve, 1000)) // Add delay
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
