import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight } from "lucide-react"
import { usePageMeta } from "@/hooks/use-page-meta"

export default function NotFound() {
  usePageMeta({
    title: "الصفحة غير موجودة — استعلامي",
    description: "الصفحة التي تبحث عنها غير موجودة.",
    canonical: "https://est3lamy.com/404",
  })

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4" dir="rtl">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-6">
          <Building2 className="h-10 w-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-6xl font-black text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-3">الصفحة غير موجودة</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          الصفحة التي تبحث عنها غير موجودة أو تمت إزالتها. تحقق من الرابط أو ارجع إلى الصفحة الرئيسية.
        </p>
        <Link href="/">
          <Button size="lg" className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg shadow-blue-500/20">
            العودة إلى الرئيسية
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
