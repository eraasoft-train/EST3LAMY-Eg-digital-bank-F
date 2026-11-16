import type { ReactNode } from "react"

export interface IndustryOffering {
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  icon: ReactNode
  features: string[]
  featuresEn: string[]
}

export interface IndustrySector {
  id: string
  title: string
  titleAr: string
  subtitle: string
  subtitleAr: string
  description: string
  descriptionAr: string
  challenges: string[]
  challengesAr: string[]
  solutions: string[]
  solutionsAr: string[]
  metrics: {
    label: string
    labelAr: string
    value: string
  }[]
  icon: string
}
