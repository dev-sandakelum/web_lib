"use client"

import Link from "next/link"
import { Github, Linkedin, Heart, ArrowUpRight } from "lucide-react"
import { currentSemester } from "../data"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Notes", href: "/notes" },
  { label: "Quizzes", href: "/quiz" },
  { label: "PDFs", href: "/pdf_links" },
  { label: "Apps", href: "/apps" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto pt-10 sm:pt-14">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#30363d] bg-gradient-to-br from-[#161b22] via-[#101820] to-[#0d1117]">
        <div className="pointer-events-none absolute -top-24 -right-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative px-5 sm:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-3">
                Learning Hub
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Study smarter this semester
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Notes, quizzes, PDFs, and apps in one place — built for{" "}
                <span className="text-emerald-300/90">{currentSemester.title}</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Navigate
                </p>
                <nav className="flex flex-wrap gap-x-4 gap-y-2">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-emerald-300 transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Connect
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/dev-sandakelum"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 rounded-xl border border-[#30363d] bg-white/[0.03] text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hasitha-sandakelum"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-xl border border-[#30363d] bg-white/[0.03] text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5 text-xs text-slate-500">
            <p>&copy; {year} Hasitha Sandakelum</p>
            <p className="inline-flex items-center gap-1.5">
              Built with <Heart className="w-3 h-3 text-rose-500 fill-current" /> Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
