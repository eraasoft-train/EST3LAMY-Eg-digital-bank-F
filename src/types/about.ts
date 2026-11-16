import type { ReactNode } from "react"

export interface ValueItem {
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  icon: ReactNode
}

export interface MilestoneItem {
  year: string
  yearEn: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
}
