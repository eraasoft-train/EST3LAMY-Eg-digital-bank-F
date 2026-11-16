import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { platformFeatures } from "@/data/security"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export const TechSection = memo(function TechSection() {
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
            {t("القدرات التقنية", "Technical Stack")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {t("بنية تحتية مشفرة لتحقيق موثوق", "Encrypted Architecture for Verifiable Audits")}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            {t(
              "تطبيق ميداني يعمل دون إنترنت، تتبع جغرافي بالـ GPS، وتدقيق آلي لضبط الجودة لخدمة المؤسسات المالية.",
              "Offline-first field researcher tools, live GPS geofencing, and automated quality control checklists."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {platformFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.titleEn}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300 bg-slate-50/50 dark:bg-gray-800/30"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300 text-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-10 md:p-14 text-white text-center overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {t("جاهز لرقمنة عمليات التحقيق الميداني بمؤسستك؟", "Ready to Modernize Your Field Operations?")}
            </h2>
            <p className="text-blue-100 mb-8 leading-relaxed text-sm">
              {t(
                "انضم إلى البنوك وشركات التمويل الرائدة في مصر التي تعتمد على استعلامي لتحسين جودة محافظها الائتمانية.",
                "Join leading financial institutions in Egypt leveraging EST3LAMY to improve credit portfolio resilience."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-11 px-7 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs shadow-lg">
                  {t("ابدأ الشراكة الآن", "Start Partnership")}
                </Button>
              </Link>
              <Link href="/technology">
                <Button size="lg" variant="outline" className="h-11 px-7 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 text-xs font-semibold">
                  {t("تفاصيل البنية التحتية والتقنيات", "Tech Infrastructure Details")}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})
