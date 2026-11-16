import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight } from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"

export default function NotFound() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t("الصفحة غير موجودة — استعلامي", "Page Not Found — EST3LAMY"),
    description: t("الصفحة التي تبحث عنها غير موجودة.", "The page you requested could not be found."),
    canonical: "https://est3lamy.vercel.app/404",
  })

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-6">
          <Building2 className="h-10 w-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-6xl font-black text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-3">
          {t("الصفحة غير موجودة", "Page Not Found")}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-sm">
          {t(
            "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. تحقق من الرابط أو ارجع إلى الصفحة الرئيسية.",
            "The page you are looking for does not exist or has been moved. Check the URL or return home."
          )}
        </p>
        <Link href="/">
          <Button size="lg" className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-xs shadow-lg shadow-blue-500/20 gap-2">
            <span>{t("العودة إلى الرئيسية", "Back to Home")}</span>
            <ArrowRight className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`} />
          </Button>
        </Link>
      </div>
    </div>
  )
}
