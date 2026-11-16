import { Link } from "wouter"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Search,
  ArrowRight,
  LayoutDashboard,
  Cpu,
  Layers,
  HelpCircle,
  Home,
  Compass,
} from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"

export default function NotFound() {
  const { language, t, strings } = useLanguage()

  usePageMeta({
    title: t("404 — الصفحة غير موجودة | استعلامي", "404 — Page Not Found | EST3LAMY"),
    description: t(
      "الصفحة التي تبحث عنها غير موجودة في سجلات استعلامي. تحقق من الرابط أو تصفح الأقسام الرئيسية.",
      "The requested page is not in the EST3LAMY registry. Check the URL or explore our core operations."
    ),
    canonical: "https://est3lamy.vercel.app/404",
  })

  const quickLinks = [
    {
      title: t("بوابة العمليات", "Operations Portal"),
      desc: t("محاكاة إدارة التحريات الميدانية", "Interactive field inquiry console"),
      href: "/dashboard",
      icon: LayoutDashboard,
      badge: t("تجريبي", "Demo"),
    },
    {
      title: t("حلول الاستعلام", "Solutions"),
      desc: t("باقات التحقق والتحري الائتماني", "Verification tiers & SLA specs"),
      href: "/solutions",
      icon: Layers,
    },
    {
      title: t("البنية التقنية", "Technology"),
      desc: t("الأمان والتتبع الجغرافي الحي", "GPS tracking & encrypted pipeline"),
      href: "/technology",
      icon: Cpu,
    },
    {
      title: t("تواصل مع العمليات", "Contact"),
      desc: t("فريق دعم المؤسسات المالية", "Financial institutions support team"),
      href: "/contact",
      icon: HelpCircle,
    },
  ]

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden"
    >
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-indigo-600/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.06]" />
      </div>

      <div className="max-w-2xl w-full text-center">
        {/* Animated Radar / Compass Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex items-center justify-center mb-8"
        >
          {/* Radar Waves */}
          <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-ping opacity-60" />
          <div className="absolute -inset-8 rounded-full border border-blue-500/10 animate-pulse" />

          {/* Core Icon */}
          <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px] shadow-2xl shadow-blue-500/25">
            <div className="w-full h-full rounded-3xl bg-card/95 backdrop-blur-md flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Compass className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 404 Numerical Heading with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
            <Search className="h-3.5 w-3.5" />
            <span>{strings.errors.notFoundBadge}</span>
          </div>

          <h1 className="text-7xl sm:text-8xl font-black tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-500 bg-clip-text text-transparent mb-4">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
            {strings.errors.notFoundTitle}
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            {strings.errors.notFoundDesc}
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Link href="/">
            <Button
              size="lg"
              className="h-12 px-7 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-500/20 gap-2 cursor-pointer"
            >
              <Home className="h-4 w-4" />
              <span>{strings.errors.backHomeCta}</span>
              <ArrowRight className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`} />
            </Button>
          </Link>

          <Link href="/solutions">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 rounded-2xl border-border/80 font-semibold text-xs sm:text-sm gap-2 hover:bg-muted/60 cursor-pointer"
            >
              <span>{strings.errors.exploreSolutionsCta}</span>
            </Button>
          </Link>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-start"
        >
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {strings.common.quickLinks}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link key={idx} href={item.href}>
                  <div className="group relative p-4 rounded-2xl bg-card/60 hover:bg-card border border-border/60 hover:border-blue-500/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
