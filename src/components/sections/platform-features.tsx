import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ClipboardCheck, BarChart3, MapPin, FileText, Check } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "wouter"
import { useLanguage } from "@/context/language-context"

const solutionsData = [
  {
    id: "investigation",
    name: "التحقيق الميداني الذكي",
    nameEn: "Digital Field Investigation",
    icon: Search,
    description: "رقمنة كاملة لدورة حياة التحقيق الميداني من تسجيل الطلب وتوزيعه حتى تسليم التقرير النهائي.",
    descriptionEn: "End-to-end digitization of field investigations from case registration to verified delivery.",
    features: ["إدارة حالات ذكية", "توزيع تلقائي للحالات", "تتبع فوري للباحثين", "تقارير PDF موثقة"],
    featuresEn: ["Smart case management", "Automated dispatch", "Live GPS tracking", "Documented PDF reports"],
    badge: "الأساس",
    badgeEn: "Core",
  },
  {
    id: "verification",
    name: "التحقق من هوية العملاء ومحل الإقامة",
    nameEn: "Identity & Residency Verification",
    icon: ClipboardCheck,
    description: "التحقق الميداني الموثق من صحة عنوان السكن ومحل العمل ومطابقة بطاقة الرقم القومي.",
    descriptionEn: "Field verification of applicant residency address, workplace, and national identity match.",
    features: ["تحقق من الهوية الوطنية", "زيارة وتوثيق السكن", "التحقق من جهة العمل", "توثيق فوتوغرافي"],
    featuresEn: ["National ID check", "Residency visit proof", "Workplace confirmation", "Photo evidence"],
    badge: "الأكثر طلباً",
    badgeEn: "High Demand",
  },
  {
    id: "tracking",
    name: "التتبع الجغرافي المباشر",
    nameEn: "Real-time Geofenced Tracking",
    icon: MapPin,
    description: "تتبع مواقع الباحثين الميدانيين بالـ GPS في الوقت الفعلي لضمان التنفيذ الفعلي ومنع الزيارات الوهمية.",
    descriptionEn: "Real-time GPS tracking verifying researcher presence on-site and preventing fraudulent visits.",
    features: ["GPS فوري للباحثين", "تسجيل وقت الزيارة", "مسار الباحث الكامل", "تنبيهات انحراف المسار"],
    featuresEn: ["Real-time researcher GPS", "Timestamped visits", "Audit breadcrumbs", "Geofence alerts"],
    badge: "دقة عالية",
    badgeEn: "High Precision",
  },
  {
    id: "reports",
    name: "إدارة وضبط جودة التقارير",
    nameEn: "QC Audit & Report Delivery",
    icon: FileText,
    description: "مراجعة تقارير التحقيق وتدقيق اكتمال الأدلة والصور قبل تسليمها المباشر للمؤسسة المالية.",
    descriptionEn: "Multi-point QC audit reviewing evidence, photos, and findings before release to institutions.",
    features: ["قوالب تقارير معتمدة", "مراجعة ضبط الجودة", "أرشفة رقمية مشفرة", "إرسال آلي للمؤسسة"],
    featuresEn: ["Accredited report templates", "QC review checklists", "Encrypted digital archive", "Instant delivery"],
    badge: "موثق",
    badgeEn: "Audited",
  },
  {
    id: "analytics",
    name: "التحليلات ومؤشرات الأداء",
    nameEn: "Operations Analytics & TAT",
    icon: BarChart3,
    description: "لوحات تحكم متقدمة لمتابعة متوسط وقت الإنجاز (TAT) والتغطية الجغرافية في 27 محافظة.",
    descriptionEn: "Executive dashboards tracking turnaround times (TAT), governorate density, and researcher ratings.",
    features: ["مؤشرات أداء رئيسية", "تقارير أداء الباحثين", "مقارنة أوقات الإنجاز", "تحليلات جودة التقارير"],
    featuresEn: ["Core KPI tracking", "Researcher rating reports", "Turnaround benchmarks", "Risk insights"],
    badge: "ذكاء تشغيلي",
    badgeEn: "Intelligence",
  },
]

export const PlatformFeatures = memo(function PlatformFeatures() {
  const { language, t } = useLanguage()

  return (
    <section className="py-24 bg-white dark:bg-gray-900" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium text-xs">
            {t("منظومة استعلامي المتكاملة", "EST3LAMY Integrated Suite")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {t("حلول متخصصة لرقمنة التحقيق الميداني", "Specialized Digital Investigation Solutions")}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            {t(
              "كل أداة مصممة لتلبية متطلبات المخاطر والائتمان لدى البنوك وشركات التمويل في مصر بأعلى معايير الدقة والنزاهة.",
              "Engineered to fulfill risk and credit requirements of Egyptian financial institutions with rigorous accuracy."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((sol, index) => {
            const Icon = sol.icon
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-7 rounded-3xl border border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/40 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5 rounded-full border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                      {language === "ar" ? sol.badge : sol.badgeEn}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {language === "ar" ? sol.name : sol.nameEn}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {language === "ar" ? sol.description : sol.descriptionEn}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs">
                    {(language === "ar" ? sol.features : sol.featuresEn).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Check className="h-3.5 w-3.5 text-teal-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/solutions">
                  <Button variant="ghost" size="sm" className="w-full text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 rounded-xl justify-between">
                    <span>{t("تفاصيل الحل", "Solution Details")}</span>
                    <span>→</span>
                  </Button>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

// Backward compatibility alias
export const SolutionsSection = PlatformFeatures
