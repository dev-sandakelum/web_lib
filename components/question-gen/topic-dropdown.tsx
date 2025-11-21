"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

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

// Demo Component
export default function Demo() {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);

  const sampleGroups: TopicGroup[] = [
    {
      name: "Mathematics",
      description: "Core mathematical concepts and problem-solving",
      icon: "🔢",
      subtopics: [
        { id: "math-1", subcategory: "Algebra", description: "Linear equations, quadratic functions, and polynomial operations" },
        { id: "math-2", subcategory: "Geometry", description: "Shapes, angles, theorems, and spatial reasoning" },
        { id: "math-3", subcategory: "Calculus", description: "Derivatives, integrals, and limits" },
      ]
    },
    {
      name: "Science",
      description: "Natural sciences and scientific method",
      icon: "🔬",
      subtopics: [
        { id: "sci-1", subcategory: "Physics", description: "Motion, energy, forces, and the laws of nature" },
        { id: "sci-2", subcategory: "Chemistry", description: "Matter, reactions, elements, and chemical bonds" },
        { id: "sci-3", subcategory: "Biology", description: "Living organisms, cells, genetics, and evolution" },
      ]
    },
    {
      name: "Languages",
      description: "Communication and linguistic studies",
      icon: "🌍",
      subtopics: [
        { id: "lang-1", subcategory: "English", description: "Grammar, literature, composition, and critical analysis" },
        { id: "lang-2", subcategory: "Spanish", description: "Vocabulary, conversation, and Hispanic culture" },
        { id: "lang-3", subcategory: "French", description: "Pronunciation, grammar, and Francophone culture" },
      ]
    }
  ];

  const handleSubtopicSelect = (subtopicId: string) => {
    setSelectedSubtopic(subtopicId);
    setTimeout(() => setSelectedSubtopic(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Topic Selection
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Choose a subject and subtopic to begin your learning journey
          </p>
        </div>

        {/* Selected Subtopic Alert */}
        {selectedSubtopic && (
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 sm:p-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-medium text-primary">
                Selected: {selectedSubtopic}
              </p>
            </div>
          </div>
        )}

        {/* Independent Dropdowns */}
        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground px-1">
            Independent Selection
          </h2>
          {sampleGroups.map((group) => (
            <TopicDropdown
              key={group.name}
              group={group}
              onSelectSubtopic={handleSubtopicSelect}
            />
          ))}
        </div>

        {/* Accordion Dropdowns */}
        <div className="space-y-3 mt-12">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground px-1">
            Accordion Mode (Single Open)
          </h2>
          {sampleGroups.map((group) => (
            <AccordionTopicDropdown
              key={group.name}
              group={group}
              isOpen={openAccordionId === group.name}
              onToggle={() => setOpenAccordionId(openAccordionId === group.name ? null : group.name)}
              onSelectSubtopic={handleSubtopicSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}