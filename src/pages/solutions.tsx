import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronRight } from "lucide-react"
import { servicePlans } from "@/data/accounts"
import { platformFeatures } from "@/data/security"
import { usePageMeta } from "@/hooks/use-page-meta"
import { Link } from "wouter"

export default function SolutionsPage() {
  usePageMeta({
    title: "حلول استعلامي — منصة التحقيق الميداني الرقمي للمؤسسات المالية",
    description: "اكتشف حلول استعلامي للتحقيق الميداني وإدارة الحالات والتحقق من العملاء للبنوك وشركات التمويل في مصر.",
    canonical: "https://est3lamy.com/solutions",
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir="rtl">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-24 pb-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-white/10 text-white border-white/20 rounded-full px-3 py-1 text-sm font-medium">
              حلول المنصة
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              كل ما تحتاجه لرقمنة التحقيق الميداني
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              من إدارة الحالات إلى تقارير الجودة — منصة استعلامي توفر منظومة متكاملة لتحقيق ميداني أدق وأسرع.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-12 px-7 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-lg text-sm">
                ابدأ شراكتك اليوم
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Platform capabilities */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              قدرات المنصة
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              تقنيات متقدمة مصممة لتحقيق ميداني موثوق ومنظومة ائتمانية أفضل.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.titleEn}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Service plans */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              باقات الخدمة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              اختر الباقة المناسبة لمؤسستك
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
              باقات مرنة تناسب احتياجات مؤسستك سواء كانت صغيرة أو متوسطة أو كبرى.
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
                className="flex"
              >
                <Card className={`flex flex-col w-full border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${
                  plan.badgeEn === "Most Requested"
                    ? "border-blue-300 dark:border-blue-700 shadow-lg shadow-blue-500/10"
                    : "border-gray-100 dark:border-gray-800"
                }`}>
                  {plan.badge && (
                    <div className="absolute top-5 left-5">
                      <Badge className={`text-xs font-semibold rounded-full px-2.5 py-1 ${
                        plan.badgeEn === "Most Requested"
                          ? "bg-blue-600 text-white border-none"
                          : plan.badgeEn === "Enterprise"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-none"
                          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-none"
                      }`}>
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4 pt-7 px-7">
                    <div className="mb-4">{plan.icon}</div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{plan.title}</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 px-7">
                    <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                          <Check className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-7 pb-7 pt-6">
                    <Link href="/contact" className="w-full">
                      <Button className={`w-full h-11 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 ${
                        plan.badgeEn === "Most Requested"
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                          : "bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white"
                      }`}>
                        تواصل معنا
                        <ChevronRight className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مستعد لتحويل عملية التحقيق في مؤسستك؟</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              تواصل مع فريقنا اليوم لطلب عرض تجريبي مجاني ومعرفة كيف يمكن لاستعلامي خدمة مؤسستك.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-7 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-semibold text-sm shadow-lg">
                  طلب عرض تجريبي
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 text-sm">
                  كيف يعمل النظام؟
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
