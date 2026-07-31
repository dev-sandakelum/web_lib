"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import {
  Folder, File, ChevronRight, Home, Search, Sparkles, Archive,
  GraduationCap, ArrowRight, BookOpen,
} from "lucide-react"
import Footer from "@/components/dashboard/Footer"
import { currentSemester, archivedSemesters, mainTopics, subjectsWithResources, type Subject } from "@/components/data"

function SubjectFolderList({
  subjects,
  variant = "archive",
  onSelect,
}: {
  subjects: Subject[]
  variant?: "current" | "archive"
  onSelect: (id: string) => void
}) {
  const iconHover =
    variant === "current"
      ? "group-hover:bg-emerald-500/20 group-hover:text-emerald-300"
      : "group-hover:bg-purple-500/20 group-hover:text-purple-300"
  const textHover = variant === "current" ? "group-hover:text-emerald-300" : "group-hover:text-purple-300"
  const chevronHover = variant === "current" ? "group-hover:text-emerald-400" : "group-hover:text-purple-400"

  return (
    <div className="bg-white/[0.03] backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-white/5 overflow-hidden">
      <div className="divide-y divide-white/5">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => onSelect(subject.id)}
            className="flex items-center px-4 py-3 sm:px-6 sm:py-4 hover:bg-white/5 cursor-pointer transition-all duration-200 group"
          >
            <div className="mr-3 sm:mr-4 flex-shrink-0">
              <div className={`p-1.5 sm:p-2 rounded-lg bg-slate-500/10 text-slate-400 group-hover:scale-110 transition-all duration-300 ${iconHover}`}>
                <Folder className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
            </div>
            <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
              <span className={`text-sm sm:text-base font-semibold text-slate-300 transition-colors truncate ${textHover}`}>
                {subject.title}
              </span>
              <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-500 flex-shrink-0">
                <span>{subject.items.length} resource{subject.items.length !== 1 ? "s" : ""}</span>
                <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 text-slate-600 group-hover:translate-x-1 transition-transform ${chevronHover}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function NotesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Global search across all semesters
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    const results: any[] = []
    mainTopics.forEach((topic) => {
      topic.subTopics.forEach((subTopic) => {
        if (subTopic.title.toLowerCase().includes(query) && subTopic.items.length > 0) {
          results.push({ type: "subject", title: subTopic.title, link: `/notes/${subTopic.id}` })
        }
        subTopic.items.forEach((item) => {
          if (item.title.toLowerCase().includes(query) || item.tags.some((tag) => tag.toLowerCase().includes(query))) {
            results.push({ type: "note", title: item.title, link: item.link, parent: subTopic.title })
          }
        })
      })
    })
    return results
  }, [searchQuery])

  return (
    <div className="min-h-screen font-sans text-slate-100 flex flex-col">
      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-16 flex-grow w-full">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-4 sm:mb-8">
          <button onClick={() => router.push("/")} className="hover:text-purple-400 transition-colors flex items-center gap-1 p-1">
            <Home className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Home</span>
          </button>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
          <span className="font-semibold text-slate-200 p-1">Notes</span>
        </nav>

        {/* Header */}
        <div className="mb-6 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] sm:text-sm font-medium text-emerald-300 mb-2 sm:mb-4">
                <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{currentSemester.title}</span>
              </div>
              <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 sm:mb-4">
                Study Notes
              </h1>
              <p className="text-xs sm:text-lg text-slate-400 max-w-2xl">
                New semester materials up top, first-year notes safely archived below.
              </p>
            </div>

            {/* Search */}
            <div className="w-full md:w-80 relative z-20">
              <div className={`relative group transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 transition-opacity duration-300 ${isSearchFocused ? 'opacity-40' : ''}`} />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-sm border border-white/10 overflow-hidden flex items-center p-1">
                  <Search className={`w-4 h-4 sm:w-5 sm:h-5 ml-3 transition-colors duration-300 ${isSearchFocused ? 'text-purple-400' : 'text-slate-500'}`} />
                  <input
                    type="text"
                    placeholder="Search all notes..."
                    value={searchQuery}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 outline-none text-xs sm:text-sm px-3 py-2 placeholder:text-slate-500 text-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {searchQuery.trim() ? (
          /* Search Results */
          <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-white/5 p-4 sm:p-6">
            <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Search Results</h3>
            {searchResults.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              <div className="space-y-2">
                {searchResults.map((result, idx) => (
                  <div
                    key={idx}
                    onClick={() => result.link && router.push(result.link)}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${result.type === "subject" ? "bg-purple-500/20 text-purple-300" : "bg-emerald-500/20 text-emerald-300"}`}>
                        {result.type === "subject" ? <Folder className="w-4 h-4" /> : <File className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-200 group-hover:text-white">{result.title}</h4>
                        {result.parent && <p className="text-xs text-slate-500">{result.parent}</p>}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Current Semester */}
            <section className="mb-10 sm:mb-14">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                <h2 className="text-lg sm:text-2xl font-bold text-white">{currentSemester.title}</h2>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 ml-1">Current</span>
              </div>

              {subjectsWithResources(currentSemester.subjects).length === 0 ? (
                <div className="rounded-2xl sm:rounded-3xl border-2 border-dashed border-emerald-500/25 bg-emerald-500/[0.03] p-8 sm:p-12 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-200 mb-2">Ready for the new semester</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Subjects and notes for {currentSemester.title} will appear here as they are added.
                    Until then, everything from first year is in the archive below.
                  </p>
                </div>
              ) : (
                <SubjectFolderList
                  subjects={subjectsWithResources(currentSemester.subjects)}
                  variant="current"
                  onSelect={(id) => router.push(`/notes/${id}`)}
                />
              )}
            </section>

            {/* Archive */}
            {archivedSemesters.map((semester) => {
              const visibleSubjects = subjectsWithResources(semester.subjects)
              if (visibleSubjects.length === 0) return null

              return (
              <section key={semester.id} id="archive" className="mb-8">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Archive className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-300">{semester.title}</h2>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded-full border border-white/10 ml-1">Archive</span>
                </div>

                <SubjectFolderList
                  subjects={visibleSubjects}
                  variant="archive"
                  onSelect={(id) => router.push(`/notes/${id}`)}
                />
              </section>
              )
            })}
          </>
        )}

        <Footer />
      </div>
    </div>
  )
}
