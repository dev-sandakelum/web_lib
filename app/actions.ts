// ============================================
// UPDATE: app/actions.ts
// Better prompting and JSON parsing
// ============================================

"use server"

import { getDatasetById } from "@/lib/question-gen/types/dataset"
import { callOpenAI } from "@/lib/question-gen/openai-client"

export async function generateQuestion(categoryId: string): Promise<string> {
  const dataset = getDatasetById(categoryId)
  
  if (!dataset) {
    throw new Error("Dataset not found")
  }

  // Truncate content if too long (avoid token limits)
  const contentPreview = dataset.content.length > 3000 
    ? dataset.content.substring(0, 3000) + "..." 
    : dataset.content

  const prompt = `Based on the following content about ${dataset.category}, generate ONE thoughtful question that tests understanding:

${contentPreview}

Generate ONLY the question text, nothing else.`

  const messages = [
    {
      role: "system",
      content: "You are a helpful educational assistant. Generate clear, focused quiz questions.",
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

  // Truncate content if too long
  const contentPreview = dataset.content.length > 3000 
    ? dataset.content.substring(0, 3000) + "..." 
    : dataset.content

  const prompt = `You are an educational evaluator. Evaluate this student's answer.

TOPIC: ${dataset.category}

REFERENCE CONTENT:
${contentPreview}

QUESTION: ${question}

STUDENT'S ANSWER: ${answer}

Evaluate the answer and respond with ONLY valid JSON in this exact format:
{
  "stars": 3,
  "feedback": "Your answer shows basic understanding but needs more detail.",
  "improvements": ["Include more specific examples", "Explain the concept more clearly"]
}

Rules:
- stars: integer from 1-5
- feedback: 1-2 sentences
- improvements: array of 2-3 strings (only if stars < 4, otherwise empty array)

Respond with ONLY the JSON object, no other text.`

  const messages = [
    {
      role: "system",
      content: "You are an educational evaluator. You MUST respond with valid JSON only, no other text.",
    },
    {
      role: "user",
      content: prompt,
    },
  ]

  // keep a single mutable response variable in outer scope to avoid TDZ/shadowing
  let response: string = ""
  try {
  // Use temperature 0.3 for more consistent JSON output
  response = await callOpenAI(messages, 3, 0.3)
    
    // Clean the response - remove markdown code blocks if present
    let cleanedResponse = response.trim()
    
    // Remove ```json and ``` if present
    if (cleanedResponse.startsWith("```json")) {
      cleanedResponse = cleanedResponse.replace(/^```json\s*/, "").replace(/\s*```$/, "")
    } else if (cleanedResponse.startsWith("```")) {
      cleanedResponse = cleanedResponse.replace(/^```\s*/, "").replace(/\s*```$/, "")
    }
    
    cleanedResponse = cleanedResponse.trim()
    
    // Try to parse JSON
    const parsed = JSON.parse(cleanedResponse)
    
    // Validate the structure
    if (typeof parsed.stars !== "number" || parsed.stars < 1 || parsed.stars > 5) {
      throw new Error("Invalid stars value")
    }
    
    if (typeof parsed.feedback !== "string" || !parsed.feedback) {
      throw new Error("Invalid feedback")
    }
    
    if (!Array.isArray(parsed.improvements)) {
      throw new Error("Invalid improvements array")
    }
    
    return {
      stars: Math.round(parsed.stars),
      feedback: parsed.feedback,
      improvements: parsed.improvements.filter((item: unknown) => typeof item === "string"),
    }
  } catch (error) {
    console.error("Evaluation error:", error)
    console.error("Raw response:", response)
    
    // Fallback: try to extract any useful information
  const fallback = await callOpenAI(messages, 3, 0.3)
    
    // Try to find numbers for stars
    const starsMatch = fallback.match(/["\s]stars["\s]*:\s*(\d)/i)
    const stars = starsMatch ? parseInt(starsMatch[1]) : 3
    
    // Return a reasonable default
    return {
      stars: Math.max(1, Math.min(5, stars)),
      feedback: "Your answer has been reviewed. Keep practicing to improve your understanding of the topic.",
      improvements: [
        "Provide more specific details from the course material",
        "Explain your reasoning more clearly",
        "Include relevant examples to support your answer"
      ],
    }
  }
}

// ============================================
// ALTERNATIVE: If DeepSeek still doesn't work well
// Try using a more reliable format with regex fallback
// ============================================

export async function evaluateAnswerV2(
  question: string,
  answer: string,
  categoryId: string
): Promise<{ stars: number; feedback: string; improvements: string[] }> {
  const dataset = getDatasetById(categoryId)
  
  if (!dataset) {
    throw new Error("Dataset not found")
  }

  const contentPreview = dataset.content.length > 3000 
    ? dataset.content.substring(0, 3000) + "..." 
    : dataset.content

  // Simpler prompt format
  const prompt = `Evaluate this answer on a scale of 1-5 stars.

Topic: ${dataset.category}
Question: ${question}
Answer: ${answer}

Reference content:
${contentPreview}

Provide your evaluation in this format:
STARS: [number 1-5]
FEEDBACK: [1-2 sentences]
IMPROVEMENTS: [list 2-3 improvements if stars < 4]`

  const messages = [
    {
      role: "system",
      content: "You are an educational evaluator. Be concise and structured in your response.",
    },
    {
      role: "user",
      content: prompt,
    },
  ]

  const response = await callOpenAI(messages)
  
  // Parse with regex
  const starsMatch = response.match(/STARS:\s*(\d)/i)
  const feedbackMatch = response.match(/FEEDBACK:\s*([^\n]+(?:\n(?!IMPROVEMENTS:)[^\n]+)*)/i)
  const improvementsMatch = response.match(/IMPROVEMENTS:\s*([\s\S]+)/i)
  
  const stars = starsMatch ? parseInt(starsMatch[1]) : 3
  const feedback = feedbackMatch 
    ? feedbackMatch[1].trim() 
    : "Your answer shows understanding of the topic."
    
  let improvements: string[] = []
  if (stars < 4 && improvementsMatch) {
    improvements = improvementsMatch[1]
      .split(/\n|;|-/)
      .map(s => s.trim())
      .filter(s => s.length > 10)
      .slice(0, 3)
  }
  
  if (improvements.length === 0 && stars < 4) {
    improvements = [
      "Include more specific details",
      "Provide clearer explanations",
      "Reference key concepts from the material"
    ]
  }
  
  return {
    stars: Math.max(1, Math.min(5, stars)),
    feedback,
    improvements,
  }
}