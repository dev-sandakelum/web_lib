import React from "react";

interface Value_PASS {
  value: string;
  font: string;
}
export function Q_gen_question({ value, font }: Value_PASS) {
  return (
    <div className="bg-muted/30 rounded-lg p-3 sm:p-4 border border-border/30">
      <h3 className="text-xs font-semibold text-muted-foreground mb-2">
        Question:
      </h3>

      <h2
        className={`text-[12px] sm:text-m text-card-foreground leading-snug ${font} font-sans antialiased`}
      >
        {value}
      </h2>
    </div>
  );
}
export function Q_gen_userAnswer({ value, font }: Value_PASS) {
  return (
    <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20">
      <h3 className="text-xs font-semibold text-primary mb-2">Your Answer:</h3>
      <h2
        className={`text-[12px] sm:text-m text-card-foreground leading-snug ${font} font-sans antialiased`}
      >
        {value}
      </h2>
    </div>
  );
}

export function Q_gen_modelAnswer({ value, font }: Value_PASS) {
  return (
    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 sm:p-4 border border-green-200 dark:border-green-800">
      <h3 className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-1.5">
        <span>✅</span> Model Answer
      </h3>
      <p
        className={`text-[12px] sm:text-m text-card-foreground leading-snug ${font} font-sans antialiased`}
      >
        {value}
      </p>
    </div>
  );
}
export function Q_gen_feedback({ value, font }: Value_PASS) {
  return (
    <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <p className={`text-[12px] sm:text-m text-card-foreground leading-snug ${font} font-sans antialiased`}
      >
          {value}
        </p>
      </div>
  );
}
