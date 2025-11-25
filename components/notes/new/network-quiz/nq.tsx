"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Datalink } from "./data/datalink";
import { IntroData } from "./data/intro";
import { ReferenceData } from "./data/reference";
import { IpData } from "./data/ip";
import { PhysicalData } from "./data/physical";
import { MultiplexingData } from "./data/multiplexing";
import { MacData } from "./data/mac";
import { NetworkData } from "./data/network";
import { ApplicationData } from "./data/application";
import { TransportData } from "./data/transport";

export default function NetworkingFullQuiz() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("intro");
  const [expandedQuizId, setExpandedQuizId] = useState<string | number | null>(null);

  const toggleAnswer = (id: string | number): void => {
    setExpandedQuizId(expandedQuizId === id ? null : id);
  };

  const quizDisplay = (quiz: any, index: number, quizzesLength: number) => {
    return (
      <div
        key={quiz.id}
        className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
      >
        {/* Question Header */}
        <div className="p-3 sm:p-4 md:p-5">
          <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-medium text-gray-600 bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded">
                  #{quizzesLength - index}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-600">
                  {formatDate(quiz.createdAt)}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-blue-700 bg-blue-50 px-1.5 sm:px-2 py-0.5 rounded">
                  {quiz.model}
                </span>
              </div>
              <div
                className="text-xs sm:text-sm md:text-base font-medium text-gray-900 leading-relaxed prose prose-sm max-w-none 
                  [&_b]:font-semibold [&_i]:italic [&_u]:underline
                  [&_ol]:list-decimal [&_ol]:ml-4 sm:[&_ol]:ml-5 [&_ol]:my-1.5 sm:[&_ol]:my-2 [&_ol]:space-y-0.5 sm:[&_ol]:space-y-1
                  [&_ul]:list-disc [&_ul]:ml-4 sm:[&_ul]:ml-5 [&_ul]:my-1.5 sm:[&_ul]:my-2 [&_ul]:space-y-0.5 sm:[&_ul]:space-y-1
                  [&_li]:my-0.5 sm:[&_li]:my-1 [&_li]:leading-relaxed [&_li]:text-xs sm:[&_li]:text-sm md:[&_li]:text-base
                  [&_p]:my-1.5 sm:[&_p]:my-2 [&_p]:text-xs sm:[&_p]:text-sm md:[&_p]:text-base
                  [&_br]:block [&_br]:my-0.5 sm:[&_br]:my-1"
                dangerouslySetInnerHTML={{ __html: quiz.question }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 flex-wrap">
            <button
              onClick={() =>
                handleUseQuestion(
                  quiz.question,
                  formatDate(quiz.createdAt)
                )
              }
              className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md sm:rounded-lg text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1 sm:gap-1.5 min-w-[120px] sm:min-w-[140px]"
            >
              <span>✓</span>
              <span>Use Question</span>
            </button>

            <button
              onClick={() => toggleAnswer(quiz.id)}
              className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 hover:bg-gray-50 rounded-md sm:rounded-lg text-[11px] sm:text-xs md:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-1.5 min-w-[120px] sm:min-w-[140px]"
            >
              <span>{expandedQuizId === quiz.id ? "👁️" : "👁️‍🗨️"}</span>
              <span>
                {expandedQuizId === quiz.id ? "Hide" : "Show"} Answer
              </span>
            </button>
          </div>
        </div>

        {/* Model Answer (Expandable) */}
        {expandedQuizId === quiz.id && (
          <div className="border-t border-gray-200 bg-gray-50 p-3 sm:p-4 md:p-5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <span className="text-[10px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Model Answer
              </span>
            </div>
            <div
              className="prose prose-sm max-w-none text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed
                [&_b]:font-semibold [&_i]:italic [&_u]:underline
                [&_ol]:list-decimal [&_ol]:ml-4 sm:[&_ol]:ml-5 [&_ol]:my-1.5 sm:[&_ol]:my-2 [&_ol]:space-y-0.5 sm:[&_ol]:space-y-1
                [&_ul]:list-disc [&_ul]:ml-4 sm:[&_ul]:ml-5 [&_ul]:my-1.5 sm:[&_ul]:my-2 [&_ul]:space-y-0.5 sm:[&_ul]:space-y-1
                [&_li]:my-0.5 sm:[&_li]:my-1 [&_li]:leading-relaxed [&_li]:text-xs sm:[&_li]:text-sm md:[&_li]:text-base
                [&_p]:my-1.5 sm:[&_p]:my-2 [&_p]:text-xs sm:[&_p]:text-sm md:[&_p]:text-base
                [&_br]:block [&_br]:my-0.5 sm:[&_br]:my-1
                [&_h1]:text-base sm:[&_h1]:text-lg md:[&_h1]:text-xl [&_h1]:font-bold [&_h1]:my-2 sm:[&_h1]:my-3
                [&_h2]:text-sm sm:[&_h2]:text-base md:[&_h2]:text-lg [&_h2]:font-bold [&_h2]:my-1.5 sm:[&_h2]:my-2
                [&_h3]:text-xs sm:[&_h3]:text-sm md:[&_h3]:text-base [&_h3]:font-semibold [&_h3]:my-1.5 sm:[&_h3]:my-2"
              dangerouslySetInnerHTML={{ __html: quiz.modelAnswer }}
            />
          </div>
        )}
      </div>
    );
  };

  const handleUseQuestion = (question: string, ago: string) => {
    // Strip HTML tags before encoding
    const plainQuestion = question
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const categoryId = "predefined";
    const encodedQuestion = encodeURIComponent(plainQuestion);
    router.push(
      `/question-gen/quiz/${categoryId}?question=${encodedQuestion}&createdAt=${encodeURIComponent(ago)}`
    );
  };

  const formatDate = (date: string | Date): string => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-1 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-8 rounded-xl mb-4 sm:mb-6 shadow-lg">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">ICT</h1>
          <h2 className="text-lg sm:text-2xl font-semibold mb-1">
            Computer Networks
          </h2>
          <p className="text-xs sm:text-sm opacity-90">Fabrikam Residences</p>
        </div>

        {/* Navigation */}
        <div className="sticky top-0 bg-white rounded-lg shadow-md z-50 mb-4 m-0 p-0 sm:mb-6">
          <div className="flex gap-2 p-3 sm:p-4 overflow-x-auto">
            {[
              { id: "intro", label: "Introduction" },
              { id: "reference", label: "Reference Models" },
              { id: "ip", label: "IP Addressing" },
              { id: "physical", label: "Physical Layer" },
              { id: "multiplexing", label: "Multiplexing" },
              { id: "datalink", label: "Data Link Layer" },
              { id: "mac", label: "MAC Layer" },
              { id: "network", label: "Network Layer" },
              { id: "transport", label: "Transport Layer" },
              { id: "application", label: "Application Layer" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-3 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? "bg-blue-700 text-white shadow-md"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Introduction Section */}
        {activeSection === "intro" && (
          <div className="space-y-3 sm:space-y-4">
            {IntroData.map((quiz, index) => 
              quizDisplay(quiz, index, IntroData.length)
            )}
          </div>
        )}

        {/* Reference Models Section */}
        {activeSection === "reference" && (
          <div className="space-y-3 sm:space-y-4">
            {ReferenceData.map((quiz, index) => 
              quizDisplay(quiz, index, ReferenceData.length)
            )}
          </div>
        )}

        {/* IP Addressing Section */}
        {activeSection === "ip" && (
          <div className="space-y-3 sm:space-y-4">
            {IpData.map((quiz, index) => 
              quizDisplay(quiz, index, IpData.length)
            )}
          </div>
        )}

        {/* Physical Layer Section */}
        {activeSection === "physical" && (
          <div className="space-y-3 sm:space-y-4">
            {PhysicalData.map((quiz, index) => 
              quizDisplay(quiz, index, PhysicalData.length)
            )}
          </div>
        )}

        {/* Multiplexing Section */}
        {activeSection === "multiplexing" && (
          <div className="space-y-3 sm:space-y-4">
            {MultiplexingData.map((quiz, index) => 
              quizDisplay(quiz, index, MultiplexingData.length)
            )}
          </div>
        )}

        {/* Data Link Layer Section */}
        {activeSection === "datalink" && (
          <div className="space-y-3 sm:space-y-4">
            {Datalink.map((quiz, index) => 
              quizDisplay(quiz, index, Datalink.length)
            )}
          </div>
        )}

        {/* MAC Layer Section */}
        {activeSection === "mac" && (
          <div className="space-y-3 sm:space-y-4">
            {MacData.map((quiz, index) => 
              quizDisplay(quiz, index, MacData.length)
            )}
          </div>
        )}

        {/* Network Layer Section */}
        {activeSection === "network" && (
          <div className="space-y-3 sm:space-y-4">
            {NetworkData.map((quiz, index) => 
              quizDisplay(quiz, index, NetworkData.length)
            )}
          </div>
        )}

        {/* Transport Layer Section */}
        {activeSection === "transport" && (
          <div className="space-y-3 sm:space-y-4">
            {TransportData.map((quiz, index) => 
              quizDisplay(quiz, index, TransportData.length)
            )}
          </div>
        )}

        {/* Application Layer Section */}
        {activeSection === "application" && (
          <div className="space-y-3 sm:space-y-4">
            {ApplicationData.map((quiz, index) => 
              quizDisplay(quiz, index, ApplicationData.length)
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-xs sm:text-sm text-gray-600 bg-white rounded-lg p-4 shadow-sm">
          <p className="font-semibold mb-2">Computer Networks - ICT</p>
        </div>
      </div>
    </div>
  );
}