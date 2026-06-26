import type { ChatMessage } from "@/lib/question-gen/openai-client"

// Best Groq model for instruction-following and creative writing
const MODEL = "llama-3.3-70b-versatile"

const API_KEYS = [
  process.env.GROQ_API_KEY_1,
  process.env.GROQ_API_KEY_2,
  process.env.GROQ_API_KEY_3,
  process.env.GROQ_API_KEY,
].filter((k): k is string => !!k)

function delay(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms))
}

/**
 * Call Groq with a per-request timeout.
 * Shuffles keys to spread load across all 4 keys.
 */
export async function callBd3(
  messages: ChatMessage[],
  temperature = 0.9,
  timeoutMs = 12_000
): Promise<{ content: string; model: string }> {
  if (API_KEYS.length === 0) throw new Error("No GROQ API keys configured")

  // Shuffle keys so every call distributes load evenly
  const shuffledKeys = [...API_KEYS].sort(() => Math.random() - 0.5)

  let lastError: Error = new Error("All API keys exhausted")

  for (let i = 0; i < shuffledKeys.length; i++) {
    const apiKey = shuffledKeys[i]
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)

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
          // Random seed forces a different output on every call
          seed: Math.floor(Math.random() * 9_999_999),
        }),
        signal: controller.signal,
      })

      clearTimeout(timer)
      const data = await res.json().catch(() => ({}))

      if (res.status === 429) {
        // Rate-limited — try the next key immediately
        lastError = new Error("Rate limited")
        if (i < shuffledKeys.length - 1) continue
        // All keys rate-limited — short back-off before giving up
        await delay(1500)
        continue
      }

      if (!res.ok) {
        lastError = new Error(data?.error?.message || `Groq returned ${res.status}`)
        if (i < shuffledKeys.length - 1) continue
        throw lastError
      }

      const content = data?.choices?.[0]?.message?.content?.trim() ?? ""
      if (!content) {
        lastError = new Error("Empty response from Groq")
        if (i < shuffledKeys.length - 1) continue
        throw lastError
      }

      return { content, model: MODEL }
    } catch (err: any) {
      clearTimeout(timer)
      if (err?.name === "AbortError") {
        lastError = new Error(`Request timed out after ${timeoutMs}ms`)
      } else {
        lastError = err instanceof Error ? err : new Error(String(err))
      }
      if (i < shuffledKeys.length - 1) continue
    }
  }

  throw lastError
}
