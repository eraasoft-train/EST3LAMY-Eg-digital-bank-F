import { Shield, MapPin, Camera, FileText, Bell, BarChart3 } from "lucide-react"
import type { PlatformFeatureItem, ClientTypeItem } from "@/types/platform"

export type { PlatformFeatureItem, ClientTypeItem }

export const platformFeatures: PlatformFeatureItem[] = [
  {
    icon: Shield,
    title: "أمان بيانات المؤسسات",
    titleEn: "Institution Data Security",
    description: "بيانات العملاء والحالات محمية بتشفير عالي المستوى وصلاحيات وصول دقيقة",
    descriptionEn: "Client and case data protected with high-level encryption and precise access controls",
  },
  {
    icon: MapPin,
    title: "تتبع الموقع الفوري",
    titleEn: "Live Location Tracking",
    description: "تتبع مواقع الباحثين الميدانيين في الوقت الفعلي لضمان التحقق الميداني الفعلي",
    descriptionEn: "Real-time field researcher location tracking to ensure actual field verification",
  },
  {
    icon: Camera,
    title: "جمع الأدلة الرقمية",
    titleEn: "Digital Evidence Collection",
    description: "التقاط صور وأدلة موثقة من الموقع مباشرة عبر تطبيق الهاتف المحمول",
    descriptionEn: "Capture photos and documented evidence directly from the site via the mobile app",
  },
  {
    icon: FileText,
    title: "تقارير رقمية موثقة",
    titleEn: "Documented Digital Reports",
    description: "توليد تقارير تحقيق شاملة وموثقة تُسلَّم للمؤسسة المالية فور الإنجاز",
    descriptionEn: "Generate comprehensive documented investigation reports delivered to the financial institution upon completion",
  },
  {
    icon: Bell,
    title: "إشعارات وتنبيهات فورية",
    titleEn: "Instant Notifications & Alerts",
    description: "تنبيهات لحظية عند تحديث حالة أي طلب تحقيق أو استلام تقرير جديد",
    descriptionEn: "Instant alerts when any investigation request status is updated or a new report is received",
  },
  {
    icon: BarChart3,
    title: "لوحات تحليل الأداء",
    titleEn: "Performance Analytics Dashboards",
    description: "متابعة مؤشرات الأداء للباحثين الميدانيين وجودة التقارير وأوقات الإنجاز",
    descriptionEn: "Monitor field researcher performance indicators, report quality and completion times",
  },
]

export const clientTypes: ClientTypeItem[] = [
  {
    name: "البنوك",
    nameEn: "Banks",
    description: "تحقيق ميداني لطلبات الائتمان والتمويل",
    descriptionEn: "Field investigation for credit and financing requests",
  },
  {
    name: "شركات التمويل الاستهلاكي",
    nameEn: "Consumer Finance Companies",
    description: "التحقق من بيانات المتقدمين وعناوينهم",
    descriptionEn: "Verify applicant data and addresses",
  },
  {
    name: "شركات التأجير التمويلي",
    nameEn: "Leasing Companies",
    description: "تقييم ميداني للعملاء والأصول",
    descriptionEn: "Field assessment of clients and assets",
  },
  {
    name: "شركات التمويل متناهي الصغر",
    nameEn: "Microfinance Companies",
    description: "تحقيق سريع لقرارات ائتمانية أسرع",
    descriptionEn: "Fast investigation for quicker credit decisions",
  },
]
