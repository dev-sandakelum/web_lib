
"use server"

import { callOpenAI } from "@/lib/question-gen/openai-client"
import { getDatasetById } from "@/lib/question-gen/types/dataset"

export async function generateQuestion(categoryId: string): Promise<string> {
  const dataset = getDatasetById(categoryId)
  
  if (!dataset) {
    throw new Error("Dataset not found")
  }

  const contentPreview = dataset.content.length > 3000 
    ? dataset.content.substring(0, 3000) + "..." 
    : dataset.content

  const prompt = `Based on the following content about ${dataset.category}, generate ONE thoughtful question that tests understanding:

${contentPreview}

Generate ONLY the question text, nothing else. and use html tages <ul><b><br><i><u> for style if wanted`

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
): Promise<{ 
  stars: number
  feedback: string
  improvements: string[]
  modelAnswer: string  // ADDED
}> {
  const dataset = getDatasetById(categoryId)
  
  if (!dataset) {
    throw new Error("Dataset not found")
  }

  const contentPreview = dataset.content.length > 3000 
    ? dataset.content.substring(0, 3000) + "..." 
    : dataset.content

  // STEP 1: Generate the model answer first
  const modelAnswerPrompt = `Based on the following reference content, provide a comprehensive correct answer to this question.

TOPIC: ${dataset.category}

REFERENCE CONTENT:
${contentPreview}

QUESTION: ${question}

Provide a detailed, accurate answer based ONLY on the reference content. Keep it concise but complete (3-5 sentences).`

  const modelAnswerMessages = [
    {
      role: "system",
      content: "You are an educational expert. Provide accurate, comprehensive answers based on the given content.",
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

  // STEP 2: Evaluate the student's answer
  const evaluationPrompt = `You are an educational evaluator. Compare the student's answer with the model answer and evaluate.

TOPIC: ${dataset.category}

QUESTION: ${question}

MODEL ANSWER:
${modelAnswer}

STUDENT'S ANSWER: 
${answer}

Evaluate how well the student's answer matches the model answer. Respond with ONLY valid JSON in this exact format:
{
  "stars": 3,
  "feedback": "Your answer shows basic understanding but misses key points about X and Y.",
  "improvements": ["Include information about X", "Explain Y more clearly"]
}

Rules:
- stars: integer from 1-5 (5 = matches model answer closely, 1 = very poor)
- feedback: 2-3 sentences comparing to model answer
- improvements: array of 2-3 specific strings (only if stars < 4, otherwise empty array
- use html tages <ul><b><br><i><u> for style

Respond with ONLY the JSON object, no other text.`

  const evaluationMessages = [
    {
      role: "system",
      content: "You are an educational evaluator. You MUST respond with valid JSON only, no other text.",
    },
    {
      role: "user",
      content: evaluationPrompt,
    },
  ]

  try {
    const response = await callOpenAI(evaluationMessages, 3, 0.3)
    
    // Clean the response
    let cleanedResponse = response.trim()
    
    if (cleanedResponse.startsWith("```json")) {
      cleanedResponse = cleanedResponse.replace(/^```json\s*/, "").replace(/\s*```$/, "")
    } else if (cleanedResponse.startsWith("```")) {
      cleanedResponse = cleanedResponse.replace(/^```\s*/, "").replace(/\s*```$/, "")
    }
    
    cleanedResponse = cleanedResponse.trim()
    
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
      modelAnswer: modelAnswer,  // ADDED
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
      modelAnswer: modelAnswer,  // ADDED
    }
  }
}
