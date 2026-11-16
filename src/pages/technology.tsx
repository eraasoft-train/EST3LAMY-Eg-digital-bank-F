import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Navigation,
  ShieldCheck,
  Database,
  BarChart3,
  Server,
  Lock,
  CheckCircle,
} from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"
import { Link } from "wouter"

export default function TechnologyPage() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t(
      "التقنية والبنية التحتية — استعلامي | منظومة التحقيق الرقمي",
      "Technology & Infrastructure — EST3LAMY | Digital Investigation Stack"
    ),
    description: t(
      "تعرف على التقنيات والبرمجيات التي تدعم منصة استعلامي: تطبيق الجوال الميداني، التتبع الجغرافي الفوري، وتشفير البيانات للمؤسسات المالية.",
      "Explore the technical architecture powering EST3LAMY: field researcher mobile app, real-time GPS tracking, and bank-grade encryption."
    ),
    canonical: "https://est3lamy.vercel.app/technology",
  })

  const techPillars = [
    {
      icon: Smartphone,
      title: t("تطبيق الباحث الميداني (Mobile Field App)", "Field Researcher Mobile App"),
      description: t(
        "تطبيق مخصص يعمل في وضع عدم الاتصال (Offline-First) لتمكين الباحثين من استلام المهام وتوثيق الزيارات الميدانية والتقاط الصور والأدلة حتى في المناطق ضعيفة التغطية.",
        "Offline-first mobile application allowing researchers to receive cases, record visits, and capture photographic evidence even in remote zones."
      ),
      badges: [t("Offline-First", "Offline-First"), t("مزامنة فورية", "Live Sync"), t("أمان عالي", "Secure Storage")],
    },
    {
      icon: Navigation,
      title: t("محرك التحقق الجغرافي (GPS & Geofencing)", "GPS Verification & Geofencing"),
      description: t(
        "التحقق التلقائي من مطابقة موقع الباحث الفعلي مع الإحداثيات الجغرافية لمحل إقامة أو عمل العميل المستعلم عنه لمنع الزيارات الوهمية تماماً.",
        "Automated geofencing matching researcher coordinates with stated applicant address to eliminate unverified or fraudulent visits."
      ),
      badges: [t("دقة عالية", "High Accuracy"), t("منع التزييف", "Anti-Spoofing"), t("طابع زمني موثق", "Timestamped")],
    },
    {
      icon: ShieldCheck,
      title: t("نظام ضبط الجودة والتدقيق (QC Engine)", "Automated Quality Control Engine"),
      description: t(
        "منظومة مراجعة متعددة المراحل تدقق اكتمال بطاقة الرقم القومي، جودة الصور المرفقة، ومطابقة البيانات قبل اعتماد التقرير وتسليمه للمؤسسة.",
        "Multi-stage automated checklist auditing National ID integrity, photo resolution, and data consistency prior to institution delivery."
      ),
      badges: [t("تدقيق فوري", "Instant Audit"), t("قوائم فحص ائتمانية", "Credit Checklists"), t("تقليل الأخطاء", "Error Reduction")],
    },
    {
      icon: Database,
      title: t("واجهات ربط API للمؤسسات (Open Banking API)", "Enterprise API & LOS Integrations"),
      description: t(
        "تكامل مباشر وآمن مع أنظمة إدارة القروض (LOS) والأنظمة المصرفية الأساسية (Core Banking) لإرسال طلبات الاستعلام واستلام التقارير آلياً.",
        "Secure RESTful APIs allowing direct hookup with Loan Origination Systems and Core Banking software for seamless case ingestion."
      ),
      badges: [t("REST APIs", "REST APIs"), t("Webhooks", "Webhooks"), t("أمان بنكي", "Bank-Grade SLA")],
    },
    {
      icon: Lock,
      title: t("حماية وسرية البيانات المصرفية (Data Privacy)", "Bank-Grade Encryption & Compliance"),
      description: t(
        "تشفير كامل للبيانات أثناء النقل (TLS 1.3) وأثناء التخزين (AES-256)، مع الامتثال الصارم لضوابط حماية البيانات وحفظ السجلات للمؤسسات المالية المصرية.",
        "End-to-end TLS 1.3 and AES-256 encryption meeting Egyptian financial regulatory standards and institutional data privacy compliance."
      ),
      badges: [t("AES-256", "AES-256"), t("TLS 1.3", "TLS 1.3"), t("سجل تدقيق كامل", "Audit Trail")],
    },
    {
      icon: BarChart3,
      title: t("لوحات التحليل التشغيلي (Real-time Analytics)", "Operational Intelligence & SLAs"),
      description: t(
        "مراقبة مباشرة لمتوسط وقت إنجاز الحالات (TAT)، ونسب الالتزام باتفاقيات مستوى الخدمة (SLAs)، وتوزيع الحالات جغرافياً حسب المحافظات.",
        "Executive dashboards monitoring turnaround time (TAT), SLA compliance rates, and geographic case density across Egypt's 27 governorates."
      ),
      badges: [t("مؤشرات حية", "Live KPIs"), t("تقارير أداء", "SLA Reports"), t("تغطية 27 محافظة", "27 Governorates")],
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-white/10 text-white border-white/20 rounded-full px-3 py-1 text-xs font-semibold">
              {t("البنية التحتية والتقنيات", "Technology Stack & Architecture")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {t("التقنيات المحركة لمنظومة", "The Technology Driving")}{" "}
              <span className="text-blue-400">{t("استعلامي", "EST3LAMY")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {t(
                "بنية سحابية آمنة وتطبيقات ميدانية متطورة مصممة خصيصاً لتلبية متطلبات البنوك وشركات التمويل في مصر بأعلى معايير الدقة والسرعة.",
                "Enterprise cloud architecture and specialized mobile tools engineered specifically for Egyptian financial institutions."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/dashboard">
                <Button className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-lg">
                  {t("تجربة بوابة العمليات", "Explore Operations Demo")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-11 px-6 rounded-xl border-white/30 text-white hover:bg-white/10 text-xs">
                  {t("طلب التكامل التقني", "Request Technical Integration")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30">
            {t("المكونات الأساسية", "Core Architectural Pillars")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {t("منظومة رقمية مغلقة وموثقة", "A Closed-Loop Digital Investigation Engine")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            {t(
              "ترابط كامل بين تطبيق الهاتف المحمول للمحقق الميداني وبوابة إدارة العمليات لضمان أقصى درجات النزاهة.",
              "Seamless connectivity between researcher field mobile apps and core operations portals ensuring data integrity."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {techPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm hover:shadow-md h-full flex flex-col justify-between">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-5 text-blue-600 dark:text-blue-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {pillar.badges.map((b, i) => (
                        <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
                          {b}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Security & Regulatory Compliance Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center mb-4">
              <Server className="h-5 w-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {t("أمان وخصوصية البيانات المصرفية في جمهورية مصر العربية", "Egyptian Financial Data Residency & Security")}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {t(
                "تلتزم منصة استعلامي بالمعايير الرقابية الصارمة لحماية خصوصية وسرية بيانات العملاء والمستندات الائتمانية. جميع البيانات مشفرة، وتخضع لسجلات تدقيق إلكترونية غير قابلة للتعديل.",
                "EST3LAMY adheres strictly to financial data privacy standards. All investigation files, client documents, and evidence records remain fully encrypted with immutable audit trails."
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>{t("تشفير كامل TLS 1.3 & AES-256", "TLS 1.3 & AES-256 Encryption")}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>{t("سجلات تدقيق لا يمكن التلاعب بها", "Immutable Audit Logs")}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>{t("اتفاقيات سرية بيانات للمؤسسات", "Bank NDA & Compliance Ready")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
