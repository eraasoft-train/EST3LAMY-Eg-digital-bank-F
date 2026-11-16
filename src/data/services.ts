import * as React from "react"
import { Search, ClipboardCheck, BarChart3 } from "lucide-react"
import type { ServicePlan } from "@/types/service"

export type { ServicePlan }

export const servicePlans: ServicePlan[] = [
  {
    title: "الباقة الأساسية",
    titleEn: "Essential Package",
    description: "مثالية لشركات التمويل الصغيرة والمتوسطة التي تبدأ رقمنة عمليات التحقيق الميداني والتحقق من العملاء.",
    descriptionEn: "Ideal for small and medium finance companies digitizing their investigation and verification workflow.",
    icon: React.createElement(Search, { className: "h-6 w-6 text-blue-600" }),
    features: [
      "إدارة حالات التحقيق الرقمية",
      "تطبيق جوال للباحثين الميدانيين",
      "جمع الصور والأدلة الرقمية",
      "تقارير PDF موثقة ومطابقة",
      "لوحة تحكم أساسية لمتابعة الحالات",
    ],
    featuresEn: [
      "Digital investigation case management",
      "Field researcher mobile application",
      "Photographic and digital evidence logging",
      "Documented PDF verification reports",
      "Operations monitoring dashboard",
    ],
    badge: "مناسب للبداية",
    badgeEn: "Great Start",
    price: "تواصل معنا",
    priceEn: "Contact Us",
  },
  {
    title: "الباقة المتقدمة",
    titleEn: "Advanced Package",
    description: "للبنوك وشركات التمويل الاستهلاكي الكبرى مع إمكانيات التتبع الجغرافي الفوري وتحليل الأداء التشغيلي.",
    descriptionEn: "For commercial banks and large finance companies requiring real-time GPS tracking and performance analytics.",
    icon: React.createElement(ClipboardCheck, { className: "h-6 w-6 text-teal-600" }),
    features: [
      "كل مميزات الباقة الأساسية",
      "تتبع فوري لمواقع الباحثين (GPS Geofencing)",
      "نظام توزيع ذكي للحالات جغرافياً",
      "مراجعة وضبط جودة التقارير (QC Engine)",
      "إشعارات وتنبيهات فورية ومسارات الزيارة",
      "واجهات برمجة التطبيقات API للربط مع أنظمة المؤسسة",
    ],
    featuresEn: [
      "All Essential Package features",
      "Live GPS geofencing researcher tracking",
      "Automated geographic case distribution",
      "Quality control audit engine (QC)",
      "Instant visit alerts and route logging",
      "RESTful API integration with Core Systems",
    ],
    badge: "الأكثر طلباً",
    badgeEn: "Most Requested",
    price: "تواصل معنا",
    priceEn: "Contact Us",
  },
  {
    title: "الباقة المؤسسية الشاملة",
    titleEn: "Enterprise Solution",
    description: "حل مخصص متكامل للمجموعات المصرفية الكبرى ذات شبكات الفروع الواسعة مع تغطية شاملة لكافة المحافظات.",
    descriptionEn: "Tailored enterprise deployment for large banking groups and financial conglomerates across all governorates.",
    icon: React.createElement(BarChart3, { className: "h-6 w-6 text-purple-600" }),
    features: [
      "كل مميزات الباقة المتقدمة",
      "لوحات تحليل أداء ومخاطر ائتمانية متقدمة",
      "إدارة متعددة الفروع والمحافظات والصلاحيات",
      "اتفاقيات مستوى خدمة صارمة (SLA مخصص)",
      "مدير حساب فني وتشغيلي مخصص",
      "دعم فني استشاري وأولوية على مدار الساعة",
    ],
    featuresEn: [
      "All Advanced Package features",
      "Executive risk and turnaround time analytics",
      "Multi-branch and multi-governorate role governance",
      "Custom SLA agreement windows",
      "Dedicated operational account manager",
      "24/7 priority enterprise support",
    ],
    badge: "مؤسسي شامل",
    badgeEn: "Full Enterprise",
    price: "تواصل معنا",
    priceEn: "Contact Us",
  },
]
