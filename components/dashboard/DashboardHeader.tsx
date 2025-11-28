"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { useDashboard } from "./DashboardContext"

export default function DashboardHeader() {
  const { searchQuery, setSearchQuery } = useDashboard()
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <div className="text-center mb-12 mt-4 sm:mt-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight px-2">
        Level up your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">skills</span>
      </h1>
      <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4">Explore top courses and manage your personal knowledge base.</p>
      
      {/* Glowing Search Bar */}
      <div className="max-w-xl mx-auto relative group z-20 px-2 sm:px-0">
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 ${isSearchFocused ? 'opacity-60' : ''}`} />
        <div className="relative bg-[#161b22] border border-[#30363d] rounded-full flex items-center p-1.5 shadow-2xl">
          <Search className="w-5 h-5 ml-3 sm:ml-4 text-slate-400 shrink-0" />
          <input 
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none focus:ring-0 outline-none text-slate-200 placeholder:text-slate-500 px-2 sm:px-4 text-sm sm:text-base w-full min-w-0"
          />
          <button className="bg-white text-slate-900 px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors shrink-0">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
