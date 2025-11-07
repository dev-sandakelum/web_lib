"use server"

import { callOpenAI } from "@/lib/question-gen/openai-client"
import { getDatasetById } from "@/lib/question-gen/types/dataset"

// Common reusable instruction
const commonInstruction = `
Use basic HTML tags (<b>, <i>, <u>, <ul>, <li>, <br>) for formatting and emphasis in your response.
Do NOT include <html>, <body>, or other structural tags. 
Keep the text clean, readable, and semantically correct.
`
const questionPattern = `Look for these patterns:

Question Distribution

Count how many marks for each topic
Which topics appear most frequently?
Which topics are combined together?


Question Styles

Define/Explain questions (testing knowledge)
Compare/Contrast (testing understanding)
Apply to scenario (testing application)
Diagram/Draw (testing practical skills)


Repeated Topics

What appears in all 3 years?
What's asked differently each time?
New topics vs consistent topics


Mark Allocation

High marks = detailed answers needed
Low marks = brief, specific answers



Can You Help Me By:

Typing out 2-3 sample questions from any paper?
Telling me the main topics you see covered?
Sharing the section structure (Part A, B, C format)?
Taking a photo/screenshot if the scan quality is poor?

Once I can see the actual questions, I can give you much more specific guidance on:

How questions are constructed
What examiners are looking for
How to prepare effectively
Common question patterns`
export async function generateQuestion(categoryId: string): Promise<string> {
  const dataset = getDatasetById(categoryId)
  
  if (!dataset) {
    throw new Error("Dataset not found")
  }

  const contentPreview = dataset.content.length > 3000 
    ? dataset.content.substring(0, 3000) + "..." 
    : dataset.content

  const prompt = `
Based on the following educational content about <b>${dataset.category}</b>, generate <b>ONE thoughtful and concept-testing question</b>.

CONTENT PREVIEW:
${contentPreview}

Guidelines:
- The question should assess understanding or reasoning, not simple recall.
- Keep it clear and grammatically correct.
- Avoid adding extra explanations or metadata.
- ${commonInstruction}
- Use the following patterns as inspiration (but do not copy directly):
${questionPattern}

Return ONLY the question text.
`

  const messages = [
    {
      role: "system",
      content: "You are a helpful educational assistant. Generate clear, engaging, and well-formatted quiz questions.",
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
): Promise<{ 
  stars: number
  feedback: string
  improvements: string[]
  modelAnswer: string
}> {
  const dataset = getDatasetById(categoryId)
  
  if (!dataset) {
    throw new Error("Dataset not found")
  }

  const contentPreview = dataset.content.length > 3000 
    ? dataset.content.substring(0, 3000) + "..." 
    : dataset.content

  // STEP 1: Generate model answer
  const modelAnswerPrompt = `
Using the following reference content, generate a <b>comprehensive correct answer</b> to the question below.

TOPIC: ${dataset.category}

REFERENCE CONTENT:
${contentPreview}

QUESTION: ${question}

Instructions:
- Base the answer strictly on the reference content.
- Keep it concise but complete (3–5 sentences).
- ${commonInstruction}
`

  const modelAnswerMessages = [
    {
      role: "system",
      content: "You are an educational expert. Provide accurate, concise, and well-formatted answers using HTML for readability.",
    },
    {
      role: "user",
      content: modelAnswerPrompt,
    },
  ]

  let modelAnswer = ""
  try {
    modelAnswer = await callOpenAI(modelAnswerMessages, 3, 0.5)
  } catch (error) {
    console.error("Failed to generate model answer:", error)
    modelAnswer = "Model answer generation failed. Please refer to your study materials."
  }

  // STEP 2: Evaluate student's answer
  const evaluationPrompt = `
You are an educational evaluator. Compare the student's answer with the model answer and provide feedback in JSON format.

TOPIC: ${dataset.category}

QUESTION: ${question}

MODEL ANSWER:
${modelAnswer}

STUDENT'S ANSWER: 
${answer}

Respond ONLY in this JSON structure:
{
  "stars": 3,
  "feedback": "Your answer shows basic understanding but misses key points about X and Y.",
  "improvements": ["Include information about X", "Explain Y more clearly"]
}

Rules:
- stars: integer (1–5)
- feedback: 2–3 sentences comparing to model answer
- improvements: array of 2–3 specific suggestions (empty if stars ≥ 4)
- ${commonInstruction}

Return ONLY valid JSON, no extra text.
`

  const evaluationMessages = [
    {
      role: "system",
      content: "You are an educational evaluator. You MUST respond with valid JSON only — no markdown or explanations.",
    },
    {
      role: "user",
      content: evaluationPrompt,
    },
  ]

  try {
    const response = await callOpenAI(evaluationMessages, 3, 0.3)
    
    // --- JSON cleanup ---
    let cleanedResponse = response.trim()
    cleanedResponse = cleanedResponse.replace(/^```(json)?\s*|\s*```$/g, "").trim()

    const parsed = JSON.parse(cleanedResponse)
    
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
      modelAnswer,
    }
  } catch (error) {
    console.error("Evaluation error:", error)
    
    return {
      stars: 3,
      feedback: "Your answer has been reviewed. Compare it with the model answer below to see how you can improve.",
      improvements: [
        "Review the key concepts in the model answer",
        "Include more specific details from the course material",
        "Organize your answer more clearly"
      ],
      modelAnswer,
    }
  }
}
