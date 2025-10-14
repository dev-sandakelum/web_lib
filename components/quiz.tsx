"use client"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
  BookOpen,
  FolderOpen,
  FileText,
  Play,
  Search,
  CheckCircle,
  XCircle,
  StopCircle,
  TrendingUp,
  Award,
  Target,
} from "lucide-react"
import { Ict1161Quiz } from "@/resourses/json/Q2"
import { MultimediaQuiz } from "@/resourses/json/Q3"
import { CProgrammingQuiz } from "@/resourses/json/Q4"

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

// Separate quiz variables for better structure and scalability
const networkingQuiz: Quiz = {
  id: "networking-basics",
  title: "Networking Basics",
  category: "Networking",
  questions: [
    {
      question: "What does IP stand for?",
      options: ["Internet Protocol", "Internal Program", "Internet Process", "Interface Package"],
      correctIndex: 0,
    },
    {
      question: "Which device connects multiple networks together?",
      options: ["Hub", "Switch", "Router", "Bridge"],
      correctIndex: 2,
    },
    {
      question: "Which layer of the OSI model is responsible for routing?",
      options: ["Physical", "Data Link", "Network", "Session"],
      correctIndex: 2,
    },
  ],
}

const builtInQuizzes: Quiz[] = [networkingQuiz, Ict1161Quiz, MultimediaQuiz, CProgrammingQuiz]

export default function ModelQuizzes() {
  const router = useRouter()
  const searchParams = useSearchParams()

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

  // Load quiz from URL on component mount
  useEffect(() => {
    const quizId = searchParams.get("quiz")
    if (quizId) {
      const quiz = builtInQuizzes.find((q) => q.id === quizId)
      if (quiz) {
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

    // Update URL with quiz ID
    router.push(`?quiz=${quiz.id}`, { scroll: false })
  }

  const handleAnswer = (index: number) => {
    if (!activeQuiz || answeredQuestions.has(currentQuestion)) return // Prevent changing answer

    setSelectedAnswer(index)
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = index
    setUserAnswers(newAnswers)

    // Mark question as answered
    const newAnswered = new Set(answeredQuestions)
    newAnswered.add(currentQuestion)
    setAnsweredQuestions(newAnswered)

    // Show feedback immediately
    setShowFeedback(true)

    // Auto-advance to next question after 2 seconds
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
    // Clear URL parameters
    router.push(window.location.pathname, { scroll: false })
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 px-3 sm:px-6 md:px-10 py-4 sm:py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-6 md:px-10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">Model Quizzes</h1>
                <p className="text-sm sm:text-base md:text-lg text-green-100 mt-1">
                  Learn and test your knowledge interactively
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Search & Category Filter */}
        {!activeQuiz && (
          <section className="p-4 sm:p-6 md:p-8 bg-green-50 border-b border-green-200">
            <div className="flex flex-col gap-4 mb-4">
              <div className="relative w-full">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border-2 border-green-200 focus:border-green-500 focus:outline-none text-gray-700 bg-white shadow-sm text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="flex overflow-x-auto gap-2 pb-2 -mx-1 px-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 px-4 sm:px-5 py-2.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all whitespace-nowrap touch-manipulation ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md"
                      : "bg-white border border-green-200 text-gray-700 hover:bg-green-100 hover:shadow-sm active:scale-95"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Quiz Cards */}
        {!activeQuiz ? (
          <section className="p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              Available Quizzes
            </h3>
            {filteredQuizzes.length === 0 ? (
              <div className="text-center text-gray-600 bg-white p-6 sm:p-8 rounded-xl shadow-md text-sm sm:text-base">
                No quizzes found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="bg-gray-50 border border-green-200 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 sm:p-5 rounded-lg mb-3 sm:mb-4">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
                      <div className="inline-block px-2.5 sm:px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {quiz.category}
                      </div>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 leading-snug">{quiz.title}</h2>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">{quiz.questions.length} Questions</p>
                    <button
                      onClick={() => startQuiz(quiz)}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white w-full py-3 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base hover:from-green-700 hover:to-emerald-700 transition-all active:scale-95 touch-manipulation"
                    >
                      <Play className="w-4 h-4" /> Start Quiz
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : finished ? (
          <section className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-100">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
              Quiz Completed 🎉
            </h2>

            {/* Performance Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              {/* Correct Answers Card */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4 sm:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-2xl sm:text-3xl font-bold">{score}</span>
                </div>
                <p className="text-sm sm:text-base font-medium opacity-90">Correct</p>
                <div className="mt-2 bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all duration-500"
                    style={{ width: `${answeredCount > 0 ? (score / answeredCount) * 100 : 0}%` }}
                  />
                </div>
              </div>

              {/* Incorrect Answers Card */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-4 sm:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <XCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-2xl sm:text-3xl font-bold">{answeredCount - score}</span>
                </div>
                <p className="text-sm sm:text-base font-medium opacity-90">Incorrect</p>
                <div className="mt-2 bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all duration-500"
                    style={{ width: `${answeredCount > 0 ? ((answeredCount - score) / answeredCount) * 100 : 0}%` }}
                  />
                </div>
              </div>

              {/* Skipped Questions Card */}
              <div className="bg-gradient-to-br from-gray-500 to-gray-600 text-white rounded-xl p-4 sm:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <StopCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-2xl sm:text-3xl font-bold">{shuffledQuestions.length - answeredCount}</span>
                </div>
                <p className="text-sm sm:text-base font-medium opacity-90">Skipped</p>
                <div className="mt-2 bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all duration-500"
                    style={{
                      width: `${((shuffledQuestions.length - answeredCount) / shuffledQuestions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Overall Score Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-lg border-2 border-green-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-3 sm:p-4">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">Your Score</p>
                    <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                      {answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(0) : 0}%
                    </p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-lg sm:text-xl font-bold text-gray-800">
                    {score} / {answeredCount}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {answeredCount < shuffledQuestions.length &&
                      `(${answeredCount} of ${shuffledQuestions.length} answered)`}
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Performance Insight */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4 sm:p-5 mb-6 shadow-md">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Performance Insight</h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {answeredCount === 0
                      ? "You didn't answer any questions. Try again to test your knowledge!"
                      : score === answeredCount
                        ? "Perfect score! You've mastered this topic. Consider trying a more advanced quiz."
                        : score / answeredCount >= 0.8
                          ? "Excellent work! You have a strong understanding. Review the incorrect answers to achieve perfection."
                          : score / answeredCount >= 0.6
                            ? "Good effort! You're on the right track. Focus on the topics you missed to improve further."
                            : score / answeredCount >= 0.4
                              ? "Keep practicing! Review the material and try again. Focus on understanding the concepts."
                              : "Don't give up! This topic needs more study. Review the correct answers and try the quiz again."}
                  </p>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { id: "all", label: "All Questions", count: shuffledQuestions.length },
                { id: "correct", label: "Correct", count: score },
                { id: "incorrect", label: "Incorrect", count: answeredCount - score },
                { id: "skipped", label: "Skipped", count: shuffledQuestions.length - answeredCount },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setReviewFilter(filter.id as typeof reviewFilter)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all touch-manipulation flex items-center gap-2 ${
                    reviewFilter === filter.id
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md"
                      : "bg-white border-2 border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50"
                  }`}
                >
                  {filter.label}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      reviewFilter === filter.id ? "bg-white/20" : "bg-gray-100"
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Review Questions */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-4 sm:p-6 shadow-lg mb-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-green-100">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-700">
                  {reviewFilter === "all"
                    ? "All Questions"
                    : reviewFilter === "correct"
                      ? "Correct Answers"
                      : reviewFilter === "incorrect"
                        ? "Incorrect Answers"
                        : "Skipped Questions"}
                </h3>
              </div>

              <div className="space-y-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-2">
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
                      className={`rounded-xl p-4 sm:p-5 border-2 transition-all ${
                        !isAnswered
                          ? "bg-gray-50 border-gray-200"
                          : isCorrect
                            ? "bg-green-50 border-green-300"
                            : "bg-red-50 border-red-300"
                      }`}
                    >
                      {/* Question Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                            !isAnswered
                              ? "bg-gray-200 text-gray-600"
                              : isCorrect
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                          }`}
                        >
                          {!isAnswered ? "?" : isCorrect ? "✓" : "✗"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs sm:text-sm font-bold text-gray-500">Q{idx + 1}</span>
                            {!isAnswered && (
                              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full font-medium">
                                Skipped
                              </span>
                            )}
                          </div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">{q.question}</p>
                        </div>
                      </div>

                      {/* Answer Details */}
                      <div className="ml-11 sm:ml-13 space-y-2">
                        {!isAnswered ? (
                          <p className="text-xs sm:text-sm text-gray-600 italic bg-white px-3 py-2 rounded-lg border border-gray-200">
                            {"You didn't answer this question"}
                          </p>
                        ) : (
                          <>
                            {!isCorrect && (
                              <div className="bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border-2 border-red-200">
                                <p className="text-xs text-red-600 font-medium mb-1">Your Answer:</p>
                                <p className="text-sm sm:text-base text-red-800 font-medium flex items-center gap-2">
                                  <XCircle className="w-4 h-4 flex-shrink-0" />
                                  {userAnswer !== null ? q.options[userAnswer] : ""}
                                </p>
                              </div>
                            )}
                            <div className="bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border-2 border-green-300">
                              <p className="text-xs text-green-600 font-medium mb-1">Correct Answer:</p>
                              <p className="text-sm sm:text-base text-green-800 font-bold flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                {q.options[q.correctIndex]}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}

                {/* Empty State */}
                {shuffledQuestions.filter((q: Question, idx: number) => {
                  const userAnswer = userAnswers[idx]
                  const isAnswered = userAnswer !== null
                  const isCorrect = userAnswer === q.correctIndex
                  if (reviewFilter === "all") return true
                  if (reviewFilter === "correct") return isAnswered && isCorrect
                  if (reviewFilter === "incorrect") return isAnswered && !isCorrect
                  if (reviewFilter === "skipped") return !isAnswered
                  return true
                }).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-sm sm:text-base">No questions in this category</p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={() => startQuiz(activeQuiz)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium text-sm sm:text-base hover:from-green-700 hover:to-emerald-700 transition-all active:scale-95 touch-manipulation shadow-md flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Retry Quiz
              </button>
              <button
                onClick={backToQuizzes}
                className="bg-gray-200 text-gray-800 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-300 transition-all active:scale-95 touch-manipulation shadow-md"
              >
                Back to Quizzes
              </button>
            </div>
          </section>
        ) : (
          <section className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-100">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">{activeQuiz.title}</h2>
                <span className="text-xs sm:text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  {currentQuestion + 1} / {shuffledQuestions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-600 to-emerald-600 h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                {answeredCount} of {shuffledQuestions.length} questions answered
              </p>
            </div>

            <div className="bg-white border border-green-200 rounded-xl p-4 sm:p-6 shadow-md">
              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 leading-relaxed">
                {shuffledQuestions[currentQuestion].question}
              </p>

              <div className="space-y-3">
                {shuffledQuestions[currentQuestion].options.map((option: string, idx: number) => {
                  const isSelected = selectedAnswer === idx
                  const isCorrect = idx === shuffledQuestions[currentQuestion].correctIndex
                  const isAnswered = answeredQuestions.has(currentQuestion)

                  let btnStyle =
                    "w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 rounded-lg border-2 font-medium transition-all text-sm sm:text-base leading-snug touch-manipulation flex items-center gap-3 "

                  if (isAnswered && showFeedback) {
                    if (isCorrect) {
                      btnStyle += "bg-green-100 border-green-500 text-green-900 shadow-md"
                    } else if (isSelected) {
                      btnStyle += "bg-red-100 border-red-500 text-red-900 shadow-md"
                    } else {
                      btnStyle += "bg-gray-50 border-gray-200 text-gray-500"
                    }
                  } else if (isAnswered) {
                    btnStyle += "bg-gray-50 border-gray-200 text-gray-500 cursor-not-allowed"
                  } else {
                    btnStyle +=
                      "bg-white border-gray-200 hover:bg-green-50 hover:border-green-300 text-gray-700 hover:shadow-sm active:scale-[0.98]"
                  }

                  return (
                    <button key={idx} onClick={() => handleAnswer(idx)} className={btnStyle} disabled={isAnswered}>
                      <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm font-bold flex-shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {isAnswered && showFeedback && (
                        <>
                          {isCorrect && <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />}
                          {!isCorrect && isSelected && <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />}
                        </>
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
                <button
                  onClick={nextQuestion}
                  disabled={currentQuestion >= shuffledQuestions.length - 1}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 sm:px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95 shadow-md"
                >
                  Next Question
                </button>
                <button
                  onClick={finishQuiz}
                  disabled={answeredCount === 0}
                  className="flex items-center justify-center gap-2 bg-amber-600 text-white px-5 sm:px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95 shadow-md"
                >
                  <StopCircle className="w-4 h-4" />
                  Finish Quiz
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center px-4 py-5 sm:py-6">
          <p className="text-sm sm:text-base md:text-lg font-semibold">Model Quizzes – Learn Smarter 💡</p>
          <p className="text-xs sm:text-sm font-medium mt-2 text-white opacity-90">Created by Hasitha Sandakelum</p>
          <p className="text-green-100 text-xs sm:text-sm mt-1">Fully responsive for all devices</p>
        </footer>
      </div>
    </div>
  )
}
