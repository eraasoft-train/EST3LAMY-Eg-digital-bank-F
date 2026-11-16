import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ErrorBoundary } from "@/components/common/error-boundary"
import { useLanguage } from "@/context/language-context"
import type { FieldResearcher } from "@/types/investigation"

interface ResearchersPanelProps {
  researchers: FieldResearcher[]
}

function StatusDot({ status }: { status: FieldResearcher["status"] }) {
  if (status === "available") {
    return <span className="absolute top-3 end-3 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-gray-900" />
  }
  if (status === "in_field") {
    return <span className="absolute top-3 end-3 h-2.5 w-2.5 rounded-full bg-blue-500 ring-2 ring-white dark:ring-gray-900 animate-ping" />
  }
  return <span className="absolute top-3 end-3 h-2.5 w-2.5 rounded-full bg-gray-400 ring-2 ring-white dark:ring-gray-900" />
}

export function ResearchersPanel({ researchers }: ResearchersPanelProps) {
  const { t } = useLanguage()

  const statusLabel = (status: FieldResearcher["status"]) => {
    if (status === "available") return { text: t("متاح للإسناد", "Available"), cls: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400" }
    if (status === "in_field") return { text: t("في زيارة ميدانية", "In Field Visit"), cls: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 animate-pulse" }
    return { text: t("غير متاح", "Offline"), cls: "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400" }
  }

  return (
    <ErrorBoundary variant="card" sectionTitle="Researchers Fleet" sectionTitleAr="أسطول الباحثين الميدانيين">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {researchers.map((res, index) => {
          const sl = statusLabel(res.status)
          return (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.3 }}
            >
              <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative">
                <StatusDot status={res.status} />
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between pe-6">
                    <span className="font-mono text-xs text-gray-400">{res.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${sl.cls}`}>
                      {sl.text}
                    </span>
                  </div>
                  <CardTitle className="text-base font-bold text-gray-900 dark:text-white mt-1">
                    {res.name}
                  </CardTitle>
                  <CardDescription className="text-xs flex items-center gap-1 text-gray-500">
                    <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    {res.governorate}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 pt-0 text-xs">
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-gray-900/60 text-center">
                    <div>
                      <div className="text-[10px] text-gray-400">{t("نشطة", "Active")}</div>
                      <div className="font-bold text-gray-800 dark:text-gray-200 text-sm tabular-nums">{res.activeCases}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400">{t("منجز", "Done")}</div>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm tabular-nums">{res.completedMonth}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400">{t("تقييم", "Rating")}</div>
                      <div className="font-bold text-amber-600 dark:text-amber-400 text-sm">★ {res.rating}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-gray-400 text-[11px] pt-1">
                    <span>{t("آخر GPS:", "Last GPS:")} {res.lastActive}</span>
                    <span className="font-mono">{res.phoneMasked}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </ErrorBoundary>
  )
}
