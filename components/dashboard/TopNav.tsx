"use client"

import { Bell, Flame, Menu, X } from "lucide-react"
import { useState } from "react"
import { notifications } from "../data"

interface TopNavProps {
  onNotificationClick?: () => void;
}

export default function TopNav({ onNotificationClick }: TopNavProps) {
  const [showNotifications, setShowNotifications] = useState(false)
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
        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => {
              if (window.innerWidth >= 1280) {
                onNotificationClick?.()
              } else {
                setShowNotifications(!showNotifications)
              }
            }}
            className="p-2 rounded-full text-slate-400 hover:text-slate-100 hover:bg-[#1f2937] transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full border-2 border-[#0d1117]" />
          </button>

          {showNotifications && (
            <>
              <div 
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md xl:hidden"
                onClick={() => setShowNotifications(false)}
              />
              <div className="fixed left-1/2 top-20 -translate-x-1/2 w-[90vw] max-w-sm bg-[#161b22] border border-[#30363d] rounded-xl shadow-xl overflow-hidden z-50 xl:hidden">
                <div className="p-4 border-b border-[#30363d] flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-200">Notifications</h3>
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {notifications.map((notif, idx) => (
                    <div key={idx} className="flex gap-4 p-4 hover:bg-[#1f2937] transition-colors cursor-pointer border-b border-[#30363d] last:border-0">
                      <div className="w-10 h-10 rounded-xl bg-[#0d1117] border border-[#30363d] flex items-center justify-center text-slate-400 shrink-0">
                        {notif.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-300 leading-tight">{notif.title}</p>
                        <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
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
