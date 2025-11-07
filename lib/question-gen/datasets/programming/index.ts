import { TopicGroup } from "../../types/dataset"
import { arraysDataset } from "./arrays"
import { expressionsAndOperatorsDataset } from "./expressionsAndOperators"

export const programmingGroup: TopicGroup = {
  id: "programming",
  name: "Programming",
  description: "Programming concepts and data structures",
  subtopics: [
    arraysDataset,
    expressionsAndOperatorsDataset,
  ]
}