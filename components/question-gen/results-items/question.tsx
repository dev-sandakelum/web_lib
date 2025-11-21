"use client"
import { useState } from "react"
import HTML_Content from "./html"

interface Value_PASS {
  value: string
  font: string
}

interface WindowProps {
  question: string
  userAnswer: string
  modelAnswer: string
  feedback: string
  topic?: string
  studentName?: string
  qrCodeUrl?: string
  improvements?: string[]
}

export function Q_gen_question({ value, font }: Value_PASS) {
  // Local font sizes
  const titleSize = "text-xs"
  const contentSize = "text-sm sm:text-base"

  return (
    <div className="bg-muted/30 rounded-lg p-3 border border-border/30">
      <h3 className={`${titleSize} font-semibold mb-2`}>Question:</h3>
      <p
        style={{ fontFamily: font }}
        className={`${contentSize} leading-relaxed whitespace-pre-wrap`}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  )
}

export function Q_gen_userAnswer({ value, font }: Value_PASS) {
  // Local font sizes
  const titleSize = "text-xs"
  const contentSize = "text-sm sm:text-base"

  return (
    <div className="bg-muted/30 rounded-lg p-3 border border-border/30">
      <h3 className={`${titleSize} font-semibold mb-2`}>Your Answer:</h3>
      <p
        style={{ fontFamily: font }}
        className={`${contentSize} leading-relaxed whitespace-pre-wrap`}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  )
}

export function Q_gen_modelAnswer({ value, font }: Value_PASS) {
  // Local font sizes
  const titleSize = "text-xs"
  const contentSize = "text-sm sm:text-base"

  return (
    <div className="bg-muted/30 rounded-lg p-3 border border-border/30">
      <h3 className={`${titleSize} font-semibold mb-2 flex items-center gap-2`}>
        ✅ Model Answer
      </h3>
      <p
        style={{ fontFamily: font }}
        className={`${contentSize} leading-relaxed whitespace-pre-wrap`}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  )
}

export function Q_gen_feedback({ value, font }: Value_PASS) {
  // Local font sizes
  const titleSize = "text-xs"
  const contentSize = "text-sm sm:text-base"

  return (
    <div className="bg-muted/30 rounded-lg p-3 border border-border/30">
      <h3 className={`${titleSize} font-semibold mb-2`}>Feedback:</h3>
      <p
        style={{ fontFamily: font }}
        className={`${contentSize} leading-relaxed whitespace-pre-wrap`}
        dangerouslySetInnerHTML={{ __html: value }}
      />
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
  qrCodeUrl?: string
  improvements?: string[]
}): string {
  const printWindow = window.open("", "_blank")
  if (!printWindow) return ""

  const htmlContent = HTML_Content(data)
  printWindow.document.write(htmlContent)
  printWindow.document.close()

  return htmlContent
}

export default function Q_gen_window(props: WindowProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-end">
      <button
        onClick={() =>
          openSaveAsJPG({
            question: props.question,
            userAnswer: props.userAnswer,
            modelAnswer: props.modelAnswer,
            feedback: props.feedback,
            topic: props.topic,
            studentName: props.studentName,
            qrCodeUrl: props.qrCodeUrl,
            improvements: props.improvements,
          })
        }
        className="px-4 py-2 bg-secondary hover:bg-secondary/80
                   text-secondary-foreground rounded-lg font-medium 
                   text-xs sm:text-sm transition-all cursor-alias"
      >
        🖨️ Print
      </button>

      {isOpen && <></>}
    </div>
  )
}
