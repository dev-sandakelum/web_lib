"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"
import Footer from "./Footer"
import { notifications } from "../data"
import { X } from "lucide-react"
import { DashboardProvider, useDashboard } from "./DashboardContext"

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { 
    isFocusMode, 
    isNotificationPanelOpen, 
    setNotificationPanelOpen,
    isMobileMenuOpen,
    isMobileNotificationsOpen,
    setMobileNotificationsOpen
  } = useDashboard()

  const shouldBlur = isMobileMenuOpen || isMobileNotificationsOpen

  return (
    <div className="min-h-screen bg-[#0d1117] font-sans text-slate-100 flex relative">
      {/* Sidebar - Hidden in Focus Mode */}
      {!isFocusMode && <Sidebar />}

      {/* Mobile Notification Panel */}
      {isMobileNotificationsOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
            onClick={() => setMobileNotificationsOpen(false)}
          />
          <div className="fixed left-1/2 top-20 -translate-x-1/2 w-[90vw] max-w-sm bg-[#161b22] border border-[#30363d] rounded-xl shadow-xl overflow-hidden z-50 xl:hidden">
            <div className="p-4 border-b border-[#30363d] flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200">Notifications</h3>
              <button 
                onClick={() => setMobileNotificationsOpen(false)}
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

      {/* Main Content Wrapper */}
      <div className={`flex-1 flex flex-col transition-all duration-300 w-full max-w-[100vw] ${!isFocusMode ? 'md:pl-20' : ''} ${shouldBlur ? 'blur-sm brightness-50 pointer-events-none' : ''}`}>
        <TopNav />

        <div className="flex-1 flex flex-col xl:flex-row">
          {/* Main Dashboard Area */}
          <div className="flex-1 p-1 sm:p-2 lg:p-10 min-w-0 flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>

          {/* Right Panel - Notifications (Desktop Only) - Hidden in Focus Mode */}
          {!isFocusMode && (
            <div 
              id="notifications-panel" 
              className={`hidden xl:block bg-[#0d1117] border-l border-[#30363d] shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
                isNotificationPanelOpen ? 'w-80 p-6 opacity-100' : 'w-0 p-0 opacity-0 border-l-0'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Notifications</h3>
                 <button 
                    onClick={() => setNotificationPanelOpen(false)}
                    className="text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                 </button>
              </div>
              <div className="space-y-6">
                {notifications.map((notif, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-colors shrink-0">
                      {notif.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300 leading-tight group-hover:text-purple-300 transition-colors">{notif.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <DashboardContent>{children}</DashboardContent>
    </DashboardProvider>
  )
}
