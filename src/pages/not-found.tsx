import { useState } from "react"
import { Link, useLocation } from "wouter"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  ArrowRight,
  LayoutDashboard,
  Cpu,
  Layers,
  HelpCircle,
  Home,
  Compass,
  MapPin,
} from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"

export default function NotFound() {
  const { language, t, strings } = useLanguage()
  const [, setLocation] = useLocation()
  const [searchQuery, setSearchQuery] = useState("")

  usePageMeta({
    title: t("404 — الصفحة غير موجودة | استعلامي", "404 — Page Not Found | EST3LAMY"),
    description: t(
      "الصفحة التي تبحث عنها غير موجودة في سجلات استعلامي. تحقق من الرابط أو تصفح الأقسام الرئيسية.",
      "The requested page is not in the EST3LAMY registry. Check the URL or explore our core operations."
    ),
    canonical: "https://est3lamy.vercel.app/404",
    noIndex: true,
  })

  const allDestinations = [
    { title: t("بوابة العمليات الميدانية", "Operations Portal"), href: "/dashboard", tags: ["portal", "dashboard", "operations", "بوابة", "عمليات"] },
    { title: t("حلول وباقات الاستعلام", "Solutions & Plans"), href: "/solutions", tags: ["solutions", "plans", "pricing", "حلول", "باقات"] },
    { title: t("كيف تعمل المنظومة", "How It Works"), href: "/how-it-works", tags: ["workflow", "steps", "lifecycle", "كيف", "خطوات"] },
    { title: t("البنية التقنية والأمان", "Technology & Security"), href: "/technology", tags: ["tech", "security", "gps", "تقنية", "أمان"] },
    { title: t("القطاعات المخدومة", "Served Industries"), href: "/industries", tags: ["industries", "banks", "leasing", "قطاعات", "بنوك"] },
    { title: t("عن استعلامي ومجموعة فير", "About EST3LAMY"), href: "/about", tags: ["about", "fair", "shark tank", "من نحن", "عن"] },
    { title: t("تواصل مع فريق المؤسسات", "Contact & Demo"), href: "/contact", tags: ["contact", "demo", "support", "تواصل", "طلب"] },
  ]

  const filteredDestinations = searchQuery.trim()
    ? allDestinations.filter((d) =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : []

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (filteredDestinations.length > 0) {
      setLocation(filteredDestinations[0].href)
    }
  }

  const quickLinks = [
    {
      title: t("بوابة العمليات الميدانية", "Operations Portal"),
      desc: t("محاكاة حية لإسناد التحريات وتتبع الباحثين", "Live inquiry dispatch & researcher fleet simulation"),
      href: "/dashboard",
      icon: LayoutDashboard,
      badge: t("تجريبي", "Demo"),
    },
    {
      title: t("حلول التحري والتحقق", "Inquiry Solutions"),
      desc: t("باقات المؤسسات المالية ومواصفات SLA", "Institutional tiers & verification specifications"),
      href: "/solutions",
      icon: Layers,
    },
    {
      title: t("البنية التقنية والأمان", "Technology & Security"),
      desc: t("تشفير البيانات والتتبع الجغرافي الحي", "Bank-grade encryption & live GPS tracking engine"),
      href: "/technology",
      icon: Cpu,
    },
    {
      title: t("الشراكات والتواصل", "Institutional Contact"),
      desc: t("فريق دعم المؤسسات المالية والربط الآلي", "Financial institutions team & API integration"),
      href: "/contact",
      icon: HelpCircle,
    },
  ]

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden selection:bg-blue-600 selection:text-white"
    >
      {/* Background Animated Ambient Glow & Investigation Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-indigo-600/15 rounded-full blur-3xl opacity-80" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.06]" />
      </div>

      <div className="max-w-3xl w-full text-center">
        {/* Animated Digital Field Radar Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex items-center justify-center mb-8"
        >
          {/* Concentric Radar Rings */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-blue-500/20 dark:border-blue-500/30 flex items-center justify-center">
            {/* Outer Ripple */}
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping opacity-40" />
            <div className="absolute inset-4 rounded-full border border-cyan-500/20" />
            <div className="absolute inset-10 rounded-full border border-blue-500/30" />

            {/* Rotating Radar Sweep Beam */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(59, 130, 246, 0.25) 360deg)",
              }}
            />

            {/* Pulsing Blip 1 */}
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-8 right-10 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
            />

            {/* Pulsing Blip 2 */}
            <motion.div
              animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2.6, delay: 0.5, ease: "easeInOut" }}
              className="absolute bottom-10 left-12 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"
            />

            {/* Center Compass / Search Indicator */}
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px] shadow-2xl shadow-blue-500/30">
              <div className="w-full h-full rounded-2xl bg-card/95 backdrop-blur-md flex items-center justify-center">
                <Compass className="h-8 w-8 sm:h-9 sm:w-9 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 404 Headline & Investigation Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
            <MapPin className="h-3.5 w-3.5" />
            <span>{t("نظام الاستعلام الميداني // الهدف غير موجود", "FIELD_INQUIRY // TARGET_COORDINATES_NOT_FOUND")}</span>
          </div>

          <h1 className="text-7xl sm:text-9xl font-black tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 dark:from-white dark:via-gray-100 dark:to-gray-500 bg-clip-text text-transparent mb-3 select-none">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
            {strings.errors.notFoundTitle}
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {strings.errors.notFoundDesc}
          </p>
        </motion.div>

        {/* Interactive Search Bar on 404 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="max-w-md mx-auto mb-10"
        >
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="relative">
              <Search className={`absolute top-1/2 -translate-y-1/2 ${language === "ar" ? "right-4" : "left-4"} h-4 w-4 text-muted-foreground`} />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("ابحث في أقسام المنصة (مثال: العمليات، الحلول، التقنية)...", "Search sections (e.g. portal, solutions, tech)...")}
                className={`h-12 ${language === "ar" ? "pr-11 pl-4" : "pl-11 pr-4"} rounded-2xl bg-card/80 backdrop-blur-md border-border/80 shadow-md text-xs sm:text-sm focus-visible:ring-blue-500`}
              />
            </div>

            {/* Instant Search Suggestions Dropdown */}
            {filteredDestinations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 w-full rounded-2xl bg-card border border-border/80 shadow-2xl p-2 z-30 text-start"
              >
                {filteredDestinations.map((d, i) => (
                  <Link key={i} href={d.href}>
                    <div className="px-3.5 py-2.5 rounded-xl hover:bg-muted text-xs sm:text-sm font-medium text-foreground flex items-center justify-between cursor-pointer transition-colors">
                      <span>{d.title}</span>
                      <ArrowRight className={`h-3.5 w-3.5 text-muted-foreground ${language === "ar" ? "rotate-180" : ""}`} />
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <Link href="/">
            <Button
              size="lg"
              className="h-12 px-7 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-500/25 gap-2 cursor-pointer transition-all hover:scale-[1.02]"
            >
              <Home className="h-4 w-4" />
              <span>{strings.errors.backHomeCta}</span>
              <ArrowRight className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`} />
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 rounded-2xl border-border/80 font-semibold text-xs sm:text-sm gap-2 hover:bg-muted/60 cursor-pointer"
            >
              <LayoutDashboard className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>{t("فتح بوابة العمليات", "Open Operations Portal")}</span>
            </Button>
          </Link>
        </motion.div>

        {/* Quick Navigation Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-start"
        >
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {strings.common.quickLinks}
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              EST3LAMY-REGISTRY-V1.0
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link key={idx} href={item.href}>
                  <div className="group relative p-4 rounded-2xl bg-card/60 hover:bg-card border border-border/60 hover:border-blue-500/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform shrink-0 border border-blue-500/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="text-sm font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          {item.badge && (
                            <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors self-center shrink-0 ${
                          language === "ar" ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
