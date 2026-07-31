"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  Home,
  ArrowLeft,
  Calculator,
  StickyNote,
  Wrench,
  LayoutGrid,
  LucideFileQuestion,
  X,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const HIDDEN_ON = ["/apps/bd3"]

const tools = [
  { label: "Home", href: "/", icon: Home, color: "bg-blue-600 hover:bg-blue-700" },
  { label: "Notes", href: "/notes", icon: StickyNote, color: "bg-green-600 hover:bg-green-700" },
  { label: "Apps", href: "/apps", icon: LayoutGrid, color: "bg-cyan-600 hover:bg-cyan-700" },
  { label: "Q-Gen", href: "/question-gen", icon: LucideFileQuestion, color: "bg-purple-600 hover:bg-purple-700" },
  { label: "Calculator", href: "/notes/maths/solver", icon: Calculator, color: "bg-orange-600 hover:bg-orange-700" },
] as const

export default function FloatingToolButtons() {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [menuOpen])

  if (HIDDEN_ON.some((p) => pathname?.startsWith(p))) return null

  const goBack = () => {
    setMenuOpen(false)
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
    }
  }

  const goTo = (href: string) => {
    setMenuOpen(false)
    if (pathname === href) return
    router.push(href)
  }

  return (
    <div ref={rootRef} className="fixed bottom-20 md:bottom-6 right-4 flex flex-col items-end gap-3 z-[150]">
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col items-stretch gap-2 p-2.5 rounded-2xl bg-[#161b22]/95 backdrop-blur-md shadow-2xl border border-[#30363d]"
            role="menu"
            aria-label="Quick tools"
          >
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-700/80 text-white hover:bg-slate-600 transition duration-200 text-sm font-medium"
              title="Go Back"
              role="menuitem"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              Back
            </button>

            {tools.map((tool) => {
              const active =
                tool.href === "/"
                  ? pathname === "/"
                  : pathname === tool.href || pathname?.startsWith(`${tool.href}/`)
              return (
                <button
                  key={tool.href}
                  type="button"
                  onClick={() => goTo(tool.href)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-white transition duration-200 text-sm font-medium ${tool.color} ${
                    active ? "ring-2 ring-white/40" : ""
                  }`}
                  title={tool.label}
                  role="menuitem"
                  aria-current={active ? "page" : undefined}
                >
                  <tool.icon className="w-4 h-4 shrink-0" />
                  {tool.label}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white transition duration-200 ${
          menuOpen ? "bg-slate-600 hover:bg-slate-500" : "bg-yellow-500 hover:bg-yellow-600"
        }`}
        title={menuOpen ? "Close tools" : "Tools"}
        aria-expanded={menuOpen}
        aria-haspopup="menu"
      >
        <motion.div
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Wrench className="w-6 h-6" />}
        </motion.div>
      </button>
    </div>
  )
}
