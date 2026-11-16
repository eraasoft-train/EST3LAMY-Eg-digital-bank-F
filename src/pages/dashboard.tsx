import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Search,
  PlusCircle,
  FileCheck2,
  MapPin,
  Users,
  CheckCircle2,
  AlertCircle,
  Building,
  Navigation,
  FileText,
  UserCheck,
  Check,
  Download,
  Eye,
  RefreshCw,
  Sparkles,
} from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"
import {
  InvestigationCase,
  FieldResearcher,
  INITIAL_CASES,
  INITIAL_RESEARCHERS,
} from "@/data/portal"

export default function DashboardPage() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t(
      "بوابة العمليات الميدانية — استعلامي | إدارة الحالات والباحثين",
      "Field Operations Portal — EST3LAMY | Case & Researcher Management"
    ),
    description: t(
      "لوحة تحكم تفاعلية تجريبية لإدارة حالات التحقيق الميداني، وتتبع الباحثين، وضبط الجودة للمؤسسات المالية.",
      "Interactive demo operations portal for managing digital field investigations, live researcher tracking, and QC review."
    ),
    canonical: "https://est3lamy.vercel.app/dashboard",
  })

  // State
  const [cases, setCases] = useState<InvestigationCase[]>(INITIAL_CASES)
  const [researchers] = useState<FieldResearcher[]>(INITIAL_RESEARCHERS)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")
  const [selectedCase, setSelectedCase] = useState<InvestigationCase | null>(null)
  const [isNewCaseOpen, setIsNewCaseOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // New Case Form State
  const [newCase, setNewCase] = useState<{
    institution: string
    type: string
    subjectName: string
    nationalId: string
    governorate: string
    address: string
    workplace: string
    priority: "عاجل" | "مرتفع" | "عادي"
  }>({
    institution: "البنك الأهلي التجاري (تجريبي)",
    type: "استعلام ائتماني وقرض شخصي",
    subjectName: "",
    nationalId: "",
    governorate: "القاهرة الكبرى",
    address: "",
    workplace: "",
    priority: "مرتفع",
  })

  const showNotification = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 4000)
  }

  // Filtered cases
  const filteredCases = useMemo(() => {
    return cases.filter((c) => {
      const matchesSearch =
        c.subjectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.subjectNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.nationalId.includes(searchQuery) ||
        c.institution.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesStatus = statusFilter === "all" || c.status === statusFilter
      const matchesPriority = priorityFilter === "all" || c.priority === priorityFilter

      return matchesSearch && matchesStatus && matchesPriority
    })
  }, [cases, searchQuery, statusFilter, priorityFilter])

  // KPIs
  const stats = useMemo(() => {
    const total = cases.length
    const active = cases.filter((c) => c.status === "assigned" || c.status === "field_visit").length
    const underReview = cases.filter((c) => c.status === "under_review").length
    const approved = cases.filter((c) => c.status === "approved").length
    return { total, active, underReview, approved }
  }, [cases])

  // Handle case approval in QC
  const handleApproveCase = (id: string) => {
    setCases((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              status: "approved",
              notes: (c.notes || "") + (language === "ar" ? " — تم الاعتماد النهائي من ضبط الجودة وتسليم التقرير للمؤسسة بنجاح." : " — Final QC approved and report delivered to institution."),
            }
          : c
      )
    )
    if (selectedCase && selectedCase.id === id) {
      setSelectedCase((prev) => (prev ? { ...prev, status: "approved" } : null))
    }
    showNotification(
      t(
        `تم اعتماد التقرير وتسليمه للمؤسسة بنجاح: ${id}`,
        `Report approved and delivered successfully: ${id}`
      )
    )
  }

  // Handle researcher assignment
  const handleAssignResearcher = (caseId: string, researcherId: string) => {
    const res = researchers.find((r) => r.id === researcherId)
    if (!res) return

    setCases((prev) =>
      prev.map((c) =>
        c.id === caseId
          ? {
              ...c,
              researcherId: res.id,
              researcherName: res.name,
              status: "assigned",
            }
          : c
      )
    )
    if (selectedCase && selectedCase.id === caseId) {
      setSelectedCase((prev) =>
        prev
          ? {
              ...prev,
              researcherId: res.id,
              researcherName: res.name,
              status: "assigned",
            }
          : null
      )
    }
    showNotification(
      t(
        `تم إسناد الحالة ${caseId} إلى الباحث: ${res.name}`,
        `Case ${caseId} assigned to researcher: ${res.nameEn}`
      )
    )
  }

  // Handle New Case Submit
  const handleCreateCase = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCase.subjectName || !newCase.nationalId || !newCase.address) {
      alert(t("يرجى ملء الحقول الإلزامية المطلوبة", "Please fill required fields"))
      return
    }

    const newId = `EST-2026-${Math.floor(1060 + Math.random() * 900)}`
    const createdCase: InvestigationCase = {
      id: newId,
      institution: newCase.institution,
      institutionEn: "Financial Partner (Demo)",
      type: newCase.type,
      typeEn: "Field Investigation",
      subjectName: newCase.subjectName,
      subjectNameEn: newCase.subjectName,
      nationalId: newCase.nationalId,
      governorate: newCase.governorate,
      governorateEn: "Egypt",
      address: newCase.address,
      workplace: newCase.workplace || t("غير محدد", "Not specified"),
      status: "new",
      priority: newCase.priority,
      priorityEn: newCase.priority === "عاجل" ? "Urgent" : newCase.priority === "مرتفع" ? "High" : "Normal",
      createdDate: new Date().toISOString().replace("T", " ").slice(0, 16),
      gpsVerified: false,
      evidenceCount: 0,
      qcChecklist: {
        idVerified: false,
        addressMatched: false,
        workVerified: false,
        photosAttached: false,
        neighborInquiry: false,
      },
    }

    setCases([createdCase, ...cases])
    setIsNewCaseOpen(false)
    setNewCase({
      institution: "البنك الأهلي التجاري (تجريبي)",
      type: "استعلام ائتماني وقرض شخصي",
      subjectName: "",
      nationalId: "",
      governorate: "القاهرة الكبرى",
      address: "",
      workplace: "",
      priority: "مرتفع",
    })
    showNotification(
      t(
        `تم تسجيل طلب الاستعلام بنجاح برقم: ${newId}`,
        `Investigation request registered with ID: ${newId}`
      )
    )
  }

  const getStatusBadge = (status: InvestigationCase["status"]) => {
    switch (status) {
      case "new":
        return <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300">{t("جديدة", "New")}</Badge>
      case "assigned":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200">{t("تم الإسناد", "Assigned")}</Badge>
      case "field_visit":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 animate-pulse">{t("زيارة ميدانية", "In Field")}</Badge>
      case "under_review":
        return <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200">{t("مراجعة جودة", "QC Review")}</Badge>
      case "approved":
        return <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200">{t("معتمدة ومسلمة", "Approved & Delivered")}</Badge>
      case "rejected":
        return <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200">{t("مرفوضة / بحاجة لإعادة", "Revision Req.")}</Badge>
    }
  }

  const getPriorityBadge = (priority: InvestigationCase["priority"]) => {
    switch (priority) {
      case "عاجل":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800">{t("عاجل", "Urgent")}</span>
      case "مرتفع":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800">{t("مرتفع", "High")}</span>
      case "عادي":
        return <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">{t("عادي", "Normal")}</span>
    }
  }

  return (
    <div className="bg-slate-50 dark:bg-gray-950 min-h-screen py-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Toast alert */}
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-sm font-semibold"
          >
            <CheckCircle2 className="h-5 w-5" />
            <span>{toastMessage}</span>
          </motion.div>
        )}

        {/* Demo banner */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base">
                  {t("بوابة العمليات الميدانية والتحقق الائتماني", "Field Operations & Credit Verification Portal")}
                </span>
                <Badge className="bg-amber-400/20 text-amber-200 border-amber-400/30 text-[10px] px-2 py-0.5 rounded-full">
                  {t("بيئة محاكاة تجريبية", "Interactive Simulation")}
                </Badge>
              </div>
              <p className="text-xs text-blue-100 mt-0.5">
                {t(
                  "هذه الواجهة تمثل بيئة العمل الحقيقية لمسؤولي الائتمان بالبنوك وشركات التمويل لإدارة حالات التحقيق وتتبع الباحثين.",
                  "This interface demonstrates the enterprise operations environment for financial institutions to manage investigations."
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Dialog open={isNewCaseOpen} onOpenChange={setIsNewCaseOpen}>
              <DialogTrigger asChild>
                <Button className="h-10 px-4 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs gap-1.5 shadow-sm">
                  <PlusCircle className="h-4 w-4 text-blue-700" />
                  {t("طلب استعلام جديد", "New Investigation")}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px] rounded-2xl" dir={language === "ar" ? "rtl" : "ltr"}>
                <form onSubmit={handleCreateCase}>
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
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {t("المؤسسة المالية الطالبة", "Requesting Institution")}
                      </label>
                      <Input
                        value={newCase.institution}
                        onChange={(e) => setNewCase({ ...newCase, institution: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {t("اسم العميل / المستعلم عنه *", "Applicant Name *")}
                        </label>
                        <Input
                          placeholder={t("الاسم الرباعي", "Full name")}
                          value={newCase.subjectName}
                          onChange={(e) => setNewCase({ ...newCase, subjectName: e.target.value })}
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
                          value={newCase.nationalId}
                          onChange={(e) => setNewCase({ ...newCase, nationalId: e.target.value })}
                          required
                          maxLength={14}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {t("نوع الاستعلام", "Investigation Type")}
                        </label>
                        <Select
                          value={newCase.type}
                          onValueChange={(val) => setNewCase({ ...newCase, type: val })}
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
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
                        <Select
                          value={newCase.governorate}
                          onValueChange={(val) => setNewCase({ ...newCase, governorate: val })}
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
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

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {t("عنوان السكن المراد زيارته *", "Residential Address to Visit *")}
                      </label>
                      <Input
                        placeholder={t("الشارع، رقم العقار، الحي، المعلم القريب", "Street, Building #, District, Landmark")}
                        value={newCase.address}
                        onChange={(e) => setNewCase({ ...newCase, address: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {t("جهة العمل المعلنة", "Stated Employer")}
                        </label>
                        <Input
                          placeholder={t("اسم الشركة أو النشاط التجاري", "Company name or activity")}
                          value={newCase.workplace}
                          onChange={(e) => setNewCase({ ...newCase, workplace: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {t("مستوى الأولوية", "Priority Level")}
                        </label>
                        <Select
                          value={newCase.priority}
                          onValueChange={(val: any) => setNewCase({ ...newCase, priority: val })}
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
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
                      onClick={() => setIsNewCaseOpen(false)}
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
          </div>
        </div>

        {/* Operational KPI summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("إجمالي الحالات", "Total Cases")}
                </p>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mt-0.5">{stats.total}</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <Navigation className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("قيد التنفيذ الميداني", "Active in Field")}
                </p>
                <h3 className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-0.5">{stats.active}</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                <FileCheck2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("بانتظار مراجعة الجودة", "Pending QC")}
                </p>
                <h3 className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-0.5">{stats.underReview}</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("معتمدة ومسلمة", "Delivered Reports")}
                </p>
                <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">{stats.approved}</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Portal Tabs */}
        <Tabs defaultValue="cases" className="space-y-6">
          <TabsList className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-1 rounded-2xl w-full sm:w-auto flex flex-wrap gap-1">
            <TabsTrigger value="cases" className="rounded-xl px-4 py-2 font-bold text-xs">
              <FileText className="h-4 w-4 ml-1.5 inline" />
              {t("الحالات والتحقيقات", "Investigation Cases")} ({filteredCases.length})
            </TabsTrigger>
            <TabsTrigger value="researchers" className="rounded-xl px-4 py-2 font-bold text-xs">
              <Users className="h-4 w-4 ml-1.5 inline" />
              {t("شبكة الباحثين الميدانيين", "Researcher Fleet")} ({researchers.length})
            </TabsTrigger>
            <TabsTrigger value="qc" className="rounded-xl px-4 py-2 font-bold text-xs">
              <FileCheck2 className="h-4 w-4 ml-1.5 inline" />
              {t("قسم ضبط الجودة (QC)", "Quality Control & Review")} ({stats.underReview})
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: CASES */}
          <TabsContent value="cases" className="space-y-4">
            {/* Filter and search bar */}
            <Card className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder={t(
                        "بحث بالاسم، الرقم القومي، رقم الحالة، أو اسم المؤسسة...",
                        "Search by name, National ID, case code, or institution..."
                      )}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-9 rounded-xl text-xs h-10"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
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

                    <Select value={priorityFilter} onValueChange={setPriorityFilter}>
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

                    {(searchQuery || statusFilter !== "all" || priorityFilter !== "all") && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSearchQuery("")
                          setStatusFilter("all")
                          setPriorityFilter("all")
                        }}
                        className="h-10 rounded-xl text-xs"
                      >
                        <RefreshCw className="h-3.5 w-3.5 ml-1" />
                        {t("إعادة ضبط", "Reset")}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cases Table / Cards */}
            <div className="space-y-3">
              {filteredCases.length === 0 ? (
                <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                  <AlertCircle className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 font-semibold text-sm">
                    {t("لا توجد حالات تطابق خيارات البحث الحالية", "No cases match current filter criteria")}
                  </p>
                </div>
              ) : (
                filteredCases.map((c) => (
                  <Card
                    key={c.id}
                    className="rounded-2xl border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm hover:shadow-md"
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-lg border border-blue-200 dark:border-blue-800">
                              {c.id}
                            </span>
                            {getStatusBadge(c.status)}
                            {getPriorityBadge(c.priority)}
                            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                              <Building className="h-3.5 w-3.5 text-gray-400" />
                              {c.institution}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">
                              {c.subjectName}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-1">
                              <span>
                                <strong className="text-gray-700 dark:text-gray-300">{t("الرقم القومي:", "National ID:")}</strong> {c.nationalId}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5 text-rose-500" />
                                {c.address} ({c.governorate})
                              </span>
                              <span>•</span>
                              <span>
                                <strong className="text-gray-700 dark:text-gray-300">{t("النوع:", "Type:")}</strong> {c.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right side info & actions */}
                        <div className="flex items-center gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100 dark:border-gray-800">
                          <div className="text-xs text-left">
                            <div className="text-gray-400">{t("الباحث الميداني", "Field Researcher")}</div>
                            <div className="font-semibold text-gray-800 dark:text-gray-200">
                              {c.researcherName || t("لم يُسند بعد", "Unassigned")}
                            </div>
                            <div className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                              {c.gpsVerified ? (
                                <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                                  <Check className="h-3 w-3" /> GPS موثق
                                </span>
                              ) : (
                                <span className="text-gray-400">{t("بانتظار الزيارة", "Pending visit")}</span>
                              )}
                              <span>•</span>
                              <span>{c.evidenceCount} {t("صور/أدلة", "evidence items")}</span>
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 px-3.5 rounded-xl border-gray-200 dark:border-gray-700 text-xs font-semibold gap-1.5"
                            onClick={() => setSelectedCase(c)}
                          >
                            <Eye className="h-3.5 w-3.5 text-blue-600" />
                            {t("تفاصيل الحالة", "View Case")}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* TAB 2: RESEARCHERS FLEET */}
          <TabsContent value="researchers" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchers.map((res) => (
                <Card key={res.id} className="rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-gray-400">{res.id}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          res.status === "available"
                            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                            : res.status === "in_field"
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 animate-pulse"
                            : "bg-gray-100 text-gray-500 dark:bg-gray-800"
                        }`}
                      >
                        {res.status === "available"
                          ? t("متاح للإسناد", "Available")
                          : res.status === "in_field"
                          ? t("في زيارة ميدانية", "In Field Visit")
                          : t("غير متاح", "Offline")}
                      </span>
                    </div>
                    <CardTitle className="text-base font-bold text-gray-900 dark:text-white mt-1">
                      {res.name}
                    </CardTitle>
                    <CardDescription className="text-xs flex items-center gap-1 text-gray-500">
                      <MapPin className="h-3.5 w-3.5 text-blue-600" />
                      {res.governorate}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 pt-0 text-xs">
                    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-gray-900/60 text-center">
                      <div>
                        <div className="text-[10px] text-gray-400">{t("حالات نشطة", "Active")}</div>
                        <div className="font-bold text-gray-800 dark:text-gray-200 text-sm">{res.activeCases}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400">{t("منجز هذا الشهر", "Completed")}</div>
                        <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{res.completedMonth}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400">{t("التقييم", "Rating")}</div>
                        <div className="font-bold text-amber-600 dark:text-amber-400 text-sm">★ {res.rating}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-gray-500 text-[11px] pt-1">
                      <span>{t("آخر نشاط GPS:", "Last GPS signal:")} {res.lastActive}</span>
                      <span className="font-mono">{res.phoneMasked}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TAB 3: QC REVIEW */}
          <TabsContent value="qc" className="space-y-4">
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
              <CardContent className="space-y-3">
                {cases.filter((c) => c.status === "under_review").length === 0 ? (
                  <div className="text-center py-10 text-gray-400 text-sm">
                    {t("لا توجد حالات حالياً بانتظار مراجعة الجودة.", "No cases currently awaiting quality control approval.")}
                  </div>
                ) : (
                  cases
                    .filter((c) => c.status === "under_review")
                    .map((c) => (
                      <div
                        key={c.id}
                        className="p-4 rounded-xl border border-purple-100 dark:border-purple-950/60 bg-purple-50/30 dark:bg-purple-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono font-bold text-xs text-purple-700 dark:text-purple-300">
                              {c.id}
                            </span>
                            <span className="text-xs font-bold text-gray-900 dark:text-white">
                              {c.subjectName}
                            </span>
                            <span className="text-xs text-gray-500">({c.institution})</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                            {c.notes}
                          </p>
                          <div className="flex flex-wrap gap-2 text-[11px]">
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 font-semibold">
                              ✓ {t("تم التحقق من بطاقة الرقم القومي", "National ID verified")}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 font-semibold">
                              ✓ {t("تطابق الموقع الجغرافي GPS", "GPS coordinates verified")}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 font-semibold">
                              📷 {c.evidenceCount} {t("صور مرفقة", "photos attached")}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 px-3 rounded-xl text-xs"
                            onClick={() => setSelectedCase(c)}
                          >
                            <Eye className="h-3.5 w-3.5 ml-1" />
                            {t("فحص الأدلة", "Inspect Evidence")}
                          </Button>
                          <Button
                            size="sm"
                            className="h-9 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs gap-1.5"
                            onClick={() => handleApproveCase(c.id)}
                          >
                            <Check className="h-3.5 w-3.5" />
                            {t("اعتماد وتسليم للمؤسسة", "Approve & Deliver")}
                          </Button>
                        </div>
                      </div>
                    ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CASE DETAIL DIALOG */}
        {selectedCase && (
          <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl" dir={language === "ar" ? "rtl" : "ltr"}>
              <DialogHeader>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-lg">
                      {selectedCase.id}
                    </span>
                    {getStatusBadge(selectedCase.status)}
                    {getPriorityBadge(selectedCase.priority)}
                  </div>
                  <span className="text-xs text-gray-400 font-mono">{selectedCase.createdDate}</span>
                </div>
                <DialogTitle className="text-xl font-bold">
                  {selectedCase.subjectName}
                </DialogTitle>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-400">{t("الرقم القومي:", "National ID:")}</span>{" "}
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-200">{selectedCase.nationalId}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">{t("المحافظة:", "Governorate:")}</span>{" "}
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{selectedCase.governorate}</span>
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

                  <div className="flex items-center gap-3">
                    <Select
                      defaultValue={selectedCase.researcherId || ""}
                      onValueChange={(val) => handleAssignResearcher(selectedCase.id, val)}
                    >
                      <SelectTrigger className="rounded-xl text-xs flex-1">
                        <SelectValue placeholder={t("اختر باحثاً لإسناد الحالة إليه", "Select researcher to assign")} />
                      </SelectTrigger>
                      <SelectContent>
                        {researchers.map((r) => (
                          <SelectItem key={r.id} value={r.id}>
                            {r.name} — {r.governorate} ({r.status === "available" ? "متاح" : "في الميدان"})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* GPS & Evidence Verification */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    {t("التوثيق الجغرافي والأدلة الرقمية", "GPS Verification & Digital Evidence")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                      <div className="font-semibold text-emerald-800 dark:text-emerald-300">
                        {selectedCase.gpsVerified ? t("✓ تطابق إحداثيات GPS مثبت", "✓ GPS Location Matched") : t("بانتظار إرسال إحداثيات الباحث", "Awaiting GPS")}
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
                    <div className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                      <strong>{t("ملاحظات الباحث الميداني:", "Field Investigator Findings:")}</strong> {selectedCase.notes}
                    </div>
                  )}
                </div>
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl text-xs gap-1.5"
                  onClick={() => {
                    alert(t("تم تصدير ملخص التقرير الرقمي بصيغة PDF (محاكاة)", "PDF Report Summary exported (Demo)"))
                  }}
                >
                  <Download className="h-3.5 w-3.5" />
                  {t("تحميل التقرير الموثق (PDF)", "Download PDF Report")}
                </Button>

                {selectedCase.status !== "approved" && (
                  <Button
                    size="sm"
                    className="rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs gap-1.5"
                    onClick={() => handleApproveCase(selectedCase.id)}
                  >
                    <Check className="h-3.5 w-3.5" />
                    {t("اعتماد التقرير وتسليمه للمؤسسة", "Approve & Deliver to Bank")}
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

      </div>
    </div>
  )
}
