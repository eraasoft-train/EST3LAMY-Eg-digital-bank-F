import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"
import { INITIAL_CASES, INITIAL_RESEARCHERS } from "@/data/portal"
import type { InvestigationCase, FieldResearcher } from "@/types/investigation"

// Dashboard sub-components
import { DashboardSidebar, type DashboardSection } from "@/components/dashboard/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsGrid } from "@/components/dashboard/stats-grid"
import { CasesPanel } from "@/components/dashboard/cases-panel"
import { ResearchersPanel } from "@/components/dashboard/researchers-panel"
import { QcPanel } from "@/components/dashboard/qc-panel"
import { OverviewPanel } from "@/components/dashboard/overview-panel"
import { NewCaseDialog, type NewCaseFormData } from "@/components/dashboard/new-case-dialog"
import { CaseDetailDialog } from "@/components/dashboard/case-detail-dialog"

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

  // ── State ──────────────────────────────────────────────────────────────────
  const [cases, setCases] = useState<InvestigationCase[]>(INITIAL_CASES)
  const [researchers] = useState<FieldResearcher[]>(INITIAL_RESEARCHERS)
  const [activeSection, setActiveSection] = useState<DashboardSection>("overview")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [selectedCase, setSelectedCase] = useState<InvestigationCase | null>(null)
  const [isNewCaseOpen, setIsNewCaseOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  // ── Helpers ────────────────────────────────────────────────────────────────
  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 4000)
  }

  const qcPendingCount = cases.filter((c) => c.status === "under_review").length

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleApproveCase = (id: string) => {
    setCases((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              status: "approved",
              notes:
                (c.notes ?? "") +
                (language === "ar"
                  ? " — تم الاعتماد النهائي من ضبط الجودة وتسليم التقرير للمؤسسة بنجاح."
                  : " — Final QC approved and report delivered to institution."),
            }
          : c
      )
    )
    if (selectedCase?.id === id) {
      setSelectedCase((prev) => (prev ? { ...prev, status: "approved" } : null))
    }
    showToast(t(`تم اعتماد التقرير وتسليمه للمؤسسة بنجاح: ${id}`, `Report approved and delivered: ${id}`))
  }

  const handleAssignResearcher = (caseId: string, researcherId: string) => {
    const res = researchers.find((r) => r.id === researcherId)
    if (!res) return
    setCases((prev) =>
      prev.map((c) =>
        c.id === caseId
          ? { ...c, researcherId: res.id, researcherName: res.name, status: "assigned" }
          : c
      )
    )
    if (selectedCase?.id === caseId) {
      setSelectedCase((prev) =>
        prev ? { ...prev, researcherId: res.id, researcherName: res.name, status: "assigned" } : null
      )
    }
    showToast(t(`تم إسناد الحالة ${caseId} إلى: ${res.name}`, `Case ${caseId} assigned to: ${res.nameEn}`))
  }

  const handleCreateCase = (data: NewCaseFormData) => {
    const newId = `EST-2026-${Math.floor(1060 + Math.random() * 900)}`
    const created: InvestigationCase = {
      id: newId,
      institution: data.institution,
      institutionEn: "Financial Partner (Demo)",
      type: data.type,
      typeEn: "Field Investigation",
      subjectName: data.subjectName,
      subjectNameEn: data.subjectName,
      nationalId: data.nationalId,
      governorate: data.governorate,
      governorateEn: "Egypt",
      address: data.address,
      workplace: data.workplace || t("غير محدد", "Not specified"),
      status: "new",
      priority: data.priority,
      priorityEn: data.priority === "عاجل" ? "Urgent" : data.priority === "مرتفع" ? "High" : "Normal",
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
    setCases((prev) => [created, ...prev])
    setIsNewCaseOpen(false)
    showToast(t(`تم تسجيل طلب الاستعلام بنجاح برقم: ${newId}`, `Investigation request registered: ${newId}`))
  }

  // ── Panel renderer ─────────────────────────────────────────────────────────
  const renderPanel = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewPanel cases={cases} researchers={researchers} />
      case "cases":
        return (
          <CasesPanel
            cases={cases}
            researchers={researchers}
            onSelectCase={setSelectedCase}
            onAssignResearcher={handleAssignResearcher}
          />
        )
      case "researchers":
        return <ResearchersPanel researchers={researchers} />
      case "qc":
        return (
          <QcPanel
            cases={cases}
            onApprove={handleApproveCase}
            onSelectCase={setSelectedCase}
          />
        )
      case "reports":
      case "settings":
        return (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mb-4">
              <span className="text-3xl">🚧</span>
            </div>
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">
              {t("قريباً", "Coming Soon")}
            </h3>
            <p className="text-sm text-gray-500 mt-1 max-w-xs">
              {t(
                "هذا القسم قيد التطوير وسيكون متاحاً في الإصدار القادم.",
                "This section is under development and will be available in the next release."
              )}
            </p>
          </div>
        )
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      className="flex h-screen overflow-hidden bg-slate-50 dark:bg-gray-950"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Sidebar */}
      <DashboardSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        casesCount={cases.length}
        qcPendingCount={qcPendingCount}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((v) => !v)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader
          onNewCase={() => setIsNewCaseOpen(true)}
          activeSection={activeSection}
        />

        {/* Stats + content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            {/* KPI stats always visible */}
            <StatsGrid cases={cases} />

            {/* Section panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {renderPanel()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-sm font-semibold max-w-sm text-center"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dialogs */}
      <NewCaseDialog
        open={isNewCaseOpen}
        onOpenChange={setIsNewCaseOpen}
        onSubmit={handleCreateCase}
      />

      <CaseDetailDialog
        selectedCase={selectedCase}
        researchers={researchers}
        onClose={() => setSelectedCase(null)}
        onApprove={handleApproveCase}
        onAssignResearcher={handleAssignResearcher}
      />
    </div>
  )
}
