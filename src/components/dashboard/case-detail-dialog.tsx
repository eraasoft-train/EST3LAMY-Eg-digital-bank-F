import { useLanguage } from "@/context/language-context"
import type { InvestigationCase, FieldResearcher } from "@/types/investigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, UserCheck, Download, Check } from "lucide-react"

// ─── Shared badge helpers ────────────────────────────────────────────────────

export function getStatusBadge(
  status: InvestigationCase["status"],
  t: (ar: string, en: string) => string
): React.ReactNode {
  switch (status) {
    case "new":
      return (
        <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300">
          {t("جديدة", "New")}
        </Badge>
      )
    case "assigned":
      return (
        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200">
          {t("تم الإسناد", "Assigned")}
        </Badge>
      )
    case "field_visit":
      return (
        <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 animate-pulse">
          {t("زيارة ميدانية", "In Field")}
        </Badge>
      )
    case "under_review":
      return (
        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200">
          {t("مراجعة جودة", "QC Review")}
        </Badge>
      )
    case "approved":
      return (
        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200">
          {t("معتمدة ومسلمة", "Approved & Delivered")}
        </Badge>
      )
    case "rejected":
      return (
        <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200">
          {t("مرفوضة / بحاجة لإعادة", "Revision Req.")}
        </Badge>
      )
  }
}

export function getPriorityBadge(
  priority: InvestigationCase["priority"],
  t: (ar: string, en: string) => string
): React.ReactNode {
  switch (priority) {
    case "عاجل":
      return (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
          {t("عاجل", "Urgent")}
        </span>
      )
    case "مرتفع":
      return (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
          {t("مرتفع", "High")}
        </span>
      )
    case "عادي":
      return (
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          {t("عادي", "Normal")}
        </span>
      )
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

interface CaseDetailDialogProps {
  selectedCase: InvestigationCase | null
  researchers: FieldResearcher[]
  onClose: () => void
  onApprove: (caseId: string) => void
  onAssignResearcher: (caseId: string, researcherId: string) => void
}

export function CaseDetailDialog({
  selectedCase,
  researchers,
  onClose,
  onApprove,
  onAssignResearcher,
}: CaseDetailDialogProps) {
  const { language, t } = useLanguage()

  if (!selectedCase) return null

  return (
    <Dialog open={!!selectedCase} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <DialogHeader>
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-lg">
                {selectedCase.id}
              </span>
              {getStatusBadge(selectedCase.status, t)}
              {getPriorityBadge(selectedCase.priority, t)}
            </div>
            <span className="text-xs text-gray-400 font-mono">{selectedCase.createdDate}</span>
          </div>
          <DialogTitle className="text-xl font-bold">{selectedCase.subjectName}</DialogTitle>
          <DialogDescription className="text-xs text-gray-500">
            {selectedCase.institution} — {selectedCase.type}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-4 text-xs">
          {/* Subject Details */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-2">
            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
              {t("بيانات المستعلم عنه والزيارة الميدانية", "Applicant Profile & Field Visit Data")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-gray-400">{t("الرقم القومي:", "National ID:")}</span>{" "}
                <span className="font-mono font-bold text-gray-800 dark:text-gray-200">
                  {selectedCase.nationalId}
                </span>
              </div>
              <div>
                <span className="text-gray-400">{t("المحافظة:", "Governorate:")}</span>{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {selectedCase.governorate}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-gray-400">{t("محل الإقامة الميداني:", "Field Residence Address:")}</span>{" "}
                <span className="font-medium text-gray-800 dark:text-gray-200">{selectedCase.address}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-gray-400">{t("جهة العمل الميدانية:", "Field Workplace:")}</span>{" "}
                <span className="font-medium text-gray-800 dark:text-gray-200">{selectedCase.workplace}</span>
              </div>
            </div>
          </div>

          {/* Field Researcher Assignment */}
          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-1.5">
                <UserCheck className="h-4 w-4 text-blue-600" />
                {t("إسناد الباحث الميداني", "Field Researcher Assignment")}
              </h4>
              <span className="text-xs text-blue-600 font-semibold">
                {selectedCase.researcherName || t("غير مسند", "Unassigned")}
              </span>
            </div>
            <Select
              defaultValue={selectedCase.researcherId ?? ""}
              onValueChange={(val) => onAssignResearcher(selectedCase.id, val)}
            >
              <SelectTrigger className="rounded-xl text-xs">
                <SelectValue placeholder={t("اختر باحثاً لإسناد الحالة إليه", "Select researcher to assign")} />
              </SelectTrigger>
              <SelectContent>
                {researchers.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    {r.name} — {r.governorate} ({r.status === "available" ? t("متاح", "Available") : t("في الميدان", "In Field")})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* GPS & Evidence */}
          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
            <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-emerald-600" />
              {t("التوثيق الجغرافي والأدلة الرقمية", "GPS Verification & Digital Evidence")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                <div className="font-semibold text-emerald-800 dark:text-emerald-300">
                  {selectedCase.gpsVerified
                    ? t("✓ تطابق إحداثيات GPS مثبت", "✓ GPS Location Matched")
                    : t("بانتظار إرسال إحداثيات الباحث", "Awaiting GPS")}
                </div>
                <div className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80 mt-1">
                  {selectedCase.gpsCoords
                    ? `Lat: ${selectedCase.gpsCoords.lat.toFixed(4)}, Lng: ${selectedCase.gpsCoords.lng.toFixed(4)}`
                    : t("لم تسجل بعد", "Not logged yet")}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                <div className="font-semibold text-blue-800 dark:text-blue-300">
                  {selectedCase.evidenceCount} {t("ملفات أدلة وصور موثقة", "Photos and evidence files")}
                </div>
                <div className="text-[11px] text-blue-700/80 dark:text-blue-400/80 mt-1">
                  {t("صورة العقار + عداد الكهرباء + استمارة التحقيق الموقعة", "Property photo, utility meter, signed field form")}
                </div>
              </div>
            </div>
            {selectedCase.notes && (
              <div className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>{t("ملاحظات الباحث الميداني:", "Field Investigator Findings:")}</strong>{" "}
                {selectedCase.notes}
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl text-xs gap-1.5"
            onClick={() => alert(t("تم تصدير ملخص التقرير الرقمي بصيغة PDF (محاكاة)", "PDF Report Summary exported (Demo)"))}
          >
            <Download className="h-3.5 w-3.5" />
            {t("تحميل التقرير الموثق (PDF)", "Download PDF Report")}
          </Button>
          {selectedCase.status !== "approved" && (
            <Button
              size="sm"
              className="rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs gap-1.5"
              onClick={() => onApprove(selectedCase.id)}
            >
              <Check className="h-3.5 w-3.5" />
              {t("اعتماد التقرير وتسليمه للمؤسسة", "Approve & Deliver to Bank")}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
