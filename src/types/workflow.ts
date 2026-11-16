import type { ComponentType } from "react"

export interface WorkflowStep {
  id: string
  step: number
  name: string
  nameEn: string
  icon: ComponentType<{ className?: string }>
  description: string
  descriptionEn: string
  actor: string
  actorEn: string
}
