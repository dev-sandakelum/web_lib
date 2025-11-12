"use client"
import { useState, useRef } from "react"
import type React from "react"
import { extractTextFromImage } from "@/lib/ocr-utils"
import { ExtractionProgress } from "./extraction-progress"
import { ImagePreviewModal } from "./image-preview-modal"
import {
  Calculator,
  Keyboard,
  Loader2,
  Copy,
  ChevronDown,
  ArrowRight,
  PieChart,
  Zap,
  LogInIcon as LogsIcon,
  Grid3x3,
  Variable,
  Upload,
  X,
  Camera,
} from "lucide-react"
import { SolutionDisplay } from "./solution-display"

const mathSymbols = {
  vectors: [
    { symbol: "î", label: "î" },
    { symbol: "ĵ", label: "ĵ" },
    { symbol: "k̂", label: "k̂" },
    { symbol: "·", label: "·" },
    { symbol: "×", label: "×" },
    { symbol: "‖", label: "‖" },
  ],
  trigonometry: [
    { symbol: "sin", label: "sin" },
    { symbol: "cos", label: "cos" },
    { symbol: "tan", label: "tan" },
    { symbol: "π", label: "π" },
    { symbol: "°", label: "°" },
    { symbol: "rad", label: "rad" },
  ],
  complex: [
    { symbol: "i", label: "i" },
    { symbol: "+", label: "+" },
    { symbol: "-", label: "-" },
    { symbol: "×", label: "×" },
    { symbol: "÷", label: "÷" },
    { symbol: "|", label: "|" },
  ],
  logarithms: [
    { symbol: "log", label: "log" },
    { symbol: "ln", label: "ln" },
    { symbol: "log₂", label: "log₂" },
    { symbol: "e", label: "e" },
    { symbol: "^", label: "^" },
    { symbol: "√", label: "√" },
  ],
  matrices: [
    { symbol: "[", label: "[" },
    { symbol: "]", label: "]" },
    { symbol: "det", label: "det" },
    { symbol: "T", label: "T" },
    { symbol: "×", label: "×" },
    { symbol: "⁻¹", label: "⁻¹" },
  ],
  algebra: [
    { symbol: "+", label: "+" },
    { symbol: "-", label: "-" },
    { symbol: "×", label: "×" },
    { symbol: "÷", label: "÷" },
    { symbol: "^", label: "^" },
    { symbol: "√", label: "√" },
  ],
}

const questionTypes = [
  { id: "vectors", label: "Vectors", icon: <ArrowRight className="w-4 h-4" /> },
  {
    id: "trigonometry",
    label: "Trigonometry",
    icon: <PieChart className="w-4 h-4" />,
  },
  {
    id: "complex",
    label: "Complex Numbers",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: "logarithms",
    label: "Logarithms",
    icon: <LogsIcon className="w-4 h-4" />,
  },
  { id: "matrices", label: "Matrices", icon: <Grid3x3 className="w-4 h-4" /> },
  { id: "algebra", label: "Algebra", icon: <Variable className="w-4 h-4" /> },
]

export default function MathSolver() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [copied, setCopied] = useState(false)
  const [questionType, setQuestionType] = useState("vectors")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [extracting, setExtracting] = useState(false)
  const [extractionError, setExtractionError] = useState<string>("")
  const [previewOpen, setPreviewOpen] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const insertSymbol = (symbol: string) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const text = question
    const before = text.substring(0, start)
    const after = text.substring(end)

    setQuestion(before + symbol + after)

    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + symbol.length, start + symbol.length)
    }, 0)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = async (event) => {
        const imageData = event.target?.result as string
        setImageLoading(true)
        setUploadedImage(imageData)

        setTimeout(() => setImageLoading(false), 300)

        setExtracting(true)
        setError("")
        setExtractionError("")
        try {
          const extractedText = await extractTextFromImage(imageData)
          if (extractedText.trim()) {
            setQuestion(extractedText)
          } else {
            const errorMsg = "No text found in image. Please try another image."
            setError(errorMsg)
            setExtractionError(errorMsg)
          }
        } catch (err) {
          const message = err instanceof Error ? err.message : "Failed to extract text"
          setError(message)
          setExtractionError(message)
        } finally {
          setExtracting(false)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setUploadedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    if (cameraInputRef.current) {
      cameraInputRef.current.value = ""
    }
  }

  const copyAnswer = async () => {
    try {
      await navigator.clipboard.writeText(answer)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const solveMath = async () => {
    if (!question.trim()) {
      setError("Please enter a math question")
      return
    }

    setLoading(true)
    setError("")
    setAnswer("")

    try {
      const res = await fetch("/api/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, questionType }),
      })

      const data = await res.json()

      if (!res.ok) {
        const message = data?.error || `Server error (${res.status})`
        setError(message)
        return
      }

      setAnswer(data?.result || "No solution generated")
    } catch (err: unknown) {
      let message = "An error occurred"
      if (err instanceof Error && err.message) message = err.message
      else if (typeof err === "string") message = err
      setError(message)
      console.error("Error:", err)
    } finally {
      setLoading(false)
    }
  }

  const currentType = questionTypes.find((t) => t.id === questionType)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 pt-2 sm:pt-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
            <Calculator className="w-7 h-7 sm:w-8 md:w-9 text-indigo-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">AI Math Solver</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Powered by Groq AI</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-6">
          {/* Question Type Selector */}
          <div className="mb-5 sm:mb-6">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Question Type</label>
            <div className="relative">
              <select
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white text-gray-800 font-medium cursor-pointer text-sm"
              >
                {questionTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Input Area Header */}
          <div className="mb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h2 className="text-sm sm:text-base font-semibold text-gray-800">Your Question</h2>
              {extracting && <div className="flex items-center gap-2">
                <ExtractionProgress
                  isExtracting={extracting}
                  error={extractionError}
                  onComplete={() => setExtractionError("")}
                />
              </div>}
                
              
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => cameraInputRef.current?.click()}
                disabled={extracting}
                className="flex items-center gap-1.5 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-xs sm:text-sm font-medium"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Camera</span>
              </button>
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                disabled={extracting}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={extracting}
                className="flex items-center gap-1.5 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-xs sm:text-sm font-medium"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={extracting}
                className="hidden"
              />
              <button
                onClick={() => setShowKeyboard(!showKeyboard)}
                className="flex items-center gap-1.5 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-all duration-200 text-xs sm:text-sm font-medium"
              >
                <Keyboard className="w-3.5 h-3.5" />
                <span>{showKeyboard ? "Hide" : "Show"}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${showKeyboard ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Uploaded Image Preview */}
            {uploadedImage && (
              <div
                className={`mb-3 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200 transition-all duration-500 ${
                  imageLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-blue-900 mb-2">Uploaded Image</p>
                    {imageLoading ? (
                      <div className="max-h-32 sm:max-h-40 w-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 rounded-lg border-2 border-blue-300 animate-pulse" />
                    ) : (
                      <img
                        src={uploadedImage || "/placeholder.svg"}
                        alt="Uploaded math problem"
                        onClick={() => setPreviewOpen(true)}
                        className="max-h-32 sm:max-h-40 h-auto rounded-lg border-2 border-blue-300 cursor-pointer hover:border-blue-500 transition-all duration-200 hover:shadow-md"
                      />
                    )}
                  </div>
                  <button
                    onClick={removeImage}
                    className="flex-shrink-0 p-1.5 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-110"
                    title="Remove image"
                  >
                    <X className="w-5 h-5 text-red-500" />
                  </button>
                </div>
                {extracting && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-blue-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span>Extracting text from image...</span>
                  </div>
                )}
              </div>
            )}

            {/* Textarea */}
            <textarea
              ref={textareaRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={`Enter your ${currentType?.label.toLowerCase()} problem...

EXAMPLES:
• Vectors: Find (3î + 4ĵ) · (2î - ĵ)
• Trigonometry: Solve sin²(x) + cos²(x)
• Complex: Simplify (3+4i)(2-i)
• Logarithms: Solve log₂(x) = 5
• Matrices: Find determinant of [[1,2],[3,4]]
• Algebra: Solve for x: 2x² - 4x + 2 = 0`}
              className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-xs sm:text-sm font-mono"
              rows={6}
            />
          </div>

          {/* Math Keyboard */}
          {showKeyboard && (
            <div className="mb-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 sm:gap-2">
                {mathSymbols[questionType as keyof typeof mathSymbols].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => insertSymbol(item.symbol)}
                    className="px-2 sm:px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-indigo-50 hover:border-indigo-400 active:scale-95 transition-all text-xs sm:text-sm font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Solve Button */}
          <button
            onClick={solveMath}
            disabled={loading || !question.trim()}
            className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Solving...</span>
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4" />
                <span>Solve Problem</span>
              </>
            )}
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">This project is still in development</p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-red-700 text-xs sm:text-sm">
            <p className="font-semibold mb-1">Error</p>
            <p>{error}</p>
          </div>
        )}

        {/* Solution Display */}
        {answer && (
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 border-l-4 border-indigo-600">
            <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-bold text-gray-800">Solution</h2>
              <button
                onClick={copyAnswer}
                className="flex items-center gap-1.5 px-3 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg transition-colors text-xs sm:text-sm font-medium"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <div className="text-gray-700 text-xs sm:text-sm">
              <SolutionDisplay content={answer} />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 py-4 mb-2">
          <p className="opacity-80">
            © {new Date().getFullYear()} Hasitha Sandakelum <br /> Lightweight and privacy-friendly math solver
          </p>
        </div>

        <ImagePreviewModal isOpen={previewOpen} imageUrl={uploadedImage} onClose={() => setPreviewOpen(false)} />
      </div>
    </div>
  )
}
