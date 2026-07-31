"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Search, ArrowRight, Sparkles, Archive, GraduationCap, Layers } from "lucide-react"
import AppShell from "./AppShell"
import Footer from "./Footer"
import { mainTopics, currentSemester, archivedSemesters, subjectsWithResources } from "../data"

export default function PersonalHero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    const results: any[] = []
    mainTopics.forEach((topic) => {
      if (topic.title.toLowerCase().includes(query)) results.push({ type: "main", data: topic })
      topic.subTopics.forEach((subTopic) => {
        if (subTopic.title.toLowerCase().includes(query) && subTopic.items.length > 0) {
          results.push({ type: "subtopic", data: { ...subTopic, link: `/notes/${subTopic.id}` }, parentTopic: topic })
        }
        subTopic.items.forEach((item) => {
          if (item.title.toLowerCase().includes(query) || item.tags.some((tag) => tag.toLowerCase().includes(query))) {
            results.push({ type: "item", data: item, parentSubTopic: subTopic, parentTopic: topic })
          }
        })
      })
    })
    return results
  }, [searchQuery])

  const handleItemClick = (link?: string) => {
    if (link) router.push(link)
  }

  const openFirstResult = () => {
    const first = searchResults.find((r) => r.data.link)
    if (first) router.push(first.data.link)
  }

  const currentSubjectCount = subjectsWithResources(currentSemester.subjects).length
  const archiveSubjectCount = archivedSemesters.reduce(
    (n, s) => n + subjectsWithResources(s.subjects).length,
    0,
  )

  return (
    <AppShell>
        <div className="flex-1 p-4 sm:p-6 lg:p-10 min-w-0">

          {/* Hero Section */}
          <div className="text-center mb-10 mt-4 sm:mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-5">
              <GraduationCap className="w-4 h-4" />
              <span>{currentSemester.title} has started</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight px-2">
              Fresh start, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">new semester</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4">
              New notes land here as the semester goes. Everything from first year is safely archived.
            </p>

            {/* Glowing Search Bar */}
            <div className="max-w-xl mx-auto relative group z-20 px-2 sm:px-0">
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 ${isSearchFocused ? 'opacity-60' : ''}`} />
              <div className="relative bg-[#161b22] border border-[#30363d] rounded-full flex items-center p-1.5 shadow-2xl">
                <Search className="w-5 h-5 ml-3 sm:ml-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search notes, quizzes, subjects..."
                  value={searchQuery}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && openFirstResult()}
                  className="flex-1 bg-transparent border-none focus:ring-0 outline-none text-slate-200 placeholder:text-slate-500 px-2 sm:px-4 text-sm sm:text-base w-full min-w-0"
                />
              </div>
            </div>
          </div>

          {/* Semester Quick Access */}
          {!searchQuery.trim() && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 max-w-4xl mx-auto">
              {/* Current Semester Card */}
              <div
                onClick={() => router.push("/notes")}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-[#161b22] to-[#101820] rounded-2xl border border-emerald-500/30 p-5 sm:p-6 hover:border-emerald-400/60 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">Current</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{currentSemester.title} Notes</h3>
                  <p className="text-sm text-slate-400 mb-3">
                    {currentSubjectCount > 0
                      ? `${currentSubjectCount} subject${currentSubjectCount > 1 ? "s" : ""} so far`
                      : "Ready and waiting for the first notes"}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
                    Open <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Archive Card */}
              <div
                onClick={() => router.push("/notes#archive")}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-slate-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#161b22] rounded-2xl border border-[#30363d] p-5 sm:p-6 hover:border-slate-500/60 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-500/10 border border-[#30363d] flex items-center justify-center text-slate-400">
                      <Archive className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded-full border border-white/10">Archive</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 mb-1">{archivedSemesters[0]?.title} Archive</h3>
                  <p className="text-sm text-slate-500 mb-3">{archiveSubjectCount} subjects with all your first-year notes and quizzes</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                    Browse <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Knowledge Base */}
          <section className="mb-10 sm:mb-14">
            <div className="text-center mb-5 sm:mb-7 px-1">
              <div className="inline-flex items-center gap-2 text-emerald-400/90 text-xs font-semibold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                Explore
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {searchQuery.trim() ? "Search Results" : "Knowledge Base"}
              </h2>
              {!searchQuery.trim() && (
                <p className="text-sm text-slate-500 mt-1 max-w-lg mx-auto">
                  Jump into notes, quizzes, documents, and tools — everything in one hub.
                </p>
              )}
            </div>

            {searchQuery.trim() ? (
              searchResults.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[#30363d] bg-[#161b22]/50 px-6 py-12 text-center">
                  <p className="text-slate-400 text-sm">No results for &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-slate-600 text-xs mt-1">Try a subject name or note title</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleItemClick(result.data.link)}
                      className="group text-left p-4 rounded-2xl bg-[#161b22] border border-[#30363d] hover:border-emerald-500/40 hover:bg-[#161b22]/80 cursor-pointer transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="font-semibold text-slate-200 truncate group-hover:text-emerald-300 transition-colors">
                            {result.data.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1">
                            {result.type === "main" ? "Collection" : result.type === "subtopic" ? "Subject" : "Resource"}
                            {result.parentSubTopic ? ` · ${result.parentSubTopic.title}` : ""}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                      </div>
                    </button>
                  ))}
                </div>
              )
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {mainTopics.map((topic, index) => {
                  const meta =
                    topic.subTopics.length > 0
                      ? `${topic.subTopics.length} subject${topic.subTopics.length === 1 ? "" : "s"}`
                      : "Open collection"

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleItemClick(topic.link)}
                      className="group relative text-center cursor-pointer"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative h-full overflow-hidden rounded-2xl border border-[#30363d] bg-[#161b22] p-5 sm:p-6 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_40px_-20px_rgba(16,185,129,0.45)] flex flex-col items-center">
                        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${topic.color} opacity-60`} />

                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-white shadow-lg mb-3 group-hover:scale-105 transition-transform duration-300`}>
                          {topic.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/[0.04] border border-white/5 px-2 py-1 rounded-full mb-4">
                          {meta}
                        </span>

                        <h3 className="text-lg font-bold text-slate-100 mb-1.5 group-hover:text-emerald-300 transition-colors">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                          {topic.description}
                        </p>

                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400/90 mt-auto">
                          Open
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </section>

          <Footer />
        </div>
    </AppShell>
  )
}
