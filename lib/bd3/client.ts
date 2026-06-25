import type { ChatMessage } from "@/lib/question-gen/openai-client"

const MODEL = "openai/gpt-oss-20b"

const API_KEYS = [
  process.env.GROQ_API_KEY_1,
  process.env.GROQ_API_KEY_2,
  process.env.GROQ_API_KEY_3,
  process.env.GROQ_API_KEY,
].filter((k): k is string => !!k)

function getRandomKey(): string {
  if (API_KEYS.length === 0) throw new Error("No GROQ API keys configured")
  return API_KEYS[Math.floor(Math.random() * API_KEYS.length)]
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

export async function callBd3(
  messages: ChatMessage[],
  retries = 3,
  temperature = 0.85
): Promise<{ content: string; model: string }> {
  for (let attempt = 0; attempt < retries; attempt++) {
    const apiKey = getRandomKey()
    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages,
          temperature,
          max_tokens: 1024,
          seed: Math.floor(Math.random() * 1_000_000),
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        const msg = data?.error?.message || `Groq returned ${res.status}`
        if (res.status === 429 && attempt < retries - 1) {
          await delay(1000 * (attempt + 1))
          continue
        }
        throw new Error(msg)
      }

      const content = data?.choices?.[0]?.message?.content ?? ""
      if (!content) throw new Error("Empty response from Groq")
      return { content, model: MODEL }
    } catch (err: any) {
      const isRateLimit =
        err?.message?.includes("429") ||
        err?.message?.toLowerCase().includes("rate limit")
      if (isRateLimit && attempt < retries - 1) {
        await delay(1000 * (attempt + 1))
        continue
      }
      throw err
    }
  }
  throw new Error("Failed after retries")
}
