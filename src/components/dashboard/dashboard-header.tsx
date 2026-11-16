import { motion } from "framer-motion"
import { PlusCircle, Bell, ChevronRight, Home, Globe, Moon, Sun } from "lucide-react"
import { Link } from "wouter"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/language-context"

const SECTION_LABELS: Record<string, { ar: string; en: string }> = {
  overview: { ar: "لوحة المراقبة", en: "Overview" },
  cases: { ar: "طلبات التحقيق", en: "Investigation Cases" },
  researchers: { ar: "أسطول الباحثين", en: "Researcher Fleet" },
  qc: { ar: "ضبط الجودة", en: "Quality Control" },
  reports: { ar: "التقارير", en: "Reports" },
  settings: { ar: "الإعدادات", en: "Settings" },
}

interface DashboardHeaderProps {
  onNewCase: () => void
  activeSection: string
}

export function DashboardHeader({ onNewCase, activeSection }: DashboardHeaderProps) {
  const { language, toggleLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const section = SECTION_LABELS[activeSection] ?? { ar: activeSection, en: activeSection }

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0"
    >
      {/* Breadcrumb & Navigation Back */}
      <nav className="flex items-center gap-2 text-sm min-w-0">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 rounded-xl text-xs text-gray-500 hover:text-blue-700 dark:hover:text-blue-400 gap-1.5"
            title={t("العودة إلى الموقع الرئيسي", "Back to Main Website")}
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline font-medium">
              {t("الموقع", "Site")}
            </span>
          </Button>
        </Link>
        <span className="text-gray-300 dark:text-gray-700">|</span>
        <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">
          {t("استعلامي", "EST3LAMY")}
        </span>
        <ChevronRight className="h-3.5 w-3.5 text-gray-400 shrink-0 rtl:rotate-180" />
        <span className="font-semibold text-gray-700 dark:text-gray-300 truncate">
          {language === "ar" ? section.ar : section.en}
        </span>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0">
        {(activeSection === "cases" || activeSection === "overview") && (
          <Button
            onClick={onNewCase}
            size="sm"
            className="h-9 px-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs gap-1.5 shadow-sm"
          >
            <PlusCircle className="h-4 w-4" />
            <span className="hidden md:inline">
              {t("طلب استعلام جديد", "New Investigation")}
            </span>
          </Button>
        )}

        {/* Language Switcher */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="h-9 px-2.5 rounded-xl text-xs font-bold gap-1 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          title={t("تبديل اللغة", "Switch Language")}
        >
          <Globe className="h-3.5 w-3.5 text-blue-600" />
          <span>{language === "ar" ? "EN" : "عربي"}</span>
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-9 w-9 p-0 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          title={t("تبديل المظهر", "Toggle Theme")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl">
            <Bell className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </Button>
          <Badge className="absolute -top-1 -end-1 h-4 w-4 p-0 flex items-center justify-center text-[9px] bg-rose-500 text-white border-0 rounded-full">
            3
          </Badge>
        </div>
      </div>
    </motion.header>
  )
}
