import { TopicGroup, Dataset } from "../types/dataset"
import { computerArchitectureGroup } from "./computer-architecture"
import { InformationSystems } from "./information-systems"
import { Networking } from "./networking"
import { PredefinedGroup } from "./predefined"
import { programmingGroup } from "./programming"

// All topic groups
export const topicGroups: TopicGroup[] = [
  programmingGroup,
  computerArchitectureGroup,
  InformationSystems,
  Networking,
  PredefinedGroup
]
// Flatten all datasets for backward compatibility
export const datasets: Dataset[] = topicGroups.flatMap(group => group.subtopics)

// Helper functions
export function getTopicGroupById(id: string): TopicGroup | undefined {
  return topicGroups.find(group => group.id === id)
}

export function getDatasetById(id: string): Dataset | undefined {
  return datasets.find(dataset => dataset.id === id)
}

export function getAllCategories(): string[] {
  return topicGroups.map(group => group.name)
}

export function getDatasetsByCategory(category: string): Dataset[] {
  const group = topicGroups.find(g => g.name === category)
  return group ? group.subtopics : []
}