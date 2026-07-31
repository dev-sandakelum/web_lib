"use client"

import { usePathname } from "next/navigation"
import { CalendarDays } from "lucide-react"

const topicByPath: { match: string; exact?: boolean; topic: string }[] = [
  { match: "/", exact: true, topic: "Home" },
  { match: "/notes", topic: "Notes" },
  { match: "/quiz", topic: "Quizzes" },
  { match: "/pdf_links", topic: "PDFs" },
  { match: "/question-gen", topic: "Question Generator" },
  { match: "/apps", topic: "Apps" },
]

function resolveTopic(pathname: string | null) {
  if (!pathname) return "Learning Hub"
  const hit = topicByPath.find((item) =>
    item.exact ? pathname === item.match : pathname === item.match || pathname.startsWith(`${item.match}/`),
  )
  return hit?.topic ?? "Learning Hub"
}

function formatToday() {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date())
}

export default function TopNav() {
  const pathname = usePathname()
  const topic = resolveTopic(pathname)
  const date = formatToday()

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#0d1117]/85 backdrop-blur-md border-b border-[#30363d]">
      <h1 className="text-sm sm:text-base font-semibold text-slate-100 tracking-tight truncate">
        {topic}
      </h1>
      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 shrink-0">
        <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400/80" />
        <time dateTime={new Date().toISOString().slice(0, 10)}>{date}</time>
      </div>
    </header>
  )
}
