"use client"

import Sidebar from "./Sidebar"
import TopNav from "./TopNav"

export default function AppShell({
  children,
  className = "bg-[#0d1117] text-slate-100",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`min-h-screen font-sans flex overflow-x-hidden ${className}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col pb-16 md:pb-0 md:pl-20 w-full max-w-[100vw] min-w-0">
        <TopNav />
        {children}
      </div>
    </div>
  )
}
