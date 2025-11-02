"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import {
  BookOpen,
  FolderOpen,
  Play,
  Search,
  CheckCircle,
  XCircle,
  StopCircle,
  TrendingUp,
  Award,
  ChevronRight,
  Sparkles,
} from "lucide-react"

// Define types for quiz structure
interface Question {
  question: string
  options: string[]
  correctIndex: number
}

interface Quiz {
  id: string
  title: string
  category: string
  questions: Question[]
}

// Built-in quizzes data
import { builtInQuizzes } from "./quiz-data"
import { Comic_Neue } from "next/font/google"

 const comicNeue = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function ModelQuizzes() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initRef = useRef(false)

  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())
  const [showFeedback, setShowFeedback] = useState(false)
  const [reviewFilter, setReviewFilter] = useState<"all" | "correct" | "incorrect" | "skipped">("all")

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const initializeQuizFromUrl = useCallback(() => {
    if (initRef.current) return

    const quizId = searchParams.get("quiz")
    if (quizId) {
      const quiz = builtInQuizzes.find((q) => q.id === quizId)
      if (quiz) {
        initRef.current = true
        const shuffled = shuffleArray(quiz.questions)
        setActiveQuiz(quiz)
        setShuffledQuestions(shuffled)
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        setUserAnswers(new Array(shuffled.length).fill(null))
        setScore(0)
        setFinished(false)
        setAnsweredQuestions(new Set())
        setShowFeedback(false)
      }
    }
  }, [searchParams])

  useEffect(() => {
    initializeQuizFromUrl()
  }, [])

  const startQuiz = (quiz: Quiz) => {
    const shuffled = shuffleArray(quiz.questions)
    setActiveQuiz(quiz)
    setShuffledQuestions(shuffled)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setUserAnswers(new Array(shuffled.length).fill(null))
    setScore(0)
    setFinished(false)
    setAnsweredQuestions(new Set())
    setShowFeedback(false)
    initRef.current = false
    router.push(`?quiz=${quiz.id}`, { scroll: false })
  }

  const handleAnswer = (index: number) => {
    if (!activeQuiz || answeredQuestions.has(currentQuestion)) return

    setSelectedAnswer(index)
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = index
    setUserAnswers(newAnswers)

    const newAnswered = new Set(answeredQuestions)
    newAnswered.add(currentQuestion)
    setAnsweredQuestions(newAnswered)

    setShowFeedback(true)

    setTimeout(() => {
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowFeedback(false)
      }
    }, 2000)
  }

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(userAnswers[currentQuestion + 1])
      setShowFeedback(answeredQuestions.has(currentQuestion + 1))
    }
  }

  const finishQuiz = () => {
    if (!activeQuiz) return
    let finalScore = 0
    userAnswers.forEach((answer, idx) => {
      if (answer === shuffledQuestions[idx].correctIndex) {
        finalScore++
      }
    })
    setScore(finalScore)
    setFinished(true)
  }

  const backToQuizzes = () => {
    setActiveQuiz(null)
    initRef.current = false
    router.push("/quiz", { scroll: false })
  }

  const categories = [
    { id: "all", name: "All Quizzes" },
    ...Array.from(new Set(builtInQuizzes.map((q) => q.category))).map((cat) => ({ id: cat, name: cat })),
  ]

  const filteredQuizzes = builtInQuizzes.filter((quiz) => {
    const matchesCategory = selectedCategory === "all" || quiz.category === selectedCategory
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const progressPercentage = activeQuiz ? ((currentQuestion + 1) / shuffledQuestions.length) * 100 : 0
  const answeredCount = userAnswers.filter((a) => a !== null).length

  const cardGradients = [
    {
      bg: "from-amber-50 to-orange-100",
      label: "bg-amber-200/50",
      labelText: "text-amber-900",
      shape: "ellipse-gradient-amber",
    },
    {
      bg: "from-purple-50 to-pink-100",
      label: "bg-purple-200/50",
      labelText: "text-purple-900",
      shape: "ellipse-gradient-purple",
    },
    {
      bg: "from-green-50 to-emerald-100",
      label: "bg-green-200/50",
      labelText: "text-green-900",
      shape: "ellipse-gradient-green",
    },
    {
      bg: "from-pink-50 to-rose-100",
      label: "bg-pink-200/50",
      labelText: "text-pink-900",
      shape: "ellipse-gradient-pink",
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-gray-100 ${comicNeue.variable} font-sans antialiased`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-slate-200 px-3 py-2 sm:px-6 sm:py-6 shadow-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
              <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-slate-900">Quiz Master</h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0">Learn & Test Your Knowledge</p>
            </div>
          </div>
        </header>

        {/* Search & Category Filter */}
        {!activeQuiz && (
          <section className="px-3 py-3 sm:px-6 sm:py-7 bg-white/50 border-b border-slate-200">
            <div className="space-y-3 sm:space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all font-medium"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === cat.id
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-300/50"
                        : "bg-white text-slate-700 border border-slate-300 hover:border-emerald-400"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Quiz Cards Grid */}
        {!activeQuiz ? (
          <section className="p-3 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            <h2 className="flex items-center gap-2 text-xl sm:text-3xl font-bold text-slate-900">
              <FolderOpen className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
              Available Quizzes
            </h2>

            {filteredQuizzes.length === 0 ? (
              <div className="text-center py-12 sm:py-16 px-4 bg-white rounded-3xl border-2 border-dashed border-slate-300">
                <p className="text-slate-500 text-lg font-semibold">No quizzes found</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredQuizzes.map((quiz, idx) => {
                  const gradient = cardGradients[idx % cardGradients.length]
                  return (
                    <div
                      key={quiz.id}
                      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient.bg} border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 flex flex-col min-h-44 sm:min-h-48 hover:-translate-y-2`}
                    >
                      <div
                        className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-40 blur-3xl ${gradient.shape} pointer-events-none`}
                      />

                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Label */}
                        <div
                          className={`inline-flex w-fit px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold mb-2 sm:mb-3 ${gradient.label} ${gradient.labelText}`}
                        >
                          QUIZ
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-snug mb-1 sm:mb-2 group-hover:text-emerald-700 transition-colors">
                          {quiz.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-700 mb-3 sm:mb-4 flex-1">{quiz.category}</p>

                        {/* Question Count */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 mb-3 sm:mb-4">
                          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                          {quiz.questions.length} Questions
                        </div>

                        {/* Learn More Button */}
                        <button
                          onClick={() => startQuiz(quiz)}
                          className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-white hover:bg-slate-50 text-emerald-700 font-bold rounded-xl border border-emerald-200 hover:border-emerald-400 transition-all active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          Start Quiz
                          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>
        ) : finished ? (
          // Results Screen
          <section className="px-3 py-4 sm:px-6 sm:py-8 space-y-4 sm:space-y-6">
            {/* Success Header */}
            <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <div className="flex justify-center">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30">
                  <Award className="w-7 h-7 sm:w-10 sm:h-10 text-emerald-400" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Quiz Complete!
              </h2>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {/* Correct */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-xl p-3 sm:p-4 text-center">
                <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xl sm:text-3xl font-bold text-emerald-400">{score}</p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">Correct</p>
              </div>

              {/* Incorrect */}
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl p-3 sm:p-4 text-center">
                <XCircle className="w-4 h-4 sm:w-6 sm:h-6 text-red-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xl sm:text-3xl font-bold text-red-400">{answeredCount - score}</p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">Incorrect</p>
              </div>

              {/* Skipped */}
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-3 sm:p-4 text-center">
                <StopCircle className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xl sm:text-3xl font-bold text-amber-400">
                  {shuffledQuestions.length - answeredCount}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">Skipped</p>
              </div>
            </div>

            {/* Overall Score */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-emerald-500/30 rounded-2xl p-4 sm:p-6 text-center">
              <p className="text-slate-400 font-medium text-xs sm:text-sm mb-1 sm:mb-2">Your Final Score</p>
              <p className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(0) : 0}%
              </p>
              <p className="text-slate-500 text-xs sm:text-sm mt-2 sm:mt-3">
                {score} out of {answeredCount} correct
              </p>
            </div>

            {/* Performance Insight */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-4 sm:p-5">
              <div className="flex items-start gap-2 sm:gap-3">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm mb-1 sm:mb-2">Performance Insight</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {answeredCount === 0
                      ? "You didn't answer any questions. Try again to test your knowledge!"
                      : score === answeredCount
                        ? "Perfect score! 🎉 You've mastered this topic. Consider trying more advanced quizzes."
                        : score / answeredCount >= 0.8
                          ? "Excellent work! You have strong understanding. Review incorrect answers to achieve perfection."
                          : score / answeredCount >= 0.6
                            ? "Good effort! You're on the right track. Focus on the topics you missed."
                            : score / answeredCount >= 0.4
                              ? "Keep practicing! Review the material and try again to improve."
                              : "Don't give up! Review the correct answers and practice more."}
                  </p>
                </div>
              </div>
            </div>

            {/* Review Filter */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {[
                { id: "all", label: "All", count: shuffledQuestions.length },
                { id: "correct", label: "Correct", count: score },
                { id: "incorrect", label: "Incorrect", count: answeredCount - score },
                { id: "skipped", label: "Skipped", count: shuffledQuestions.length - answeredCount },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setReviewFilter(filter.id as typeof reviewFilter)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                    reviewFilter === filter.id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "bg-slate-700/50 text-slate-300 border border-slate-600"
                  }`}
                >
                  {filter.label} <span className="ml-1 text-xs opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>

            {/* Questions Review */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 space-y-3 max-h-96 overflow-y-auto">
              {shuffledQuestions
                .map((q: Question, idx: number) => {
                  const userAnswer = userAnswers[idx]
                  const isAnswered = userAnswer !== null
                  const isCorrect = userAnswer === q.correctIndex
                  return { q, idx, userAnswer, isAnswered, isCorrect }
                })
                .filter(({ isAnswered, isCorrect }) => {
                  if (reviewFilter === "all") return true
                  if (reviewFilter === "correct") return isAnswered && isCorrect
                  if (reviewFilter === "incorrect") return isAnswered && !isCorrect
                  if (reviewFilter === "skipped") return !isAnswered
                  return true
                })
                .map(({ q, idx, userAnswer, isAnswered, isCorrect }) => (
                  <div
                    key={idx}
                    className={`rounded-xl p-4 border transition-all ${
                      !isAnswered
                        ? "bg-slate-700/30 border-slate-600"
                        : isCorrect
                          ? "bg-emerald-500/10 border-emerald-500/30"
                          : "bg-red-500/10 border-red-500/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          !isAnswered
                            ? "bg-slate-600 text-slate-300"
                            : isCorrect
                              ? "bg-emerald-500 text-white"
                              : "bg-red-500 text-white"
                        }`}
                      >
                        {!isAnswered ? "?" : isCorrect ? "✓" : "✕"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-100">{q.question}</p>
                        <div className="mt-2 space-y-1.5 text-xs">
                          {!isAnswered ? (
                            <p className="text-slate-400 italic">You didn't answer this question</p>
                          ) : (
                            <>
                              {!isCorrect && userAnswer !== null && (
                                <p className="text-red-300">
                                  Your answer: <span className="font-semibold">{q.options[userAnswer]}</span>
                                </p>
                              )}
                              <p className="text-emerald-300">
                                Correct: <span className="font-semibold">{q.options[q.correctIndex]}</span>
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 sm:gap-3 pt-3 sm:pt-4">
              <button
                onClick={() => startQuiz(activeQuiz)}
                className="w-full py-2.5 sm:py-3.5 px-3 sm:px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Retry Quiz
              </button>
              <button
                onClick={backToQuizzes}
                className="w-full py-2.5 sm:py-3.5 px-3 sm:px-4 bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold rounded-xl transition-all active:scale-95 text-sm sm:text-base"
              >
                Back to Quizzes
              </button>
            </div>
          </section>
        ) : (
          // Quiz Screen
          <section className="px-3 py-4 sm:px-6 sm:py-8 space-y-3 sm:space-y-5">
            {/* Progress Bar */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-base sm:text-xl font-bold text-slate-900 truncate">{activeQuiz.title}</h2>
                <span className="text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-300 whitespace-nowrap flex-shrink-0">
                  {currentQuestion + 1} / {shuffledQuestions.length}
                </span>
              </div>
              <div className="w-full h-2.5 sm:h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 shadow-lg"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-xs text-slate-600 font-semibold">
                {answeredCount} of {shuffledQuestions.length} questions answered
              </p>
            </div>

            {/* Question Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-8 shadow-lg">
              <p className="text-base sm:text-2xl font-bold text-slate-900 leading-snug sm:leading-relaxed mb-6 sm:mb-8">
                {shuffledQuestions[currentQuestion].question}
              </p>

              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {shuffledQuestions[currentQuestion].options.map((option: string, idx: number) => {
                  const isSelected = selectedAnswer === idx
                  const isCorrect = idx === shuffledQuestions[currentQuestion].correctIndex
                  const isAnswered = answeredQuestions.has(currentQuestion)

                  let style =
                    "w-full text-left px-3 sm:px-4 py-2.5 sm:py-4 rounded-xl border-2 font-semibold transition-all text-sm sm:text-base leading-snug flex items-center gap-2 sm:gap-3 "

                  if (isAnswered && showFeedback) {
                    if (isCorrect) {
                      style += "bg-emerald-50 border-emerald-400 text-emerald-900 shadow-md"
                    } else if (isSelected) {
                      style += "bg-red-50 border-red-400 text-red-900 shadow-md"
                    } else {
                      style += "bg-slate-50 border-slate-300 text-slate-500 opacity-60"
                    }
                  } else if (isAnswered) {
                    style += "bg-slate-50 border-slate-300 text-slate-500 cursor-not-allowed opacity-50"
                  } else {
                    style +=
                      "bg-slate-50 border-slate-300 hover:bg-white hover:border-emerald-400 text-slate-900 cursor-pointer active:scale-95 hover:shadow-md"
                  }

                  return (
                    <button key={idx} onClick={() => handleAnswer(idx)} disabled={isAnswered} className={style}>
                      <span className="flex-shrink-0 w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-lg bg-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {isAnswered && showFeedback && (
                        <>
                          {isCorrect && (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                          )}
                          {!isCorrect && isSelected && (
                            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                          )}
                        </>
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-200">
                <button
                  onClick={nextQuestion}
                  disabled={currentQuestion >= shuffledQuestions.length - 1}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  Next
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={finishQuiz}
                  disabled={answeredCount === 0}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  <StopCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Finish
                </button>
              </div>

              <button
                onClick={backToQuizzes}
                className="w-full mt-2 sm:mt-3 py-2.5 sm:py-3 px-3 sm:px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all active:scale-95 text-sm sm:text-base"
              >
                ← Back to Quiz Menu
              </button>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white px-3 py-4 sm:px-6 sm:py-6 text-center shadow-sm bottom-0 fixed w-full z-100">
          <p className="text-base font-bold text-slate-900">Quiz Master 3.0 – Learn Smarter</p>
          <p className="text-xs font-medium mt-1 text-blue-500">Created by Hasitha Sandakelum</p>
        </footer>
      </div>
    </div>
  )
}
