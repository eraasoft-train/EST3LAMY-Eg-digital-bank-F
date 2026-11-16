import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { investigationStats, recentCases, researcherActivity } from "@/data/dashboard"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export const DashboardPreview = memo(function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
            لوحة التحكم — بيانات تجريبية
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            رؤية كاملة على عمليات التحقيق
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            متابعة فورية لجميع الحالات والباحثين والتقارير من لوحة تحكم موحدة.
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
              <Card className="border border-gray-100 dark:border-gray-800">
                <CardContent className="p-5">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{stat.label}</div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="flex items-center gap-1 text-xs font-medium">
                    {stat.type === "up" && <><TrendingUp className="h-3 w-3 text-emerald-500" /><span className="text-emerald-600">+{stat.change}</span></>}
                    {stat.type === "down" && <><TrendingDown className="h-3 w-3 text-red-500" /><span className="text-red-500">{stat.change}</span></>}
                    {stat.type === "neutral" && <><Minus className="h-3 w-3 text-gray-400" /><span className="text-gray-400">لا تغيير</span></>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent cases */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border border-gray-100 dark:border-gray-800 h-full">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5">أحدث الحالات</h3>
                <div className="space-y-3">
                  {recentCases.map((c) => (
                    <div key={c.id} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                      <div className={`w-2 h-10 rounded-full shrink-0 ${
                        c.status === "منجزة"       ? "bg-emerald-500" :
                        c.status === "قيد التنفيذ" ? "bg-blue-500"    : "bg-orange-400"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold text-gray-900 dark:text-white truncate">{c.clientName}</span>
                          <span className="text-[10px] text-gray-400 shrink-0">{c.id}</span>
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-100 dark:border-gray-800 h-full">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5">أداء الباحثين</h3>
                <div className="space-y-4">
                  {researcherActivity.map((r) => (
                    <div key={r.name} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
                        {r.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{r.name}</span>
                          <span className="text-xs text-emerald-600 font-medium">★ {r.rating}</span>
                        </div>
                        <div className="text-xs text-gray-400">{r.casesCompleted} حالة · {r.avgTime}</div>
                        <div className={`text-[10px] font-semibold mt-1 ${
                          r.status === "في الميدان" ? "text-blue-600 dark:text-blue-400" : "text-emerald-600 dark:text-emerald-400"
                        }`}>{r.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * البيانات المعروضة أعلاه تجريبية توضيحية فقط
        </p>
      </div>
    </section>
  )
})
