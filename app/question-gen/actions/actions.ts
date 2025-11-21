"use server";

import { callOpenAI } from "@/lib/question-gen/openai-client";
import { getDatasetById } from "@/lib/question-gen/types/dataset";
import { QuestionPattern } from "./pattens/main";
import { generatePromptfor_InformationSystems } from "./prompts/gen/is";
import { CommonInstruction } from "./prompts/common";
import { ModelAnswerPrompt } from "./prompts/modelAnswer";
import { EvaluationPrompt } from "./prompts/evaluation";
import { generatePromptfor_programming } from "./prompts/gen/c";
import { generatePromptfor_ComputerNetworks } from "./prompts/gen/net";

// Common reusable instruction

export async function generateQuestion(categoryId: string): Promise<{ content: string; model: string }> {
  const dataset = getDatasetById(categoryId);

  if (!dataset) {
    throw new Error("Dataset not found");
  }

  const contentPreview =
    dataset.content.length > 3000
      ? dataset.content.substring(0, 3000) + "..."
      : dataset.content;

  let thePrompt = "";
  if (dataset.category === "Information Systems") {
    thePrompt = generatePromptfor_InformationSystems(
      dataset,
      contentPreview,
      QuestionPattern,
      CommonInstruction
    );
  }else if (dataset.category === "Programming") {
    thePrompt = generatePromptfor_programming(
      dataset,
      contentPreview,
      QuestionPattern,
      CommonInstruction
    );
  }else if (dataset.category === "Computer Architecture") {
    // You can add more conditions for other categories if needed
    thePrompt = generatePromptfor_InformationSystems(
      dataset,
      contentPreview,
      QuestionPattern,
      CommonInstruction
    );
  }
  else if (dataset.category === "Computer Networks") {
    // You can add more conditions for other categories if needed
    thePrompt = generatePromptfor_ComputerNetworks(
      dataset,
      contentPreview,
      QuestionPattern,
      CommonInstruction
    ); 
  }
  const messages = [
    {
      role: "system",
      content:
        "You are a helpful educational assistant. Generate clear, engaging, and well-formatted quiz questions.",
    },
    {
      role: "user",
      content: thePrompt,
    },
  ];

  const { content , model } = await callOpenAI(messages);
  return {content , model};
}

export async function evaluateAnswer(
  question: string,
  answer: string,
  categoryId: string
): Promise<{
  stars: number;
  feedback: string;
  improvements: string[];
  modelAnswer: string;
}> {
  const dataset = getDatasetById(categoryId);

  if (!dataset) {
    throw new Error("Dataset not found");
  }

  const contentPreview =
    dataset.content.length > 3000
      ? dataset.content.substring(0, 3000) + "..."
      : dataset.content;

  // STEP 1: Generate model answer
  const ModelAnswerthePrompt = ModelAnswerPrompt(
    dataset,
    contentPreview,
    question,
    CommonInstruction
  );

  const modelAnswerMessages = [
    {
      role: "system",
      content:
        "You are an educational expert. Provide accurate, concise, and well-formatted answers using HTML for readability.",
    },
    {
      role: "user",
      content: ModelAnswerthePrompt,
    },
  ];

  let modelAnswer = "";
  try {
     const { content } = await callOpenAI(modelAnswerMessages, 3, 0.5);
    modelAnswer = content;
  } catch (error) {
    console.error("Failed to generate model answer:", error);
    modelAnswer =
      "Model answer generation failed. Please refer to your study materials.";
  }

  // STEP 2: Evaluate student's answer
  const EvaluationthePrompt = EvaluationPrompt(
    dataset,
    question,
    modelAnswer,
    answer,
    CommonInstruction
  );

  const evaluationMessages = [
    {
      role: "system",
      content:
        "You are an educational evaluator. You MUST respond with valid JSON only — no markdown or explanations.",
    },
    {
      role: "user",
      content: EvaluationthePrompt,
    },
  ];

  try {
    const {content: response , model} = await callOpenAI(evaluationMessages, 3, 0.3);

    // --- JSON cleanup ---
    let cleanedResponse = response.trim();
    cleanedResponse = cleanedResponse
      .replace(/^```(json)?\s*|\s*```$/g, "")
      .trim();

    const parsed = JSON.parse(cleanedResponse);

    if (
      typeof parsed.stars !== "number" ||
      parsed.stars < 1 ||
      parsed.stars > 5
    ) {
      throw new Error("Invalid stars value");
    }
    if (typeof parsed.feedback !== "string" || !parsed.feedback) {
      throw new Error("Invalid feedback");
    }
    if (!Array.isArray(parsed.improvements)) {
      throw new Error("Invalid improvements array");
    }

    return {
      stars: Math.round(parsed.stars),
      feedback: parsed.feedback,
      improvements: parsed.improvements.filter(
        (item: unknown) => typeof item === "string"
      ),
      modelAnswer,
      // aimodel: model,
    };
  } catch (error) {
    console.error("Evaluation error:", error);

    return {
      stars: 3,
      feedback:
        "Your answer has been reviewed. Compare it with the model answer below to see how you can improve.",
      improvements: [
        "Review the key concepts in the model answer",
        "Include more specific details from the course material",
        "Organize your answer more clearly",
      ],
      modelAnswer,
    };
  }
}
