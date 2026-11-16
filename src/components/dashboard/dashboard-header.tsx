import { motion } from "framer-motion"
import { PlusCircle, Bell, ChevronRight } from "lucide-react"
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
  const { language, t } = useLanguage()
  const section = SECTION_LABELS[activeSection] ?? { ar: activeSection, en: activeSection }

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0"
    >
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm min-w-0">
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
            <span className="hidden sm:inline">
              {t("طلب استعلام جديد", "New Investigation")}
            </span>
          </Button>
        )}

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
