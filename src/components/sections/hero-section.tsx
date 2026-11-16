import { useState, useEffect, memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  MapPin,
  FileText,
  Clock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  LayoutDashboard,
  Radio,
  Activity,
  Navigation,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "wouter"
import { useLanguage } from "@/context/language-context"

/* ── Live Operations Radar HUD (Glass Terminal) ───────────── */
const PlatformMockup = memo(function PlatformMockup() {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
      aria-hidden="true"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl scale-110 pointer-events-none" />

      {/* Glassmorphic Operations HUD Card */}
      <div className="relative bg-slate-900/65 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/15 p-5 sm:p-6 overflow-hidden text-white group">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* HUD Header */}
        <div className="relative flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div>
              <span className="text-xs font-bold text-white tracking-wide block">
                {t("رادار العمليات الميدانية", "Field Operations Radar")}
              </span>
              <span className="text-[10px] text-gray-400 block font-mono">
                {t("تغطية حية • 27 محافظة", "Live Telemetry • 27 Governorates")}
              </span>
            </div>
          </div>
          <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] px-2.5 py-0.5 rounded-full font-mono">
            ● {t("بث مباشر", "LIVE FEED")}
          </Badge>
        </div>

        {/* Interactive Radar Visual Area */}
        <div className="relative my-4 aspect-[16/10] w-full rounded-2xl bg-slate-950/80 border border-white/10 overflow-hidden flex items-center justify-center p-4">
          {/* Radar Circles */}
          <div className="absolute w-48 h-48 rounded-full border border-blue-500/20" />
          <div className="absolute w-36 h-36 rounded-full border border-blue-500/25" />
          <div className="absolute w-24 h-24 rounded-full border border-blue-500/30" />
          <div className="absolute w-12 h-12 rounded-full border border-blue-500/40" />

          {/* Crosshairs */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-blue-500/20" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-blue-500/20" />

          {/* Rotating radar sweep beam */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 origin-center pointer-events-none"
            style={{
              background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(56, 189, 248, 0.3) 360deg)",
            }}
          />

          {/* Active Field Researcher Blips */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/3 flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/80" />
            <span className="text-[9px] font-mono font-bold text-emerald-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-emerald-500/30">
              {t("القاهرة — نشط", "Cairo — Active")}
            </span>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-1/3 right-1/4 flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/80" />
            <span className="text-[9px] font-mono font-bold text-blue-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-blue-500/30">
              {t("الجيزة — زيارة", "Giza — In Field")}
            </span>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/4 right-1/3 flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-lg shadow-teal-400/80" />
            <span className="text-[9px] font-mono font-bold text-teal-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-teal-500/30">
              {t("الإسكندرية", "Alex")}
            </span>
          </motion.div>

          {/* Center Coordinates Indicator */}
          <div className="absolute bottom-2 start-2 text-[10px] font-mono text-gray-400 flex items-center gap-1 bg-slate-900/90 px-2 py-0.5 rounded-md border border-white/5">
            <Navigation className="h-2.5 w-2.5 text-blue-400" />
            <span>30.0444° N, 31.2357° E</span>
          </div>

          <div className="absolute bottom-2 end-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1 bg-slate-900/90 px-2 py-0.5 rounded-md border border-white/5">
            <Radio className="h-2.5 w-2.5 animate-pulse text-emerald-400" />
            <span>GPS LOCKED</span>
          </div>
        </div>

        {/* Live Telemetry KPI Metrics */}
        <div className="relative grid grid-cols-3 gap-2.5 pt-1">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-gray-400 font-medium">
              {t("حالات نشطة", "Active Cases")}
            </div>
            <div className="text-base font-black text-white mt-0.5 tabular-nums">73</div>
            <div className="text-[9px] text-emerald-400 font-semibold flex items-center justify-center gap-0.5 mt-0.5">
              <TrendingUp className="h-2.5 w-2.5" /> +15% SLA
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-gray-400 font-medium">
              {t("دقة التوثيق", "GPS Accuracy")}
            </div>
            <div className="text-base font-black text-emerald-400 mt-0.5 tabular-nums">99.4%</div>
            <div className="text-[9px] text-gray-400 mt-0.5">
              {t("مطابقة جغرافية", "Verified")}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-gray-400 font-medium">
              {t("زمن الإنجاز", "Turnaround")}
            </div>
            <div className="text-base font-black text-blue-400 mt-0.5 tabular-nums">&lt; 24h</div>
            <div className="text-[9px] text-gray-400 mt-0.5">
              {t("تسليم بنكي", "Bank SLA")}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge 1 — Live GPS Tracking */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-3 sm:-right-4 bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 px-4 py-2.5 flex items-center gap-3 text-white"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <MapPin className="h-4 w-4 text-emerald-400" />
        </div>
        <div>
          <div className="text-xs font-bold text-white">
            {t("تتبع GPS فوري", "Live GPS Tracking")}
          </div>
          <div className="text-[10px] text-gray-300">
            {t("توثيق الإحداثيات الميدانية", "Geofenced Verification")}
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 2 — Verified Report */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-3 sm:-left-4 bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 px-4 py-2.5 flex items-center gap-3 text-white"
      >
        <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
          <FileText className="h-4 w-4 text-blue-400" />
        </div>
        <div>
          <div className="text-xs font-bold text-white">
            {t("تقرير معتمد بنكياً", "Bank-Verified Report")}
          </div>
          <div className="text-[10px] text-gray-300 font-mono">EST-2026-1049 ✓</div>
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
    { value: "27",    label: t("محافظة مغطاة ميدانياً", "Governorates Covered"), color: "text-blue-400" },
    { value: "100%",  label: t("رقمنة وتوثيق جغرافي", "Digital & GPS Logging"),  color: "text-teal-400" },
    { value: "8",     label: t("مراحل لدورة حياة الحالة", "Lifecycle Stages"),   color: "text-purple-400" },
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
      className="relative min-h-[92vh] flex items-center bg-slate-950 text-white overflow-hidden"
      aria-label="استعلامي — منصة التحقيق الميداني"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* ── Immersive Full Hero Background Image ────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-mockup.jpg"
          alt="EST3LAMY Field Operations Platform Background"
          className="w-full h-full object-cover object-center scale-105 filter blur-[0.5px] transition-transform duration-1000"
          loading="eager"
        />

        {/* Multi-layered Dark Institutional Overlays for Contrast & Readability */}
        <div className="absolute inset-0 bg-slate-950/85 dark:bg-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70 rtl:from-slate-950 rtl:via-slate-950/90 rtl:to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[2px]" />

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-3xl" />

        {/* Subtle dot matrix texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      {/* ── Content Container ──────────────────────────────────── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

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
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/15 text-white"
                >
                  <Icon className={`h-3.5 w-3.5 ${accent ? "text-emerald-400" : "text-blue-400"}`} />
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
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
                >
                  {headlines[currentHeadline].text}{" "}
                  <span className="text-blue-400 drop-shadow-sm">
                    {headlines[currentHeadline].accent}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className={`text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto ${language === "ar" ? "lg:mr-0 lg:ml-auto" : "lg:ml-0 lg:mr-auto"} leading-relaxed`}>
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
                  className="bg-blue-600 hover:bg-blue-500 text-white px-7 h-12 text-sm shadow-xl shadow-blue-600/35 rounded-xl gap-2 font-bold transition-all hover:scale-[1.02]"
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
                  className="px-7 h-12 text-sm bg-white/10 hover:bg-white/15 text-white border-white/20 backdrop-blur-md rounded-xl font-semibold transition-all hover:scale-[1.02]"
                >
                  <Activity className="h-4 w-4 text-emerald-400" />
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
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Live Operations Radar HUD */}
          <div className="flex-1 flex justify-center w-full">
            <PlatformMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
