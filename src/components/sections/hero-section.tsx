import { useState, useEffect, memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, MapPin, FileText, Clock, ArrowRight, CheckCircle, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "wouter"

/* ── Platform Mockup ─────────────────────────────────────── */
const PlatformMockup = memo(function PlatformMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative w-full max-w-sm mx-auto lg:mx-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-blue-400/20 rounded-3xl blur-3xl scale-110 pointer-events-none" />

      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {/* Top bar */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 px-6 pt-6 pb-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-bold text-sm">استعلامي</span>
            </div>
            <Badge className="bg-white/20 text-white border-white/30 text-xs rounded-full px-2 py-0.5">
              ● مباشر
            </Badge>
          </div>
          <div className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">إجمالي الحالات اليوم</div>
          <div className="text-4xl font-black text-white mb-1">73</div>
          <div className="flex items-center gap-1.5 text-emerald-300 text-sm font-medium">
            <TrendingUp className="h-3.5 w-3.5" />
            31 منجزة · 24 جديدة · 18 قيد التنفيذ
          </div>
        </div>

        {/* Case cards */}
        <div className="px-5 -mt-4 mb-5 space-y-2">
          {[
            { id: "INV-001", name: "أحمد محمد علي",    type: "تمويل شخصي",   status: "منجزة",       color: "bg-emerald-500" },
            { id: "INV-002", name: "سارة إبراهيم حسن", type: "تحقق عنوان",   status: "قيد التنفيذ", color: "bg-blue-500"    },
            { id: "INV-003", name: "محمود عبد الرحمن", type: "تقييم ميداني", status: "جديدة",       color: "bg-orange-500"  },
          ].map((c) => (
            <div key={c.id} className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-100 dark:border-gray-700 p-3 flex items-center gap-3">
              <div className={`w-2 h-8 rounded-full ${c.color} shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-gray-900 dark:text-white truncate">{c.name}</div>
                <div className="text-[10px] text-gray-400">{c.type}</div>
              </div>
              <span className="text-[10px] font-semibold text-gray-500 shrink-0">{c.status}</span>
            </div>
          ))}
        </div>

        {/* Researcher row */}
        <div className="px-5 pb-5">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">الباحثون النشطون</div>
          <div className="flex items-center gap-2">
            {["ك", "ن", "ع"].map((initial, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-xs font-bold">
                  {initial}
                </div>
              </div>
            ))}
            <div className="text-xs text-gray-400 mr-1">+12 آخرين في الميدان</div>
          </div>
        </div>
      </div>

      {/* Floating — location badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-4 py-2.5 flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <MapPin className="h-4 w-4 text-emerald-600" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900 dark:text-white">تتبع فوري</div>
          <div className="text-xs text-gray-400">12 باحث نشط</div>
        </div>
      </motion.div>

      {/* Floating — report badge */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-4 py-2.5 flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <FileText className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900 dark:text-white">تقرير جديد</div>
          <div className="text-xs text-gray-400">INV-2024-031 ✓</div>
        </div>
      </motion.div>
    </motion.div>
  )
})

/* ── Trust badges ─────────────────────────────────────────── */
const trustBadges = [
  { icon: Shield,       label: "بيانات مشفرة",        accent: false },
  { icon: MapPin,       label: "تتبع فوري",            accent: false },
  { icon: Clock,        label: "تقارير سريعة",         accent: false },
  { icon: CheckCircle,  label: "جودة مضمونة",          accent: true  },
] as const

const heroStats = [
  { value: "38+",   label: "بنكاً شريكاً",        color: "text-blue-600 dark:text-blue-400"   },
  { value: "480+",  label: "مؤسسة مالية",         color: "text-teal-600 dark:text-teal-400"   },
  { value: "100%",  label: "رقمنة كاملة",         color: "text-purple-600 dark:text-purple-400" },
] as const

const headlines = [
  { text: "رقمنة التحقيق",       accent: "الميداني" },
  { text: "قرارات ائتمانية",     accent: "أسرع وأدق" },
  { text: "تحقق موثق",           accent: "في وقت قياسي" },
] as const

/* ── Hero Section ─────────────────────────────────────────── */
export function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
      aria-label="استعلامي — منصة التحقيق الميداني"
      dir="rtl"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -left-64 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-64 -right-64 w-[700px] h-[700px] bg-teal-400/10 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-blue-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-right"
          >
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-2 mb-8">
              {trustBadges.map(({ icon: Icon, label, accent }) => (
                <Badge
                  key={label}
                  variant="secondary"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
                >
                  <Icon className={`h-3.5 w-3.5 ${accent ? "text-emerald-500" : "text-blue-600"}`} />
                  {label}
                </Badge>
              ))}
            </div>

            {/* Rotating Headline */}
            <div className="mb-6 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex items-start justify-center lg:justify-end">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
                >
                  {headlines[currentHeadline].text}{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {headlines[currentHeadline].accent}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mr-0 lg:ml-auto leading-relaxed">
              منصة رقمية متكاملة لرقمنة عملية التحقيق الميداني والتحقق من العملاء للبنوك وشركات التمويل في مصر — من استلام الحالة حتى تسليم التقرير.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end mb-12">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 h-12 text-base shadow-lg shadow-blue-500/30 rounded-xl"
                >
                  ابدأ شراكتك الآن
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 h-12 text-base bg-white/80 dark:bg-transparent rounded-xl border-gray-200 dark:border-gray-700 backdrop-blur-sm"
                >
                  كيف يعمل النظام؟
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-center lg:text-right"
                >
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Platform Mockup */}
          <div className="flex-1 flex justify-center lg:justify-start w-full">
            <PlatformMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
