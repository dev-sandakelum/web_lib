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

export function TopicDropdown({ group, onSelectSubtopic }: TopicDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Main Topic Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-out active:scale-[0.99]"
      >
        <div className="flex items-center gap-3 flex-1 text-left">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center transition-all duration-300">
            <span className="text-xl">{group.icon || "📚"}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
              {group.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
              {group.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {group.subtopics.length}
          </span>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300" />
          )}
        </div>
      </button>

      {/* Subtopics List */}
      {isOpen && (
        <div className="border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="p-2 space-y-1">
            {group.subtopics.map((subtopic) => (
              <button
                key={subtopic.id}
                onClick={() => onSelectSubtopic(subtopic.id)}
                className="w-full text-left p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all duration-300 ease-out active:scale-95 group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 flex items-center justify-center transition-all duration-300">
                    <span className="text-sm">📖</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {subtopic.subcategory}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mt-0.5">
                      {subtopic.description}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1" />
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

export function AccordionTopicDropdown({ 
  group, 
  isOpen, 
  onToggle, 
  onSelectSubtopic 
}: AccordionTopicDropdownProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Main Topic Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-out active:scale-[0.99]"
      >
        <div className="flex items-center gap-3 flex-1 text-left">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center transition-all duration-300">
            <span className="text-xl">{group.icon || "📚"}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
              {group.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
              {group.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {group.subtopics.length}
          </span>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300" />
          )}
        </div>
      </button>

      {/* Subtopics List */}
      {isOpen && (
        <div className="border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-fade-in">
          <div className="p-2 space-y-1">
            {group.subtopics.map((subtopic) => (
              <button
                key={subtopic.id}
                onClick={() => onSelectSubtopic(subtopic.id)}
                className="w-full text-left p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all duration-300 ease-out active:scale-95 group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 flex items-center justify-center transition-all duration-300">
                    <span className="text-sm">📖</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {subtopic.subcategory}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mt-0.5">
                      {subtopic.description}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}