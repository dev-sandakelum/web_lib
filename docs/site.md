# ICT HUB — Full Site Documentation

> Personal learning platform built with **Next.js 14 App Router**, TypeScript, and Tailwind CSS.
> Deployed on **Vercel** · Source: [github.com/dev-sandakelum/web_lib](https://github.com/dev-sandakelum/web_lib)

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Site Structure](#site-structure)
4. [Pages & Features](#pages--features)
   - [Home `/`](#home-)
   - [Notes `/notes`](#notes-notes)
   - [Quizzes `/quiz`](#quizzes-quiz)
   - [PDFs `/pdf_links`](#pdfs-pdf_links)
   - [Apps `/apps`](#apps-apps)
   - [Elections `/elections/1.2reps`](#elections-elections12reps)
5. [Apps Detail](#apps-detail)
   - [Math Solver](#math-solver)
   - [Birthday Post Studio (BD3)](#birthday-post-studio-bd3)
6. [Data Model](#data-model)
7. [Component Architecture](#component-architecture)
8. [Semester Content](#semester-content)

---

## Overview

ICT HUB is a personal academic resource hub for **Hasitha Sandakelum** (TG/2024/2073), a student at the Faculty of Technology, University of Ruhuna. It aggregates short notes, interactive quizzes, PDF links, AI tools, and mini-apps into a single dark-themed dashboard.

The site is structured around semesters — the current semester's content is always front and centre, while older material is preserved in an archive.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS files (globals, bd, bd2, bd3) |
| Icons | Lucide React |
| Fonts | Geist Sans, Geist Mono (via next/font) |
| AI / LLM | Groq API (`callBd3` client, math solver) |
| Analytics | Vercel Analytics |
| Deployment | Vercel |
| Version Control | Git → GitHub |

---

## Site Structure

```
/                          Homepage (dashboard)
/notes                     Notes index — semester & archive listing
/notes/networking/         Networking subject folder
/notes/networking/full     Full networking notes page
/notes/architecture/       Computer Architecture subject folder
/notes/architecture/full   Full architecture notes
/notes/architecture/A1-4   Architecture quiz notes (units 1–4)
/notes/architecture/memory Internal & External Memory
/notes/information-systems/ Information Systems subject folder
/notes/information-systems/full      Full IS notes
/notes/information-systems/fullq     Full IS quiz
/notes/information-systems/is3-4     IS notes lectures 3 & 4
/notes/information-systems/new       Fundamentals of IS
/notes/maths/solver        AI Math Solver (Groq)
/quiz                      Quiz browser + interactive quiz runner
/pdf_links                 PDF resource links
/apps                      Apps launcher grid
/apps/bd2                  Birthday Post Studio v2
/apps/bd3                  Birthday Post Studio v3 (current)
/question-gen              AI Question Generator
/elections/1.2reps         Class Representative Voting System
```

---

## Pages & Features

### Home `/`

The main dashboard rendered by `components/dashboard/hiro.tsx`.

**Sections:**
- **Semester badge** — shows current semester (Year 2 · Semester 1)
- **Hero headline** — "Fresh start, new semester" with gradient text
- **Glowing search bar** — live global search across all notes, quizzes, and subjects. Press Enter to jump to the first result
- **Quick-access cards** — Current Semester → `/notes`, Archive → `/notes#archive`
- **Knowledge Base grid** — 4 cards: Notes, Quizzes, PDFs, Apps

**Global search** searches across:
- Main topic titles (e.g. "Networking")
- Sub-topic titles (e.g. "Computer Architecture")
- Individual note/resource titles and their tags

---

### Notes `/notes`

Notes index rendered by a `TopicView` component. Displays a GitHub × Moodle hybrid file-browser interface.

**Current Semester (Year 2 · Semester 1)** subjects listed (no notes added yet):
- Data Structures & Algorithms
- E-Business Systems
- Object Oriented Analysis & Design
- Business Economics
- Soft Skills
- Object Oriented Programming
- OOP Practicum
- Management Information Systems
- English III

**Archive (Year 1 · Semester 1)** subjects with content:

| Subject | Notes available |
|---|---|
| Networking | Full notes, full quiz, full v2, Cisco Packet Tracer (3 versions) |
| Computer Architecture | Full notes, quiz notes (units 1–4), Memory notes |
| Information Systems | Full notes, full quiz, IS 3&4, Fundamentals |
| Mathematics | AI Math Solver |

**UI features:**
- Breadcrumb navigation (Home → Subject → Note)
- Per-page global search overlay with folder/file icons
- File rows show title, tags, read time, chevron
- Back navigation row at top of each folder view

---

### Quizzes `/quiz`

Interactive quiz system built in `components/quiz/quiz.tsx`.

**Browse screen:**
- Sticky header with BookOpen icon, semester badge, Home button
- Search bar filters quizzes in real time
- Category filter pills per section
- Two sections: **Current** (emerald theme) and **Archive** (purple theme)
- Quiz cards show title, category, question count, Start Quiz button

**Quiz screen:**
- Progress bar with question counter
- Question card with A/B/C/D option buttons
- Answer feedback: correct = green, wrong = red, auto-advances after 1.8 s
- Skip and Finish buttons

**Results screen:**
- Correct / Incorrect / Skipped score cards
- Final % badge (gradient)
- Performance insight message
- Review list filterable by All / Correct / Incorrect / Skipped
- Each review item shows your answer vs correct answer
- Retry and Back buttons

**Current semester quizzes (Year 2 · Semester 1):**
- MIS Lecture 01 — Information Systems in Global Business Today (6 questions)
- MIS Lecture 02 — Global E-Business and Collaboration (5 questions)
- MIS Lecture 03 — Information Systems, Organisations and Strategy (5 questions)

**Archived quizzes (Year 1 · Semester 1):**
Physical Layer, Computer Networks, Data Link & MAC, Network Devices, Network Transport, Transport Protocols, Application Layers (×2), Internal Memory, External Memory, Advanced Memory, ICT1161, Multimedia, C Programming, Computer Architecture (×2), M-Commerce & Enterprise, Digital Images, Animation Basics, Advanced Topics

---

### PDFs `/pdf_links`

A curated list of PDF resource links for study materials. (Static link collection page.)

---

### Apps `/apps`

A grid of mini-application launchers. Dark card UI with cyan glow hover effect and metallic icon containers.

| App | Status | Route |
|---|---|---|
| Calculator (Math Solver) | Available | `/notes/maths/solver` |
| Q-Gen (AI Question Generator) | Available | `/question-gen` |
| BD2 (Birthday Post Studio v2) | Available | `/apps/bd2` |
| BD3 (Birthday Post Studio v3) | Available | `/apps/bd3` |
| Focus Timer | Coming Soon | — |

---

### Elections `/elections/1.2reps`

A fully self-contained class representative voting system. Light theme (white cards, indigo/blue/pink), completely separate visual style from the rest of the site.

**Flow:**

1. **Menu screen** — choose "Request Nominations" or "Vote Now"
2. **Nominations flow:**
   - WhatsApp number verification (simulated 6-digit OTP)
   - Nominate students from the list for boy or girl representative
3. **Voting flow:**
   - Admin password gate (`9th1.2reps`) to enable voting
   - WhatsApp OTP verification
   - Searchable dropdown to select boy candidate, then girl candidate
   - Confirm vote modal with ⚠️ "cannot be undone" warning
4. **Results screen:**
   - Live vote counts for boy and girl representatives
   - Percentage bar behind each candidate row
   - Sorted by votes descending

**Student database** (10 demo students, 5M/5F, TG numbers TG2001–TG2145)

---

## Apps Detail

### Math Solver

Route: `/notes/maths/solver`

AI-powered math solver using the **Groq API**. Supports:
- Algebra, Calculus, Trigonometry, Logarithms, Matrices, Vectors, Complex Numbers
- Step-by-step solutions
- Category-specific prompts (`app/api/solve/prompts/`)

Prompt files:
- `algebra-prompt.ts`
- `calculus-prompt.ts`
- `trigonometry-prompt.ts`
- `logarithms-prompt.ts`
- `matrices-prompt.ts`
- `vectors-prompt.ts`
- `complex-prompt.ts`
- `base-prompt.ts`

---

### Birthday Post Studio (BD3)

Route: `/apps/bd3`  
Version: **3.1**  
API: `POST /api/bd3/msg`

A polished birthday post generator for the 9th Batch, Faculty of Technology, University of Ruhuna.

**Features:**
- Upload & crop profile photo (circular crop)
- 3+ background templates
- Gold name pill with Roboto Mono font, auto font-sizing by name length
- Customisable: font size, padding, border radius
- AI-generated birthday message (Mode A: full social post, Mode B: short image caption)
- Access key protection for download
- HD PNG export at 1080×1350 px via `html-to-image`
- Light / Dark theme toggle
- Mobile-first: pinch-to-zoom preview, bottom sheet panels, collapsible toolbar
- Logo asset caching (Service Worker / Cache API)
- Startup popup with latest changelog
- Creator info panel with About + Changelog tabs

**BD3 Message API (`/api/bd3/msg`):**

| Mode | Trigger | Output |
|---|---|---|
| Mode A | `enforceCharRange: false` | Full social media post with header, salutation, hashtags |
| Mode B | `enforceCharRange: true` | Short image caption, 250–300 chars, SSE stream with attempt events |

Mode B uses:
- 12 style variants (warm/energetic, calm/sincere, uplifting, etc.)
- 20 opening starters ("From all of us in the batch,", "Happy birthday to", etc.)
- 10 focus angles (shared memories, achievements, appreciation, etc.)
- Random opener + focus angle per attempt for maximum variety
- Up to 8 retry attempts, fits result to 250–300 char range

**Changelog:**

| Version | Date | Notes |
|---|---|---|
| 1.0 | 2025-01 | Initial release — upload, crop, template, AI message, HD export |
| 1.1 | 2025-01 | Improved crop controls, border styling, responsiveness |
| 1.2 | 2025-01 | Workflow improvements, removed copy button |
| 1.5 | 2025-02 | AI Refresh — smarter messages, retry progress, better reliability |
| 2.0 | 2025-03 | UI Redesign — split editor/preview, gold name pill, startup popup, font controls |
| 2.1 | 2025-04 | Creator info update, startup popup polish |
| 3.0 | 2025-06 | Mobile-first — Canva-style mobile UX, pinch-zoom, bottom nav, light theme, splash screen |
| 3.1 | 2026-07 | Bug fix — batch label alignment in preview (full width, centred) |

---

## Data Model

Defined in `components/data.tsx`:

```ts
interface NoteItem {
  id: string
  title: string
  readTime: string
  cardColor?: string
  tags: string[]
  link: string          // route e.g. "/notes/networking/full"
}

interface Subject {
  id: string            // URL segment e.g. "networking"
  title: string
  cardColor: string     // Tailwind gradient classes
  items: NoteItem[]
}

interface Semester {
  id: string
  title: string         // e.g. "Year 2 · Semester 1"
  label: string         // "Current" | "Archive"
  status: "current" | "archived"
  subjects: Subject[]
}
```

**Exported constants:**
- `currentSemester` — Year 2 · Semester 1 (9 subjects, items TBD)
- `archivedSemesters[]` — Year 1 · Semester 1 (4 subjects with full content)
- `allSubjects` — merged flat array for routing
- `mainTopics` — 4 top-level navigation cards (Notes, Quizzes, PDFs, Apps)
- `subjectsWithResources(subjects)` — filter helper, returns only subjects with `items.length > 0`

---

## Component Architecture

```
app/layout.tsx
└── RootLayout
    ├── Geist fonts
    ├── ScrollGlowRail        (ambient scroll glow overlay)
    ├── FloatingHomeButton    (always-visible home shortcut)
    └── [page]
        └── AppShell          (hides nav on deep /notes pages)
            ├── Sidebar       (desktop fixed left rail 80px + mobile bottom bar)
            ├── TopNav        (sticky header — page title + current date)
            └── [page content]
                └── Footer

components/dashboard/
├── AppShell.tsx      layout wrapper, nav hide logic
├── Sidebar.tsx       icon nav (Home/Notes/Quizzes/PDFs/Apps) — desktop rail + mobile bottom
├── TopNav.tsx        sticky header, resolves title from pathname, shows date
├── TopicView.tsx     generic file-browser (notes listing + global search)
├── Footer.tsx        nav links, GitHub/LinkedIn, copyright
├── FloatingHomeButton.tsx
├── ScrollGlowRail.tsx
└── hiro.tsx          homepage hero component

components/quiz/
├── quiz.tsx          full quiz system (browse + quiz + results)
└── quiz-data.tsx     quiz registry (currentSemesterQuizzes + archivedQuizzes)

components/bd3/
├── generator.tsx     main BD3 component (~2600 lines)
├── post-template.tsx PostTemplate3 — the 1080×1350 card
├── crop-modal.tsx    image crop UI
├── loading-overlay.tsx
├── startup-popup.tsx
├── templates.ts      TEMPLATES3 array (background, accent colors)
├── changelog.ts      CHANGELOG entries
└── types.ts          BirthdayPostData3, FormData3, NameStyle, etc.

app/api/
├── bd3/msg/route.ts  birthday message generation (Mode A + Mode B SSE)
├── bd/msg/route.ts   BD2 message API
├── solve/route.ts    math solver API
│   └── prompts/      per-category system prompts
└── quiz/route.ts     quiz API

resources/json/
├── Y2L1/Y2L1Q1.tsx   MIS Lecture 01/02/03 quiz data
├── Q2.tsx … Q10.tsx  Year 1 Semester 1 quiz data files
└── computer_arch_quiz.tsx
```

---

## Sidebar Navigation

| Icon | Label | Route | Active match |
|---|---|---|---|
| Home | Home | `/` | exact `/` |
| BookOpen | Notes | `/notes` | `/notes/*` |
| BrainCircuit | Quizzes | `/quiz` | `/quiz/*` |
| FileText | PDFs | `/pdf_links` | `/pdf_links/*` |
| LayoutGrid | Apps | `/apps` | `/apps/*`, `/question-gen` |

On desktop: fixed 80px left rail with icon + label.  
On mobile: fixed bottom bar, 5 equal-width tabs.  
Active state: emerald highlight ring (`ring-1 ring-emerald-500/30`, `bg-emerald-500/15`).

---

## Semester Content

### Current — Year 2 · Semester 1

| Subject | Color | Notes |
|---|---|---|
| Data Structures & Algorithms | blue → indigo | — |
| E-Business Systems | teal → cyan | — |
| Object Oriented Analysis & Design | violet → purple | — |
| Business Economics | amber → orange | — |
| Soft Skills | pink → rose | — |
| Object Oriented Programming | emerald → green | — |
| OOP Practicum | lime → emerald | — |
| Management Information Systems | sky → blue | 3 quizzes (Lectures 01–03) |
| English III | fuchsia → pink | — |

### Archive — Year 1 · Semester 1

| Subject | Color | Resources |
|---|---|---|
| Networking | cyan → purple | Full notes, Full quiz, Full v2, Cisco PT (3×) |
| Computer Architecture | purple → indigo | Full notes, Quiz notes A1-4, Memory notes |
| Information Systems | green → teal | Full notes, Full quiz, IS 3&4, Fundamentals |
| Mathematics | red → pink | AI Math Solver |

---

*Built by Hasitha Sandakelum · 9th Batch · Faculty of Technology · University of Ruhuna*  
*© 2026 — [github.com/dev-sandakelum](https://github.com/dev-sandakelum)*
