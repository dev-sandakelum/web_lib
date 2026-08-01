"use client"

import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"

/** True when viewing note content (e.g. /notes/networking/full), not /notes or /notes/[subject]. */
function isOpenNote(pathname: string | null) {
  if (!pathname?.startsWith("/notes/")) return false
  const parts = pathname.split("/").filter(Boolean)
  return parts.length >= 3
}

export default function AppShell({
  children,
  className = "bg-[#0d1117] text-slate-100",
}: {
  children: React.ReactNode
  className?: string
}) {
  const pathname = usePathname()
  const hideNav = isOpenNote(pathname)

  return (
    <div className={`min-h-screen font-sans flex overflow-x-hidden ${className}`}>
      {!hideNav && <Sidebar />}
      <div
        className={`flex-1 flex flex-col w-full max-w-[100vw] min-w-0 ${
          hideNav ? "" : "pb-16 md:pb-0 md:pl-20"
        }`}
      >
        {!hideNav && <TopNav />}
        {children}
      </div>
    </div>
  )
}
