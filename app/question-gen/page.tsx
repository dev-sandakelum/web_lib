"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { topicGroups } from "@/lib/question-gen/datasets/registry";

interface Subtopic {
  id: string;
  subcategory: string;
  description: string;
}

interface TopicGroup {
  name: string;
  description: string;
  icon?: string;
  subtopics: Subtopic[];
}

interface TopicDropdownProps {
  group: TopicGroup;
  onSelectSubtopic: (subtopicId: string) => void;
}

function TopicDropdown({ group, onSelectSubtopic }: TopicDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card rounded-lg sm:rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Main Topic Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 sm:p-4 md:p-5 hover:bg-muted/30 transition-all duration-200 active:scale-[0.99]"
      >
        <div className="flex items-center gap-2 sm:gap-3 flex-1 text-left">
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center transition-all duration-200">
            <span className="text-lg sm:text-xl">{group.icon || "📚"}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-foreground">
              {group.name}
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground line-clamp-1">
              {group.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground bg-muted/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-border/30">
            {group.subtopics.length}
          </span>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-200" />
          ) : (
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-200" />
          )}
        </div>
      </button>

      {/* Subtopics List */}
      {isOpen && (
        <div className="border-t border-border/30 bg-muted/20">
          <div className="p-2 space-y-1">
            {group.subtopics.map((subtopic) => (
              <button
                key={subtopic.id}
                onClick={() => onSelectSubtopic(subtopic.id)}
                className="w-full text-left p-2.5 sm:p-3 rounded-lg hover:bg-card hover:shadow-sm transition-all duration-200 active:scale-95 group border border-transparent hover:border-border/30"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary/10 border border-primary/20 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs sm:text-sm">📖</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[11px] sm:text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                      {subtopic.subcategory}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
                      {subtopic.description}
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0 mt-0.5 sm:mt-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Accordion Component with single-open behavior
interface AccordionTopicDropdownProps {
  group: TopicGroup;
  isOpen: boolean;
  onToggle: () => void;
  onSelectSubtopic: (subtopicId: string) => void;
}

function AccordionTopicDropdown({ 
  group, 
  isOpen, 
  onToggle, 
  onSelectSubtopic 
}: AccordionTopicDropdownProps) {
  return (
    <div className="bg-card rounded-lg sm:rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Main Topic Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 sm:p-4 md:p-5 hover:bg-muted/30 transition-all duration-200 active:scale-[0.99]"
      >
        <div className="flex items-center gap-2 sm:gap-3 flex-1 text-left">
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center transition-all duration-200">
            <span className="text-lg sm:text-xl">{group.icon || "📚"}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-foreground">
              {group.name}
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground line-clamp-1">
              {group.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground bg-muted/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-border/30">
            {group.subtopics.length}
          </span>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-200" />
          ) : (
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-200" />
          )}
        </div>
      </button>

      {/* Subtopics List */}
      {isOpen && (
        <div className="border-t border-border/30 bg-muted/20 animate-in slide-in-from-top-2 duration-200">
          <div className="p-2 space-y-1">
            {group.subtopics.map((subtopic) => (
              <button
                key={subtopic.id}
                onClick={() => onSelectSubtopic(subtopic.id)}
                className="w-full text-left p-2.5 sm:p-3 rounded-lg hover:bg-card hover:shadow-sm transition-all duration-200 active:scale-95 group border border-transparent hover:border-border/30"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary/10 border border-primary/20 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs sm:text-sm">📖</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[11px] sm:text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                      {subtopic.subcategory}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
                      {subtopic.description}
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0 mt-0.5 sm:mt-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Main Page Component
export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);

  

  const handleSelectSubtopic = (subtopicId: string) => {
    setSelectedSubtopic(subtopicId);
    // Simulate navigation
    setTimeout(() => {
      setSelectedSubtopic(null);
    }, 3000);
  };

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20 py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6">
        {/* Header Section */}
        <div className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            AI Question Generator
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg">
            Select a topic and subtopic to start learning
          </p>
        </div>

        {/* Warning Banner */}
        <div className="border border-yellow-500/30 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 text-[10px] sm:text-xs md:text-sm flex items-start gap-2 mb-4 sm:mb-5 md:mb-6 bg-yellow-500/10 transition-all duration-200">
          <svg 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          <p className="text-yellow-700 dark:text-yellow-400 font-medium leading-relaxed">
            Note: This is a prototype version and may contain bugs or unexpected issues.
          </p>
        </div>

        {/* Selected Subtopic Alert */}
        {selectedSubtopic && (
          <div className="bg-primary/10 border border-primary/30 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 mb-4 sm:mb-5 md:mb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-primary">
                Selected: {selectedSubtopic}
              </p>
            </div>
          </div>
        )}

        {/* Topics List */}
        <div className="space-y-3 sm:space-y-4">
          {topicGroups.map((group, index) => (
            <AccordionTopicDropdown
              key={index}
              group={group}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              onSelectSubtopic={handleSelectSubtopic}
            />
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="h-16 sm:h-20 w-full"></div>
      </div>
    </main>
  );
}