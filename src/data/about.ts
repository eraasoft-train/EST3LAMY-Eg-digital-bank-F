import * as React from "react"
import { Shield, Target, Users, Zap } from "lucide-react"

export const values = [
  {
    title: "الدقة والموثوقية",
    titleEn: "Accuracy & Reliability",
    description: "جودة تقارير التحقيق تنعكس مباشرة على جودة المحفظة الائتمانية — نضمن أعلى معايير الدقة في كل حالة.",
    descriptionEn: "Investigation report quality directly reflects portfolio quality — we guarantee the highest accuracy standards in every case.",
    icon: React.createElement(Shield, { className: "h-6 w-6 text-blue-600" })
  },
  {
    title: "الابتكار الرقمي",
    titleEn: "Digital Innovation",
    description: "نرقمن عملية التحقيق الميداني بالكامل — من استلام الحالة إلى تسليم التقرير النهائي للمؤسسة المالية.",
    descriptionEn: "We fully digitize the field investigation process — from case receipt to final report delivery to the financial institution.",
    icon: React.createElement(Zap, { className: "h-6 w-6 text-teal-600" })
  },
  {
    title: "خدمة المؤسسات المالية",
    titleEn: "Financial Institution Service",
    description: "نعمل مع البنوك وشركات التمويل والتأجير التمويلي لتعزيز كفاءة قرارات منح الائتمان.",
    descriptionEn: "We work with banks, finance and leasing companies to enhance credit decision efficiency.",
    icon: React.createElement(Target, { className: "h-6 w-6 text-purple-600" })
  },
  {
    title: "فريق بحثي متخصص",
    titleEn: "Specialized Research Team",
    description: "شبكة واسعة من الباحثين الميدانيين المدربين على التحقق وجمع الأدلة وفق أعلى معايير الجودة.",
    descriptionEn: "A wide network of field researchers trained in verification and evidence collection to the highest quality standards.",
    icon: React.createElement(Users, { className: "h-6 w-6 text-orange-600" })
  }
]

export const milestones = [
  {
    year: "البداية",
    yearEn: "The Start",
    title: "تأسيس الفكرة",
    titleEn: "The Founding Idea",
    description: "وُلدت فكرة استعلامي من تحدٍّ حقيقي: الحاجة إلى رقمنة عملية التحقيق الميداني في المؤسسات المالية المصرية.",
    descriptionEn: "EST3LAMY was born from a real challenge: the need to digitize the field investigation process in Egyptian financial institutions."
  },
  {
    year: "الإطلاق",
    yearEn: "Launch",
    title: "إطلاق المنصة",
    titleEn: "Platform Launch",
    description: "أطلقنا المنصة الرقمية وتطبيق الهاتف المحمول لرقمنة كاملة لدورة حياة الحالات البحثية.",
    descriptionEn: "We launched the digital platform and mobile app for complete digitization of investigation case lifecycle."
  },
  {
    year: "النمو",
    yearEn: "Growth",
    title: "توسع المؤسسات الشريكة",
    titleEn: "Partner Institution Expansion",
    description: "بدأنا في خدمة بنوك وشركات تمويل استهلاكي وتأجير تمويلي في مصر، محققين نتائج مثبتة في جودة المحافظ الائتمانية.",
    descriptionEn: "We began serving banks, consumer finance and leasing companies in Egypt, achieving proven results in credit portfolio quality."
  },
  {
    year: "المستقبل",
    yearEn: "The Future",
    title: "التوسع والشراكات",
    titleEn: "Expansion & Partnerships",
    description: "نسعى لتوسيع منصتنا لتشمل المزيد من المؤسسات المالية وتطوير قدرات التحليل الذكي للبيانات الميدانية.",
    descriptionEn: "We aim to expand our platform to serve more financial institutions and develop intelligent analytics for field data."
  }
]
