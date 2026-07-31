"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, FileText, BrainCircuit, LayoutGrid, Home } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", href: "/", match: ["/"], exact: true },
  { icon: BookOpen, label: "Notes", href: "/notes", match: ["/notes"] },
  { icon: BrainCircuit, label: "Quizzes", href: "/quiz", match: ["/quiz"] },
  { icon: FileText, label: "PDFs", href: "/pdf_links", match: ["/pdf_links"] },
  { icon: LayoutGrid, label: "Apps", href: "/apps", match: ["/apps", "/question-gen"] },
]

function isActivePath(pathname: string | null, match: string[], exact?: boolean) {
  if (!pathname) return false
  if (exact) return match.some((m) => pathname === m)
  return match.some((m) => pathname === m || pathname.startsWith(`${m}/`))
}

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop side rail */}
      <aside className="hidden md:flex flex-col w-20 bg-[#0d1117] border-r border-[#30363d] h-screen fixed left-0 top-0 z-50 items-center py-6">
        <Link
          href="/"
          title="Home"
          aria-label="Go home"
          className="mb-8 p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-lg shadow-emerald-900/25 hover:scale-105 active:scale-95 transition-transform"
        >
          <Home className="w-5 h-5 text-white" />
        </Link>

        <nav className="flex flex-col gap-2 w-full px-2 flex-1" aria-label="Main">
          {navItems
            .filter((item) => item.href !== "/")
            .map((item) => {
              const active = isActivePath(pathname, item.match, item.exact)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  title={item.label}
                  className={`flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl transition-all duration-200 ${
                    active
                      ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30"
                      : "text-slate-400 hover:text-slate-100 hover:bg-[#161b22]"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium leading-none">{item.label}</span>
                </Link>
              )
            })}
        </nav>
      </aside>

      {/* Mobile bottom nav */}
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-[#30363d] bg-[#0d1117]/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
        aria-label="Main"
      >
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.match, item.exact)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
                  active ? "text-emerald-300" : "text-slate-400"
                }`}
              >
                <item.icon className={`w-5 h-5 ${active ? "stroke-[2.25]" : ""}`} />
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
