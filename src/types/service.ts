import type { ReactNode } from "react"

export interface ServicePlan {
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  icon: ReactNode
  features: string[]
  featuresEn: string[]
  badge: string
  badgeEn: string
  price: string
  priceEn: string
}
