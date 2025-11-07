import { expressionsAndOperatorsDataset } from "../datasets/expressionsAndOperators"
import { internalMemoryDataset } from "../datasets/internalMemory"


export interface Dataset {
  id: string
  category: string
  description: string
  content: string
}

export const datasets: Dataset[] = [
  expressionsAndOperatorsDataset,
  internalMemoryDataset
]

export function getDatasetById(id: string): Dataset | undefined {
  return datasets.find(dataset => dataset.id === id)
}

export function getAllCategories(): string[] {
  return datasets.map(dataset => dataset.category)
}