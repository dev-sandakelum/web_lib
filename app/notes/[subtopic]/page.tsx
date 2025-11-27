"use client"

import TopicView from "@/components/dashboard/TopicView"
import { mainTopics } from "@/components/data"
import { notFound, useParams } from "next/navigation"

export default function SubTopicPage() {
  const params = useParams()
  const subtopicId = params.subtopic as string
  
  const notesTopic = mainTopics.find(t => t.id === "notes")
  const subTopic = notesTopic?.subTopics.find(s => s.id === subtopicId)

  if (!subTopic) {
    return notFound()
  }

  const items = subTopic.items.map(item => ({
    id: item.id,
    title: item.title,
    readTime: item.readTime,
    tags: item.tags,
    type: "file" as const,
    link: item.link
  }))

  return (
    <TopicView 
      title={subTopic.title}
      description={`${subTopic.items.length} resources available`}
      items={items}
      parentLink="/notes"
      breadcrumbs={[
        { title: "Notes", link: "/notes" },
        { title: subTopic.title, link: `/notes/${subtopicId}` }
      ]}
    />
  )
}
