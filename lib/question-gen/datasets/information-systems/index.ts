import { TopicGroup } from "../../types/dataset"
import { operationalEnterpriseSystemsDataset } from "./2_operationalEnterpriseSystemsDataset"
import { isFundamentalsDataset } from "./Fundamentals"
import { mCommerceWeb2Dataset } from "./m-commerce-web2"

export const InformationSystems: TopicGroup = {
  id: "information-systems",
  name: "Information Systems",
  description: "Information systems concepts and technologies",
  subtopics: [
    isFundamentalsDataset,
    operationalEnterpriseSystemsDataset,
    mCommerceWeb2Dataset,
  ]
}