"use client"
import { useState, useRef } from "react"
import { Calculator, Keyboard, Loader2, Copy, ChevronDown, ArrowRight, PieChart, Zap, LogsIcon, Grid3x3, Variable } from "lucide-react"
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
  { id: "trigonometry", label: "Trigonometry", icon: <PieChart className="w-4 h-4" /> },
  { id: "complex", label: "Complex Numbers", icon: <Zap className="w-4 h-4" /> },
  { id: "logarithms", label: "Logarithms", icon: <LogsIcon className="w-4 h-4" /> },
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
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-2 sm:p-3 md:p-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header - Reduced padding and margins for mobile */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 pt-2 sm:pt-4 md:pt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <Calculator className="w-6 h-6 sm:w-8 md:w-10 text-indigo-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">AI Math Solver</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Powered by Groq</p>
        </div>

        {/* Main Card - Optimized padding for mobile */}
        <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
          {/* Question Type Selector */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Question Type</label>
            <div className="relative">
              <select
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white text-gray-800 font-medium cursor-pointer text-sm sm:text-base"
              >
                {questionTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Input Area */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between mb-2 gap-2">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800">Your Question</h2>
              <button
                onClick={() => setShowKeyboard(!showKeyboard)}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-xs sm:text-sm"
              >
                <Keyboard className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{showKeyboard ? "Hide" : "Show"}</span>
                <ChevronDown
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showKeyboard ? "rotate-180" : ""}`}
                />
              </button>
            </div>

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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-xs sm:text-sm font-mono"
              rows={6}
            />
          </div>

          {/* Math Keyboard - Optimized grid for mobile */}
          {showKeyboard && (
            <div className="mb-3 sm:mb-4 p-2 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-1 sm:gap-2">
                {mathSymbols[questionType as keyof typeof mathSymbols].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => insertSymbol(item.symbol)}
                    className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-gray-300 rounded-lg hover:bg-indigo-50 hover:border-indigo-400 active:scale-95 transition-all text-xs sm:text-sm font-medium"
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
            className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                <span className="hidden sm:inline">Solving...</span>
                <span className="sm:hidden">Solving</span>
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Solve Problem</span>
                <span className="sm:hidden">Solve</span>
              </>
            )}
          </button>
        </div>

        {/* Error Display - Optimized padding for mobile */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-red-700 text-xs sm:text-sm">
            <p className="font-semibold mb-1">Error</p>
            <p>{error}</p>
          </div>
        )}

        {/* Solution Display - Optimized padding for mobile */}
        
        {answer && (
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 border-l-4 border-indigo-600">
            <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">Solution</h2>
              <button
                onClick={copyAnswer}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg transition-colors text-xs sm:text-sm font-medium"
              >
                <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
                <span className="sm:hidden">{copied ? "✓" : "Copy"}</span>
              </button>
            </div>
            <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              
              <SolutionDisplay content={answer} />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 py-2 sm:py-4">
          <p>Created by Hasitha Sandakelum</p>
        </div>
      </div>
    </div>
  )
}
