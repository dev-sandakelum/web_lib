"use client"
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Network, File, Search, ChevronRight, Home } from "lucide-react"
import { mainTopics } from "./data"

export default function PersonalHero() {
  const router = useRouter()
  const [currentLevel, setCurrentLevel] = useState<"main" | "subtopic" | "item">("main")
  const [selectedMainTopic, setSelectedMainTopic] = useState<string | null>(null)
  const [selectedSubTopic, setSelectedSubTopic] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    const results: any[] = []

    mainTopics.forEach((topic) => {
      if (topic.title.toLowerCase().includes(query)) {
        results.push({ type: "main", data: topic, level: 1 })
      }
      topic.subTopics.forEach((subTopic) => {
        if (subTopic.title.toLowerCase().includes(query)) {
          results.push({ type: "subtopic", data: subTopic, parentTopic: topic, level: 2 })
        }
        subTopic.items.forEach((item) => {
          if (item.title.toLowerCase().includes(query) || item.tags.some((tag) => tag.includes(query))) {
            results.push({ type: "item", data: item, parentSubTopic: subTopic, parentTopic: topic, level: 3 })
          }
        })
      })
    })

    return results
  }, [searchQuery])

  const handleMainTopicClick = (topicId: string, link?: string) => {
    if (link) {
      router.push(link)
    } else {
      setSelectedMainTopic(topicId)
      setSelectedSubTopic(null)
      setCurrentLevel("subtopic")
      setSearchQuery("")
    }
  }

  const handleSubTopicClick = (subTopicId: string, link?: string) => {
    if (link) {
      router.push(link)
    } else {
      setSelectedSubTopic(subTopicId)
      setCurrentLevel("item")
      setSearchQuery("")
    }
  }

  const handleBackToMain = () => {
    setCurrentLevel("main")
    setSelectedMainTopic(null)
    setSelectedSubTopic(null)
    setSearchQuery("")
  }

  const handleBackToSubTopics = () => {
    setCurrentLevel("subtopic")
    setSelectedSubTopic(null)
    setSearchQuery("")
  }

  const handleItemClick = (link?: string) => {
    if (link) {
      router.push(link)
    }
  }

  const currentMainTopic = mainTopics.find((t) => t.id === selectedMainTopic)
  const currentSubTopic = currentMainTopic?.subTopics.find((st) => st.id === selectedSubTopic)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 sm:p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Welcome</h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200">My Learning Journey</p>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search across all topics, subjects, and notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
          </div>

          {currentLevel !== "main" && (
            <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-2 overflow-x-auto">
              <button
                onClick={handleBackToMain}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </button>
              <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              {currentMainTopic && (
                <>
                  <button
                    onClick={handleBackToMain}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap"
                  >
                    {currentMainTopic.title}
                  </button>
                  {currentLevel !== "subtopic" && (
                    <>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm whitespace-nowrap">
                        {currentSubTopic?.title}
                      </span>
                    </>
                  )}
                </>
              )}
            </div>
          )}

          {/* Content Area */}
          <div className="p-4 sm:p-8 lg:p-12">
            {/* Search Results */}
            {searchQuery.trim() && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                  Search Results ({searchResults.length})
                </h2>
                {searchResults.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">No results found for "{searchQuery}"</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {searchResults.map((result, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleItemClick(result.data.link)}
                        className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer p-4 sm:p-5 lg:p-6"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold text-white ${
                              result.type === "main"
                                ? "bg-blue-500"
                                : result.type === "subtopic"
                                  ? "bg-purple-500"
                                  : "bg-green-500"
                            }`}
                          >
                            {result.type === "main" ? "Topic" : result.type === "subtopic" ? "Subject" : "Content"}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{result.data.title}</h3>
                        {result.data.readTime && (
                          <p className="text-xs sm:text-sm text-gray-500">📖 {result.data.readTime}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Main Topics View */}
            {!searchQuery.trim() && currentLevel === "main" && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                  Available Subjects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {mainTopics.map((topic) => (
                    <div
                      key={topic.id}
                      onClick={() => handleMainTopicClick(topic.id, topic.link)}
                      className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer overflow-hidden active:scale-95"
                    >
                      <div
                        className={`bg-gradient-to-r ${topic.color} p-5 sm:p-6 text-white flex items-center justify-center`}
                      >
                        {topic.icon}
                      </div>
                      <div className="p-4 sm:p-5 lg:p-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center break-words">
                          {topic.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 leading-relaxed">
                          {topic.description}
                        </p>
                        <div className="text-center">
                          <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors">
                            View {topic.subTopics.length} subjects →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-Topics View */}
            {!searchQuery.trim() && currentLevel === "subtopic" && currentMainTopic && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                  {currentMainTopic.title} - Subjects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {currentMainTopic.subTopics.map((subTopic) => (
                    <div
                      key={subTopic.id}
                      onClick={() => handleSubTopicClick(subTopic.id)}
                      className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer overflow-hidden active:scale-95"
                    >
                      <div
                        className={`bg-gradient-to-r ${(subTopic as any).cardColor || "from-slate-600 to-slate-700"} p-5 sm:p-6 text-white flex items-center justify-center`}
                      >
                        <Network className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="p-4 sm:p-5 lg:p-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">
                          {subTopic.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4">
                          {subTopic.items.length} items
                        </p>
                        <div className="text-center">
                          <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors">
                            Explore →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Items View */}
            {!searchQuery.trim() && currentLevel === "item" && currentSubTopic && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                  {currentSubTopic.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {currentSubTopic.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.link)}
                      className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer overflow-hidden active:scale-95"
                    >
                      <div
                        className={`bg-gradient-to-r ${(item as any).cardColor ?? "from-slate-600 to-slate-700"} p-5 sm:p-6 text-white flex items-center justify-center`}
                      >
                        <File className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="p-4 sm:p-5 lg:p-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 text-center mb-2">📖 {item.readTime}</p>
                        <div className="flex flex-wrap gap-2 justify-center mb-3">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="text-center">
                          <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors">
                            View →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-4 sm:p-6 text-center">
            <p className="text-base sm:text-lg font-semibold">Keep Learning, Keep Growing</p>
            <p className="text-xs sm:text-sm font-medium mt-2 text-white opacity-80">Created by Hasitha Sandakelum</p>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 sm:mt-2">Your educational journey starts here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
