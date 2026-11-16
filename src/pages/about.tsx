import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Building2, Tv } from "lucide-react"
import { values, milestones } from "@/data/about"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t(
      "من نحن — استعلامي | رقمنة التحقيق الميداني في مصر",
      "About Us — EST3LAMY | Digital Investigation in Egypt"
    ),
    description: t(
      "استعلامي منصة رقمية مصرية رائدة لرقمنة التحقيق الميداني والتحقق الائتماني للمؤسسات المالية، ضمن مجموعة Fair Solutions.",
      "EST3LAMY is an Egyptian fintech platform digitizing field investigations and applicant verifications for financial institutions."
    ),
    canonical: "https://est3lamy.vercel.app/about",
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 pt-24 pb-20 overflow-hidden relative text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 rounded-full px-3 py-1 text-xs">
              {t("هويتنا ورسالتنا", "Our Identity & Mission")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              {t("رقمنة التحقيق الميداني", "Digitizing Field Investigation")}<br />
              <span className="text-blue-400">{t("للمؤسسات والكيانات المالية", "For Financial Institutions")}</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t(
                "استعلامي وُلدت من تحدٍّ حقيقي: تحويل التحقيق الميداني والتحقق من العملاء من مسار ورقي بطيء إلى منظومة رقمية مؤمنة وموثقة جغرافياً في مصر.",
                "EST3LAMY was born from a concrete industry need: transforming credit field investigations from paper-based routines into a secure, geotagged digital platform."
              )}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story + Visual */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {t("حل تكنولوجي موجه لصناع القرار الائتماني", "Engineered for Credit Decision Makers")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
              {t(
                "في عالم التمويل والائتمان المصرفي، يعتمد القرار السليم على دقة وموثوقية المعلومات الميدانية حول محل إقامة العميل، واستقراره الوظيفي، وسلامة أصوله وضماناته. استعلامي رقمنت هذه العملية بالكامل لتقليص وقت التحقيق من أيام إلى ساعات معدودة مع ضمان نزاهة البيانات.",
                "In credit and institutional financing, sound risk decisions depend entirely on accurate field data regarding applicant residency, employment stability, and verified collateral. EST3LAMY digitizes this lifecycle from request to final delivery."
              )}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
              {t(
                "تخدم المنصة قطاعات البنوك، والتمويل الاستهلاكي، والتأجير التمويلي، والتمويل العقاري، وشركات التمويل متناهي الصغر في كافة محافظات جمهورية مصر العربية.",
                "The platform powers commercial banks, consumer finance firms, leasing companies, mortgage lenders, and microfinance institutions across all 27 governorates."
              )}
            </p>

            {/* Fair Solutions Group Box */}
            <div className="p-5 bg-slate-50 dark:bg-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    {t("مجموعة Fair Solutions for Consulting", "Fair Solutions for Consulting Group")}
                  </div>
                  <div className="text-xs text-gray-500">
                    <a
                      href="https://fidb-islamic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      fidb-islamic.com
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://eg.linkedin.com/company/fair-solutions-for-consulting-fsc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="rounded-xl text-xs">
                  {t("الملف المؤسسي", "Company Profile")}
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-slate-900 group">
              <img
                src="/about-mission.jpg"
                alt="EST3LAMY Digital Field Operations Command Center"
                className="w-full h-auto aspect-video object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent pointer-events-none" />
              
              {/* Overlay badges */}
              <div className="absolute top-4 start-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-600/90 text-white backdrop-blur-md shadow-md flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t("غرفة عمليات التحقيق الميداني", "Field Operations Command")}
                </span>
              </div>

              {/* Bottom stats ribbon */}
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                <div>
                  <div className="text-xl font-black text-blue-400">27</div>
                  <div className="text-[10px] text-gray-300 font-medium">
                    {t("محافظة مغطاة في مصر", "Governorates Covered")}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <div className="text-xl font-black text-emerald-400">100%</div>
                  <div className="text-[10px] text-gray-300 font-medium">
                    {t("توثيق جغرافي ورقمي", "Geotagged & Digital")}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <div className="text-xl font-black text-amber-400">&lt; 24h</div>
                  <div className="text-[10px] text-gray-300 font-medium">
                    {t("متوسط وقت الإنجاز", "Avg Turnaround")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Media appearance notice */}
        <div className="mb-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Tv className="h-6 w-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">
                {t("ظهور إعلامي وتغطية ريادية في مصر", "Public Media Coverage in Egypt")}
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed max-w-2xl">
                {t(
                  "عُرضت فكرة ومنظومة استعلامي كحل تقني واعد لرقمنة التحقيق والتحقق الائتماني للمؤسسات المالية المصرية في برنامج شارك تانك مصر (Shark Tank Egypt) مسلطةً الضوء على كفاءة التحول الرقمي في هذا القطاع الحيوي.",
                  "EST3LAMY was spotlighted on Shark Tank Egypt, showcasing its fintech model to digitize and standardize field investigation for financial institutions."
                )}
              </p>
            </div>
          </div>
          <Link href="/contact">
            <Button className="h-10 px-5 rounded-xl bg-white text-blue-950 hover:bg-blue-50 font-bold text-xs shrink-0">
              {t("طلب عرض تقديمي", "Request Demo")}
            </Button>
          </Link>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-3 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30">
              {t("ركائزنا", "Core Values")}
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t("قيمنا المهنية", "Our Professional Values")}
            </h2>
            <p className="text-sm text-gray-500">
              {t("المبادئ التي توجه كل تقرير واستعلام ميداني ننجزه.", "The principles guiding every verified investigation report we deliver.")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/40 hover:shadow-lg transition-all"
              >
                <div className="mb-4">{val.icon}</div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white mb-2">
                  {language === "ar" ? val.title : val.titleEn}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {language === "ar" ? val.description : val.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones / Roadmap */}
        <div>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-3 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30">
              {t("مسار التطور", "Evolution")}
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t("محطات استعلامي", "EST3LAMY Milestones")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 relative"
              >
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {language === "ar" ? m.year : m.yearEn}
                </div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white mb-2">
                  {language === "ar" ? m.title : m.titleEn}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {language === "ar" ? m.description : m.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
