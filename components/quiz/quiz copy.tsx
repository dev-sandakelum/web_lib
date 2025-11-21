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
  ArrowLeft,
} from "lucide-react"
import { Ict1161Quiz, MCommerceEnterpriseQuiz } from "@/resources/json/Q2"
import { MultimediaQuiz } from "@/resources/json/Q3"
import { CProgrammingQuiz } from "@/resources/json/Q4"
import { ComputerArchitectureQuiz, ComputerArchitectureQuiz2 } from "@/resources/json/Q5"
import { AdvancedTopicsQuiz, AnimationBasicsQuiz, DigitalImagesQuiz } from "@/resources/json/Q6"
import { AdvancedMemoryQuiz, ExternalMemoryQuiz, InternalMemoryQuiz } from "@/resources/json/Q7"

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

const builtInQuizzes: Quiz[] = [
  InternalMemoryQuiz,
  ExternalMemoryQuiz,
  AdvancedMemoryQuiz,
  networkingQuiz,
  Ict1161Quiz,
  MultimediaQuiz,
  CProgrammingQuiz,
  ComputerArchitectureQuiz,
  ComputerArchitectureQuiz2,
  MCommerceEnterpriseQuiz,
  DigitalImagesQuiz,
  AnimationBasicsQuiz,
  AdvancedTopicsQuiz,
]

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 px-3 sm:px-4 md:px-6 py-3 sm:py-6 md:py-8">
      <div className="max-w-6xl mx-auto bg-slate-900 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-[#5DA0A2]/30">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#34495E] via-[#5DA0A2] to-slate-900 text-white px-3 sm:px-5 md:px-8 py-4 sm:py-6 md:py-8 border-b border-[#AACFD0]/50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-300 flex-shrink-0" />
              <div>
                <h1 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight">Model Quizzes</h1>
                <p className="text-xs sm:text-sm md:text-base text-purple-200 mt-0.5">Learn and test your knowledge</p>
              </div>
            </div>
          </div>
        </header>

        {/* Search & Category Filter */}
        {!activeQuiz && (
          <section className="p-3 sm:p-4 md:p-6 bg-slate-800/50 border-b border-[#AACFD0]/30">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F4F7F7] w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-lg md:rounded-xl border border-[#AACFD0]/50 focus:border-[#F4F7F7] focus:outline-none text-white bg-slate-800 placeholder-[#F4F7F7]/60 text-xs sm:text-sm md:text-base shadow-sm"
                />
              </div>
            </div>

            <div className="flex overflow-x-auto gap-2 mt-3 pb-2 -mx-1 px-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all whitespace-nowrap touch-manipulation ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-purple-600 to-[#AACFD0] text-white shadow-lg border border-[#F4F7F7]"
                      : "bg-slate-700 border border-[#AACFD0]/40 text-purple-200 hover:bg-slate-600 hover:border-purple-600/60 active:scale-95"
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
          <section className="p-3 sm:p-4 md:p-8 bg-slate-900">
            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-purple-200 mb-4 sm:mb-5 md:mb-6 flex items-center gap-2">
              <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#F4F7F7]" />
              Available Quizzes
            </h3>

            {filteredQuizzes.length === 0 ? (
              <div className="text-center text-purple-300 bg-slate-800/50 p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-[#AACFD0]/30">
                No quizzes found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {filteredQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="bg-slate-800/60 border border-[#AACFD0]/40 rounded-lg sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 shadow-md hover:shadow-lg hover:border-purple-600/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-600 to-[#AACFD0] flex items-center justify-center text-white flex-shrink-0">
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0">
                          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-purple-100 truncate">
                            {quiz.title}
                          </h2>
                          <p className="text-xs text-[#F4F7F7]">{quiz.category}</p>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-300">{quiz.questions.length} Questions</p>
                    </div>

                    <button
                      onClick={() => startQuiz(quiz)}
                      className="w-full mt-3 sm:mt-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base font-medium text-white bg-gradient-to-r from-purple-600 to-[#AACFD0] hover:from-[#AACFD0] hover:to-[#5DA0A2] transition-all active:scale-95 shadow-md"
                    >
                      Start Quiz
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : finished ? (
          <section className="p-3 sm:p-4 md:p-8 bg-gradient-to-br from-slate-800 to-slate-900">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-100 mb-4 sm:mb-5 md:mb-6 text-center">
              Quiz Completed 🎉
            </h2>

            {/* Performance Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
              {/* Correct Answers Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg border border-emerald-500/30">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold">{score}</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium opacity-90">Correct</p>
                <div className="mt-2 bg-white/20 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-white rounded-full h-1.5 sm:h-2 transition-all duration-500"
                    style={{ width: `${answeredCount > 0 ? (score / answeredCount) * 100 : 0}%` }}
                  />
                </div>
              </div>

              {/* Incorrect Answers Card */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg border border-red-500/30">
                <div className="flex items-center justify-between mb-2">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold">{answeredCount - score}</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium opacity-90">Incorrect</p>
                <div className="mt-2 bg-white/20 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-white rounded-full h-1.5 sm:h-2 transition-all duration-500"
                    style={{ width: `${answeredCount > 0 ? ((answeredCount - score) / answeredCount) * 100 : 0}%` }}
                  />
                </div>
              </div>

              {/* Skipped Questions Card */}
              <div className="bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-lg sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg border border-slate-500/30">
                <div className="flex items-center justify-between mb-2">
                  <StopCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {shuffledQuestions.length - answeredCount}
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium opacity-90">Skipped</p>
                <div className="mt-2 bg-white/20 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-white rounded-full h-1.5 sm:h-2 transition-all duration-500"
                    style={{
                      width: `${((shuffledQuestions.length - answeredCount) / shuffledQuestions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Overall Score Card */}
            <div className="bg-slate-800 rounded-lg sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-5 md:mb-6 shadow-lg border border-[#AACFD0]/40">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-[#AACFD0] rounded-full p-2 sm:p-3 md:p-4">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm md:text-base text-purple-300 font-medium">Your Score</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-100">
                      {answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(0) : 0}%
                    </p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-base sm:text-lg md:text-xl font-bold text-purple-100">
                    {score} / {answeredCount}
                  </p>
                  <p className="text-xs sm:text-sm text-[#F4F7F7]">
                    {answeredCount < shuffledQuestions.length &&
                      `(${answeredCount} of ${shuffledQuestions.length} answered)`}
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Performance Insight */}
            <div className="bg-gradient-to-r from-blue-900/40 to-[#34495E]/40 border border-purple-600/40 rounded-lg sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-5 md:mb-6 shadow-md">
              <div className="flex items-start gap-2 sm:gap-3">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-300 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-purple-100 text-xs sm:text-sm md:text-base mb-1">
                    Performance Insight
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
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
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
              {[
                { id: "all", label: "All", count: shuffledQuestions.length },
                { id: "correct", label: "Correct", count: score },
                { id: "incorrect", label: "Incorrect", count: answeredCount - score },
                { id: "skipped", label: "Skipped", count: shuffledQuestions.length - answeredCount },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setReviewFilter(filter.id as typeof reviewFilter)}
                  className={`px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all touch-manipulation flex items-center gap-1.5 sm:gap-2 ${
                    reviewFilter === filter.id
                      ? "bg-gradient-to-r from-purple-600 to-[#AACFD0] text-white shadow-md"
                      : "bg-slate-700 border border-[#AACFD0]/40 text-purple-200 hover:border-purple-600/60"
                  }`}
                >
                  {filter.label}
                  <span
                    className={`px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-bold ${
                      reviewFilter === filter.id ? "bg-white/20" : "bg-slate-600"
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Review Questions */}
            <div className="bg-slate-800/60 border border-[#AACFD0]/40 rounded-lg sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg mb-4 sm:mb-5 md:mb-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-[#AACFD0]/30">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#F4F7F7]" />
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-purple-200">
                  {reviewFilter === "all"
                    ? "All Questions"
                    : reviewFilter === "correct"
                      ? "Correct Answers"
                      : reviewFilter === "incorrect"
                        ? "Incorrect Answers"
                        : "Skipped Questions"}
                </h3>
              </div>

              <div className="space-y-2 sm:space-y-3 max-h-[40vh] sm:max-h-[50vh] overflow-y-auto pr-2">
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
                      className={`rounded-lg sm:rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4 border transition-all ${
                        !isAnswered
                          ? "bg-slate-700/50 border-slate-600/50"
                          : isCorrect
                            ? "bg-emerald-900/30 border-emerald-600/40"
                            : "bg-red-900/30 border-red-600/40"
                      }`}
                    >
                      {/* Question Header */}
                      <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div
                          className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${
                            !isAnswered
                              ? "bg-slate-600 text-slate-300"
                              : isCorrect
                                ? "bg-emerald-600 text-white"
                                : "bg-red-600 text-white"
                          }`}
                        >
                          {!isAnswered ? "?" : isCorrect ? "✓" : "✗"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                            <span className="text-xs font-bold text-[#F4F7F7]">Q{idx + 1}</span>
                            {!isAnswered && (
                              <span className="text-xs bg-slate-600 text-slate-200 px-1.5 py-0.5 rounded-full font-medium">
                                Skipped
                              </span>
                            )}
                          </div>
                          <p className="font-semibold text-purple-100 text-xs sm:text-sm md:text-base leading-snug">
                            {q.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer Details */}
                      <div className="ml-8 sm:ml-10 md:ml-12 space-y-1.5 sm:space-y-2">
                        {!isAnswered ? (
                          <p className="text-xs sm:text-sm text-purple-300 italic bg-slate-700/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-slate-600/50">
                            {"You didn't answer this question"}
                          </p>
                        ) : (
                          <>
                            {!isCorrect && (
                              <div className="bg-slate-700/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-red-600/40">
                                <p className="text-xs text-red-400 font-medium mb-0.5">Your Answer:</p>
                                <p className="text-xs sm:text-sm text-red-300 font-medium flex items-center gap-1.5">
                                  <XCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                  {userAnswer !== null ? q.options[userAnswer] : ""}
                                </p>
                              </div>
                            )}
                            <div className="bg-slate-700/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-emerald-600/40">
                              <p className="text-xs text-emerald-400 font-medium mb-0.5">Correct Answer:</p>
                              <p className="text-xs sm:text-sm text-emerald-300 font-bold flex items-center gap-1.5">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
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
                  <div className="text-center py-6 sm:py-8 text-[#F4F7F7]">
                    <p className="text-xs sm:text-sm md:text-base">No questions in this category</p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => startQuiz(activeQuiz)}
                className="bg-gradient-to-r from-purple-600 to-[#AACFD0] text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-lg md:rounded-xl font-medium text-xs sm:text-sm md:text-base hover:from-[#AACFD0] hover:to-[#5DA0A2] transition-all active:scale-95 touch-manipulation shadow-md flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Retry Quiz
              </button>
              <button
                onClick={backToQuizzes}
                className="bg-slate-700 text-purple-100 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-lg md:rounded-xl font-medium text-xs sm:text-sm md:text-base hover:bg-slate-600 transition-all active:scale-95 touch-manipulation shadow-md border border-[#AACFD0]/40"
              >
                Back to Quizzes
              </button>
            </div>
          </section>
        ) : (
          <section className="p-3 sm:p-4 md:p-8 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="mb-3 sm:mb-4 md:mb-6">
              <button
                onClick={backToQuizzes}
                className="flex items-center gap-1.5 sm:gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-medium active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                Back to Quizzes
              </button>

              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h2 className="text-sm sm:text-base md:text-lg font-bold text-purple-100 truncate pr-2">
                  {activeQuiz.title}
                </h2>
                <span className="text-xs sm:text-sm font-semibold text-purple-300 bg-[#34495E]/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex-shrink-0 border border-[#AACFD0]/50">
                  {currentQuestion + 1} / {shuffledQuestions.length}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-600 to-[#F4F7F7] h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-xs sm:text-sm text-purple-300 mt-1.5 sm:mt-2">
                {answeredCount} of {shuffledQuestions.length} questions answered
              </p>
            </div>

            <div className="bg-slate-800/60 border border-[#AACFD0]/40 rounded-lg sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 shadow-md">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-purple-100 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                {shuffledQuestions[currentQuestion].question}
              </p>

              <div className="space-y-2 sm:space-y-3">
                {shuffledQuestions[currentQuestion].options.map((option: string, idx: number) => {
                  const isSelected = selectedAnswer === idx
                  const isCorrect = idx === shuffledQuestions[currentQuestion].correctIndex
                  const isAnswered = answeredQuestions.has(currentQuestion)

                  let btnStyle =
                    "w-full text-left px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-lg md:rounded-xl border font-medium transition-all text-xs sm:text-sm md:text-base leading-snug touch-manipulation flex items-center gap-2 sm:gap-3 "

                  if (isAnswered && showFeedback) {
                    if (isCorrect) {
                      btnStyle += "bg-emerald-900/40 border-emerald-600/60 text-emerald-200 shadow-md"
                    } else if (isSelected) {
                      btnStyle += "bg-red-900/40 border-red-600/60 text-red-200 shadow-md"
                    } else {
                      btnStyle += "bg-slate-700/50 border-slate-600/50 text-slate-400"
                    }
                  } else if (isAnswered) {
                    btnStyle += "bg-slate-700/50 border-slate-600/50 text-slate-400 cursor-not-allowed"
                  } else {
                    btnStyle +=
                      "bg-slate-700/50 border-[#AACFD0]/40 hover:bg-slate-700 hover:border-purple-600/60 text-purple-100 hover:shadow-sm active:scale-[0.98]"
                  }

                  return (
                    <button key={idx} onClick={() => handleAnswer(idx)} className={btnStyle} disabled={isAnswered}>
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-slate-600 text-purple-200 text-xs sm:text-sm font-bold flex-shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {isAnswered && showFeedback && (
                        <>
                          {isCorrect && (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                          )}
                          {!isCorrect && isSelected && (
                            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                          )}
                        </>
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row justify-between gap-2 sm:gap-3">
                <button
                  onClick={nextQuestion}
                  disabled={currentQuestion >= shuffledQuestions.length - 1}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-purple-600 to-[#AACFD0] text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-lg md:rounded-xl font-medium text-xs sm:text-sm md:text-base hover:from-[#AACFD0] hover:to-[#5DA0A2] transition-all disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95 shadow-md"
                >
                  Next
                </button>
                <button
                  onClick={finishQuiz}
                  disabled={answeredCount === 0}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 bg-amber-600 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-lg md:rounded-xl font-medium text-xs sm:text-sm md:text-base hover:bg-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95 shadow-md"
                >
                  <StopCircle className="w-4 h-4" />
                  Finish
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#34495E] via-[#5DA0A2] to-slate-900 text-purple-100 text-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border-t border-[#AACFD0]/50">
          <p className="text-xs sm:text-sm md:text-base font-semibold">Model Quizzes – Learn Smarter 💡</p>
          <p className="text-xs font-medium mt-1 text-purple-300">Created by Hasitha Sandakelum</p>
          <p className="text-[#F4F7F7] text-xs mt-0.5">Ultra responsive for all devices</p>
        </footer>
      </div>
    </div>
  )
}
