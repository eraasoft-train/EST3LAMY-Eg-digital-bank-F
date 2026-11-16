import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { investigationStats, recentCases, researcherActivity } from "@/data/dashboard"
import { TrendingUp, TrendingDown, Minus, LayoutDashboard, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Link } from "wouter"

export const DashboardPreview = memo(function DashboardPreview() {
  const { language, t } = useLanguage()

  return (
    <section className="py-24 bg-slate-50/70 dark:bg-gray-900/50" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="secondary" className="px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium text-xs">
              {t("لوحة تحكم العمليات الميدانية", "Field Operations Dashboard")}
            </Badge>
            <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 text-[10px] px-2 py-0.5 rounded-full">
              {t("بيانات تجريبية للمحاكاة", "Demo Simulation")}
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {t("رؤية تشغيلية كاملة على حالات التحقيق", "Complete Visibility Over Investigation Lifecycle")}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            {t(
              "متابعة فورية ومباشرة لجميع الحالات ومواقع الباحثين وتقارير ضبط الجودة من لوحة تحكم واحدة.",
              "Real-time monitoring of active cases, researcher GPS locations, and QC audits from a centralized view."
            )}
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {investigationStats.map((stat, index) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {language === "ar" ? stat.label : stat.labelEn}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="flex items-center gap-1 text-xs font-medium">
                    {stat.type === "up" && <><TrendingUp className="h-3 w-3 text-emerald-500" /><span className="text-emerald-600">+{stat.change}</span></>}
                    {stat.type === "down" && <><TrendingDown className="h-3 w-3 text-red-500" /><span className="text-red-500">{stat.change}</span></>}
                    {stat.type === "neutral" && <><Minus className="h-3 w-3 text-gray-400" /><span className="text-gray-400">{t("لا تغيير", "Neutral")}</span></>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Recent cases */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border border-gray-100 dark:border-gray-800 h-full rounded-3xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {t("أحدث الحالات الميدانية", "Recent Investigation Cases")}
                  </h3>
                  <Link href="/dashboard">
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                      {t("عرض في البوابة الكاملة", "Open in Portal")} →
                    </span>
                  </Link>
                </div>

                <div className="space-y-3">
                  {recentCases.map((c) => (
                    <div key={c.id} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-gray-800/50 hover:bg-blue-50/70 dark:hover:bg-blue-900/10 transition-colors">
                      <div className={`w-2 h-10 rounded-full shrink-0 ${
                        c.status === "منجزة"       ? "bg-emerald-500" :
                        c.status === "قيد التنفيذ" ? "bg-blue-500"    : "bg-amber-400"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold text-gray-900 dark:text-white truncate">{c.clientName}</span>
                          <span className="text-[10px] text-gray-400 font-mono shrink-0">{c.id}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">{c.institution}</span>
                          <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">{c.type}</span>
                        </div>
                      </div>
                      <div className="text-left shrink-0">
                        <div className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          c.priority === "عالية"   ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400" :
                          c.priority === "متوسطة" ? "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400" :
                          "bg-gray-50 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                        }`}>{c.priority}</div>
                        <div className="text-[10px] text-gray-400 text-center mt-1">{c.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Researcher activity */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-100 dark:border-gray-800 h-full rounded-3xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5">
                  {t("نشاط الباحثين الميدانيين", "Researcher Fleet Activity")}
                </h3>
                <div className="space-y-4">
                  {researcherActivity.map((r) => (
                    <div key={r.name} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/70 dark:bg-gray-800/30">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold shrink-0">
                        {r.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-bold text-gray-900 dark:text-white truncate">{r.name}</span>
                          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                            {r.cases} {t("حالات", "cases")}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>{r.location}</span>
                          <span className="font-semibold text-amber-500">★ {r.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Portal Direct CTA Button */}
        <div className="text-center">
          <Link href="/dashboard">
            <Button size="lg" className="h-12 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs gap-2 shadow-lg shadow-blue-500/20">
              <LayoutDashboard className="h-4 w-4" />
              {t("فتح بوابة العمليات الميدانية التفاعلية الكاملة", "Open Full Interactive Operations Portal Demo")}
              <ArrowRight className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
})
