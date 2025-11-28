"use client"

import { Bell, Flame, Menu } from "lucide-react"

export default function TopNav() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d] sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-slate-400">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-100">Courses</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Streak Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f2937] border border-[#30363d] text-sm font-medium text-slate-200">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          <span>3 days</span>
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-full text-slate-400 hover:text-slate-100 hover:bg-[#1f2937] transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full border-2 border-[#0d1117]" />
        </button>

        {/* Profile */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] cursor-pointer">
          <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center overflow-hidden">
             <span className="font-bold text-xs text-white">HS</span>
          </div>
        </div>
      </div>
    </div>
  )
}
