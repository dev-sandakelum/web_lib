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
  temperature = 0.9
): Promise<{ content: string; model: string }> {
  // Try each key before giving up — spreads load and avoids per-key rate limits
  const shuffledKeys = [...API_KEYS].sort(() => Math.random() - 0.5)

  for (let i = 0; i < shuffledKeys.length; i++) {
    const apiKey = shuffledKeys[i]
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
          max_tokens: 512,
          seed: Math.floor(Math.random() * 9_999_999),
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (res.status === 429) {
        // Try next key immediately instead of waiting
        if (i < shuffledKeys.length - 1) continue
        // All keys rate-limited — short wait then last attempt
        await delay(1500)
        continue
      }

      if (!res.ok) {
        throw new Error(data?.error?.message || `Groq returned ${res.status}`)
      }

      const content = data?.choices?.[0]?.message?.content?.trim() ?? ""
      if (!content) throw new Error("Empty response from Groq")
      return { content, model: MODEL }
    } catch (err: any) {
      if (i < shuffledKeys.length - 1) continue
      throw err
    }
  }

  throw new Error("All API keys exhausted")
}
