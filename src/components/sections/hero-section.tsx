import { useState, useEffect, memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, MapPin, FileText, Clock, ArrowRight, CheckCircle, TrendingUp, LayoutDashboard } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "wouter"
import { useLanguage } from "@/context/language-context"

/* ── Platform Mockup ─────────────────────────────────────── */
const PlatformMockup = memo(function PlatformMockup() {
  const { t } = useLanguage()

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
              <span className="text-white font-bold text-sm">
                {t("استعلامي — العمليات الميدانية", "EST3LAMY Field Ops")}
              </span>
            </div>
            <Badge className="bg-white/20 text-white border-white/30 text-xs rounded-full px-2 py-0.5">
              ● {t("مباشر", "Live")}
            </Badge>
          </div>
          <div className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">
            {t("إجمالي الحالات اليوم", "Total Cases Today")}
          </div>
          <div className="text-4xl font-black text-white mb-1">73</div>
          <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-medium">
            <TrendingUp className="h-3.5 w-3.5" />
            {t("31 منجزة · 24 جديدة · 18 قيد الزيارة", "31 Done · 24 New · 18 In Field")}
          </div>
        </div>

        {/* Case cards */}
        <div className="px-5 -mt-4 mb-5 space-y-2">
          {[
            { id: "EST-1048", name: "أيمن رفعت الشناوي",    type: "استعلام ائتماني", status: "زيارة ميدانية", color: "bg-amber-500" },
            { id: "EST-1049", name: "سارة عبد المنعم الباز", type: "تحقق محل إقامة", status: "مراجعة جودة",   color: "bg-purple-500" },
            { id: "EST-1050", name: "مؤسسة النور للصناعات",  type: "معاينة أصول",    status: "معتمدة ومسلمة", color: "bg-emerald-500" },
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
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            {t("الباحثون في الميدان", "Active Field Researchers")}
          </div>
          <div className="flex items-center gap-2">
            {["ك", "أ", "م"].map((initial, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-xs font-bold">
                  {initial}
                </div>
              </div>
            ))}
            <div className="text-xs text-gray-400 mr-1">
              {t("+14 باحث نشط في المحافظات", "+14 active researchers")}
            </div>
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
          <div className="text-xs font-bold text-gray-900 dark:text-white">
            {t("تتبع GPS فوري", "Live GPS Tracking")}
          </div>
          <div className="text-[10px] text-gray-400">
            {t("توثيق الإحداثيات الميدانية", "Geofenced Verification")}
          </div>
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
          <div className="text-xs font-bold text-gray-900 dark:text-white">
            {t("تقرير معتمد", "Verified Report")}
          </div>
          <div className="text-[10px] text-gray-400">EST-2026-1049 ✓</div>
        </div>
      </motion.div>
    </motion.div>
  )
})

/* ── Hero Section ─────────────────────────────────────────── */
export function HeroSection() {
  const { language, t } = useLanguage()
  const [currentHeadline, setCurrentHeadline] = useState(0)

  const trustBadges = [
    { icon: Shield,       label: t("بيانات مشفرة بنكياً", "Bank-Grade Encryption"),  accent: false },
    { icon: MapPin,       label: t("تتبع GPS لحظي", "Live GPS Tracking"),           accent: false },
    { icon: Clock,        label: t("إنجاز قياسي للحالات", "Fast Turnaround"),       accent: false },
    { icon: CheckCircle,  label: t("تدقيق ضبط الجودة", "QC Audit Engine"),          accent: true  },
  ]

  const heroStats = [
    { value: "27",    label: t("محافظة مغطاة ميدانياً", "Governorates Covered"), color: "text-blue-600 dark:text-blue-400" },
    { value: "100%",  label: t("رقمنة وتوثيق جغرافي", "Digital & GPS Logging"),  color: "text-teal-600 dark:text-teal-400" },
    { value: "8",     label: t("مراحل لدورة حياة الحالة", "Lifecycle Stages"),   color: "text-purple-600 dark:text-purple-400" },
  ]

  const headlines = [
    { text: t("رقمنة التحقيق", "Digital Field"),          accent: t("الميداني", "Investigation") },
    { text: t("قرارات ائتمانية", "Smarter Credit"),       accent: t("أسرع وأدق", "Decisions") },
    { text: t("تحقق موثق ومؤمن", "Verified & Geotagged"), accent: t("في وقت قياسي", "In Record Time") },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3800)
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50/70 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
      aria-label="استعلامي — منصة التحقيق الميداني"
      dir={language === "ar" ? "rtl" : "ltr"}
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

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left / Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex-1 text-center ${language === "ar" ? "lg:text-right" : "lg:text-left"}`}
          >
            {/* Trust Badges */}
            <div className={`flex flex-wrap justify-center ${language === "ar" ? "lg:justify-start" : "lg:justify-start"} gap-2 mb-8`}>
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
            <div className={`mb-6 min-h-[110px] sm:min-h-[130px] flex items-start justify-center ${language === "ar" ? "lg:justify-start" : "lg:justify-start"}`}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
                >
                  {headlines[currentHeadline].text}{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {headlines[currentHeadline].accent}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className={`text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto ${language === "ar" ? "lg:mr-0 lg:ml-auto" : "lg:ml-0 lg:mr-auto"} leading-relaxed`}>
              {t(
                "منصة رقمية متكاملة لرقمنة عملية التحقيق الميداني والتحقق من العملاء للبنوك وشركات التمويل في مصر — من استلام الحالة وتوزيعها ذكياً، وحتى التتبع بالـ GPS ومراجعة الجودة.",
                "The unified enterprise platform digitizing field investigations and applicant verifications for banks and finance companies in Egypt — from dispatch to GPS tracking and automated QC."
              )}
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-3 justify-center ${language === "ar" ? "lg:justify-start" : "lg:justify-start"} mb-10`}>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 h-12 text-sm shadow-lg shadow-blue-500/25 rounded-xl gap-2 font-bold"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  {t("تجربة بوابة العمليات", "Explore Operations Demo")}
                  <ArrowRight className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`} />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-7 h-12 text-sm bg-white/80 dark:bg-transparent rounded-xl border-gray-200 dark:border-gray-700 backdrop-blur-sm font-semibold"
                >
                  {t("كيف يعمل النظام؟", "How It Works")}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 max-w-md mx-auto ${language === "ar" ? "lg:mr-0 lg:ml-auto" : "lg:ml-0 lg:mr-auto"}`}>
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className={`text-center ${language === "ar" ? "lg:text-right" : "lg:text-left"}`}
                >
                  <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Platform Mockup */}
          <div className="flex-1 flex justify-center w-full">
            <PlatformMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
