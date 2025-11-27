"use client"

import TopicView from "@/components/dashboard/TopicView"
import { mainTopics } from "@/components/data"

export default function NotesPage() {
  const notesTopic = mainTopics.find(t => t.id === "notes")

  if (!notesTopic) return <div>Topic not found</div>

  const items = notesTopic.subTopics.map(sub => ({
    id: sub.id,
    title: sub.title,
    description: `${sub.items.length} resources`,
    type: "folder" as const,
    link: `/notes/${sub.id}`
  }))

  return (
    <TopicView 
      title={notesTopic.title}
      description={notesTopic.description}
      items={items}
      parentLink="/"
      breadcrumbs={[{ title: "Notes", link: "/notes" }]}
    />
  )
}
