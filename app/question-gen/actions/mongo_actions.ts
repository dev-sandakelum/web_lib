"use server";

import { connectToDatabase } from "@/lib/question-gen/mongodb/connection";
import { Quiz } from "@/lib/question-gen/mongodb/models";
import { callGroq, ChatMessage } from "@/lib/question-gen/openai-client";
import { getDatasetById } from "@/lib/question-gen/types/dataset";
import { QuestionPattern } from "./pattens/main";
import { generatePromptfor_InformationSystems } from "./prompts/gen/is";
import { CommonInstruction } from "./prompts/common";
import { generatePromptfor_programming } from "./prompts/gen/c";
import { generatePromptfor_ComputerNetworks } from "./prompts/gen/net";

// Your existing generateQuestion function...
export async function generateQuestion(categoryId: string): Promise<{ content: string; model: string }> {
  const dataset = getDatasetById(categoryId);
  if (!dataset) throw new Error("Dataset not found");

  const contentPreview = dataset.content.length > 3000
    ? dataset.content.substring(0, 3000) + "..."
    : dataset.content;

  // Build category-specific prompt
  let thePrompt = "";
  switch (dataset.category) {
    case "Information Systems":
      thePrompt = generatePromptfor_InformationSystems(dataset, contentPreview, QuestionPattern, CommonInstruction);
      break;
    case "Programming":
      thePrompt = generatePromptfor_programming(dataset, contentPreview, QuestionPattern, CommonInstruction);
      break;
    case "Computer Networks":
      thePrompt = generatePromptfor_ComputerNetworks(dataset, contentPreview, QuestionPattern, CommonInstruction);
      break;
    default:
      // fallback generic prompt
      thePrompt = `${CommonInstruction}\n\n${contentPreview}`;
      break;
  }

  const messages: ChatMessage[] = [
    {
      role: "system",
      content: "You are a helpful educational assistant. Generate clear, engaging, and well-formatted quiz questions.",
    },
    {
      role: "user",
      content: thePrompt,
    },
  ];

  return await callGroq(messages);
}

// NEW: Save quiz to MongoDB
export async function saveQuizToDatabase(data: {
  categoryId: string;
  question: string;
  modelAnswer: string;
  model: string;
}) {
  try {
    await connectToDatabase();

    const quiz = await Quiz.create({
      categoryId: data.categoryId,
      question: data.question,
      modelAnswer: data.modelAnswer,
      model: data.model,
      createdAt: new Date(),
    });

    return {
      success: true,
      quizId: quiz._id.toString(),
    };
  } catch (error) {
    console.error("Error saving quiz:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to save quiz",
    };
  }
}

// NEW: Get all quizzes for a category
export async function getQuizzesByCategory(categoryId: string) {
  try {
    await connectToDatabase();

    const quizzes = await Quiz.find({ categoryId })
      .sort({ createdAt: -1 })
      .lean();

    return {
      success: true,
      quizzes: quizzes.map((quiz) => ({
        id: quiz._id.toString(),
        question: quiz.question,
        modelAnswer: quiz.modelAnswer,
        model: quiz.model,
        createdAt: quiz.createdAt.toISOString(),
      })),
    };
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch quizzes",
      quizzes: [],
    };
  }
}