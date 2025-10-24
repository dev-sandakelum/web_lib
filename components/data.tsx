import { DonutIcon, File } from "lucide-react"

export const mainTopics = [
  {
    id: "notes",
    title: "Short Notes",
    icon: <File className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-blue-500 to-blue-600",
    description: "Quick reference materials",
    subTopics: [
      {
        id: "networking",
        title: "Networking",
        cardColor: "from-cyan-500 to-purple-600",
        items: [
          {
            id: "n1",
            title: "cisco packet tracer",
            readTime: "esaily navigable",
            cardColor: "from-yellow-500 to-purple-600",
            tags: ["networking", "cisco" ,"packet-tracer" ,"guide"],
            link: "/notes/networking/cisco-packet-tracer",
          },
          {
            id: "n2",
            title: "cisco packet tracer old",
            readTime: "unnavigable",
            cardColor: "from-gray-300 to-gray-600",
            tags: ["networking", "cisco" ,"packet-tracer" ,"old"],
            link: "/notes/networking/cisco-packet-tracer-old",
          },
        ],
      },
      {
        id: "architecture",
        title: "Computer Architecture",
        cardColor: "from-purple-500 to-indigo-600",
        items: [
          {
            id: "a1",
            title: "",
            readTime: "not applicable",
            tags: ["architecture"],
            link: "/notes/architecture/a1-4",
          },
          // {
          //   id: "a2",
          //   title: "Memory Hierarchy",
          //   readTime: "7 min",
          //   tags: ["architecture"],
          //   link: "/notes/architecture/memory-hierarchy",
          // },
        ],
      },
      {
        id: "c1",
        title: "C Programming",
        cardColor: "from-blue-500 to-cyan-600",
        items: [
          {
            id: "c1-1",
            title: "full c programming notes",
            readTime: "unlimited",
            tags: ["c programming", "pointers" ,"arrays" ,"functions" ,"structures" ,"file handling"],
            link: "/notes/c/full-c-notes",
          },
        ],
      },
      {
        id: "is",
        title: "Information systems",
        cardColor: "from-green-500 to-teal-600",
        items: [
          {
            id: "is3-4",
            title: "Information systems notes 3rd and 4th ",
            readTime: "unlimited",
            tags: ["information systems", "is" ,"notes"],
            link: "/notes/information-systems/is3-4",
          },
        ],
      },
      {
        id: "multimedia",
        title: "Multimedia",
        cardColor: "from-pink-500 to-rose-600",
        items: [
          {
            id: "mm1",
            title: "Multimedia Study Guide",
            readTime: "comprehensive",
            tags: ["multimedia", "design", "typography", "CRAP"],
            link: "/notes/multimedia",
          },
        ],
      },
      {
        id: "maths",
        title: "Mathematics",
        cardColor: "from-red-500 to-pink-600",
        items: [
          {
            id: "math1",
            title: "Math Solver using Groq AI",
            readTime: "5 min",
            tags: ["math", "AI", "Groq"],
            link: "/notes/maths/solver",
          }
        ],
      }
    ],
  },
  {
    id: "quizes",
    title: "Quizes",
    icon: <DonutIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-green-500 to-green-600",
    description: "Interactive assessments",
    link : "/quiz",
    subTopics: [],
   
  },
  {
    id: "pdfs",
    title: "PDFs",
    icon: <File className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-red-500 to-red-600",
    description: "Comprehensive documents",
    link : "/pdf_links",
    subTopics: [],
  },
]
