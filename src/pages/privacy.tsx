import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"

export default function PrivacyPage() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t(
      "سياسة الخصوصية وسرية البيانات — استعلامي | منظومة التحقيق الرقمي",
      "Privacy Policy & Data Security — EST3LAMY"
    ),
    description: t(
      "سياسة الخصوصية وحماية بيانات التحقيق الميداني والتحقق من العملاء للمؤسسات المالية في مصر وفقاً لأعلى المعايير القانونية والمصرفية.",
      "Privacy Policy and data protection standards governing digital investigation data for financial institutions in Egypt."
    ),
    canonical: "https://est3lamy.vercel.app/privacy",
  })

  return (
    <div className="bg-slate-50 dark:bg-gray-950 min-h-screen py-16" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200">
              {t("الامتثال والسرية", "Compliance & Privacy")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {t("سياسة الخصوصية وحماية البيانات", "Privacy & Data Protection Policy")}
            </h1>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              {t(
                "تلتزم منصة استعلامي (EST3LAMY) التابعة لمجموعة Fair Solutions بحماية سرية وأمن المعلومات والبيانات الائتمانية والميدانية.",
                "EST3LAMY, a Fair Solutions group platform, is committed to safeguarding credit, field, and institutional data."
              )}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-sm space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                {t("1. طبيعة المنصة ونطاق المعالجة", "1. Platform Scope & Processing")}
              </h2>
              <p>
                {t(
                  "استعلامي منصة تقنية متخصصة في رقمنة عمليات التحقيق الميداني والتحقق من العملاء لصالح البنوك وشركات التمويل والتأجير والتمويل متناهي الصغر. لا تقدم المنصة خدمات مصرفية للأفراد (مثل فتح حسابات أو قبول ودائع)، بل تعمل كوسيط تقني مرخص لتنفيذ التحقق الميداني الموثق.",
                  "EST3LAMY is a fintech platform digitizing field investigation workflows for financial institutions. The platform does not offer retail consumer banking (such as deposit accounts or money transfers); it serves strictly as an enterprise digital verification infrastructure."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" />
                {t("2. البيانات التي يتم جمعها", "2. Data Collected")}
              </h2>
              <p className="mb-2">
                {t(
                  "تتم معالجة البيانات فقط في إطار طلبات الاستعلام المقدمة رسمياً من المؤسسات المالية المصرح لها، وتشمل:",
                  "Data is processed solely within authorized investigation cases initiated by financial institutions, including:"
                )}
              </p>
              <ul className="list-disc list-inside space-y-1.5 mr-4 text-xs">
                <li>{t("بيانات الهوية الوطنية ومطابقتها وفقاً للطلب الائتماني.", "National identification details submitted with credit requests.")}</li>
                <li>{t("إحداثيات الموقع الجغرافي (GPS) لتوثيق إجراء الزيارة الميدانية الفعلية.", "GPS geolocation logs certifying field visit occurrence.")}</li>
                <li>{t("الصور الفوتوغرافية التوثيقية لمحل الإقامة أو مقر النشاط التجاري.", "Photographic evidence of residency and commercial premises.")}</li>
                <li>{t("ملاحظات الباحث الميداني ونتائج مقابلة الاستعلام واستيفاء استمارات التحقيق.", "Field researcher findings, interview notes, and validation forms.")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                {t("3. معايير الأمان والتشفير", "3. Security & Encryption Standards")}
              </h2>
              <p>
                {t(
                  "يتم تطبيق أعلى معايير التشفير المصرفي (AES-256 للتخزين و TLS 1.3 للنقل). يتم منع الوصول إلى البيانات إلا للمخولين من الباحثين الميدانيين وفرق ضبط الجودة ومسؤولي المؤسسة الطالبة مع وجود سجل تدقيق رقمي كامل وغير قابل للمحو.",
                  "All data is encrypted using banking-grade algorithms (AES-256 for data at rest, TLS 1.3 for data in transit). Role-based access ensures only authorized researchers, QC auditors, and bank credit officers can view investigation reports."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                {t("4. الاتصال ومسؤول حماية البيانات", "4. Contact & Data Protection Officer")}
              </h2>
              <p>
                {t(
                  "لأية استفسارات تتعلق بسياسة الخصوصية أو اتفاقيات سرية البيانات (NDA) للمؤسسات المالية، يرجى التواصل عبر: privacy@est3lamy.com أو زيارة مقر Fair Solutions for Consulting.",
                  "For privacy inquiries or institutional non-disclosure agreements (NDAs), contact privacy@est3lamy.com."
                )}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
