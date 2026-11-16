import { useState, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search, AlertCircle, Building, MapPin, Eye, RefreshCw, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ErrorBoundary } from "@/components/common/error-boundary"
import { useLanguage } from "@/context/language-context"
import type { InvestigationCase, FieldResearcher } from "@/types/investigation"
import { getStatusBadge, getPriorityBadge } from "@/components/dashboard/case-detail-dialog"

interface CasesPanelProps {
  cases: InvestigationCase[]
  researchers: FieldResearcher[]
  onSelectCase: (c: InvestigationCase) => void
  onAssignResearcher: (caseId: string, researcherId: string) => void
}

export function CasesPanel({ cases, onSelectCase }: CasesPanelProps) {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredCases = useMemo(() => {
    return cases.filter((c) => {
      const q = searchQuery.toLowerCase()
      const matchesSearch =
        c.subjectName.toLowerCase().includes(q) ||
        c.subjectNameEn.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q) ||
        c.nationalId.includes(q) ||
        c.institution.toLowerCase().includes(q)
      const matchesStatus = statusFilter === "all" || c.status === statusFilter
      const matchesPriority = priorityFilter === "all" || c.priority === priorityFilter
      return matchesSearch && matchesStatus && matchesPriority
    })
  }, [cases, searchQuery, statusFilter, priorityFilter])

  const handleReset = () => {
    setSearchQuery("")
    setStatusFilter("all")
    setPriorityFilter("all")
  }

  const hasFilters = searchQuery || statusFilter !== "all" || priorityFilter !== "all"

  return (
    <ErrorBoundary variant="card" sectionTitle="Cases Registry" sectionTitleAr="سجل طلبات التحقيق">
      <div className="space-y-4">
        {/* Filter bar */}
        <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute end-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder={t(
                    "بحث بالاسم، الرقم القومي، رقم الحالة، أو اسم المؤسسة...",
                    "Search by name, National ID, case code, or institution..."
                  )}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pe-9 rounded-xl text-xs h-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v)}>
                  <SelectTrigger className="w-[140px] rounded-xl text-xs h-10">
                    <SelectValue placeholder={t("الحالة", "Status")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("كل الحالات", "All Statuses")}</SelectItem>
                    <SelectItem value="new">{t("جديدة", "New")}</SelectItem>
                    <SelectItem value="assigned">{t("تم الإسناد", "Assigned")}</SelectItem>
                    <SelectItem value="field_visit">{t("زيارة ميدانية", "In Field")}</SelectItem>
                    <SelectItem value="under_review">{t("مراجعة جودة", "Under QC")}</SelectItem>
                    <SelectItem value="approved">{t("معتمدة", "Approved")}</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priorityFilter} onValueChange={(v) => setPriorityFilter(v)}>
                  <SelectTrigger className="w-[120px] rounded-xl text-xs h-10">
                    <SelectValue placeholder={t("الأولوية", "Priority")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("كل الأولويات", "All Priorities")}</SelectItem>
                    <SelectItem value="عاجل">{t("عاجل", "Urgent")}</SelectItem>
                    <SelectItem value="مرتفع">{t("مرتفع", "High")}</SelectItem>
                    <SelectItem value="عادي">{t("عادي", "Normal")}</SelectItem>
                  </SelectContent>
                </Select>

                {hasFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="h-10 rounded-xl text-xs gap-1.5"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    {t("إعادة ضبط", "Reset")}
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium ps-1">
          {t(`${filteredCases.length} حالة`, `${filteredCases.length} cases`)}
        </p>

        {/* Case list */}
        <AnimatePresence mode="popLayout">
          {filteredCases.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <AlertCircle className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-semibold text-sm">
                {t("لا توجد حالات تطابق خيارات البحث الحالية", "No cases match current filter criteria")}
              </p>
              {hasFilters && (
                <Button variant="ghost" size="sm" onClick={handleReset} className="mt-3 text-xs rounded-xl">
                  {t("مسح الفلاتر", "Clear filters")}
                </Button>
              )}
            </motion.div>
          ) : (
            filteredCases.map((c, i) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: i * 0.03, duration: 0.25 }}
              >
                <Card className="rounded-2xl border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm hover:shadow-md">
                  <CardContent className="p-4 sm:p-5" onClick={() => onSelectCase(c)} style={{ cursor: "pointer" }}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2 min-w-0">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-lg border border-blue-200 dark:border-blue-800">
                            {c.id}
                          </span>
                          {getStatusBadge(c.status, t)}
                          {getPriorityBadge(c.priority, t)}
                          <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                            <Building className="h-3.5 w-3.5 text-gray-400" />
                            {c.institution}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 dark:text-white truncate">{c.subjectName}</h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mt-1">
                            <span>
                              <strong className="text-gray-700 dark:text-gray-300">{t("الرقم القومي:", "NID:")}</strong>{" "}
                              {c.nationalId}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-rose-500" />
                              {c.governorate}
                            </span>
                            <span>•</span>
                            <span className="truncate">{c.type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100 dark:border-gray-800">
                        <div className="text-xs">
                          <div className="text-gray-400 text-[11px]">{t("الباحث الميداني", "Researcher")}</div>
                          <div className="font-semibold text-gray-800 dark:text-gray-200">
                            {c.researcherName || t("لم يُسند بعد", "Unassigned")}
                          </div>
                          <div className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                            {c.gpsVerified ? (
                              <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                                <Check className="h-3 w-3" /> GPS
                              </span>
                            ) : (
                              <span>{t("بانتظار الزيارة", "Pending")}</span>
                            )}
                            <span>•</span>
                            <span>{c.evidenceCount} {t("ملفات", "files")}</span>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 px-3 rounded-xl border-gray-200 dark:border-gray-700 text-xs font-semibold gap-1.5"
                          onClick={(e) => { e.stopPropagation(); onSelectCase(c) }}
                        >
                          <Eye className="h-3.5 w-3.5 text-blue-600" />
                          {t("تفاصيل", "View")}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  )
}
