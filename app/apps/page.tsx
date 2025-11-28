"use client"

import { Calculator, ArrowLeft, Construction } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AppsPage() {
  const router = useRouter()

  const apps = [
    {
      id: "calculator",
      title: "Calculator",
      icon: Calculator,
      description: "Standard & Scientific",
      status: "Available",
      link: "/apps/calculator"
    },
    {
      id: "pomodoro",
      title: "Focus Timer",
      icon: Construction,
      description: "Productivity Tool",
      status: "Coming Soon",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0d1117] font-sans text-slate-100 p-6 lg:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={() => router.push("/")}
            className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] text-slate-400 hover:text-white hover:border-slate-500 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Applications</h1>
            <p className="text-slate-500">Tools to enhance your workflow.</p>
          </div>
        </div>

        {/* Apps Grid - Machine UI Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              onClick={() => app.link !== "#" && router.push(app.link)}
              className={`group relative aspect-square ${app.link !== "#" ? "cursor-pointer" : "cursor-not-allowed opacity-60"}`}
            >
              {/* Calm Glow Effect */}
              <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Body */}
              <div className="relative h-full bg-[#161b22] border border-[#30363d] rounded-[22px] p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] transition-all duration-300">
                
                {/* Metallic Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-300 mb-6 shadow-inner border border-white/5 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500">
                  <app.icon className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-slate-200 mb-2 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                  {app.title}
                </h3>
                
                <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">
                  {app.description}
                </p>

                {/* Status Indicator */}
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                  app.status === "Available" 
                    ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                    : "bg-slate-800 text-slate-500 border-slate-700"
                }`}>
                  {app.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
