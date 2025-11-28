"use client"

import { useRouter } from "next/navigation"
import { File, Folder, ChevronRight, ArrowLeft, Search, Clock, Home, Sparkles, BookOpen, ArrowRight as ArrowRightIcon } from "lucide-react"
import { useState, useMemo } from "react"
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

  // Global Search Logic (Simplified for brevity, keeping existing logic)
  const globalSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    const results: SearchResult[] = []
    mainTopics.forEach((topic) => {
      if (topic.title.toLowerCase().includes(query)) results.push({ type: "main", data: topic, level: 1 })
      topic.subTopics.forEach((subTopic) => {
        if (subTopic.title.toLowerCase().includes(query)) results.push({ type: "subtopic", data: subTopic, parentTopic: topic, level: 2 })
        subTopic.items.forEach((item) => {
          if (item.title.toLowerCase().includes(query) || item.tags.some((tag) => tag.toLowerCase().includes(query))) {
            results.push({ type: "item", data: item, parentSubTopic: subTopic, parentTopic: topic, level: 3 })
          }
        })
      })
    })
    return results
  }, [searchQuery])

  const handleSearchClick = (link?: string) => {
    if (link) router.push(link)
  }

  return (
    <div className="font-sans text-slate-100 flex flex-col h-full p-4 sm:p-6 lg:p-10">
      
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
             <button 
              onClick={() => router.push("/")}
              className="hover:text-blue-400 hover:underline transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
            </button>
            <span className="text-slate-600">/</span>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <button
                  onClick={() => router.push(crumb.link)}
                  className={`hover:text-blue-400 hover:underline transition-colors ${idx === breadcrumbs.length - 1 ? "font-semibold text-slate-200" : ""}`}
                >
                  {crumb.title}
                </button>
                {(idx < breadcrumbs.length - 1 || title) && (
                  <span className="text-slate-600">/</span>
                )}
              </div>
            ))}
            {title && <span className="font-semibold text-slate-200">{title}</span>}
        </div>

        {/* GitHub Style File Explorer */}
        <div className="relative group">
          
          <div className="relative border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
            
            {/* Header / Last Commit Info */}
            <div className="bg-[#0d1117] px-4 py-3 border-b border-[#30363d] flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[1px]">
                    <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center">
                       <span className="font-bold text-[8px] text-white">HS</span>
                    </div>
                 </div>
                 <span className="font-semibold text-slate-300">Hasitha</span>
                 <span>updated resources</span>
              </div>
              <div className="flex items-center gap-2">
                 <span>latest commit</span>
                 <span className="font-mono bg-[#232936] px-1.5 py-0.5 rounded text-slate-300 border border-[#30363d]">a1b2c3d</span>
                 <span>2 hours ago</span>
              </div>
            </div>

            {/* File List */}
            <div className="divide-y divide-[#21262d]">
              {parentLink && parentLink !== "/" && (
                <div 
                  onClick={() => router.push(parentLink)}
                  className="flex items-center px-4 py-3 hover:bg-[#1f2937] cursor-pointer transition-colors text-sm group/row"
                >
                  <div className="w-8 text-center mr-2 text-blue-400">
                     <span className="font-bold">..</span>
                  </div>
                  <span className="text-blue-400 group-hover/row:underline"></span>
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
                    className="flex items-center px-4 py-3 hover:bg-[#1f2937] cursor-pointer transition-colors text-sm group/row"
                  >
                    {/* Icon */}
                    <div className="w-8 mr-2 text-slate-400">
                      {item.type === "folder" ? (
                        <Folder className="w-4 h-4 fill-blue-400 text-blue-400" />
                      ) : (
                        <File className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    
                    {/* Name */}
                    <div className="w-1/3 min-w-[150px] pr-4">
                      <span className="text-slate-200 group-hover/row:text-blue-400 group-hover/row:underline font-medium truncate block">
                        {item.title}
                      </span>
                    </div>

                    {/* Description / Commit Message */}
                    <div className="flex-1 text-slate-500 truncate pr-4">
                       {item.description || "Update " + item.title}
                    </div>

                    {/* Time */}
                    <div className="text-slate-500 text-xs whitespace-nowrap text-right w-24">
                       {item.readTime || "2 days ago"}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
