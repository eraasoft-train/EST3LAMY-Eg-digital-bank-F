import * as React from "react"
import { Mail, MapPin } from "lucide-react"

export const contactMethods = [
  {
    title: "البريد الإلكتروني",
    titleEn: "Email",
    description: "للتواصل التجاري والاستفسارات",
    descriptionEn: "For business inquiries",
    icon: React.createElement(Mail, { className: "h-5 w-5" }),
    value: "info@est3lamy.com"
  },
  {
    title: "المقر الرئيسي",
    titleEn: "Headquarters",
    description: "القاهرة، جمهورية مصر العربية",
    descriptionEn: "Cairo, Arab Republic of Egypt",
    icon: React.createElement(MapPin, { className: "h-5 w-5" }),
    value: "القاهرة، مصر"
  }
]
