export type ChatMessage = {
  role: "system" | "user" | "assistant"
  content: string
}

/**
 * Randomly pick a model (update with models you have access to)
 */
const MODELS = [
  "llama-3.3-70b-versatile",
  "moonshotai/kimi-k2-instruct-0905",
  "openai/gpt-oss-120b",
  "openai/gpt-oss-20b",
]

function getRandomModel(): string {
  return MODELS[Math.floor(Math.random() * MODELS.length)]
}

/**
 * Delay helper
 */
function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms))
}

/**
 * callGroq
 * Generic server-side wrapper to call Groq chat completions
 */
export async function callGroq(
  messages: ChatMessage[],
  retries = 3,
  temperature = 0.7
): Promise<{ content: string; model: string }> {
  const GROQ_KEY = process.env.GROQ_API_KEY
  if (!GROQ_KEY) throw new Error("Missing GROQ_API_KEY in environment")

  for (let attempt = 0; attempt < retries; attempt++) {
    const model = getRandomModel()
    const body = {
      model,
      messages,
      temperature,
      max_tokens: 4000,
      top_p: 0.9,
    }

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_KEY}`,
        },
        body: JSON.stringify(body),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        const message = (data && (data?.error?.message || data?.message)) || `Groq API returned ${res.status}`
        // Retry on 429
        if (res.status === 429 && attempt < retries - 1) {
          await delay(1000 * (attempt + 1))
          continue
        }
        throw new Error(message)
      }

      const content = data?.choices?.[0]?.message?.content ?? ""
      if (!content) throw new Error("Empty response from Groq")

      return { content, model }
    } catch (err: any) {
      const isRateLimited =
        err?.status === 429 ||
        (typeof err?.message === "string" && err.message.includes("429")) ||
        (typeof err?.message === "string" && err.message.toLowerCase().includes("rate limit"))

      if (isRateLimited && attempt < retries - 1) {
        await delay(1000 * (attempt + 1))
        continue
      }

      throw err
    }
  }

  throw new Error("Failed to call Groq after retries")
}
