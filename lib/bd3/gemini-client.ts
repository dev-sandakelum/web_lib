/**
 * Google AI Studio (Gemini) client for bd3
 * Docs: https://ai.google.dev/api/generate-content
 */

export interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

const GEMINI_MODELS = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash",
] as const;

function getModel() {
  return GEMINI_MODELS[0]; // flash is fastest & free-tier friendly
}

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

/**
 * callGemini
 * Calls the Google AI Studio generateContent REST endpoint.
 * Accepts an optional system instruction + a list of conversation turns.
 */
export async function callGemini(
  prompt: string,
  systemInstruction = "You are a helpful creative assistant that generates social media birthday posts.",
  retries = 3,
  temperature = 0.85
): Promise<string> {
  const apiKey = process.env.GOOGLE_AI_KEY;
  if (!apiKey) throw new Error("GOOGLE_AI_KEY is not set in environment variables");

  const model = getModel();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const body = {
    systemInstruction: {
      parts: [{ text: systemInstruction }],
    },
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature,
      maxOutputTokens: 1024,
      topP: 0.95,
    },
  };

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          data?.error?.message || `Gemini API returned ${res.status}: ${JSON.stringify(data)}`;
        console.error("[gemini-client] API error:", res.status, JSON.stringify(data));
        // retry on rate limit
        if ((res.status === 429 || res.status === 503) && attempt < retries - 1) {
          await delay(1200 * (attempt + 1));
          continue;
        }
        throw new Error(msg);
      }

      const text: string =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

      if (!text) throw new Error("Empty response from Gemini");
      return text;
    } catch (err: any) {
      const isRetryable =
        err?.message?.includes("429") ||
        err?.message?.includes("503") ||
        err?.message?.toLowerCase().includes("rate limit") ||
        err?.message?.toLowerCase().includes("overloaded");

      if (isRetryable && attempt < retries - 1) {
        await delay(1200 * (attempt + 1));
        continue;
      }
      throw err;
    }
  }

  throw new Error("Failed to call Gemini after retries");
}
