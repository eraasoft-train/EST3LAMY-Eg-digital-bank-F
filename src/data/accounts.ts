import * as React from "react"
import { Search, ClipboardCheck, BarChart3 } from "lucide-react"

// EST3LAMY service packages for financial institutions
export const servicePlans = [
  {
    title: "الباقة الأساسية",
    titleEn: "Essential Package",
    description: "مثالية لشركات التمويل الصغيرة والمتوسطة التي تبدأ رقمنة عمليات تحقيقها.",
    descriptionEn: "Ideal for small and medium finance companies starting to digitize their investigation operations.",
    icon: React.createElement(Search, { className: "h-6 w-6 text-blue-600" }),
    features: [
      "إدارة حالات التحقيق الرقمية",
      "تطبيق جوال للباحثين الميدانيين",
      "جمع الصور والأدلة الرقمية",
      "تقارير PDF موثقة",
      "لوحة تحكم أساسية",
    ],
    featuresEn: [
      "Digital investigation case management",
      "Mobile app for field researchers",
      "Photo and digital evidence collection",
      "Documented PDF reports",
      "Basic control dashboard",
    ],
    badge: "مناسب للبداية",
    badgeEn: "Great Start",
    price: "تواصل معنا",
    priceEn: "Contact Us",
  },
  {
    title: "الباقة المتقدمة",
    titleEn: "Advanced Package",
    description: "للبنوك وشركات التمويل الكبيرة مع إمكانيات التتبع الفوري وتحليل الأداء.",
    descriptionEn: "For large banks and finance companies with live tracking and performance analysis capabilities.",
    icon: React.createElement(ClipboardCheck, { className: "h-6 w-6 text-teal-600" }),
    features: [
      "كل مميزات الباقة الأساسية",
      "تتبع فوري لمواقع الباحثين",
      "نظام توزيع ذكي للحالات",
      "مراجعة وضبط جودة التقارير",
      "إشعارات وتنبيهات فورية",
      "تكامل API مع أنظمة المؤسسة",
    ],
    featuresEn: [
      "All Essential Package features",
      "Live researcher location tracking",
      "Smart case distribution system",
      "Report quality control & review",
      "Instant notifications & alerts",
      "API integration with institution systems",
    ],
    badge: "الأكثر طلباً",
    badgeEn: "Most Requested",
    price: "تواصل معنا",
    priceEn: "Contact Us",
  },
  {
    title: "الباقة المؤسسية",
    titleEn: "Enterprise Package",
    description: "حل شامل مخصص للمجموعات المالية الكبرى ومتعددة الفروع مع تقارير تحليلية متقدمة.",
    descriptionEn: "Comprehensive solution for large financial groups and multi-branch institutions with advanced analytics.",
    icon: React.createElement(BarChart3, { className: "h-6 w-6 text-purple-600" }),
    features: [
      "كل مميزات الباقة المتقدمة",
      "لوحات تحليل أداء متقدمة",
      "إدارة متعددة الفروع والمناطق",
      "تقارير تحليلية مخصصة",
      "مدير حساب مخصص",
      "دعم فني أولوية 24/7",
    ],
    featuresEn: [
      "All Advanced Package features",
      "Advanced performance analytics dashboards",
      "Multi-branch and region management",
      "Custom analytical reports",
      "Dedicated account manager",
      "24/7 priority technical support",
    ],
    badge: "مؤسسي",
    badgeEn: "Enterprise",
    price: "تواصل معنا",
    priceEn: "Contact Us",
  },
]

// Keep old export name for backward compatibility during transition
export const accountTypes = servicePlans
