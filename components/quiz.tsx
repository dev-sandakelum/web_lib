"use client";
import React, { useState } from "react";
import {
  BookOpen,
  FolderOpen,
  FileText,
  Play,
  Search,
} from "lucide-react";
import { Ict1161Quiz } from "@/resourses/json/Q2";
import { MultimediaQuiz } from "@/resourses/json/Q3";

// Define types for quiz structure
interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

interface Quiz {
  id: string;
  title: string;
  category: string;
  questions: Question[];
}

// Separate quiz variables for better structure and scalability
const networkingQuiz: Quiz = {
  id: "1",
  title: "Networking Basics",
  category: "Networking",
  questions: [
    {
      question: "What does IP stand for?",
      options: [
        "Internet Protocol",
        "Internal Program",
        "Internet Process",
        "Interface Package",
      ],
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
};

const builtInQuizzes: Quiz[] = [networkingQuiz, Ict1161Quiz, MultimediaQuiz];

export default function ModelQuizzes() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const startQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  const handleAnswer = (index: number) => {
    if (!activeQuiz) return;
    setSelectedAnswer(index);
    if (index === activeQuiz.questions[currentQuestion].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (!activeQuiz) return;
    if (currentQuestion < activeQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const categories = [
    { id: "all", name: "All Quizzes" },
    ...Array.from(new Set(builtInQuizzes.map((q) => q.category))).map((cat) => ({ id: cat, name: cat })),
  ];

  const filteredQuizzes = builtInQuizzes.filter((quiz) => {
    const matchesCategory = selectedCategory === "all" || quiz.category === selectedCategory;
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 px-4 sm:px-6 md:px-10 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-10 py-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold leading-tight">Model Quizzes</h1>
                <p className="text-base sm:text-lg text-green-100">Learn and test your knowledge interactively</p>
              </div>
            </div>
          </div>
        </header>

        {/* Search & Category Filter */}
        {!activeQuiz && (
          <section className="p-5 sm:p-8 bg-green-50 border-b border-green-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="relative w-full sm:w-1/2">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-green-200 focus:border-green-500 focus:outline-none text-gray-700 bg-white shadow-sm text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="flex overflow-x-auto gap-2 sm:gap-3 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-lg font-medium text-sm sm:text-base transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md"
                      : "bg-white border border-green-200 text-gray-700 hover:bg-green-100 hover:shadow-sm"
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
          <section className="p-5 sm:p-8">
            <h3 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FolderOpen className="w-6 h-6 text-green-600" />
              Available Quizzes
            </h3>
            {filteredQuizzes.length === 0 ? (
              <div className="text-center text-gray-600 bg-white p-6 rounded-xl shadow-md">
                No quizzes found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="bg-gray-50 border border-green-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5 rounded-lg mb-4">
                      <FileText className="w-6 h-6 mb-2" />
                      <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {quiz.category}
                      </div>
                    </div>
                    <h2 className="text-lg font-bold text-gray-800 mb-3">{quiz.title}</h2>
                    <button
                      onClick={() => startQuiz(quiz)}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white w-full py-2 rounded-lg font-medium text-sm hover:from-green-700 hover:to-emerald-700 transition-all"
                    >
                      <Play className="w-4 h-4" /> Start Quiz
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : finished ? (
          <section className="p-5 sm:p-8 text-center bg-gradient-to-br from-green-50 to-emerald-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Quiz Completed 🎉</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              You scored <span className="font-bold text-green-700">{score}</span> / {activeQuiz.questions.length}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              {score === activeQuiz.questions.length
                ? "Perfect! 🌟"
                : score > activeQuiz.questions.length / 2
                ? "Well done! 💪"
                : "Keep practicing! 📘"}
            </p>

            <div className="bg-white border border-green-200 rounded-xl p-5 shadow-md text-left overflow-y-auto max-h-[60vh] mb-6">
              <h3 className="text-lg sm:text-2xl font-bold text-green-700 mb-4">Review Answers</h3>
              {activeQuiz.questions.map((q: Question, idx: number) => (
                <div key={idx} className="mb-3 border-b border-green-100 pb-2">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">{idx + 1}. {q.question}</p>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">✅ Correct Answer: <span className="text-green-700 font-medium">{q.options[q.correctIndex]}</span></p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => startQuiz(activeQuiz)} className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-green-700 transition-all">Retry Quiz</button>
              <button onClick={() => setActiveQuiz(null)} className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-300 transition-all">Back to Quizzes</button>
            </div>
          </section>
        ) : (
          <section className="p-5 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-100">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3">
              {activeQuiz.title} - Question {currentQuestion + 1} / {activeQuiz.questions.length}
            </h2>

            <div className="bg-white border border-green-200 rounded-xl p-5 shadow-md">
              <p className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                {activeQuiz.questions[currentQuestion].question}
              </p>

              <div className="space-y-3">
                {activeQuiz.questions[currentQuestion].options.map((option: string, idx: number) => {
                  const isCorrect = idx === activeQuiz.questions[currentQuestion].correctIndex;
                  const isSelected = selectedAnswer === idx;
                  let btnStyle =
                    "w-full text-left px-5 py-3 rounded-lg border font-medium transition-all text-sm sm:text-base ";
                  if (selectedAnswer !== null) {
                    if (isCorrect) btnStyle += "bg-green-100 border-green-500 text-green-800";
                    else if (isSelected) btnStyle += "bg-red-100 border-red-500 text-red-800";
                    else btnStyle += "bg-gray-50 border-gray-200 text-gray-700";
                  } else {
                    btnStyle += "bg-white border-gray-200 hover:bg-green-50 hover:border-green-300 text-gray-700";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => selectedAnswer === null && handleAnswer(idx)}
                      className={btnStyle}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={nextQuestion}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:from-green-700 hover:to-emerald-700 transition-all"
                  >
                    {currentQuestion < activeQuiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center px-4 py-6">
          <p className="text-sm sm:text-lg font-semibold">Model Quizzes – Learn Smarter 💡</p>
          <p className="text-xs sm:text-sm font-medium mt-2 text-white opacity-80">
            Created by Hasitha Sandakelum
          </p>
          <p className="text-green-100 text-xs sm:text-sm mt-1">Fully responsive for all devices</p>
        </footer>
      </div>
    </div>
  );
}