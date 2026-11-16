import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Target } from "lucide-react"
import { values, milestones } from "@/data/about"
import { usePageMeta } from "@/hooks/use-page-meta"

export default function AboutPage() {
  usePageMeta({
    title: "من نحن — استعلامي | رقمنة التحقيق الميداني في مصر",
    description: "استعلامي منصة رقمية مصرية لرقمنة التحقيق الميداني للمؤسسات المالية. تعرف على رؤيتنا ومهمتنا وقيمنا.",
    canonical: "https://est3lamy.com/about",
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir="rtl">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 pt-24 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 rounded-full px-3 py-1 text-sm">
              قصتنا
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              رقمنة التحقيق الميداني<br />في <span className="text-blue-400">المؤسسات المالية</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              استعلامي وُلدت من تحدٍّ حقيقي: الحاجة إلى جعل عملية التحقيق الميداني أدق وأسرع وأكثر شفافية للمؤسسات المالية في مصر.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story + Visual */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              منصة رقمية لحل تحدٍّ حقيقي
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-6">
              في عالم الائتمان والتمويل، جودة قرار منح التمويل تعتمد اعتماداً مباشراً على جودة التحقيق الميداني. استعلامي جاءت لرقمنة هذه العملية بالكامل — من استلام طلب التحقيق حتى تسليم التقرير الموثق للمؤسسة المالية.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
              نعمل مع البنوك وشركات التمويل الاستهلاكي والتأجير التمويلي والتمويل العقاري وشركات الفينتك في مصر، لنضمن أن كل قرار ائتماني مبني على معلومات ميدانية دقيقة وموثقة.
            </p>
            <div className="flex items-center gap-4 p-5 bg-blue-50 dark:bg-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-center shrink-0">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">مجموعة Fair Solutions</div>
                <div className="text-sm text-gray-500">
                  <a href="https://fidb-islamic.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">fidb-islamic.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-10">
              <div className="rounded-3xl bg-blue-700 h-48 flex items-center justify-center shadow-xl shadow-blue-500/20">
                <Building2 className="h-16 w-16 text-white/40" />
              </div>
              <div className="rounded-3xl bg-gray-100 dark:bg-gray-800 h-60 p-7 flex flex-col justify-end border border-gray-200 dark:border-gray-700">
                <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-1">480+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">مؤسسة مالية</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-teal-600 h-60 flex items-center justify-center shadow-xl shadow-teal-500/20">
                <Users className="h-16 w-16 text-white/40" />
              </div>
              <div className="rounded-3xl bg-blue-50 dark:bg-gray-800 h-48 p-7 flex flex-col justify-end border border-blue-100 dark:border-gray-700">
                <Target className="h-7 w-7 text-blue-600 mb-2" />
                <div className="text-sm font-bold text-gray-600 dark:text-gray-300">تحقيق<br />موثوق</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              ما نؤمن به
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">قيمنا الجوهرية</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v, index) => (
              <motion.div
                key={v.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {v.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-20">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              رحلتنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">مسيرة استعلامي</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-r-2 border-blue-100 dark:border-gray-800 mr-4 space-y-14">
              {milestones.map((m, index) => (
                <motion.div
                  key={m.yearEn}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pr-10"
                >
                  <div className="absolute -right-3 top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-md" />
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-widest">{m.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{m.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
