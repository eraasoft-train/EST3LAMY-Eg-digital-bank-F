export interface ContactDraft {
  firstName: string
  lastName: string
  email: string
  phone: string
  institution: string
  sector: string
  message: string
}

export interface EnterpriseInquiryDraft {
  institutionName: string
  institutionType: string
  contactPerson: string
  jobTitle: string
  email: string
  phone: string
  governorates: string[]
  monthlyVolume: string
  investigationTypes: string[]
  message: string
}

export interface ContactMethod {
  id?: string
  title: string
  titleEn?: string
  description?: string
  descriptionEn?: string
  value?: string
  link?: string
  icon?: any
}
