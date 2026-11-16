import { useMemo } from "react"
import { motion } from "framer-motion"
import { FileText, Users, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ErrorBoundary } from "@/components/common/error-boundary"
import { useLanguage } from "@/context/language-context"
import type { InvestigationCase, FieldResearcher } from "@/types/investigation"
import { getStatusBadge } from "@/components/dashboard/case-detail-dialog"

interface OverviewPanelProps {
  cases: InvestigationCase[]
  researchers: FieldResearcher[]
}

export function OverviewPanel({ cases, researchers }: OverviewPanelProps) {
  const { t } = useLanguage()

  const stats = useMemo(() => {
    const total = cases.length
    const online = researchers.filter((r) => r.status !== "offline").length
    const qcPending = cases.filter((c) => c.status === "under_review").length
    const approved = cases.filter((c) => c.status === "approved").length
    const approvalRate = total > 0 ? Math.round((approved / total) * 100) : 0
    return { total, online, qcPending, approvalRate, approved }
  }, [cases, researchers])

  const researcherGroups = useMemo(() => ({
    available: researchers.filter((r) => r.status === "available").length,
    inField: researchers.filter((r) => r.status === "in_field").length,
    offline: researchers.filter((r) => r.status === "offline").length,
  }), [researchers])

  const recentCases = useMemo(() =>
    [...cases]
      .sort((a, b) => b.createdDate.localeCompare(a.createdDate))
      .slice(0, 5),
    [cases]
  )

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-5 shadow-md"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-black">
              {t("مرحباً بك في بوابة العمليات الميدانية", "Welcome to Field Operations Portal")}
            </h2>
            <p className="text-xs text-blue-200 mt-1 max-w-xl">
              {t(
                "يمكنك إدارة طلبات التحقيق الميداني، متابعة أسطول الباحثين، ومراجعة ضبط الجودة قبل تسليم التقارير للمؤسسات المالية.",
                "Manage field investigation requests, track your researcher fleet, and conduct QC review before delivering reports to financial institutions."
              )}
            </p>
          </div>
          <Badge className="bg-amber-400/20 text-amber-200 border-amber-400/30 text-[10px] px-2 shrink-0">
            {t("بيئة تجريبية", "Demo")}
          </Badge>
        </div>
      </motion.div>

      {/* Quick stats */}
      <ErrorBoundary variant="card" sectionTitle="Overview Stats" sectionTitleAr="إحصائيات سريعة">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: t("إجمالي الحالات", "Total Cases"), value: stats.total, icon: FileText, color: "text-blue-600" },
            { label: t("باحثون نشطون", "Active Researchers"), value: stats.online, icon: Users, color: "text-emerald-600" },
            { label: t("تحت مراجعة الجودة", "Pending QC"), value: stats.qcPending, icon: Clock, color: "text-purple-600" },
            { label: t("نسبة الاعتماد", "Approval Rate"), value: `${stats.approvalRate}%`, icon: TrendingUp, color: "text-amber-600" },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Icon className={`h-8 w-8 ${item.color} shrink-0`} />
                    <div>
                      <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 leading-tight">{item.label}</p>
                      <p className="text-xl font-black text-gray-900 dark:text-white tabular-nums">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </ErrorBoundary>

      {/* Recent activity + researcher availability */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent cases */}
        <ErrorBoundary variant="card" sectionTitle="Recent Activity" sectionTitleAr="آخر النشاطات">
          <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold">{t("آخر الحالات المسجلة", "Recent Cases")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {recentCases.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-1.5 py-0.5 rounded shrink-0">
                      {c.id}
                    </span>
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{c.subjectName}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] text-gray-400">{c.institution.slice(0, 12)}…</span>
                    {getStatusBadge(c.status, t)}
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </ErrorBoundary>

        {/* Researcher availability */}
        <ErrorBoundary variant="card" sectionTitle="Researcher Status" sectionTitleAr="حالة الباحثين">
          <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold">{t("توفر الباحثين الميدانيين", "Researcher Availability")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: t("متاحون للإسناد", "Available"), count: researcherGroups.available, cls: "bg-emerald-500" },
                { label: t("في زيارات ميدانية", "In Field"), count: researcherGroups.inField, cls: "bg-blue-500 animate-pulse" },
                { label: t("غير متاحين", "Offline"), count: researcherGroups.offline, cls: "bg-gray-400" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full shrink-0 ${item.cls}`} />
                  <span className="text-xs text-gray-700 dark:text-gray-300 flex-1">{item.label}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white tabular-nums">{item.count}</span>
                </div>
              ))}
              <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <p className="text-[11px] text-gray-500">
                  {t(`${researchers.length} باحث إجمالاً`, `${researchers.length} researchers total`)}
                </p>
              </div>
            </CardContent>
          </Card>
        </ErrorBoundary>
      </div>
    </div>
  )
}
