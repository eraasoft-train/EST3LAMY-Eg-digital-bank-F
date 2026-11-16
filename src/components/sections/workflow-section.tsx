import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { workflowSteps } from "@/data/workflow"
import { useLanguage } from "@/context/language-context"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export const WorkflowSection = memo(function WorkflowSection() {
  const { language, t } = useLanguage()

  return (
    <section className="py-24 bg-slate-50/70 dark:bg-gray-900/50" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium text-xs">
            {t("كيف يعمل النظام", "System Workflow")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {t("من الطلب إلى التقرير المعتمد", "From Request to Delivered Report")}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            {t(
              "8 مراحل مدارة وموثقة رقمياً بالكامل — شفافية ونزاهة تامة في كل خطوة استعلامية.",
              "8 digitally audited stages ensuring transparency, GPS verification, and complete risk integrity."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {/* Step number & icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
                        {t(`المرحلة ${step.step}`, `Stage ${step.step}`)}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                      {language === "ar" ? step.name : step.nameEn}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {language === "ar" ? step.description : step.descriptionEn}
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded-lg inline-block border border-blue-100 dark:border-blue-900 self-start">
                    {language === "ar" ? step.actor : step.actorEn}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/how-it-works">
            <Button variant="outline" className="rounded-xl text-xs font-semibold px-6 h-10">
              {t("عرض الدليل التفصيلي لمراحل التحقيق", "View Full Investigation Lifecycle Guide")} →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
})
