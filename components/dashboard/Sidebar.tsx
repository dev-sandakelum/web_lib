"use client"

import { BookOpen, FileText, BrainCircuit, LayoutGrid, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

import { useDashboard } from "./DashboardContext"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar() {
  const router = useRouter()
  const { isMobileMenuOpen, setMobileMenuOpen } = useDashboard()

  const navItems = [
    { icon: BookOpen, label: "Notes", link: "/notes", active: true },
    { icon: BrainCircuit, label: "Quizzes", link: "/quiz" },
    { icon: FileText, label: "PDFs", link: "/pdfs" },
    { icon: Sparkles, label: "Q-Gen", link: "/q-gen" },
    { icon: LayoutGrid, label: "More", link: "/apps" },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 z-50 h-screen w-20 bg-[#0d1117] border-r border-[#30363d] flex flex-col items-center py-6 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Logo / Brand Icon */}
          
        <Link href="/" className="mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-900/20 border-2 border-purple-400">
          <Image 
            src="/Picturee1.png"
            className="cover overflow-hidden border-rounded scale-110 "
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        
        {/* Nav Items */}
        <div className="flex flex-col gap-6 w-full px-2">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (item.link) router.push(item.link)
                setMobileMenuOpen(false)
              }}
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
    </>
  )
}
