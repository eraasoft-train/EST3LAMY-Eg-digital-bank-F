import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { workflowSteps } from "@/data/workflow"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"
import { Link } from "wouter"
import { LayoutDashboard, Smartphone, MapPin, ShieldCheck } from "lucide-react"

export default function HowItWorksPage() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t(
      "كيف يعمل النظام — استعلامي | دورة حياة التحقيق الميداني",
      "How It Works — EST3LAMY | Field Investigation Lifecycle"
    ),
    description: t(
      "تعرف على 8 خطوات رقمية متكاملة في منصة استعلامي: من استلام طلب التحقيق وحتى تسليم التقرير الموثق للمؤسسة المالية.",
      "Explore the 8 integrated digital stages in EST3LAMY: from case submission to final verified report delivery."
    ),
    canonical: "https://est3lamy.vercel.app/how-it-works",
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="secondary" className="mb-5 px-3 py-1.5 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              {t("آلية ومنهجية العمل", "Methodology & Workflow")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              {t("من الطلب إلى التقرير المعتمد", "From Request to Delivered Report")}
            </h1>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t(
                "8 مراحل رقمية متسلسلة تضمن الشفافية والنزاهة وتمنع الزيارات الوهمية تماماً في كل حالة تحقيق.",
                "8 structured digital stages guaranteeing transparency, GPS integrity, and eliminating fraudulent visits."
              )}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Mobile App In-Field Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl bg-slate-900 group"
        >
          <div className="relative aspect-video sm:aspect-[21/9] overflow-hidden">
            <img
              src="/field-mobile-app.jpg"
              alt="EST3LAMY Mobile App for Field Researchers"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent pointer-events-none" />

            <div className="absolute top-4 start-4 flex items-center gap-2">
              <Badge className="bg-blue-600/90 text-white backdrop-blur-md border-0 text-xs font-bold gap-1.5 px-3 py-1">
                <Smartphone className="h-3.5 w-3.5" />
                {t("تطبيق الباحث الميداني — إصدار العمليات", "Field Ops Mobile App")}
              </Badge>
            </div>

            <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  {t("توثيق فوري بالبصمة الجغرافية GPS", "Real-Time GPS Geotagged Verification")}
                </h3>
                <p className="text-xs text-gray-200 mt-0.5">
                  {t(
                    "التقاط صور محل الإقامة وعدّاد الكهرباء مع تثبيت الإحداثيات لمنع الزيارات الوهمية تماماً.",
                    "Live photo capture with tamper-proof coordinates preventing proxy and fraudulent visits."
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {t("مشفر وموثق", "Encrypted & Verified")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="space-y-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === workflowSteps.length - 1
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col sm:flex-row gap-5 items-start"
                >
                  {/* Icon badge */}
                  <div className="shrink-0 flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${
                        isLast ? "bg-emerald-600 text-white" : "bg-blue-600 text-white"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content card */}
                  <Card className="flex-1 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full">
                          {t(`المرحلة ${step.step}`, `Stage ${step.step}`)}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {language === "ar" ? step.name : step.nameEn}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {language === "ar" ? step.description : step.descriptionEn}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{t("الطرف المنفذ:", "Responsible Actor:")}</span>
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2.5 py-0.5 rounded-lg border border-blue-100 dark:border-blue-900">
                          {language === "ar" ? step.actor : step.actorEn}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Summary CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-900/20 rounded-3xl p-8 sm:p-10 border border-blue-100 dark:border-blue-800/60 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {t("جاهز لاختبار المنظومة في بيئة تشغيلية حقيقية؟", "Ready to Test the Platform Workflow Live?")}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed mb-6">
            {t(
              "اكتشف كيف تدير بوابة استعلامي الحالات وتوزع المهام على الباحثين الميدانيين مع التدقيق الفوري لنتائج الزيارة.",
              "See how EST3LAMY operations portal manages cases, dispatches field researchers, and audits evidence."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs gap-2">
                <LayoutDashboard className="h-4 w-4" />
                {t("بوابة العمليات (محاكاة)", "Open Operations Demo")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-11 px-6 rounded-xl text-xs font-semibold">
                {t("طلب شراكة لمؤسستك", "Request Partnership")}
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
