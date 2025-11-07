import { TopicGroup } from "../../types/dataset"
import { introductionDataset } from "./introduction"

export const computerArchitectureGroup: TopicGroup = {
  id: "computer-architecture",
  name: "Computer Architecture",
  description: "Fundamentals of computer architecture, organization, and system structure",
  subtopics: [
    introductionDataset
  ]
}