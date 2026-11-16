import { useMemo } from "react"
import { motion } from "framer-motion"
import { FileText, Navigation, FileCheck2, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"
import type { InvestigationCase } from "@/types/investigation"

interface StatsGridProps {
  cases: InvestigationCase[]
}

export function StatsGrid({ cases }: StatsGridProps) {
  const { t } = useLanguage()

  const stats = useMemo(() => {
    const total = cases.length
    const active = cases.filter((c) => c.status === "assigned" || c.status === "field_visit").length
    const underReview = cases.filter((c) => c.status === "under_review").length
    const approved = cases.filter((c) => c.status === "approved").length
    return { total, active, underReview, approved }
  }, [cases])

  const cards = [
    {
      label: t("إجمالي الحالات", "Total Cases"),
      value: stats.total,
      Icon: FileText,
      iconBg: "bg-blue-50 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      valueColor: "text-gray-900 dark:text-white",
    },
    {
      label: t("قيد التنفيذ الميداني", "Active in Field"),
      value: stats.active,
      Icon: Navigation,
      iconBg: "bg-amber-50 dark:bg-amber-900/30",
      iconColor: "text-amber-600 dark:text-amber-400",
      valueColor: "text-amber-600 dark:text-amber-400",
    },
    {
      label: t("بانتظار مراجعة الجودة", "Pending QC"),
      value: stats.underReview,
      Icon: FileCheck2,
      iconBg: "bg-purple-50 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
      valueColor: "text-purple-600 dark:text-purple-400",
    },
    {
      label: t("معتمدة ومسلمة", "Delivered Reports"),
      value: stats.approved,
      Icon: CheckCircle2,
      iconBg: "bg-emerald-50 dark:bg-emerald-900/30",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      valueColor: "text-emerald-600 dark:text-emerald-400",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => {
        const { Icon } = card
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
          >
            <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-6 w-6 ${card.iconColor}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider leading-tight">
                    {card.label}
                  </p>
                  <h3 className={`text-2xl font-black ${card.valueColor} mt-0.5 tabular-nums`}>
                    {card.value}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
