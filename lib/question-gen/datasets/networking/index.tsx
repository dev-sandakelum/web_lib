import { TopicGroup } from "../../types/dataset"
import { networksLesson01Dataset } from "./01"
import { networksLesson02Dataset } from "./02"
import { networksLesson03Dataset } from "./03"
import { networksLesson04Dataset } from "./04"
import { networksLesson05Dataset } from "./05"
import { networksLesson06Dataset } from "./06"
import { networksLesson07Dataset } from "./07"

// export const InformationSystems: TopicGroup = {
//   id: "information-systems",
//   name: "Information Systems",
//   description: "Information systems concepts and technologies",
//   subtopics: [

//   ]
// }
export const Networking: TopicGroup = {
    id : "Network",
    name : "Networking",
    description : "",
    subtopics : [
        networksLesson01Dataset,
        networksLesson02Dataset,
        networksLesson03Dataset,
        networksLesson04Dataset,
        networksLesson05Dataset,
        networksLesson06Dataset,
        networksLesson07Dataset,
    ]
}