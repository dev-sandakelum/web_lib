// ============================================
// UPDATED: app/question-gen/[categoryId]/page.tsx
// ============================================
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { generateQuestion } from "@/app/question-gen/actions/actions";
import { QuizQuestion } from "@/components/question-gen/quiz-question";
import { QuizResults } from "@/components/question-gen/quiz-results";

import { getDatasetById } from "@/lib/question-gen/datasets/registry"; // CHANGED
import { Q_gen_note } from "@/components/question-gen/results-items/window";

import {NotFound} from "./notFound";
import { Error_display, BackBtn, Navigation, While_load } from "./fun";
import Link from "next/link";
import { Spinner } from "@/components/question-gen/spinner";

interface ResultState {
  stars: number;
  feedback: string;
  improvements: string[];
  userAnswer: string;
  question: string;
  modelAnswer: string;
}

export default function QuizPage() {
  const params = useParams();
  const categoryId = params.categoryId as string;

  const [question, setQuestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ResultState | null>(null);
  const [model, setModel] = useState<string>(""); // NEW

  // CHANGED: Use the helper function instead of find
  const dataset = getDatasetById(categoryId);

  const loadNewQuestion = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const {content: newQuestion , model} = await generateQuestion(categoryId);
      setModel(model); // NEW
      setQuestion(newQuestion);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to generate question. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!dataset) return;
    loadNewQuestion();
  }, [categoryId, dataset]);

  if (!dataset) {
    return <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-6 sm:py-8 md:py-10 flex items-center justify-center">
      <div className="mx-auto max-w-3xl px-3 sm:px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground">Category Not Found</h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            The category you're looking for doesn't exist. Please select a different category.
          </p>
          <Link href="/question-gen/">
            <button className="mt-6 px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-sm transition-all duration-200">
              ← Back to Categories
            </button>
          </Link>
        </div>
      </div>
    </main> // UPDATED: Use NotFound component if dataset is not found
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-6 sm:py-8 md:py-10">
      <Q_gen_note subject={dataset.category} />
      <div className="mx-auto max-w-3xl px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between mb-5 sm:mb-6">
      <Link
        href="/question-gen/"
        className="group flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base font-medium"
      >
        <span className="transition-transform group-hover:-translate-x-0.5">
          ←
        </span>
        <span>Categories</span>
      </Link>
    </div>

        <div className="mb-5 sm:mb-6">
          {/* UPDATED: Show both category and subcategory */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-1">
            <span>{dataset.category}</span>
            <span>›</span>
            <span className="text-primary font-medium">{dataset.subcategory}</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {dataset.subcategory}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {dataset.description}
          </p>
        </div>

        {error && (
          <div className="bg-destructive/10 border border-destructive/50 text-destructive rounded-xl p-4 mb-5 space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="text-lg flex-shrink-0">⚠️</span>
                            <div className="space-y-2 flex-1">
                              <p className="text-sm sm:text-base font-medium">
                                Something went wrong
                              </p>
                              <p className="text-xs sm:text-sm opacity-90">{error}</p>
                            </div>
                          </div>
                          <button
                            onClick={loadNewQuestion}
                            className="w-full sm:w-auto h-9 px-4 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                          >
                            Try Again →
                          </button>
                        </div>
        )}

        {loading && !question ? (
          <div className="bg-card rounded-xl border border-border/50 shadow-sm p-8 sm:p-12">
                          <div className="flex flex-col items-center justify-center gap-4">
                            <div className="relative">
                              <Spinner />
                              <div className="absolute inset-0 animate-ping opacity-20">
                                <Spinner />
                              </div>
                            </div>
                            <div className="text-center space-y-1">
                              <p className="text-sm sm:text-base font-medium text-foreground">
                                Generating your question...
                              </p>
                              <p className="text-xs text-muted-foreground">
                                This may take a few seconds
                              </p>
                            </div>
                          </div>
                        </div>
        ) : question ? (
          result ? (
            <QuizResults
              stars={result.stars}
              feedback={result.feedback}
              improvements={result.improvements}
              categoryId={categoryId}
              onTryAnother={loadNewQuestion}
              loading={loading}
              userAnswer={result.userAnswer}
              question={result.question}
              modelAnswer={result.modelAnswer}
            />
          ) : (
            <QuizQuestion
              question={question}
              categoryId={categoryId}
              model={model} 
              onAnswerEvaluated={(
                stars,
                feedback,
                improvements,
                userAnswer,
                modelAnswer
              ) => {
                setResult({
                  stars,
                  feedback,
                  improvements,
                  userAnswer,
                  question,
                  modelAnswer,
                });
              }}
              onNewQuestion={loadNewQuestion}
              loading={loading}
            />
          )
        ) : null}
      </div>
      <div className="h-20 w-full"></div>
    </main>
  );
}
