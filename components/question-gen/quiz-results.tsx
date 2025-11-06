"use client"

import Link from "next/link"
import { StarRating } from "./star-rating"

interface QuizResultsProps {
  stars: number
  feedback: string
  improvements: string[]
  categoryId: string
  onTryAnother: () => void
  loading: boolean
}

export function QuizResults({ stars, feedback, improvements, categoryId, onTryAnother, loading }: QuizResultsProps) {
  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-sm p-4 sm:p-5 space-y-4">
      <div className="space-y-2">
        <h2 className="text-base sm:text-lg font-semibold text-card-foreground">Your Result</h2>
        <StarRating stars={stars} />
      </div>

      <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feedback}</p>
      </div>

      {stars < 4 && improvements.length > 0 && (
        <div className="space-y-2.5">
          <h3 className="font-semibold text-card-foreground text-sm sm:text-base">💡 How to Improve:</h3>
          <ol className="space-y-2">
            {improvements.map((improvement, idx) => (
              <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-muted-foreground">
                <span className="font-bold text-primary flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] sm:text-xs">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{improvement}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
        <button
          onClick={onTryAnother}
          disabled={loading}
          className="flex-1 min-h-10 sm:min-h-11 px-4 bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
        >
          Try Another Question →
        </button>

        <Link href="/" className="flex-1">
          <button className="w-full h-10 sm:h-11 px-4 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            ← Change Category
          </button>
        </Link>
      </div>
    </div>
  )
}