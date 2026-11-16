import {
  LayoutDashboard,
  FileText,
  Users,
  ShieldCheck,
  BarChart3,
  Settings,
} from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "wouter"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/language-context"

export type DashboardSection = "overview" | "cases" | "researchers" | "qc" | "reports" | "settings"

export interface DashboardSidebarProps {
  activeSection: DashboardSection
  onSectionChange: (section: DashboardSection) => void
  casesCount: number
  qcPendingCount: number
  isCollapsed: boolean
  onToggleCollapse: () => void
}

interface NavItem {
  id: DashboardSection
  ar: string
  en: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number
  soon?: boolean
}

export function DashboardSidebar({
  activeSection,
  onSectionChange,
  casesCount,
  qcPendingCount,
  isCollapsed,
  onToggleCollapse,
}: DashboardSidebarProps) {
  const { language, t } = useLanguage()

  const navItems: NavItem[] = [
    { id: "overview", ar: "لوحة المراقبة", en: "Overview", icon: LayoutDashboard },
    { id: "cases", ar: "طلبات التحقيق", en: "Investigation Cases", icon: FileText, badge: casesCount },
    { id: "researchers", ar: "أسطول الباحثين", en: "Researcher Fleet", icon: Users },
    { id: "qc", ar: "ضبط الجودة", en: "Quality Control", icon: ShieldCheck, badge: qcPendingCount },
    { id: "reports", ar: "التقارير والإحصائيات", en: "Reports & Analytics", icon: BarChart3, soon: true },
    { id: "settings", ar: "إعدادات البوابة", en: "Portal Settings", icon: Settings, soon: true },
  ]

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 56 : 240 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="flex flex-col bg-white dark:bg-gray-900 border-e border-gray-200 dark:border-gray-800 h-full shrink-0 overflow-hidden"
    >
      {/* Header */}
      <Link href="/" className="flex items-center gap-3 px-4 h-16 border-b border-gray-100 dark:border-gray-800 shrink-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/30">
          <ShieldCheck className="h-4 w-4 text-white" />
        </div>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="min-w-0"
          >
            <div className="font-black text-sm text-blue-800 dark:text-blue-300 leading-none truncate">
              {t("استعلامي", "EST3LAMY")}
            </div>
            <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 truncate">
              {t("بوابة العمليات الميدانية", "Field Ops Portal")}
            </div>
          </motion.div>
        )}
      </Link>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => !item.soon && onSectionChange(item.id)}
              disabled={item.soon}
              title={!isCollapsed ? undefined : (language === "ar" ? item.ar : item.en)}
              className={`w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group
                ${isActive
                  ? "bg-blue-700 text-white shadow-sm shadow-blue-200 dark:shadow-none"
                  : item.soon
                    ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                    : "text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200"}`} />

              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  className="flex-1 truncate text-start text-xs font-semibold"
                >
                  {language === "ar" ? item.ar : item.en}
                </motion.span>
              )}

              {!isCollapsed && item.badge !== undefined && item.badge > 0 && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center tabular-nums
                    ${isActive
                      ? "bg-white/20 text-white"
                      : item.id === "qc"
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 animate-pulse"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    }`}
                >
                  {item.badge}
                </span>
              )}

              {!isCollapsed && item.soon && (
                <Badge className="text-[9px] px-1.5 py-0 bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 border-amber-200 dark:border-amber-800">
                  {t("قريباً", "Soon")}
                </Badge>
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-100 dark:border-gray-800 p-2 shrink-0">
        {/* Collapse toggle */}
        <button
          onClick={onToggleCollapse}
          className="w-full flex items-center justify-center gap-2 px-2.5 py-2 rounded-xl text-xs text-gray-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
        >
          <motion.div
            animate={{ rotate: isCollapsed ? (language === "ar" ? -180 : 0) : (language === "ar" ? 0 : 180) }}
            transition={{ duration: 0.25 }}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
            </svg>
          </motion.div>
          {!isCollapsed && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {t("طي القائمة", "Collapse")}
            </motion.span>
          )}
        </button>

        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-1 px-2 py-1.5 flex items-center gap-2"
          >
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              {t("بيئة تجريبية", "DEMO ENV")}
            </span>
          </motion.div>
        )}
      </div>
    </motion.aside>
  )
}
