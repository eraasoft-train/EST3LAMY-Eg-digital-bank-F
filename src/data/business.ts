import * as React from "react"
import { Building2, CreditCard, Home, Landmark, TrendingUp, Briefcase } from "lucide-react"
import type { IndustryOffering } from "@/types/industry"

export type { IndustryOffering }

export const industries: IndustryOffering[] = [
  {
    title: "البنوك",
    titleEn: "Banks",
    description: "تحقيق ميداني متكامل لقرارات منح الائتمان والقروض الشخصية والتجارية.",
    descriptionEn: "Comprehensive field investigation for personal and commercial credit and loan decisions.",
    icon: React.createElement(Landmark, { className: "h-6 w-6 text-blue-600" }),
    features: [
      "تحقق من بيانات طالبي القروض",
      "التحقق من عناوين السكن والعمل",
      "تقييم الوضع الاجتماعي والاقتصادي",
      "توثيق الأصول والضمانات",
    ],
    featuresEn: [
      "Verification of loan applicant data",
      "Home and work address verification",
      "Social and economic status assessment",
      "Asset and collateral documentation",
    ],
  },
  {
    title: "شركات التمويل الاستهلاكي",
    titleEn: "Consumer Finance",
    description: "تسريع قرارات منح التمويل بتقارير تحقيق دقيقة وسريعة.",
    descriptionEn: "Accelerate financing decisions with accurate and fast investigation reports.",
    icon: React.createElement(CreditCard, { className: "h-6 w-6 text-teal-600" }),
    features: [
      "تحقق سريع من هوية العملاء",
      "زيارات ميدانية موثقة",
      "تقارير جاهزة خلال ساعات",
      "تكامل مع أنظمة الائتمان",
    ],
    featuresEn: [
      "Fast client identity verification",
      "Documented field visits",
      "Reports ready within hours",
      "Credit system integration",
    ],
  },
  {
    title: "التأجير التمويلي",
    titleEn: "Leasing Companies",
    description: "تقييم ميداني شامل للعملاء والأصول المراد تأجيرها تمويلياً.",
    descriptionEn: "Comprehensive field assessment of clients and assets to be leased.",
    icon: React.createElement(Briefcase, { className: "h-6 w-6 text-purple-600" }),
    features: [
      "تقييم ميداني للأصول",
      "تحقق من بيانات الشركات",
      "توثيق مواقع النشاط التجاري",
      "تقارير مفصلة للجنة الائتمان",
    ],
    featuresEn: [
      "Field assessment of assets",
      "Company data verification",
      "Business location documentation",
      "Detailed reports for credit committee",
    ],
  },
  {
    title: "التمويل العقاري",
    titleEn: "Mortgage Finance",
    description: "تحقيق ميداني متخصص لطلبات التمويل العقاري والتحقق من العقارات.",
    descriptionEn: "Specialized field investigation for mortgage finance requests and property verification.",
    icon: React.createElement(Home, { className: "h-6 w-6 text-orange-600" }),
    features: [
      "معاينة ميدانية للعقارات",
      "تحقق من وثائق الملكية",
      "تقييم الوضع المعيشي للطالب",
      "توثيق فوتوغرافي شامل",
    ],
    featuresEn: [
      "On-site property inspection",
      "Ownership document verification",
      "Applicant living situation assessment",
      "Comprehensive photographic documentation",
    ],
  },
  {
    title: "التمويل متناهي الصغر",
    titleEn: "Microfinance",
    description: "تحقيق ميداني سريع وفعّال لدعم قرارات التمويل الصغير والمشاريع المتناهية الصغر.",
    descriptionEn: "Fast and efficient field investigation to support small financing and micro-enterprise decisions.",
    icon: React.createElement(TrendingUp, { className: "h-6 w-6 text-green-600" }),
    features: [
      "زيارات ميدانية سريعة",
      "التحقق من المشروع الصغير",
      "تقييم بيئة العمل",
      "تقارير مختصرة وفعّالة",
    ],
    featuresEn: [
      "Fast field visits",
      "Small project verification",
      "Work environment assessment",
      "Concise and effective reports",
    ],
  },
  {
    title: "شركات الفينتك",
    titleEn: "Fintech Companies",
    description: "دعم شركات التكنولوجيا المالية بتحقق ميداني مكمل لعمليات الـ KYC الرقمية.",
    descriptionEn: "Support fintech companies with field verification complementing digital KYC processes.",
    icon: React.createElement(Building2, { className: "h-6 w-6 text-indigo-600" }),
    features: [
      "تكامل API سلس",
      "تحقق ميداني مكمل لـ eKYC",
      "نتائج سريعة بتنسيقات رقمية",
      "دعم بروتوكولات الأمان الحديثة",
    ],
    featuresEn: [
      "Seamless API integration",
      "Field verification complementing eKYC",
      "Fast results in digital formats",
      "Support for modern security protocols",
    ],
  },
]

// Keep old export for backward compatibility
export const businessSolutions = industries.slice(0, 3).map(ind => ({
  title: ind.titleEn,
  description: ind.descriptionEn,
  icon: ind.icon,
  features: ind.featuresEn,
}))
