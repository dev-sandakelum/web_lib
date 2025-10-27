"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface ExtractionProgressProps {
  isExtracting: boolean
  error?: string
  onComplete?: () => void
}

export function ExtractionProgress({ isExtracting, error, onComplete }: ExtractionProgressProps) {
  const [progress, setProgress] = useState(0)
  const [stage, setStage] = useState<"uploading" | "processing" | "extracting" | "complete">("uploading")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isExtracting) {
      // Fade out before resetting
      setIsVisible(false)
      const timer = setTimeout(() => {
        setProgress(0)
        setStage("uploading")
      }, 300)
      return () => clearTimeout(timer)
    }

    setIsVisible(true)
    const stages = [
      { duration: 300, endProgress: 25, label: "uploading" as const },
      { duration: 600, endProgress: 60, label: "processing" as const },
      { duration: 800, endProgress: 90, label: "extracting" as const },
    ]

    let currentStageIndex = 0
    let startTime = Date.now()

    const interval = setInterval(() => {
      const currentStage = stages[currentStageIndex]
      const elapsed = Date.now() - startTime
      const progress = (elapsed / currentStage.duration) * currentStage.endProgress

      if (progress >= currentStage.endProgress) {
        setProgress(currentStage.endProgress)
        setStage(currentStage.label)
        currentStageIndex++

        if (currentStageIndex >= stages.length) {
          clearInterval(interval)
          setProgress(100)
          setStage("complete")
          if (onComplete) setTimeout(onComplete, 500)
        } else {
          startTime = Date.now()
        }
      } else {
        setProgress(progress)
        setStage(currentStage.label)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isExtracting, onComplete])

  const stageLabels = {
    uploading: "Uploading...",
    processing: "Processing...",
    extracting: "Extracting...",
    complete: "Complete!",
  }

  return (
    <div
      className={`transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
      <div className="flex items-center gap-2 px-2 py-1.5 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center gap-1.5">
          {error ? (
            <AlertCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
          ) : progress === 100 ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 animate-bounce" />
          ) : (
            <div className="w-3.5 h-3.5 rounded-full border-2 border-blue-300 border-t-blue-600 animate-spin flex-shrink-0" />
          )}
          <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
            {error ? "Failed" : stageLabels[stage]}
          </span>
        </div>
        <span className="text-xs font-semibold text-gray-600 min-w-[28px] text-right">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}
