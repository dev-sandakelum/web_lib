import { TopicGroup } from "../../types/dataset"
import { ProgrammingDataset } from "./all"
import { expressionsAndOperatorsDataset } from "./expressionsAndOperators"

export const programmingGroup: TopicGroup = {
  id: "programming",
  name: "Programming",
  description: "Programming concepts and data structures",
  subtopics: [
    ProgrammingDataset,
    expressionsAndOperatorsDataset,
  ]
}