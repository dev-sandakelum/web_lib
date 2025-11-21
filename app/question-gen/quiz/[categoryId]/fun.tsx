"use client";
import { Spinner } from "@/components/question-gen/spinner";
import Link from "next/link";

export function BackBtn() {
  return (
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
  );
}

export function Navigation({ dataset }: { dataset: any }) {
  if (!dataset) return null;
  return (
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
  )
}

export function Error_display({error, loadNewQuestion}: {error: string, loadNewQuestion: () => void}) {
  return (
    
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
  )
}


export function While_load() {
  return (
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
  )
}
