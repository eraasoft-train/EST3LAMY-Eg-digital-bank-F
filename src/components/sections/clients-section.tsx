import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { clientTypes } from "@/data/security"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export const ClientsSection = memo(function ClientsSection() {
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
            {t("القطاعات المخدومة", "Sectors We Serve")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {t("حلول مخصصة لقطاعك المالي", "Engineered for Your Financial Sector")}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            {t(
              "منصة استعلامي تخدم مختلف المؤسسات المالية الائتمانية والتمويلية في مصر.",
              "EST3LAMY serves commercial credit institutions, consumer lenders, and fintech innovators across Egypt."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.nameEn}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all duration-300 h-full rounded-3xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                      {language === "ar" ? client.name[0] : client.nameEn[0]}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {language === "ar" ? client.name : client.nameEn}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {language === "ar" ? client.description : client.descriptionEn}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-gray-950 to-blue-950 p-10 md:p-14 text-center text-white overflow-hidden relative shadow-xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {t("مؤسستك المالية تستحق تحقيقاً موثوقاً", "Your Organization Deserves Accurate Verification")}
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              {t(
                "تواصل مع فريق استعلامي اليوم لمعرفة كيف يمكن لمنصتنا تحسين جودة محفظتك وسرعة قرارات الائتمان.",
                "Connect with EST3LAMY experts today to discover how digital field investigation enhances credit speed and asset quality."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-11 px-7 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-bold text-xs shadow-lg">
                  {t("تحدث مع فريقنا", "Talk to Our Team")}
                </Button>
              </Link>
              <Link href="/industries">
                <Button size="lg" variant="outline" className="h-11 px-7 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 text-xs font-semibold flex items-center gap-2">
                  <span>{t("تعرف على قطاعك", "Explore Your Sector")}</span>
                  <ArrowRight className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`} />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})
