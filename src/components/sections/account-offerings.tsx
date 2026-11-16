import { memo, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ClipboardCheck, BarChart3, MapPin, FileText, Check } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "wouter"

const solutions = [
  {
    id: "investigation",
    name: "التحقيق الميداني",
    icon: Search,
    description: "رقمنة كاملة لعملية التحقيق الميداني من استلام الطلب إلى تسليم التقرير.",
    features: ["إدارة حالات ذكية", "توزيع تلقائي للحالات", "تتبع فوري للباحثين", "تقارير PDF موثقة"],
    badge: "الأساس",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    id: "verification",
    name: "التحقق من العملاء",
    icon: ClipboardCheck,
    description: "التحقق الميداني من هوية المتقدمين وعناوينهم ووضعهم الوظيفي.",
    features: ["تحقق من الهوية الوطنية", "زيارة وتوثيق السكن", "التحقق من جهة العمل", "توثيق فوتوغرافي"],
    badge: "الأكثر طلباً",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    id: "tracking",
    name: "التتبع والموقع",
    icon: MapPin,
    description: "تتبع مواقع الباحثين الميدانيين في الوقت الفعلي لضمان التنفيذ الفعلي.",
    features: ["GPS فوري للباحثين", "تسجيل وقت الزيارة", "مسار الباحث الكامل", "تنبيهات انحراف المسار"],
    badge: "دقة عالية",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "reports",
    name: "إدارة التقارير",
    icon: FileText,
    description: "توليد وإدارة ومراجعة تقارير التحقيق الرقمية بكفاءة عالية.",
    features: ["قوالب تقارير مخصصة", "مراجعة ضبط الجودة", "أرشفة رقمية كاملة", "إرسال فوري للمؤسسة"],
    badge: "موثق",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "analytics",
    name: "التحليل والأداء",
    icon: BarChart3,
    description: "لوحات تحليل متقدمة لمتابعة الأداء التشغيلي وجودة التقارير.",
    features: ["مؤشرات أداء رئيسية", "تقارير أداء الباحثين", "مقارنة أوقات الإنجاز", "تحليلات جودة التقارير"],
    badge: "ذكاء بيانات",
    gradient: "from-indigo-500 to-indigo-600",
  },
]

function SolutionsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-10">
        <div className="flex gap-1 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-28 rounded-xl" />
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <Skeleton className="w-16 h-16 rounded-2xl shrink-0" />
            <div className="space-y-2 w-full max-w-sm">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-8 w-48 rounded-xl" />
              <Skeleton className="h-4 w-64 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="p-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="w-5 h-5 rounded-full shrink-0" />
                <Skeleton className="h-4 w-40 rounded-lg" />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

const SolutionCard = memo(function SolutionCard({ solution }: { solution: typeof solutions[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="max-w-4xl mx-auto border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
        <div className={`bg-gradient-to-br ${solution.gradient} p-8 text-white`}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-right" dir="rtl">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <solution.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-2">
                {solution.badge}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{solution.name}</h3>
              <p className="text-white/80 text-base">{solution.description}</p>
            </div>
          </div>
        </div>
        <CardContent className="p-8" dir="rtl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-5 text-base">المميزات الرئيسية</h4>
              <ul className="space-y-3.5">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <Link href="/contact">
                <Button size="lg" className="w-full h-12 rounded-xl text-base bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                  تواصل معنا لتفعيل الحل
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="w-full h-12 rounded-xl text-base bg-transparent">
                  تفاصيل الحل
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
})

export const PlatformFeatures = memo(function PlatformFeatures() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 350)
    return () => clearTimeout(t)
  }, [])

  const renderTrigger = useCallback((solution: typeof solutions[0]) => (
    <TabsTrigger
      key={solution.id}
      value={solution.id}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
    >
      <solution.icon className="h-4 w-4 shrink-0" />
      <span className="hidden sm:inline">{solution.name}</span>
    </TabsTrigger>
  ), [])

  return (
    <section className="py-24 bg-white dark:bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
            حلول المنصة
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            منظومة رقمية متكاملة
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            من إدارة الحالات إلى التحليلات — كل ما تحتاجه مؤسستك المالية في منصة واحدة.
          </p>
        </motion.div>

        {!ready ? (
          <SolutionsSkeleton />
        ) : (
          <Tabs defaultValue="investigation" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="flex flex-wrap justify-center gap-1 h-auto p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                {solutions.map(renderTrigger)}
              </TabsList>
            </div>
            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <SolutionCard solution={solution} />
              </TabsContent>
            ))}
          </Tabs>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/solutions">
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl text-base bg-transparent">
              عرض جميع الحلول
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
})
