"use client"
import React from 'react';
import { Code, Database, Globe, Briefcase, Award, Network } from 'lucide-react';

export default function PersonalHero() {

  const subjects = [
    {
      title: "Cisco Packet Tracer",
      icon: <Network className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      description: "Complete Command Reference Guide",
      content: "Enters privileged EXEC mode from user EXEC mode. This mode provides access to all router commands and is password-protected."
    },
    {
      title: "Subject 2",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      description: "Add your subject description here",
      content: "This is where you can add detailed information about Subject 2. You can include notes, resources, assignments, and anything else related to this subject."
    },
    {
      title: "Subject 3",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      description: "Add your subject description here",
      content: "This is where you can add detailed information about Subject 3. You can include notes, resources, assignments, and anything else related to this subject."
    },
    {
      title: "Subject 4",
      icon: <Globe className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      description: "Add your subject description here",
      content: "This is where you can add detailed information about Subject 4. You can include notes, resources, assignments, and anything else related to this subject."
    },
    {
      title: "Subject 5",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
      description: "Add your subject description here",
      content: "This is where you can add detailed information about Subject 5. You can include notes, resources, assignments, and anything else related to this subject."
    },
    {
      title: "Subject 6",
      icon: <Award className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
      description: "Add your subject description here",
      content: "This is where you can add detailed information about Subject 6. You can include notes, resources, assignments, and anything else related to this subject."
    }
  ];

  const handleCardClick = (index: number) => {
    
    if (index === 0) {
      window.location.href = '/networking'; // Redirect to /networking page
    }
      
  };

  

  
    
  // Remove the extra closing brace above to keep the function body open

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-12 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome</h1>
            <p className="text-xl text-slate-200">My Learning Journey</p>
          </div>

          <div className="p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              My Subjects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCardClick(idx)}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${subject.color} p-6 text-white flex items-center justify-center`}>
                    {subject.icon}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                      {subject.title}
                    </h3>

                    <p className="text-gray-600 text-center mb-4">
                      {subject.description}
                    </p>

                    <div className="text-center">
                      <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                        Click to view details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 text-center">
            <p className="text-lg font-semibold">Keep Learning, Keep Growing</p>
            <p className="text-slate-300 text-sm mt-2">Your educational journey starts here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
