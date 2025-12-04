
"use client";
import React, { useState, useEffect } from "react";
import { ContentItem, notesData, Section } from "./ca-data";

// --- Components ---

const SidebarItem = ({
  section,
  isActive,
  onClick,
}: {
  section: Section;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 group ${
      isActive
        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
        : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
    }`}
  >
    <div
      className={`w-1.5 h-1.5 rounded-full transition-all ${
        isActive ? "bg-white scale-125" : "bg-gray-300 group-hover:bg-indigo-400"
      }`}
    />
    <span className="font-medium text-sm sm:text-base">{section.title}</span>
  </button>
);

const MobileNavItem = ({
  section,
  isActive,
  onClick,
}: {
  section: Section;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "bg-white text-gray-600 border border-gray-100 shadow-sm"
    }`}
  >
    {section.title}
  </button>
);

const RenderContentItem = ({ item }: { item: ContentItem }) => {
  const cardStyle = "bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 mb-4";
  
  const colorMap = {
    blue: "bg-blue-50/50 border-blue-100",
    green: "bg-green-50/50 border-green-100",
    yellow: "bg-yellow-50/50 border-yellow-100",
    purple: "bg-purple-50/50 border-purple-100",
    red: "bg-red-50/50 border-red-100"
  };
  
  const barColorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    red: "bg-red-500"
  };
  
  switch (item.type) {
    case "qa":
      return (
        <div className={cardStyle}>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg">
              Q
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg leading-snug pt-1 mb-2">
                {item.question}
              </h3>
              <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      );
    case "text":
      return (
        <div className="mb-4 px-2">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {Array.isArray(item.content)
              ? item.content.map((line, i) => (
                  <span key={i} className="block mb-2">
                    {line}
                  </span>
                ))
              : item.content}
          </p>
        </div>
      );
    case "list":
      return (
        <div className="mb-4 px-2">
          <ul className="space-y-3">
            {Array.isArray(item.content) &&
              item.content.map((li, idx) => (
                <li key={idx} className="flex gap-3 text-gray-600 text-sm sm:text-base group">
                  <span className="w-2 h-2 rounded-full bg-indigo-200 mt-2 flex-shrink-0 group-hover:bg-indigo-500 transition-colors" />
                  <span className="leading-relaxed">{li}</span>
                </li>
              ))}
          </ul>
        </div>
      );
    case "highlight":
      const bgColor = item.color ? colorMap[item.color] : colorMap.blue;
      const barColor = item.color ? barColorMap[item.color] : barColorMap.blue;
      
      return (
        <div className={`${cardStyle} ${bgColor}`}>
          <div className="flex gap-3 mb-2">
             <div className={`w-1 h-6 ${barColor} rounded-full`}/>
             {item.title && (
              <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                {item.title}
              </h4>
            )}
          </div>
          
          <div className="text-sm sm:text-base text-gray-700 leading-relaxed pl-4">
            {Array.isArray(item.content) ? (
              <ul className="space-y-2">
                {item.content.map((li, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className={item.color === 'blue' ? 'text-blue-400' : item.color === 'green' ? 'text-green-400' : item.color === 'yellow' ? 'text-yellow-400' : item.color === 'purple' ? 'text-purple-400' : 'text-red-400'}>•</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            ) : (
              item.content
            )}
          </div>
        </div>
      );
    case "subsection":
      return (
        <div className="mb-8 mt-8 first:mt-0 pt-4 border-t border-gray-100 first:border-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-1.5 bg-indigo-600 rounded-r-full" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
              {item.title}
            </h3>
          </div>
          
          <div className="pl-0 sm:pl-4">
            {item.question && ( 
               <div className={cardStyle}>
                 <p className="font-bold text-gray-900 mb-2 text-lg">{item.question}</p>
                 <p className="text-gray-600 leading-relaxed">{item.content}</p>
               </div>
            )}
            
            {!item.question && item.content && (
               <div className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 px-2">
                  {item.content}
               </div>
            )}
            
            {item.items && (
              <div className="mt-4 space-y-4">
                {item.items.map((subItem, idx) => (
                  <RenderContentItem key={idx} item={subItem} />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function ComputerArchitectureNotes() {
  const [activeSectionId, setActiveSectionId] = useState("intro");
  const activeSection = notesData.find((s) => s.id === activeSectionId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSectionId]);

  return (
    <div className="min-h-screen bg-blue-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex overflow-x-auto gap-2 p-3 no-scrollbar">
          {notesData.map((section) => (
            <MobileNavItem
              key={section.id}
              section={section}
              isActive={activeSectionId === section.id}
              onClick={() => setActiveSectionId(section.id)}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-1">
              <div className="px-4 mb-6">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Contents
                </h2>
              </div>
              {notesData.map((section) => (
                <SidebarItem
                  key={section.id}
                  section={section}
                  isActive={activeSectionId === section.id}
                  onClick={() => setActiveSectionId(section.id)}
                />
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-3">
                04.12.2025
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                {activeSection?.title}
              </h1>
              <p className="text-lg text-gray-500">
                Computer Architecture Notes
              </p>
            </div>

            {/* Content Render */}
            <div className="space-y-10">
              {activeSection?.content.map((block, idx) => (
                <section key={idx} className="scroll-mt-24">
                  {block.title && (
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                        {block.title}
                      </h2>
                      <div className="h-px bg-gray-200 flex-1" />
                    </div>
                  )}
                  <div className="space-y-4">
                    {block.items.map((item, itemIdx) => (
                      <RenderContentItem key={itemIdx} item={item} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between text-sm text-gray-500">
               <span></span>
               <span>Computer Architecture Study Notes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}