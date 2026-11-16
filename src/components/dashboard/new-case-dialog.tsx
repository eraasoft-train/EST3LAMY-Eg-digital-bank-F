import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import type { PriorityLevelAr } from "@/types/investigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface NewCaseFormData {
  institution: string
  type: string
  subjectName: string
  nationalId: string
  governorate: string
  address: string
  workplace: string
  priority: PriorityLevelAr
}

const DEFAULT_FORM: NewCaseFormData = {
  institution: "البنك الأهلي التجاري (تجريبي)",
  type: "استعلام ائتماني وقرض شخصي",
  subjectName: "",
  nationalId: "",
  governorate: "القاهرة الكبرى",
  address: "",
  workplace: "",
  priority: "مرتفع",
}

interface NewCaseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: NewCaseFormData) => void
}

export function NewCaseDialog({ open, onOpenChange, onSubmit }: NewCaseDialogProps) {
  const { language, t } = useLanguage()
  const [form, setForm] = useState<NewCaseFormData>(DEFAULT_FORM)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.subjectName || !form.nationalId || !form.address) {
      alert(t("يرجى ملء الحقول الإلزامية المطلوبة", "Please fill required fields"))
      return
    }
    onSubmit(form)
    setForm(DEFAULT_FORM)
  }

  const update = (patch: Partial<NewCaseFormData>) => setForm((prev) => ({ ...prev, ...patch }))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[550px] rounded-2xl"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {t("تسجيل طلب استعلام ميداني جديد", "Register New Field Investigation Request")}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              {t(
                "إرسال حالة جديدة لمنصة استعلامي للتوزيع التلقائي على الباحثين الميدانيين بالمحافظة المختصة.",
                "Submit a case to EST3LAMY platform for automated dispatch to localized field researchers."
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4 text-sm">
            {/* Institution */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {t("المؤسسة المالية الطالبة", "Requesting Institution")}
              </label>
              <Input
                value={form.institution}
                onChange={(e) => update({ institution: e.target.value })}
                required
                className="rounded-xl"
              />
            </div>

            {/* Name + NID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {t("اسم العميل / المستعلم عنه *", "Applicant Name *")}
                </label>
                <Input
                  placeholder={t("الاسم الرباعي", "Full name")}
                  value={form.subjectName}
                  onChange={(e) => update({ subjectName: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {t("الرقم القومي (14 رقم) *", "National ID (14 digits) *")}
                </label>
                <Input
                  placeholder="29001010101234"
                  value={form.nationalId}
                  onChange={(e) => update({ nationalId: e.target.value })}
                  required
                  maxLength={14}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Type + Governorate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {t("نوع الاستعلام", "Investigation Type")}
                </label>
                <Select value={form.type} onValueChange={(v) => update({ type: v })}>
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="استعلام ائتماني وقرض شخصي">{t("استعلام ائتماني وقرض شخصي", "Personal Loan Investigation")}</SelectItem>
                    <SelectItem value="تحقق فوري من محل الإقامة والعمل">{t("تحقق من محل الإقامة والعمل", "Residency & Workplace Check")}</SelectItem>
                    <SelectItem value="معاينة مقر المنشأة وخطوط الإنتاج">{t("معاينة أصول تأجير تمويلي", "Commercial Asset Inspection")}</SelectItem>
                    <SelectItem value="معاينة عقار سكني وتحقق من شاغليه">{t("تحقق تمويل عقاري", "Mortgage Property Verification")}</SelectItem>
                    <SelectItem value="تحقيق ميداني لمشروع تجاري صغير">{t("تحقق تمويل متناهي الصغر", "Microfinance Business Check")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {t("المحافظة", "Governorate")}
                </label>
                <Select value={form.governorate} onValueChange={(v) => update({ governorate: v })}>
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="القاهرة الكبرى">{t("القاهرة الكبرى", "Greater Cairo")}</SelectItem>
                    <SelectItem value="الجيزة">{t("الجيزة", "Giza")}</SelectItem>
                    <SelectItem value="الإسكندرية">{t("الإسكندرية", "Alexandria")}</SelectItem>
                    <SelectItem value="الدقهلية والغربية">{t("الدلتا (الدقهلية والغربية)", "Delta Region")}</SelectItem>
                    <SelectItem value="أسيوط والمنيا">{t("الصعيد (أسيوط والمنيا)", "Upper Egypt")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {t("عنوان السكن المراد زيارته *", "Residential Address to Visit *")}
              </label>
              <Input
                placeholder={t("الشارع، رقم العقار، الحي، المعلم القريب", "Street, Building #, District, Landmark")}
                value={form.address}
                onChange={(e) => update({ address: e.target.value })}
                required
                className="rounded-xl"
              />
            </div>

            {/* Workplace + Priority */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {t("جهة العمل المعلنة", "Stated Employer")}
                </label>
                <Input
                  placeholder={t("اسم الشركة أو النشاط التجاري", "Company name or activity")}
                  value={form.workplace}
                  onChange={(e) => update({ workplace: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {t("مستوى الأولوية", "Priority Level")}
                </label>
                <Select
                  value={form.priority}
                  onValueChange={(v) => update({ priority: v as PriorityLevelAr })}
                >
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="عاجل">{t("عاجل (خلال 12 ساعة)", "Urgent (Within 12h)")}</SelectItem>
                    <SelectItem value="مرتفع">{t("مرتفع (خلال 24 ساعة)", "High (Within 24h)")}</SelectItem>
                    <SelectItem value="عادي">{t("عادي (خلال 48 ساعة)", "Normal (Within 48h)")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              className="rounded-xl"
              onClick={() => onOpenChange(false)}
            >
              {t("إلغاء", "Cancel")}
            </Button>
            <Button
              type="submit"
              className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              {t("تسجيل وإسناد الطلب", "Submit & Dispatch")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
