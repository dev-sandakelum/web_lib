"use client";

import { TopicDropdown } from "@/components/question-gen/topic-dropdown";
import { topicGroups } from "@/lib/question-gen/datasets/registry";
import { useRouter } from "next/navigation";
import { FileWarning } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const handleSelectSubtopic = (subtopicId: string) => {
    router.push(`/question-gen/quiz/${subtopicId}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-6 sm:py-8 md:py-10">
      <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6">
        <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            AI Question Generator
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Select a topic and subtopic to start learning
          </p>
        </div>

        <div className="border border-border/50 rounded-lg p-3 text-xs sm:text-sm flex items-start gap-2 mb-6 bg-yellow-500/5">
          <FileWarning className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
          <p className="text-yellow-600 font-medium">
            Note: This is a prototype version and may contain bugs or unexpected issues.
          </p>
        </div>

        <div className="space-y-4">
          {topicGroups.map((group) => (
            <TopicDropdown
              key={group.id}
              group={group}
              onSelectSubtopic={handleSelectSubtopic}
            />
          ))}
        </div>
      </div>
      <div className="h-20 w-full"></div>
    </main>
  );
}