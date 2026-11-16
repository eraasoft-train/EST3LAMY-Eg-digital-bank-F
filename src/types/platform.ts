import type { ComponentType } from "react"

export interface PlatformFeatureItem {
  icon: ComponentType<{ className?: string }>
  title: string
  titleEn: string
  description: string
  descriptionEn: string
}

export interface ClientTypeItem {
  name: string
  nameEn: string
  description: string
  descriptionEn: string
}
