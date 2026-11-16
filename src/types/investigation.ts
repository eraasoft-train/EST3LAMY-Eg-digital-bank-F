export type CaseStatus =
  | "new"
  | "assigned"
  | "field_visit"
  | "under_review"
  | "approved"
  | "rejected"

export type PriorityLevelAr = "عاجل" | "مرتفع" | "عادي"
export type PriorityLevelEn = "Urgent" | "High" | "Normal"

export interface QcChecklist {
  idVerified: boolean
  addressMatched: boolean
  workVerified: boolean
  photosAttached: boolean
  neighborInquiry: boolean
}

export interface InvestigationCase {
  id: string
  institution: string
  institutionEn: string
  type: string
  typeEn: string
  subjectName: string
  subjectNameEn: string
  nationalId: string
  governorate: string
  governorateEn: string
  address: string
  workplace: string
  status: CaseStatus
  priority: PriorityLevelAr
  priorityEn: PriorityLevelEn
  researcherId?: string
  researcherName?: string
  createdDate: string
  visitDate?: string
  gpsVerified: boolean
  gpsCoords?: { lat: number; lng: number }
  evidenceCount: number
  notes?: string
  qcChecklist: QcChecklist
}

export interface FieldResearcher {
  id: string
  name: string
  nameEn: string
  governorate: string
  governorateEn: string
  status: "available" | "in_field" | "offline"
  activeCases: number
  completedMonth: number
  rating: number
  lastActive: string
  phoneMasked: string
}

export interface OperationsStats {
  activeCases: number
  completedToday: number
  fieldResearchersOnline: number
  avgTurnaroundHours: number
  accuracyRate: number
  institutionsServed: number
}

export interface StatItem {
  label: string
  labelEn: string
  value: number
  change: number
  type: "up" | "down" | "neutral" | string
}

export interface RecentCaseItem {
  id: string
  clientName: string
  institution: string
  type: string
  status: string
  priority: string
  date: string
}

export interface ResearcherActivityItem {
  name: string
  cases: number
  casesCompleted: number
  location: string
  avgTime: string
  rating: number
  status: string
}
