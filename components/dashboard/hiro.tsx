"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Search, ArrowRight, Bell, BookOpen, FileText, Sparkles } from "lucide-react"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"
import Footer from "./Footer"
import { mainTopics } from "../data"

export default function PersonalHero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // ... (Keep existing search logic) ...
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    const results: any[] = []
    mainTopics.forEach((topic) => {
      if (topic.title.toLowerCase().includes(query)) results.push({ type: "main", data: topic })
      topic.subTopics.forEach((subTopic) => {
        if (subTopic.title.toLowerCase().includes(query)) results.push({ type: "subtopic", data: subTopic, parentTopic: topic })
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

  return (
    <div className="min-h-screen bg-[#0d1117] font-sans text-slate-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:pl-20 transition-all duration-300">
        <TopNav />

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Main Dashboard Area */}
          <div className="flex-1 p-6 lg:p-10">
            
            {/* Hero Section */}
            <div className="text-center mb-16 mt-8">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                Level up your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">skills</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8">Explore top courses and manage your personal knowledge base.</p>
              
              {/* Glowing Search Bar */}
              <div className="max-w-xl mx-auto relative group z-20">
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 ${isSearchFocused ? 'opacity-60' : ''}`} />
                <div className="relative bg-[#161b22] border border-[#30363d] rounded-full flex items-center p-1.5 shadow-2xl">
                  <Search className="w-5 h-5 ml-4 text-slate-400" />
                  <input 
                    type="text"
                    placeholder="Search by course, topic, or note..."
                    value={searchQuery}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none focus:ring-0 text-slate-200 placeholder:text-slate-500 px-4"
                  />
                  <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Knowledge Base Grid */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-6">Knowledge Base</h2>
              
              {searchQuery.trim() ? (
                // Search Results View
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map((result, idx) => (
                    <div key={idx} onClick={() => handleItemClick(result.data.link)} className="p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-purple-500 cursor-pointer">
                      <h3 className="font-bold text-slate-200">{result.data.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {result.type === 'main' ? 'Topic' : result.type === 'subtopic' ? 'Collection' : 'Resource'}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                // Main Topics Grid with Machine UI
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mainTopics.map((topic) => (
                    <div
                      key={topic.id}
                      onClick={() => {
                        if (topic.id === 'notes') router.push('/notes')
                        else if (topic.link) router.push(topic.link)
                      }}
                      className="group relative cursor-pointer aspect-square"
                    >
                      {/* Calm Glow Effect (Cyan/Electric Blue) */}
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Card Content */}
                      <div className="relative bg-[#161b22] h-full rounded-[22px] border border-[#30363d] p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:scale-[0.98]">
                        
                        {/* Metallic Icon Container */}
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-300 mb-6 shadow-inner border border-white/5 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500">
                          {topic.icon}
                        </div>

                        <h3 className="text-xl font-bold text-slate-200 mb-2 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                          {topic.title}
                        </h3>
                        
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                          {topic.subTopics.length > 0 ? `${topic.subTopics.length} COLLECTIONS` : 'RESOURCE'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Footer />
          </div>

          {/* Right Panel - Notifications (Visual Only) */}
          <div className="hidden xl:block w-80 bg-[#0d1117] border-l border-[#30363d] p-6">
            <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Notifications</h3>
            <div className="space-y-6">
              {[
                { title: "New note added: 'Physics Basics'", time: "2d ago", icon: BookOpen },
                { title: "Quiz completed: 'Algebra'", time: "1w ago", icon: Sparkles },
                { title: "New PDF uploaded: 'Calculus'", time: "2w ago", icon: FileText },
              ].map((notif, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-colors">
                    <notif.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-300 leading-tight group-hover:text-purple-300 transition-colors">{notif.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
