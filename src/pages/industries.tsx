import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Check } from "lucide-react"
import { industries } from "@/data/business"
import { usePageMeta } from "@/hooks/use-page-meta"
import { Link } from "wouter"

export default function IndustriesPage() {
  usePageMeta({
    title: "القطاعات — استعلامي | التحقيق الميداني للبنوك وشركات التمويل",
    description: "استعلامي يخدم البنوك وشركات التمويل الاستهلاكي والتأجير التمويلي والتمويل العقاري وشركات الفينتك في مصر.",
    canonical: "https://est3lamy.com/industries",
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir="rtl">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="secondary" className="mb-5 px-3 py-1.5 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              القطاعات المخدومة
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              نخدم قطاعك المالي
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              استعلامي مصمم للعمل مع جميع أنواع المؤسسات المالية التي تحتاج إلى تحقيق ميداني موثوق لدعم قرارات الائتمان.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.titleEn}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="flex flex-col w-full border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="px-7 pt-7 pb-4">
                  <div className="mb-5">{industry.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{industry.title}</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 px-7">
                  <ul className="space-y-3">
                    {industry.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Check className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-7 pb-7 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full h-11 rounded-xl text-sm font-medium bg-transparent group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 flex items-center gap-2">
                      تعرف على الحل
                      <ChevronRight className="h-4 w-4 rotate-180" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مؤسستك المالية تستحق تحقيقاً أفضل</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              تواصل مع فريق استعلامي لطلب عرض تجريبي مجاني ومعرفة كيف نستطيع خدمة قطاعك.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-7 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-semibold text-sm shadow-lg">
                  ابدأ الشراكة الآن
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 text-sm">
                  عرض جميع الحلول
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
