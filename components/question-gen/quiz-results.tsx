"use client";

import Link from "next/link";
import { StarRating } from "./star-rating";
import { quiz_font } from "../fonts";
import Q_gen_window, {
  openSaveAsJPG,
  Q_gen_feedback,
  Q_gen_modelAnswer,
  Q_gen_question,
  Q_gen_userAnswer,
} from "./results-items/question";

interface QuizResultsProps {
  stars: number;
  feedback: string;
  improvements: string[];
  categoryId: string;
  onTryAnother: () => void;
  loading: boolean;

  userAnswer: string; // ADDED
  question: string; // ADDED

  modelAnswer: string;
}

export function QuizResults({
  stars,
  feedback,
  improvements,
  categoryId,
  onTryAnother,
  loading,
  userAnswer,
  question,
  modelAnswer,
}: QuizResultsProps) {
  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-sm p-4 sm:p-5 space-y-4">
      <Q_gen_question value={question} font={quiz_font.variable} />
      <Q_gen_userAnswer value={userAnswer} font={quiz_font.variable} />
      <Q_gen_modelAnswer value={modelAnswer} font={quiz_font.variable} />

      <Q_gen_window
        question={question}
        userAnswer={userAnswer}
        modelAnswer={modelAnswer}
        feedback={feedback}
        topic={categoryId}
        studentName={"N/A"}
        qrCodeUrl={"https://raw.githubusercontent.com/dev-sandakelum/web_lib/main/resources/qr_quiz.png"}
        improvements={improvements}
      />

      <div className="space-y-2">
        <h2 className="text-base sm:text-lg font-semibold text-card-foreground">
          Your Result
        </h2>
        <StarRating stars={stars} />
      </div>

      <Q_gen_feedback value={feedback} font={quiz_font.variable} />

      {stars < 4 && improvements.length > 0 && (
        <div className="space-y-2.5">
          <h3 className="font-semibold text-card-foreground text-s sm:text-base">
            💡 How to Improve:
          </h3>
          <ol
            className={`text-[12px] sm:text-m text-card-foreground leading-snug ${quiz_font.variable} font-sans antialiased`}
          >
            {improvements.map((improvement, idx) => (
              <li
                key={idx}
                className="flex gap-2.5 text-xs sm:text-sm text-muted-foreground"
              >
                <span className="font-bold text-primary flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] sm:text-xs">
                  {idx + 1}
                </span>
                <span
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: improvement }}
                ></span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
        <button
          onClick={onTryAnother}
          disabled={loading}
          className="flex-1 min-h-10 sm:min-h-11 px-4 bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
        >
          Try Another Question →
        </button>

        <Link href="/question-gen/" className="flex-1">
          <button className="w-full h-10 sm:h-11 px-4 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            ← Change Category
          </button>
        </Link>
      </div>
    </div>
  );
}
