"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Search, ArrowRight, Bell } from "lucide-react"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"
import Footer from "./Footer"
import { mainTopics, notifications } from "../data"

export default function PersonalHero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(true)

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
    <div className="min-h-screen bg-[#0d1117] font-sans text-slate-100 flex overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:pl-20 transition-all duration-300 w-full max-w-[100vw]">
        <TopNav onNotificationClick={() => setIsNotificationPanelOpen(!isNotificationPanelOpen)} />

        <div className="flex-1 flex flex-col xl:flex-row">
          {/* Main Dashboard Area */}
          <div className="flex-1 p-4 sm:p-6 lg:p-10 min-w-0">
            
            {/* Hero Section */}
            <div className="text-center mb-12 mt-4 sm:mt-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight px-2">
                Level up your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">skills</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4">Explore top courses and manage your personal knowledge base.</p>
              
              {/* Glowing Search Bar */}
              <div className="max-w-xl mx-auto relative group z-20 px-2 sm:px-0">
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 ${isSearchFocused ? 'opacity-60' : ''}`} />
                <div className="relative bg-[#161b22] border border-[#30363d] rounded-full flex items-center p-1.5 shadow-2xl">
                  <Search className="w-5 h-5 ml-3 sm:ml-4 text-slate-400 shrink-0" />
                  <input 
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none focus:ring-0 outline-none text-slate-200 placeholder:text-slate-500 px-2 sm:px-4 text-sm sm:text-base w-full min-w-0"
                  />
                  <button className="bg-white text-slate-900 px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors shrink-0">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Knowledge Base Grid */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-6 px-1">Knowledge Base</h2>
              
              {searchQuery.trim() ? (
                // Search Results View
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {searchResults.map((result, idx) => (
                    <div key={idx} onClick={() => handleItemClick(result.data.link)} className="p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-purple-500 cursor-pointer transition-colors">
                      <h3 className="font-bold text-slate-200 truncate">{result.data.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {result.type === 'main' ? 'Topic' : result.type === 'subtopic' ? 'Collection' : 'Resource'}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                // Main Topics Grid with Machine UI
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
                  {mainTopics.map((topic) => (
                    <div
                      key={topic.id}
                      onClick={() => {
                        if (topic.id === 'notes') router.push('/notes')
                        else if (topic.link) router.push(topic.link)
                      }}
                      className="group relative cursor-pointer aspect-square sm:aspect-auto sm:h-64 lg:h-72"
                    >
                      {/* Calm Glow Effect (Cyan/Electric Blue) */}
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Card Content */}
                      <div className="relative bg-[#161b22] h-full rounded-[22px] border border-[#30363d] p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:scale-[0.98]">
                        
                        {/* Metallic Icon Container */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-300 mb-4 sm:mb-6 shadow-inner border border-white/5 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500">
                          {topic.icon}
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-slate-200 mb-2 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                          {topic.title}
                        </h3>
                        
                        <p className="text-[10px] sm:text-xs text-slate-500 font-mono uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                          {topic.subTopics.length > 0 ? `${topic.subTopics.length} COLLECTIONS` : 'RESOURCE'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Notifications (Visible only on small screens) */}
            <div className="xl:hidden mb-8">
              <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Recent Activity</h3>
              <div className="space-y-4">
                {notifications.map((notif, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer p-3 rounded-xl hover:bg-[#161b22] border border-transparent hover:border-[#30363d] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-colors shrink-0">
                      {notif.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-300 leading-tight group-hover:text-purple-300 transition-colors truncate">{notif.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Footer />
          </div>

          {/* Right Panel - Notifications (Desktop Only) */}
          <div 
            id="notifications-panel" 
            className={`hidden xl:block bg-[#0d1117] border-l border-[#30363d] shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
              isNotificationPanelOpen ? 'w-80 p-6 opacity-100' : 'w-0 p-0 opacity-0 border-l-0'
            }`}
          >
            <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Notifications</h3>
            <div className="space-y-6">
              {notifications.map((notif, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-colors shrink-0">
                    {notif.icon}
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
