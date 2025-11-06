"use client"

import { useState } from "react"
import { evaluateAnswer } from "@/app/actions"
import { Spinner } from "./spinner"

interface QuizQuestionProps {
  question: string
  categoryId: string
  onAnswerEvaluated: (stars: number, feedback: string, improvements: string[]) => void
  onNewQuestion: () => void
  loading: boolean
}

export function QuizQuestion({ question, categoryId, onAnswerEvaluated, onNewQuestion, loading }: QuizQuestionProps) {
  const [answer, setAnswer] = useState("")
  const [evaluating, setEvaluating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    setError(null)
    if (!answer.trim()) {
      setError("Please write an answer before submitting.")
      return
    }

    setEvaluating(true)
    try {
      const result = await evaluateAnswer(question, answer, categoryId)
      onAnswerEvaluated(result.stars, result.feedback, result.improvements)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to evaluate answer. Please try again.")
    } finally {
      setEvaluating(false)
    }
  }

  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-sm p-4 sm:p-5 space-y-3.5">
      <div>
        <h2 className="text-sm sm:text-lg text-card-foreground mb-3 leading-snug">
          {question}
        </h2>

        <textarea
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value)
            setError(null)
          }}
          placeholder="Type your answer here..."
          disabled={evaluating}
          className="w-full min-h-48 sm:min-h-32 p-3 sm:p-3.5 border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm sm:text-base resize-none disabled:opacity-50 bg-background text-foreground transition-all placeholder:text-muted-foreground/60"
        />

        {error && (
          <p className="text-xs sm:text-sm text-destructive mt-2 flex items-center gap-1.5">
            <span>⚠</span>
            {error}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5">
        <button
          onClick={handleSubmit}
          disabled={evaluating || loading}
          className="flex-1 min-h-10 sm:min-h-11 px-4 bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
        >
          {evaluating ? (
            <>
              <Spinner />
              <span>Evaluating...</span>
            </>
          ) : (
            "Test My Answer ✓"
          )}
        </button>

        <button
          onClick={onNewQuestion}
          disabled={evaluating || loading}
          className="flex-1 min-h-10 sm:min-h-11 px-4 bg-muted hover:bg-muted/80 disabled:opacity-50 text-muted-foreground hover:text-foreground rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
        >
          New Question ↻
        </button>
      </div>
    </div>
  )
}