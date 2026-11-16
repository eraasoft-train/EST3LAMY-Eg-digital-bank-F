import * as React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export const contactMethods = [
  {
    title: "الدعم التقني",
    titleEn: "Technical Support",
    description: "متاح طوال أيام الأسبوع للمؤسسات الشريكة",
    descriptionEn: "Available 7 days a week for partner institutions",
    icon: React.createElement(Phone, { className: "h-5 w-5" }),
    value: "+20 100 000 0000"
  },
  {
    title: "البريد الإلكتروني",
    titleEn: "Email",
    description: "نرد في غضون ساعات العمل",
    descriptionEn: "We respond within business hours",
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
