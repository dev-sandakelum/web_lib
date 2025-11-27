"use client"

import { useRouter } from "next/navigation"
import { File, Folder, ChevronRight, ArrowLeft, Search, Clock, Home, Sparkles, BookOpen, ArrowRight as ArrowRightIcon } from "lucide-react"
import { useState, useMemo } from "react"
import Footer from "./Footer"
import { mainTopics } from "../data"

interface TopicItem {
  id: string
  title: string
  description?: string
  readTime?: string;
  link?: string;
  type: "folder" | "file";
  tags?: string[];
}

interface TopicViewProps {
  title: string;
  description?: string;
  items: TopicItem[];
  parentLink?: string;
  breadcrumbs?: { title: string; link: string }[];
}

interface SearchResult {
  type: "main" | "subtopic" | "item";
  data: {
    id?: string;
    title: string;
    link?: string;
    cardColor?: string;
    readTime?: string;
  };
  level: number;
  parentTopic?: {
    title: string;
  };
  parentSubTopic?: {
    title: string;
  };
}

export default function TopicView({ title, description, items, parentLink = "/", breadcrumbs = [] }: TopicViewProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Global Search Logic
  const globalSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    const results: SearchResult[] = []

    mainTopics.forEach((topic) => {
      if (topic.title.toLowerCase().includes(query)) {
        results.push({ type: "main", data: topic, level: 1 })
      }
      topic.subTopics.forEach((subTopic) => {
        if (subTopic.title.toLowerCase().includes(query)) {
          results.push({ type: "subtopic", data: subTopic, parentTopic: topic, level: 2 })
        }
        subTopic.items.forEach((item) => {
          if (item.title.toLowerCase().includes(query) || item.tags.some((tag) => tag.toLowerCase().includes(query))) {
            results.push({ type: "item", data: item, parentSubTopic: subTopic, parentTopic: topic, level: 3 })
          }
        })
      })
    })
    return results
  }, [searchQuery])

  // Local Filter (only used if we want to filter current view, but Global Search takes precedence)
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleSearchClick = (link?: string) => {
    if (link) router.push(link)
  }

  return (
    <div className="min-h-screen font-sans text-slate-100 flex flex-col">
      
      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-16 flex-grow w-full">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-8">
          <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-slate-400 overflow-x-auto whitespace-nowrap pb-1 sm:pb-0 scrollbar-hide">
             <button 
              onClick={() => router.push("/")}
              className="hover:text-purple-400 transition-colors flex items-center gap-1 p-1"
            >
              <Home className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => router.push(crumb.link)}
                  className={`transition-colors p-1 ${idx === breadcrumbs.length - 1 ? "text-slate-200 font-semibold" : "hover:text-purple-400"}`}
                >
                  {crumb.title}
                </button>
                {(idx < breadcrumbs.length - 1 || title) && (
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                )}
              </div>
            ))}
            {title && <span className="font-semibold text-slate-200 p-1">{title}</span>}
          </nav>
        </div>

        {/* Header Section */}
        <div className="mb-4 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 shadow-sm text-[10px] sm:text-sm font-medium text-purple-300 mb-2 sm:mb-4">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                <span>Collection</span>
              </div>
              <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 sm:mb-4">
                {title}
              </h1>
              {description && <p className="text-xs sm:text-lg text-slate-400 max-w-2xl line-clamp-2 sm:line-clamp-none">{description}</p>}
            </div>

            {/* Global Search Input */}
            <div className="w-full md:w-80 relative z-20">
               <div className={`relative group transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 transition-opacity duration-300 ${isSearchFocused ? 'opacity-40' : ''}`} />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-sm border border-white/10 overflow-hidden flex items-center p-1">
                  <Search className={`w-4 h-4 sm:w-5 sm:h-5 ml-3 transition-colors duration-300 ${isSearchFocused ? 'text-purple-400' : 'text-slate-500'}`} />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    value={searchQuery}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 text-xs sm:text-sm px-3 py-2 placeholder:text-slate-500 text-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-white/5 overflow-hidden min-h-[300px]">
          
          {/* Global Search Results Overlay */}
          {searchQuery.trim() ? (
            <div className="p-4 sm:p-6">
              <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Global Search Results</h3>
              {globalSearchResults.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-500">No results found for "{searchQuery}"</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {globalSearchResults.map((result, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSearchClick(result.data.link)}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          result.type === "main" ? "bg-blue-500/20 text-blue-300" :
                          result.type === "subtopic" ? "bg-purple-500/20 text-purple-300" :
                          "bg-emerald-500/20 text-emerald-300"
                        }`}>
                          {result.type === "main" ? <Folder className="w-4 h-4" /> : 
                           result.type === "subtopic" ? <Folder className="w-4 h-4" /> : 
                           <File className="w-4 h-4" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-slate-200 group-hover:text-white">{result.data.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            {result.parentTopic && <span>{result.parentTopic.title}</span>}
                            {result.parentSubTopic && (
                              <>
                                <ArrowRightIcon className="w-3 h-3" />
                                <span>{result.parentSubTopic.title}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <ArrowRightIcon className="w-4 h-4 text-slate-600 group-hover:text-purple-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Normal File List View (GitHub x Moodle Hybrid)
            <>
              {/* Header - "Moodle" Course Style */}
              <div className="hidden sm:flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-slate-300">Course Content</span>
                </div>
                <span className="text-xs text-slate-500">Last updated recently</span>
              </div>

              <div className="divide-y divide-white/5">
                {parentLink && parentLink !== "/" && (
                  <div 
                    onClick={() => router.push(parentLink)}
                    className="flex items-center px-4 py-3 sm:px-6 sm:py-4 hover:bg-white/5 cursor-pointer transition-colors group"
                  >
                    <div className="mr-3 sm:mr-4 text-purple-400">
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="text-purple-400 font-medium text-xs sm:text-sm">Back to parent</span>
                  </div>
                )}

                {items.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <p className="text-slate-500 font-medium text-sm">This folder is empty.</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => item.link && router.push(item.link)}
                      className="flex items-center px-4 py-3 sm:px-6 sm:py-4 hover:bg-white/5 cursor-pointer transition-all duration-200 group"
                    >
                      {/* Icon Column */}
                      <div className="mr-3 sm:mr-4 flex-shrink-0">
                        <div className={`p-1.5 sm:p-2 rounded-lg ${
                          item.type === "folder" 
                            ? "bg-purple-500/20 text-purple-300 group-hover:bg-purple-500/30 group-hover:scale-110" 
                            : "bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:scale-110"
                        } transition-all duration-300 shadow-sm`}>
                          {item.type === "folder" ? (
                            <Folder className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                          ) : (
                            <File className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                        </div>
                      </div>
                      
                      {/* Content Column */}
                      <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <span className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-purple-300 transition-colors truncate">
                            {item.title}
                          </span>
                          {item.tags && item.tags.length > 0 && (
                            <div className="hidden sm:flex gap-1">
                              {item.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-medium text-slate-400 border border-white/10">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {/* Metadata Column */}
                        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-500 flex-shrink-0">
                          <span className="hidden sm:inline truncate max-w-[200px] group-hover:text-slate-400 transition-colors">
                            {item.description || "Updated recently"}
                          </span>
                          {item.readTime && (
                            <span className="flex items-center gap-1 whitespace-nowrap bg-white/5 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border border-white/10">
                              <Clock className="w-3 h-3" />
                              {item.readTime}
                            </span>
                          )}
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
        
        <Footer />
      </div>
    </div>
  )
}
