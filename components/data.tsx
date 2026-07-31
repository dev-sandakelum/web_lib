import { DonutIcon, File, LayoutGrid } from "lucide-react"

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface NoteItem {
  id: string
  title: string
  readTime: string
  cardColor?: string
  tags: string[]
  link: string
}

export interface Subject {
  id: string
  title: string
  cardColor: string
  items: NoteItem[]
}

export interface Semester {
  id: string
  title: string
  label: string
  status: "current" | "archived"
  subjects: Subject[]
}

// ─────────────────────────────────────────────────────────────
// CURRENT SEMESTER — add new subjects here as the semester goes.
//
// Template for a new subject:
//
//   {
//     id: "subject-id",              // becomes the URL: /notes/subject-id
//     title: "Subject Name",
//     cardColor: "from-blue-500 to-cyan-600",
//     items: [
//       {
//         id: "unique-id",
//         title: "Note title",
//         readTime: "10 min",
//         tags: ["tag1", "tag2"],
//         link: "/notes/subject-id/note-page",
//       },
//     ],
//   },
// ─────────────────────────────────────────────────────────────

export const currentSemester: Semester = {
  id: "year-2-semester-1",
  title: "Year 2 · Semester 1",
  label: "Current",
  status: "current",
  subjects: [
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      cardColor: "from-blue-500 to-indigo-600",
      items: [],
    },
    {
      id: "e-business",
      title: "E-Business Systems",
      cardColor: "from-teal-500 to-cyan-600",
      items: [],
    },
    {
      id: "ooad",
      title: "Object Oriented Analysis & Design",
      cardColor: "from-violet-500 to-purple-600",
      items: [],
    },
    {
      id: "business-economics",
      title: "Business Economics",
      cardColor: "from-amber-500 to-orange-600",
      items: [],
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      cardColor: "from-pink-500 to-rose-600",
      items: [],
    },
    {
      id: "oop",
      title: "Object Oriented Programming",
      cardColor: "from-emerald-500 to-green-600",
      items: [],
    },
    {
      id: "oop-practicum",
      title: "Object Oriented Programming Practicum",
      cardColor: "from-lime-500 to-emerald-600",
      items: [],
    },
    {
      id: "mis",
      title: "Management Information Systems",
      cardColor: "from-sky-500 to-blue-600",
      items: [],
    },
    {
      id: "english-iii",
      title: "English III",
      cardColor: "from-fuchsia-500 to-pink-600",
      items: [],
    },
  ],
}

// ─────────────────────────────────────────────────────────────
// ARCHIVE — everything from previous semesters lives here.
// Old links keep working: subjects are still served at /notes/[id].
// ─────────────────────────────────────────────────────────────

// Note: Year 1 · Semester 2 has no notes (semester was missed), so it is not listed.
export const archivedSemesters: Semester[] = [
  {
    id: "year-1-semester-1",
    title: "Year 1 · Semester 1",
    label: "Archive",
    status: "archived",
    subjects: [
      {
        id: "networking",
        title: "Networking",
        cardColor: "from-cyan-500 to-purple-600",
        items: [
          {
            id: "n0",
            title: "networking full notes",
            readTime: "comprehensive",
            cardColor: "from-blue-500 to-purple-600",
            tags: ["networking", "full", "notes", "guide"],
            link: "/notes/networking/full",
          },
          {
            id: "n0-quiz",
            title: "networking full quiz",
            readTime: "interactive",
            cardColor: "from-green-500 to-blue-600",
            tags: ["networking", "full", "quiz", "guide"],
            link: "/notes/networking/full-quiz",
          },
          {
            id: "n0-2",
            title: "networking full 2",
            readTime: "interactive",
            cardColor: "from-amber-500 to-blue-600",
            tags: ["networking", "full", "guide"],
            link: "/notes/networking/full2",
          },
          {
            id: "n1",
            title: "cisco packet tracer",
            readTime: "easily navigable",
            cardColor: "from-yellow-500 to-purple-600",
            tags: ["networking", "cisco", "packet-tracer", "guide"],
            link: "/notes/networking/cisco-packet-tracer",
          },
          {
            id: "n2",
            title: "cisco packet tracer old",
            readTime: "unnavigable",
            cardColor: "from-gray-300 to-gray-600",
            tags: ["networking", "cisco", "packet-tracer", "old"],
            link: "/notes/networking/cisco-packet-tracer-old",
          },
          {
            id: "n3",
            title: "cisco packet tracer v2",
            readTime: "unnavigable",
            cardColor: "from-gray-300 to-gray-600",
            tags: ["networking", "cisco", "packet-tracer", "v2"],
            link: "/notes/networking/cisco-packet-tracer-v2",
          },
        ],
      },
      {
        id: "architecture",
        title: "Computer Architecture",
        cardColor: "from-purple-500 to-indigo-600",
        items: [
          {
            id: "a0",
            title: "full notes on computer architecture",
            readTime: "comprehensive",
            tags: ["architecture"],
            link: "/notes/architecture/full",
          },
          {
            id: "a1",
            title: "Computer Architecture quiz notes (units 1-4)",
            readTime: "interactive",
            tags: ["architecture", "quiz"],
            link: "/notes/architecture/A1-4",
          },
          {
            id: "a2",
            title: "Internal & External Memory",
            readTime: "7 min",
            tags: ["architecture"],
            link: "/notes/architecture/memory",
          },
        ],
      },
      {
        id: "is",
        title: "Information systems",
        cardColor: "from-green-500 to-teal-600",
        items: [
          {
            id: "isfull",
            title: "Information systems full notes",
            readTime: "comprehensive",
            tags: ["information systems", "full", "notes"],
            link: "/notes/information-systems/full",
          },
          {
            id: "isfullq",
            title: "Information systems full quiz",
            readTime: "comprehensive",
            tags: ["information systems", "full", "quiz"],
            link: "/notes/information-systems/fullq",
          },
          {
            id: "is3-4",
            title: "Information systems notes 3rd and 4th",
            readTime: "unlimited",
            tags: ["information systems", "is", "notes"],
            link: "/notes/information-systems/is3-4",
          },
          {
            id: "new",
            title: "Fundamentals of Information Systems",
            readTime: "comprehensive",
            tags: ["information systems", "fundamentals", "notes"],
            link: "/notes/information-systems/new",
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
          },
        ],
      },
    ],
  },
]

// All subjects across semesters — keeps /notes/[subtopic] routing and
// global search working for both current and archived content.
export const allSubjects: Subject[] = [
  ...currentSemester.subjects,
  ...archivedSemesters.flatMap((s) => s.subjects),
]

export function subjectsWithResources(subjects: Subject[]): Subject[] {
  return subjects.filter((subject) => subject.items.length > 0)
}

export const visibleSubjects: Subject[] = subjectsWithResources(allSubjects)

export const mainTopics = [
  {
    id: "notes",
    title: "Short Notes",
    icon: <File className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-blue-500 to-blue-600",
    description: "Quick reference materials",
    link: "/notes",
    subTopics: visibleSubjects,
  },
  {
    id: "quizes",
    title: "Quizzes",
    icon: <DonutIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-green-500 to-green-600",
    description: "Interactive assessments",
    link: "/quiz",
    subTopics: [],
  },
  {
    id: "pdfs",
    title: "PDFs",
    icon: <File className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-red-500 to-red-600",
    description: "Comprehensive documents",
    link: "/pdf_links",
    subTopics: [],
  },
  {
    id: "apps",
    title: "Apps",
    icon: <LayoutGrid className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-orange-500 to-amber-600",
    description: "Tools to enhance your workflow",
    link: "/apps",
    subTopics: [],
  },
]
