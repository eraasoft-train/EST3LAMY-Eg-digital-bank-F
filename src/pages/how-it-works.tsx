import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { workflowSteps } from "@/data/loan-tools"
import { usePageMeta } from "@/hooks/use-page-meta"
import { Link } from "wouter"

export default function HowItWorksPage() {
  usePageMeta({
    title: "كيف يعمل النظام — استعلامي | دليل التحقيق الميداني الرقمي",
    description: "تعرف على 8 خطوات رقمية متكاملة في منصة استعلامي: من طلب التحقيق حتى تسليم التقرير الموثق للمؤسسة المالية.",
    canonical: "https://est3lamy.com/how-it-works",
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir="rtl">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="secondary" className="mb-5 px-3 py-1.5 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              آلية العمل
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              من الطلب إلى التقرير
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              8 خطوات رقمية متكاملة — شفافية كاملة، تتبع فوري، وتقرير موثق في كل مرحلة.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Steps */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute right-[2.25rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-300 to-transparent dark:from-blue-700 dark:via-blue-900 hidden sm:block" />

          <div className="space-y-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === workflowSteps.length - 1
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6"
                >
                  {/* Icon circle */}
                  <div className="relative shrink-0">
                    <div className={`w-18 h-18 w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center shadow-md z-10 relative ${
                      isLast ? "bg-emerald-600 shadow-emerald-500/20" : "bg-blue-600 shadow-blue-500/20"
                    }`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                          الخطوة {step.step}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{step.name}</h3>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">المسؤول:</span>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-lg">
                          {step.actor}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Summary box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">النتيجة النهائية</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6">
            مؤسستك المالية تستلم تقريراً ميدانياً رقمياً موثقاً بالصور والبيانات — جاهز لدعم قرار الائتمان مباشرةً.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-7 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm shadow-lg shadow-blue-500/20">
                ابدأ شراكتك مع استعلامي
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="h-12 px-7 rounded-xl bg-transparent">
                تعرف على الحلول
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
