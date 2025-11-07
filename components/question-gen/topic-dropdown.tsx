"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { TopicGroup } from "@/lib/question-gen/types/dataset";

interface TopicDropdownProps {
  group: TopicGroup;
  onSelectSubtopic: (subtopicId: string) => void;
}

export function TopicDropdown({ group, onSelectSubtopic }: TopicDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border/50 rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
      {/* Main Topic Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 text-left">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-xl">{group.icon || "📚"}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base sm:text-lg text-foreground">
              {group.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
              {group.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {group.subtopics.length}
          </span>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform" />
          ) : (
            <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform" />
          )}
        </div>
      </button>

      {/* Subtopics List */}
      {isOpen && (
        <div className="border-t border-border/50 bg-muted/20">
          <div className="p-2 space-y-1">
            {group.subtopics.map((subtopic) => (
              <button
                key={subtopic.id}
                onClick={() => onSelectSubtopic(subtopic.id)}
                className="w-full text-left p-3 rounded-lg hover:bg-card hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <span className="text-sm">📖</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                      {subtopic.subcategory}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                      {subtopic.description}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}