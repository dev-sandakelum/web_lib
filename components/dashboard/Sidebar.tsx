"use client"

import { BookOpen, FileText, BrainCircuit, LayoutGrid, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Sidebar() {
  const router = useRouter()

  const navItems = [
    { icon: BookOpen, label: "Notes", link: "/notes", active: true },
    { icon: BrainCircuit, label: "Quizzes", link: "/quiz" },
    { icon: FileText, label: "PDFs", link: "/pdfs" },
    { icon: Sparkles, label: "Q-Gen", link: "/q-gen" },
    { icon: LayoutGrid, label: "More", link: "/apps" },
  ]

  return (
    <div className="hidden md:flex flex-col w-20 bg-[#0d1117] border-r border-[#30363d] h-screen fixed left-0 top-0 z-50 items-center py-6">
      {/* Logo / Brand Icon */}
      <div className="mb-8 p-2 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-900/20">
        <Sparkles className="w-6 h-6 text-white" />
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-6 w-full px-2">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => item.link && router.push(item.link)}
            className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-200 group ${
              item.active 
                ? "bg-purple-500/10 text-purple-400" 
                : "text-slate-400 hover:text-slate-100 hover:bg-[#161b22]"
            }`}
          >
            <item.icon className={`w-6 h-6 ${item.active ? "fill-purple-500/20" : ""}`} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
