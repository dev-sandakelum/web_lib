"use client";
import React from "react";
import { Network, File, DonutIcon } from "lucide-react";

export default function PersonalHero() {
  const subjects = [
    {
      title: "Cisco Packet Tracer",
      icon: <Network className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-500 to-blue-600",
      description: "Complete Command Reference Guide",
      content:
        "Enters privileged EXEC mode from user EXEC mode. This mode provides access to all router commands and is password-protected.",
    },
    {
      title: "PDF links",
      icon: <File className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-500 to-red-600",
      description: "Question Papers and Notes",
      content: "Papers and Notes for various subjects.",
    },
    {
      title: "Quiz",
      icon: <DonutIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-500 to-green-600",
      description: "",
      content: "",
    },{
      title: "Multimedia 1-2",
      icon: <Network className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-500 to-blue-600",
      description: "Complete Guide",
      content:
        "Integration of text, sound, graphics, animation and video into a single unit. Multi means 'many/multiple' and medium refers to an interleaving substance through which something is transmitted.",
    },{
      title: "Computer Architecture",
      icon: <Network className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-500 to-purple-600",
      description: "Lessons 1 - 4",
      content:
          "Computer architecture is a set of rules and methods that describe the functionality, organization, and implementation of computer systems. It encompasses everything from the design of individual components to the overall system architecture.",
    },
  ];

  const handleCardClick = (index: number) => {
    if (index === 0) {
      window.location.href = "/networking"; // Redirect to /networking page
    } else if (index === 1) {
      window.location.href = "/pdf_links"; // Redirect to /pdf_links page
    }else if (index === 2) {
      window.location.href = "/quiz"; // Redirect to /quiz page
    }else if (index === 3) {
      window.location.href = "/multimedia"; }// Redirect to /multimedia page
    else if (index === 4) {
      window.location.href = "/architecture"; // Redirect to /c page
    }
  };

  // Remove the extra closing brace above to keep the function body open

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 sm:p-8 lg:p-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Welcome
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200">
              My Learning Journey
            </p>
          </div>

          <div className="p-4 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
              Available Subjects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {subjects.map((subject, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCardClick(idx)}
                  className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer overflow-hidden active:scale-95"
                >
                  <div
                    className={`bg-gradient-to-r ${subject.color} p-5 sm:p-6 text-white flex items-center justify-center`}
                  >
                    {subject.icon}
                  </div>

                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center break-words">
                      {subject.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 leading-relaxed">
                      {subject.description}
                    </p>

                    <div className="text-center">
                      <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors">
                        Click to view details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-4 sm:p-6 text-center">
            <p className="text-base sm:text-lg font-semibold">
              Keep Learning, Keep Growing
            </p>
            <p className="text-xs sm:text-sm font-medium mt-2 text-white opacity-80">
              Created by Hasitha Sandakelum
            </p>

            <p className="text-slate-300 text-xs sm:text-sm mt-1 sm:mt-2">
              Your educational journey starts here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
