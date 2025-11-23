import { TopicGroup } from "../../types/dataset"
import { IsLesson02Dataset } from "./02"
import { IsLesson04Dataset } from "./04"
import { IsLesson05Dataset } from "./05"
import { IsLesson07Dataset } from "./07"
import { mCommerceWeb2Dataset } from "./03"
import { IsFundamentalsDataset } from "./01"

export const InformationSystems: TopicGroup = {
  id: "information-systems",
  name: "Information Systems",
  description: "Information systems concepts and technologies",
  subtopics: [
    IsFundamentalsDataset,
    IsLesson02Dataset,
    mCommerceWeb2Dataset,
    IsLesson04Dataset,
    IsLesson05Dataset,
    IsLesson07Dataset,

  ]
}