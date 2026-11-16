export interface NavItem {
  name: string
  nameEn: string
  href: string
  badge?: string
  badgeEn?: string
}

export const navigation: NavItem[] = [
  { name: "الحلول",        nameEn: "Solutions",    href: "/solutions" },
  { name: "كيف يعمل",     nameEn: "How It Works", href: "/how-it-works" },
  { name: "التقنية",       nameEn: "Technology",   href: "/technology" },
  { name: "القطاعات",     nameEn: "Industries",   href: "/industries" },
  { name: "من نحن",       nameEn: "About",        href: "/about" },
  { name: "بوابة العمليات", nameEn: "Operations Portal", href: "/dashboard", badge: "تجريبي", badgeEn: "Demo" },
  { name: "تواصل معنا",   nameEn: "Contact",      href: "/contact" },
]
