import { motion } from "framer-motion"
import { FileCheck2, Eye, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ErrorBoundary } from "@/components/common/error-boundary"
import { useLanguage } from "@/context/language-context"
import type { InvestigationCase } from "@/types/investigation"

interface QcPanelProps {
  cases: InvestigationCase[]
  onApprove: (caseId: string) => void
  onSelectCase: (c: InvestigationCase) => void
}

const CHECKLIST_LABELS = [
  { key: "idVerified" as const, ar: "تحقق من بطاقة الرقم القومي", en: "National ID Verified" },
  { key: "addressMatched" as const, ar: "تطابق العنوان ميدانياً", en: "Address Matched" },
  { key: "workVerified" as const, ar: "التحقق من جهة العمل", en: "Workplace Verified" },
  { key: "photosAttached" as const, ar: "الصور والأدلة مرفقة", en: "Photos Attached" },
  { key: "neighborInquiry" as const, ar: "استفسار الجيران / المحيط", en: "Neighbor Inquiry Done" },
]

export function QcPanel({ cases, onApprove, onSelectCase }: QcPanelProps) {
  const { t } = useLanguage()
  const pendingCases = cases.filter((c) => c.status === "under_review")

  return (
    <ErrorBoundary variant="card" sectionTitle="Quality Control Center" sectionTitleAr="مركز ضبط الجودة والاعتماد">
      <Card className="rounded-2xl border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <FileCheck2 className="h-5 w-5 text-purple-600" />
            {t("حالات بانتظار الاعتماد وضبط الجودة", "Cases Pending Quality Control Review")}
          </CardTitle>
          <CardDescription className="text-xs text-gray-500">
            {t(
              "مراجعة الأدلة والصور الميدانية ومطابقة إحداثيات GPS قبل تسليم التقرير النهائي للمؤسسة المالية الشريكة.",
              "Review field photos, GPS match, and investigator findings before releasing final report to the partner institution."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {pendingCases.length === 0 ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              <FileCheck2 className="h-10 w-10 mx-auto mb-3 opacity-30" />
              {t("لا توجد حالات حالياً بانتظار مراجعة الجودة.", "No cases currently awaiting quality control approval.")}
            </div>
          ) : (
            pendingCases.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="p-4 rounded-xl border border-purple-100 dark:border-purple-950/60 bg-purple-50/30 dark:bg-purple-950/20 space-y-3"
              >
                {/* Case header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono font-bold text-xs text-purple-700 dark:text-purple-300">{c.id}</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{c.subjectName}</span>
                      <span className="text-xs text-gray-500">({c.institution})</span>
                    </div>
                    {c.notes && (
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{c.notes}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 px-3 rounded-xl text-xs gap-1.5"
                      onClick={() => onSelectCase(c)}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {t("فحص الأدلة", "Inspect Evidence")}
                    </Button>
                    <Button
                      size="sm"
                      className="h-9 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs gap-1.5"
                      onClick={() => onApprove(c.id)}
                    >
                      <Check className="h-3.5 w-3.5" />
                      {t("اعتماد وتسليم", "Approve & Deliver")}
                    </Button>
                  </div>
                </div>

                {/* QC Checklist */}
                <div className="flex flex-wrap gap-2">
                  {CHECKLIST_LABELS.map((item) => {
                    const passed = c.qcChecklist[item.key]
                    return (
                      <span
                        key={item.key}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold
                          ${passed
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                            : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500"
                          }`}
                      >
                        {passed ? "✓" : "○"}{" "}
                        {t(item.ar, item.en)}
                      </span>
                    )
                  })}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                    📷 {c.evidenceCount} {t("صور مرفقة", "photos")}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </CardContent>
      </Card>
    </ErrorBoundary>
  )
}
