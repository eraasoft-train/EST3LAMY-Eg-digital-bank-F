import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { clientTypes } from "@/data/security"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const ClientsSection = memo(function ClientsSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
            القطاعات المخدومة
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            نخدم قطاعك المالي
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            استعلامي مصمم للعمل مع جميع أنواع المؤسسات المالية التي تحتاج إلى تحقيق ميداني موثوق.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.nameEn}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                      {client.name[0]}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{client.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{client.description}</p>
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
          className="rounded-3xl bg-gradient-to-br from-gray-900 to-blue-950 p-10 md:p-14 text-center text-white overflow-hidden relative"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مؤسستك المالية تستحق تحقيقاً أفضل</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              تواصل مع فريق استعلامي اليوم لمعرفة كيف يمكن لمنصتنا تحسين جودة محفظتك الائتمانية.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-7 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm shadow-lg">
                  تحدث مع فريقنا
                </Button>
              </Link>
              <Link href="/industries">
                <Button size="lg" variant="outline" className="h-12 px-7 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 text-sm flex items-center gap-2">
                  تعرف على قطاعك
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})
