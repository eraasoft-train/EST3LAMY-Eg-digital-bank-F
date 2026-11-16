import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { workflowSteps } from "@/data/loan-tools"
import { Link } from "wouter"

export const WorkflowSection = memo(function WorkflowSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
            كيف يعمل النظام
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            من الطلب إلى التقرير
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            8 خطوات مدارة رقمياً بالكامل — شفافية تامة في كل مرحلة.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line — hidden on mobile */}
          <div className="hidden lg:block absolute top-8 right-8 left-8 h-0.5 bg-gradient-to-l from-blue-200 via-blue-400 to-blue-200 dark:from-gray-700 dark:via-blue-800 dark:to-gray-700" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:-translate-y-1 h-full">
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                        الخطوة {step.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{step.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{step.description}</p>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-lg inline-block">
                      {step.actor}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link href="/how-it-works">
            <Button size="lg" className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20">
              عرض الدليل الكامل للنظام
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
})
