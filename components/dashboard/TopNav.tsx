"use client"

import { Bell, Flame, Menu, X, Maximize } from "lucide-react"
import { useState } from "react"
import { notifications } from "../data"

import { useDashboard } from "./DashboardContext"

export default function TopNav() {
  const { 
    isFocusMode, 
    toggleFocusMode, 
    isNotificationPanelOpen, 
    toggleNotificationPanel,
    toggleMobileMenu,
    toggleMobileNotifications
  } = useDashboard()
  
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d] sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
        >
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

        {/* Focus Mode Toggle */}
        <button 
          onClick={toggleFocusMode}
          className={`hidden sm:flex p-2 rounded-full transition-colors ${isFocusMode ? 'text-purple-400 bg-purple-500/10' : 'text-slate-400 hover:text-slate-100 hover:bg-[#1f2937]'}`}
          title={isFocusMode ? "Exit Focus Mode" : "Enter Focus Mode"}
        >
          <Maximize className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => {
              if (window.innerWidth >= 1280) {
                toggleNotificationPanel()
              } else {
                toggleMobileNotifications()
              }
            }}
            className="p-2 rounded-full text-slate-400 hover:text-slate-100 hover:bg-[#1f2937] transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full border-2 border-[#0d1117]" />
          </button>
        </div>

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
