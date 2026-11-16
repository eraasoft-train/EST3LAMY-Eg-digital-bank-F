export interface NavItem {
  name: string
  nameEn: string
  href: string
  badge?: string
  badgeEn?: string
  title?: string
  titleAr?: string
  description?: string
  descriptionAr?: string
}

export interface FooterLink {
  title: string
  titleAr: string
  href: string
}

export interface FooterSection {
  title: string
  titleAr: string
  links: FooterLink[]
}
