import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, LayoutDashboard } from "lucide-react"
import { servicePlans } from "@/data/services"
import { platformFeatures } from "@/data/security"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"
import { Link } from "wouter"

export default function SolutionsPage() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t(
      "حلول استعلامي — منصة التحقيق الميداني الرقمي للمؤسسات المالية",
      "EST3LAMY Solutions — Digital Field Investigation for Financial Institutions"
    ),
    description: t(
      "اكتشف باقات وحلول استعلامي للتحقيق الميداني وإدارة الحالات والتحقق من العملاء للبنوك وشركات التمويل في مصر.",
      "Explore EST3LAMY solution tiers for field investigation, applicant verification, and credit risk mitigation."
    ),
    canonical: "https://est3lamy.vercel.app/solutions",
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 pt-24 pb-24 overflow-hidden relative text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-white/10 text-white border-white/20 rounded-full px-3.5 py-1 text-xs font-medium">
              {t("حلول وباقات الخدمة", "Platform Solutions & Packages")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              {t("كل ما تحتاجه لرقمنة التحقيق الميداني", "Everything Needed to Digitize Field Investigations")}
            </h1>
            <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t(
                "من إدارة الحالات والتوزيع الذكي إلى التتبع الجغرافي وتقارير الجودة — استعلامي توفر منظومة متكاملة لقرارات ائتمانية أدق.",
                "From case dispatch and GPS geofencing to QC audit checklists — EST3LAMY provides an integrated ecosystem for financial institutions."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/dashboard">
                <Button size="lg" className="h-11 px-6 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs gap-2 shadow-lg">
                  <LayoutDashboard className="h-4 w-4 text-blue-600" />
                  {t("تجربة البوابة الميدانية (محاكاة)", "Try Operations Portal")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-11 px-6 rounded-xl border-white/30 text-white hover:bg-white/10 text-xs font-semibold">
                  {t("طلب شراكة لمؤسستك", "Request Partnership")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Platform capabilities */}
        <div className="mb-24">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              {t("قدرات وإمكانيات المنصة", "Platform Capabilities")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {t(
                "أدوات تكنولوجية مصممة خصيصاً للتحقق الميداني الموثوق وتعزيز جودة المحافظ الائتمانية.",
                "Specialized capabilities engineered for verifiable field audits and higher credit portfolio health."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.titleEn}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group bg-slate-50/40 dark:bg-gray-800/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {language === "ar" ? feature.title : feature.titleEn}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {language === "ar" ? feature.description : feature.descriptionEn}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Service plans */}
        <div className="mb-20">
          <div className="text-center mb-14 max-w-xl mx-auto">
            <Badge variant="secondary" className="mb-3 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 text-xs">
              {t("باقات الخدمة والشراكة", "Service Tiers")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              {t("اختر الباقة المناسبة لمؤسستك", "Choose the Tier Built for Your Institution")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {t(
                "خطط مرنة تلائم البنوك الكبرى، وشركات التمويل الاستهلاكي والتأجير، ومؤسسات التمويل متناهي الصغر.",
                "Flexible operational tiers tailored for commercial banks, consumer finance, leasing, and microfinance."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {servicePlans.map((plan, index) => (
              <motion.div
                key={plan.titleEn}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full ${
                  index === 1
                    ? "border-blue-500 shadow-xl shadow-blue-500/10 dark:border-blue-700 bg-white dark:bg-gray-800 relative"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/60 hover:shadow-md"
                }`}>
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white text-[10px] px-3 py-0.5 rounded-full font-bold">
                        {t("الأكثر طلباً للمؤسسات", "Most Requested")}
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-7">
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                        {plan.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {language === "ar" ? plan.title : plan.titleEn}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {language === "ar" ? plan.description : plan.descriptionEn}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 dark:border-gray-700 pt-6 mb-6">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        {t("المميزات المشمولة:", "What's Included:")}
                      </div>
                      <ul className="space-y-2.5 text-xs">
                        {(language === "ar" ? plan.features : plan.featuresEn).map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <div className="p-7 pt-0">
                    <Link href="/contact">
                      <Button
                        className={`w-full h-11 rounded-xl text-xs font-semibold ${
                          index === 1
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                            : "bg-slate-100 hover:bg-slate-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                        }`}
                      >
                        {t("تواصل لبدء الشراكة", "Request Quote & Partnership")}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
