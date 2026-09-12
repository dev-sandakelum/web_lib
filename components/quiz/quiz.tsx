"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  BookOpen,
  Play,
  Search,
  CheckCircle,
  XCircle,
  StopCircle,
  TrendingUp,
  Award,
  ChevronRight,
  Sparkles,
  HomeIcon,
  Archive,
  GraduationCap,
} from "lucide-react";

import {
  builtInQuizzes,
  currentSemesterQuizzes,
  archivedQuizzes,
  Quiz,
  Question,
} from "./quiz-data";
import { currentSemester, archivedSemesters } from "../data";
import { quiz_font } from "../fonts";

export default function ModelQuizzes() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initRef = useRef(false);

  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [archiveCategory, setArchiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(
    new Set()
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<
    "all" | "correct" | "incorrect" | "skipped"
  >("all");

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeQuizFromUrl = useCallback(() => {
    if (initRef.current) return;

    const quizId = searchParams.get("quiz");
    if (quizId) {
      const quiz = builtInQuizzes.find((q) => q.id === quizId);
      if (quiz) {
        initRef.current = true;
        const shuffled = shuffleArray(quiz.questions);
        setActiveQuiz(quiz);
        setShuffledQuestions(shuffled);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setUserAnswers(new Array(shuffled.length).fill(null));
        setScore(0);
        setFinished(false);
        setAnsweredQuestions(new Set());
        setShowFeedback(false);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    initializeQuizFromUrl();
  }, []);

  const startQuiz = (quiz: Quiz) => {
    const shuffled = shuffleArray(quiz.questions);
    setActiveQuiz(quiz);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers(new Array(shuffled.length).fill(null));
    setScore(0);
    setFinished(false);
    setAnsweredQuestions(new Set());
    setShowFeedback(false);
    initRef.current = false;
    router.push(`?quiz=${quiz.id}`, { scroll: false });
  };

  const handleAnswer = (index: number) => {
    if (!activeQuiz || answeredQuestions.has(currentQuestion)) return;

    setSelectedAnswer(index);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = index;
    setUserAnswers(newAnswers);

    const newAnswered = new Set(answeredQuestions);
    newAnswered.add(currentQuestion);
    setAnsweredQuestions(newAnswered);

    setShowFeedback(true);

    setTimeout(() => {
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      }
    }, 2000);
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1]);
      setShowFeedback(answeredQuestions.has(currentQuestion + 1));
    }
  };

  const finishQuiz = () => {
    if (!activeQuiz) return;
    let finalScore = 0;
    userAnswers.forEach((answer, idx) => {
      if (answer === shuffledQuestions[idx].correctIndex) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setFinished(true);
  };

  const backToQuizzes = () => {
    setActiveQuiz(null);
    initRef.current = false;
    router.push("/quiz", { scroll: false });
  };
  const BackToHome = () => {
    setActiveQuiz(null);
    initRef.current = false;
    router.push("/", { scroll: false });
  };

  // Subject filters are scoped per section, so old subjects never mix
  // with the new semester's subjects.
  const categoriesOf = (quizzes: Quiz[]) => [
    { id: "all", name: "All Subjects" },
    ...Array.from(new Set(quizzes.map((q) => q.category))).map((cat) => ({
      id: cat,
      name: cat,
    })),
  ];
  const currentCategories = categoriesOf(currentSemesterQuizzes);
  const archiveCategories = categoriesOf(archivedQuizzes);

  const matchesSearch = (quiz: Quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase());

  const filteredCurrent = currentSemesterQuizzes.filter(
    (q) =>
      matchesSearch(q) &&
      (currentCategory === "all" || q.category === currentCategory)
  );
  const filteredArchived = archivedQuizzes.filter(
    (q) =>
      matchesSearch(q) &&
      (archiveCategory === "all" || q.category === archiveCategory)
  );
  const isFiltering = searchTerm.trim() !== "" || archiveCategory !== "all";

  const progressPercentage = activeQuiz
    ? ((currentQuestion + 1) / shuffledQuestions.length) * 100
    : 0;
  const answeredCount = userAnswers.filter((a) => a !== null).length;

  const renderCategoryPills = (
    cats: { id: string; name: string }[],
    selected: string,
    onSelect: (id: string) => void
  ) => (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide mb-4 sm:mb-6">
      {cats.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
            selected === cat.id
              ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/40"
              : "bg-[#161b22] text-slate-400 border border-[#30363d] hover:border-emerald-500/50 hover:text-slate-200"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );

  const renderQuizCard = (quiz: Quiz, accent: "current" | "archive") => (
    <div
      key={quiz.id}
      className={`group relative bg-[#161b22] rounded-2xl border border-[#30363d] p-4 sm:p-6 flex flex-col min-h-44 sm:min-h-48 transition-all duration-300 hover:-translate-y-1 ${
        accent === "current"
          ? "hover:border-emerald-500/60 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]"
          : "hover:border-purple-500/50 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]"
      }`}
    >
      <h3
        className={`text-base sm:text-lg font-bold text-slate-200 leading-snug mb-1 sm:mb-2 transition-colors ${
          accent === "current"
            ? "group-hover:text-emerald-400"
            : "group-hover:text-purple-300"
        }`}
      >
        {quiz.title}
      </h3>

      <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4 flex-1">
        {quiz.category}
      </p>

      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-3 sm:mb-4">
        <Sparkles
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
            accent === "current" ? "text-emerald-500" : "text-purple-400"
          }`}
        />
        {quiz.questions.length} Questions
      </div>

      <button
        onClick={() => startQuiz(quiz)}
        className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        Start Quiz
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>
    </div>
  );

  return (
    <div
      className={`min-h-screen bg-[#0d1117] text-slate-100 ${quiz_font.variable} font-sans antialiased`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0d1117]/80 border-b border-[#30363d] px-3 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg shadow-purple-900/20">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-white">
                  Quizzes
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-0">
                  Learn & test your knowledge
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm font-medium text-emerald-300">
                <GraduationCap className="w-4 h-4" />
                <span>{currentSemester.title}</span>
              </div>
              <button
                onClick={BackToHome}
                className="p-2 sm:p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                title="Home"
              >
                <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Search */}
        {!activeQuiz && (
          <section className="px-3 py-3 sm:px-6 sm:py-6 border-b border-[#30363d]/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3.5 bg-[#161b22] border border-[#30363d] rounded-xl text-sm sm:text-base text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
          </section>
        )}

        {/* Quiz Browse View */}
        {!activeQuiz ? (
          <section className="p-3 sm:p-6 lg:p-8 space-y-8 sm:space-y-12">
            {/* Current Semester */}
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                <h2 className="text-lg sm:text-2xl font-bold text-white">
                  {currentSemester.title}
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 ml-1">
                  Current
                </span>
              </div>

              {currentSemesterQuizzes.length > 0 &&
                renderCategoryPills(
                  currentCategories,
                  currentCategory,
                  setCurrentCategory
                )}

              {currentSemesterQuizzes.length === 0 ? (
                <div className="rounded-2xl sm:rounded-3xl border-2 border-dashed border-emerald-500/25 bg-emerald-500/[0.03] p-8 sm:p-10 text-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mx-auto mb-3">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-200 mb-1">
                    Ready for the new semester
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Quizzes for {currentSemester.title} will appear here as
                    they are added.
                  </p>
                </div>
              ) : filteredCurrent.length === 0 ? (
                <p className="text-slate-500 text-sm px-1">
                  No current-semester quizzes match your search.
                </p>
              ) : (
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredCurrent.map((quiz) =>
                    renderQuizCard(quiz, "current")
                  )}
                </div>
              )}
            </div>

            {/* Archive */}
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Archive className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                <h2 className="text-lg sm:text-2xl font-bold text-slate-300">
                  {archivedSemesters[0]?.title}
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded-full border border-white/10 ml-1">
                  Archive
                </span>
              </div>

              {archivedQuizzes.length > 0 &&
                renderCategoryPills(
                  archiveCategories,
                  archiveCategory,
                  setArchiveCategory
                )}

              {filteredArchived.length === 0 ? (
                <div className="text-center py-12 sm:py-16 px-4 bg-[#161b22] rounded-3xl border-2 border-dashed border-[#30363d]">
                  <p className="text-slate-500 text-lg font-semibold">
                    No quizzes found
                    {isFiltering ? " for your search" : ""}
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredArchived.map((quiz) =>
                    renderQuizCard(quiz, "archive")
                  )}
                </div>
              )}
            </div>
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
                <p className="text-xl sm:text-3xl font-bold text-emerald-400">
                  {score}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">
                  Correct
                </p>
              </div>

              {/* Incorrect */}
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl p-3 sm:p-4 text-center">
                <XCircle className="w-4 h-4 sm:w-6 sm:h-6 text-red-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xl sm:text-3xl font-bold text-red-400">
                  {answeredCount - score}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">
                  Incorrect
                </p>
              </div>

              {/* Skipped */}
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-3 sm:p-4 text-center">
                <StopCircle className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xl sm:text-3xl font-bold text-amber-400">
                  {shuffledQuestions.length - answeredCount}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">
                  Skipped
                </p>
              </div>
            </div>

            {/* Overall Score */}
            <div className="bg-[#161b22] border border-emerald-500/30 rounded-2xl p-4 sm:p-6 text-center">
              <p className="text-slate-400 font-medium text-xs sm:text-sm mb-1 sm:mb-2">
                Your Final Score
              </p>
              <p className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {answeredCount > 0
                  ? ((score / answeredCount) * 100).toFixed(0)
                  : 0}
                %
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
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm mb-1 sm:mb-2">
                    Performance Insight
                  </h4>
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
                {
                  id: "incorrect",
                  label: "Incorrect",
                  count: answeredCount - score,
                },
                {
                  id: "skipped",
                  label: "Skipped",
                  count: shuffledQuestions.length - answeredCount,
                },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() =>
                    setReviewFilter(filter.id as typeof reviewFilter)
                  }
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                    reviewFilter === filter.id
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                      : "bg-[#161b22] text-slate-400 border border-[#30363d]"
                  }`}
                >
                  {filter.label}{" "}
                  <span className="ml-1 text-xs opacity-75">
                    ({filter.count})
                  </span>
                </button>
              ))}
            </div>

            {/* Questions Review */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-5 space-y-3 max-h-96 overflow-y-auto">
              {shuffledQuestions
                .map((q: Question, idx: number) => {
                  const userAnswer = userAnswers[idx];
                  const isAnswered = userAnswer !== null;
                  const isCorrect = userAnswer === q.correctIndex;
                  return { q, idx, userAnswer, isAnswered, isCorrect };
                })
                .filter(({ isAnswered, isCorrect }) => {
                  if (reviewFilter === "all") return true;
                  if (reviewFilter === "correct")
                    return isAnswered && isCorrect;
                  if (reviewFilter === "incorrect")
                    return isAnswered && !isCorrect;
                  if (reviewFilter === "skipped") return !isAnswered;
                  return true;
                })
                .map(({ q, idx, userAnswer, isAnswered, isCorrect }) => (
                  <div
                    key={idx}
                    className={`rounded-xl p-4 border transition-all ${
                      !isAnswered
                        ? "bg-white/[0.02] border-[#30363d]"
                        : isCorrect
                        ? "bg-emerald-500/10 border-emerald-500/30"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          !isAnswered
                            ? "bg-slate-700 text-slate-300"
                            : isCorrect
                            ? "bg-emerald-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {!isAnswered ? "?" : isCorrect ? "✓" : "✕"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-100">
                          {q.question}
                        </p>
                        <div className="mt-2 space-y-1.5 text-xs">
                          {!isAnswered ? (
                            <p className="text-slate-400 italic">
                              You didn't answer this question
                            </p>
                          ) : (
                            <>
                              {!isCorrect && userAnswer !== null && (
                                <p className="text-red-300">
                                  Your answer:{" "}
                                  <span className="font-semibold">
                                    {q.options[userAnswer]}
                                  </span>
                                </p>
                              )}
                              <p className="text-emerald-300">
                                Correct:{" "}
                                <span className="font-semibold">
                                  {q.options[q.correctIndex]}
                                </span>
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
                className="w-full py-2.5 sm:py-3.5 px-3 sm:px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Retry Quiz
              </button>
              <button
                onClick={backToQuizzes}
                className="w-full py-2.5 sm:py-3.5 px-3 sm:px-4 bg-[#161b22] hover:bg-[#1f2937] border border-[#30363d] text-slate-200 font-bold rounded-xl transition-all active:scale-95 text-sm sm:text-base"
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
                <h2 className="text-base sm:text-xl font-bold text-white truncate">
                  {activeQuiz.title}
                </h2>
                <span className="text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/30 whitespace-nowrap flex-shrink-0">
                  {currentQuestion + 1} / {shuffledQuestions.length}
                </span>
              </div>
              <div className="w-full h-2.5 sm:h-3 bg-[#161b22] border border-[#30363d] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {answeredCount} of {shuffledQuestions.length} questions answered
              </p>
            </div>

            {/* Question Card */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-3xl p-4 sm:p-8 shadow-xl">
              <p className="text-base sm:text-2xl font-bold text-slate-100 leading-snug sm:leading-relaxed mb-6 sm:mb-8">
                {shuffledQuestions[currentQuestion].question}
              </p>

              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {shuffledQuestions[currentQuestion].options.map(
                  (option: string, idx: number) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect =
                      idx === shuffledQuestions[currentQuestion].correctIndex;
                    const isAnswered = answeredQuestions.has(currentQuestion);

                    let style =
                      "w-full text-left px-3 sm:px-4 py-2.5 sm:py-4 rounded-xl border-2 font-semibold transition-all text-sm sm:text-base leading-snug flex items-center gap-2 sm:gap-3 ";

                    if (isAnswered && showFeedback) {
                      if (isCorrect) {
                        style +=
                          "bg-emerald-500/10 border-emerald-500 text-emerald-300";
                      } else if (isSelected) {
                        style += "bg-red-500/10 border-red-500 text-red-300";
                      } else {
                        style +=
                          "bg-white/[0.02] border-[#30363d] text-slate-500 opacity-60";
                      }
                    } else if (isAnswered) {
                      style +=
                        "bg-white/[0.02] border-[#30363d] text-slate-500 cursor-not-allowed opacity-50";
                    } else {
                      style +=
                        "bg-[#0d1117] border-[#30363d] hover:border-emerald-500/60 hover:bg-emerald-500/[0.04] text-slate-200 cursor-pointer active:scale-[0.98]";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={isAnswered}
                        className={style}
                      >
                        <span className="flex-shrink-0 w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-lg bg-[#21262d] border border-[#30363d] text-slate-300 flex items-center justify-center text-xs font-bold">
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
                    );
                  }
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-[#30363d]">
                <button
                  onClick={nextQuestion}
                  disabled={currentQuestion >= shuffledQuestions.length - 1}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 text-sm sm:text-base"
                >
                  Next
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={finishQuiz}
                  disabled={answeredCount === 0}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 text-sm sm:text-base"
                >
                  <StopCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Finish
                </button>
              </div>

              <button
                onClick={backToQuizzes}
                className="w-full mt-2 sm:mt-3 py-2.5 sm:py-3 px-3 sm:px-4 bg-[#0d1117] hover:bg-[#1f2937] border border-[#30363d] text-slate-300 font-bold rounded-xl transition-all active:scale-95 text-sm sm:text-base"
              >
                ← Back to Quiz Menu
              </button>
            </div>
          </section>
        )}
        <div className="h-20 w-full"></div>
      </div>
      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#0d1117]/90 backdrop-blur-md px-3 py-4 sm:px-6 sm:py-5 text-center bottom-0 fixed w-full z-30">
        <p className="text-sm sm:text-base font-bold text-slate-200">
          Quiz Master 3.0 – Learn Smarter
        </p>
        <p className="text-xs font-medium mt-1 text-purple-400">
          Created by Hasitha Sandakelum
        </p>
      </footer>
    </div>
  );
}
