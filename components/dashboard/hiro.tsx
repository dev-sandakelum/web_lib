"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Search, Sparkles, ArrowRight, BookOpen, Command } from "lucide-react"
import Footer from "./Footer"
import { mainTopics } from "../data"

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

export default function PersonalHero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    const results: SearchResult[] = []

    mainTopics.forEach((topic) => {
      // Search Main Topics
      if (topic.title.toLowerCase().includes(query)) {
        results.push({ type: "main", data: topic, level: 1 })
      }
      
      topic.subTopics.forEach((subTopic) => {
        // Search Subtopics
        if (subTopic.title.toLowerCase().includes(query)) {
          results.push({ type: "subtopic", data: subTopic, parentTopic: topic, level: 2 })
        }
        
        // Search Items (Notes/Resources)
        subTopic.items.forEach((item) => {
          if (item.title.toLowerCase().includes(query) || item.tags.some((tag) => tag.toLowerCase().includes(query))) {
            results.push({ type: "item", data: item, parentSubTopic: subTopic, parentTopic: topic, level: 3 })
          }
        })
      })
    })

    return results
  }, [searchQuery])

  const handleItemClick = (link?: string) => {
    if (link) {
      router.push(link)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Deep Space Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] opacity-50" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-900/10 blur-[100px] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-md text-sm font-medium text-purple-200 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Personal Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Home</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 leading-relaxed">
            Your central hub for learning, notes, and resources. Explore your curated collection of knowledge.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative z-20 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <div className={`relative group transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
            <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 transition-opacity duration-300 ${isSearchFocused ? 'opacity-50' : ''}`} />
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex items-center p-2">
              <Search className={`w-6 h-6 ml-4 transition-colors duration-300 ${isSearchFocused ? 'text-purple-400' : 'text-slate-500'}`} />
              <input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 text-lg px-4 py-3 placeholder:text-slate-500 text-slate-200"
              />
              <div className="hidden sm:flex items-center gap-2 pr-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/5">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="min-h-[400px]">
          
          {/* Search Results */}
          {searchQuery.trim() && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Search Results</h2>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20 text-sm font-medium">
                  {searchResults.length} found
                </span>
              </div>
              
              {searchResults.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10 backdrop-blur-sm">
                  <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-lg text-slate-400">No results found for &quot;{searchQuery}&quot;</p>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="mt-4 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((result, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleItemClick(result.data.link)}
                      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Breadcrumb Context */}
                      <div className="mb-3 text-xs font-medium text-slate-500 flex items-center gap-1">
                        {result.parentTopic && <span>{result.parentTopic.title}</span>}
                        {result.parentSubTopic && (
                          <>
                            <ArrowRight className="w-3 h-3" />
                            <span>{result.parentSubTopic.title}</span>
                          </>
                        )}
                      </div>

                      <div className="flex items-start justify-between mb-4">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                          result.type === "main" ? "bg-blue-500/20 text-blue-300 border-blue-500/20" :
                          result.type === "subtopic" ? "bg-purple-500/20 text-purple-300 border-purple-500/20" :
                          "bg-emerald-500/20 text-emerald-300 border-emerald-500/20"
                        }`}>
                          {result.type === "main" ? "Topic" : result.type === "subtopic" ? "Subject" : "Note"}
                        </span>
                        {result.data.readTime && (
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <BookOpen className="w-3 h-3" /> {result.data.readTime}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">
                        {result.data.title}
                      </h3>
                      <div className="flex items-center text-sm text-slate-500 group-hover:translate-x-1 transition-transform duration-300">
                        View details <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Main Topics Grid */}
          {!searchQuery.trim() && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {mainTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => {
                    if (topic.id === 'notes') {
                       router.push('/notes')
                    } else if (topic.link) {
                      router.push(topic.link)
                    }
                  }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-1 shadow-lg border border-white/5 hover:border-purple-500/30 transition-all duration-500 cursor-pointer hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full bg-slate-900/50 rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center transition-colors">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500 ring-4 ring-white/5`}>
                      {topic.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {topic.title}
                    </h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      {topic.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-purple-400 transition-colors">
                      <span>{topic.subTopics.length > 0 ? `${topic.subTopics.length} Collections` : 'View Resources'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
