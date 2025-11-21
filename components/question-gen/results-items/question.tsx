"use client"

import { useState } from "react"
import HTML_Content from "./html"

interface Value_PASS {
  value: string
  font: string
}

export function Q_gen_question({ value, font }: Value_PASS) {
  return (
    <div className="bg-muted/30 rounded-lg p-3 sm:p-4 border border-border/30">
      <h3 className="text-xs font-semibold text-muted-foreground mb-2">Question:</h3>
      <h2
        className={`text-sm sm:text-base text-card-foreground leading-snug ${font} font-sans antialiased`}
        dangerouslySetInnerHTML={{ __html: value }}
      ></h2>
    </div>
  )
}

export function Q_gen_userAnswer({ value, font }: Value_PASS) {
  return (
    <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20">
      <h3 className="text-xs font-semibold text-primary mb-2">Your Answer:</h3>
      <h2
        className={`text-sm sm:text-base text-card-foreground leading-snug ${font} font-sans antialiased`}
        dangerouslySetInnerHTML={{ __html: value }}
      ></h2>
    </div>
  )
}

export function Q_gen_modelAnswer({ value, font }: Value_PASS) {
  return (
    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 sm:p-4 border border-green-200 dark:border-green-800">
      <h3 className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-1.5">
        <span>✅</span> Model Answer
      </h3>
      <h2
        className={`text-sm sm:text-base text-card-foreground leading-snug ${font} font-sans antialiased`}
        dangerouslySetInnerHTML={{ __html: value }}
      ></h2>
    </div>
  )
}

export function Q_gen_feedback({ value, font }: Value_PASS) {
  return (
    <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
      <h3 className="text-xs font-semibold text-muted-foreground mb-2">Feedback:</h3>
      <h2
        className={`text-sm sm:text-base text-card-foreground leading-snug ${font} font-sans antialiased`}
        dangerouslySetInnerHTML={{ __html: value }}
      ></h2>
    </div>
  )
}

export function openSaveAsJPG(data: {
  question: string
  userAnswer: string
  modelAnswer: string
  feedback: string
  topic?: string
  studentName?: string
}): string {
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    return ""
  }
  const htmlContent = HTML_Content(data)
  printWindow.document.write(htmlContent)
  printWindow.document.close()
  return htmlContent
}

export default function Q_gen_window({
  question,
  userAnswer,
  modelAnswer,
  feedback,
  topic,
  studentName,
  qrCodeUrl,
}: {
  question: string
  userAnswer: string
  modelAnswer: string
  feedback: string
  topic?: string
  studentName?: string
  qrCodeUrl?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const x = openSaveAsJPG({ question, userAnswer, modelAnswer, feedback, topic, studentName })

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium text-xs sm:text-sm transition-all duration-200"
      >
        🖨️ Print
      </button>
      {isOpen && (
        <div className=""></div>
         
      )}
    </div>
  )
}
