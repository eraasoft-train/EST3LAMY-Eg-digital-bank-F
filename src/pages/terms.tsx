import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Scale, CheckCircle2, ShieldAlert, FileText } from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"

export default function TermsPage() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t(
      "الشروط والأحكام واتفاقية الاستخدام — استعلامي",
      "Terms & Conditions of Service — EST3LAMY"
    ),
    description: t(
      "الشروط والأحكام المنظمة لاستخدام منصة استعلامي للتحقيق الميداني الرقمي من قبل المؤسسات المالية والباحثين الميدانيين.",
      "Terms and conditions governing the use of the EST3LAMY digital investigation platform by institutions and field researchers."
    ),
    canonical: "https://est3lamy.vercel.app/terms",
  })

  return (
    <div className="bg-slate-50 dark:bg-gray-950 min-h-screen py-16" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200">
              {t("الاتفاقية التعاقدية", "Contractual Terms")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {t("الشروط والأحكام واتفاقية مستوى الخدمة", "Terms of Service & Service Level Agreement")}
            </h1>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              {t(
                "القواعد المنظمة لاستخدام بوابة استعلامي والخدمات الميدانية للمؤسسات المالية الشريكة.",
                "Rules governing access to the EST3LAMY operations portal and field services for partner institutions."
              )}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-sm space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Scale className="h-5 w-5 text-blue-600" />
                {t("1. الأهلية والاستخدام المؤسسي", "1. Institutional Eligibility & Use")}
              </h2>
              <p>
                {t(
                  "تقتصر خدمات استعلامي على الكيانات والمؤسسات المالية المرخص لها قانوناً بمزاولة أعمال الائتمان والتمويل داخل جمهورية مصر العربية (بنوك، شركات تمويل استهلاكي، شركات تأجير تمويلي، شركات تمويل عقاري، جمعيات وشركات تمويل متناهي الصغر، وشركات التقنية المالية).",
                  "EST3LAMY services are strictly restricted to legally authorized financial, credit, and financing entities operating in the Arab Republic of Egypt (banks, consumer finance, leasing, mortgage finance, microfinance institutions, and fintech companies)."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                {t("2. اتفاقية مستوى الخدمة (SLA)", "2. Service Level Agreement (SLA)")}
              </h2>
              <p>
                {t(
                  "تلتزم المنصة بتسليم التقارير الميدانية وفقاً للأطر الزمنية المتفق عليها في عقد الخدمة مع كل مؤسسة (الحالات العاجلة خلال 12-24 ساعة، الحالات القياسية خلال 48 ساعة)، وتخضع جميع التقارير لمرحلة تدقيق الجودة قبل التسليم النهائي.",
                  "Reports are delivered within agreed contractual turnaround windows (urgent cases 12-24h, standard cases within 48h). All field findings undergo multi-factor QC review before release."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-blue-600" />
                {t("3. نزاهة وموثوقية التحقيق الميداني", "3. Integrity & Field Verification Standards")}
              </h2>
              <p>
                {t(
                  "تستخدم المنصة تتبعاً جغرافياً مباشراً (GPS) وتوثيقاً فوتوغرافياً مشفراً لضمان إجراء كل زيارة ميدانية في الموقع الجغرافي الفعلي. أي تلاعب أو عدم تطابق في الإحداثيات يؤدي إلى رفض التقرير وإعادة التحقيق فوراً.",
                  "Real-time GPS geofencing and anti-spoofing algorithms certify field researcher physical presence. Discrepancies prompt immediate case invalidation and supervised reassignment."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                {t("4. القانون الحاكم", "4. Governing Law")}
              </h2>
              <p>
                {t(
                  "تخضع هذه الشروط وكافة الاتفاقيات المنبثقة عنها لقوانين جمهورية مصر العربية، وتختص محاكم القاهرة بنظر أي نزاع قد ينشأ بخصوصها.",
                  "These terms are governed by the laws of the Arab Republic of Egypt, with exclusive jurisdiction in Cairo courts."
                )}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
