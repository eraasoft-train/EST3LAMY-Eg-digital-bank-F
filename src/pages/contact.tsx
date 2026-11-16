import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, CheckCircle, Mail, MapPin, Building2 } from "lucide-react"
import { useState } from "react"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"
import type { ContactDraft } from "@/types/contact"

const EMPTY_DRAFT: ContactDraft = {
  firstName: "", lastName: "", email: "", phone: "",
  institution: "", sector: "", message: ""
}

export default function ContactPage() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t(
      "تواصل معنا — استعلامي | ابدأ شراكتك مع منصة التحقيق الميداني",
      "Contact Us — EST3LAMY | Partner with Egypt's Digital Investigation Platform"
    ),
    description: t(
      "تواصل مع فريق استعلامي لمعرفة كيف يمكن لمنصتنا رقمنة عمليات التحقيق الميداني والتحقق الائتماني في مؤسستك المالية.",
      "Get in touch with EST3LAMY specialists to digitize field investigation and applicant verification for your financial institution."
    ),
    canonical: "https://est3lamy.vercel.app/contact",
  })

  const [draft, setDraft] = useState<ContactDraft>(EMPTY_DRAFT)
  const [submitted, setSubmitted] = useState(false)

  const updateDraft = (field: keyof ContactDraft, value: string) => {
    setDraft(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setDraft(EMPTY_DRAFT)
    setTimeout(() => setSubmitted(false), 6000)
  }

  const sectors = [
    { label: t("بنك تجاري أو إسلامي", "Commercial / Islamic Bank"), value: "bank" },
    { label: t("شركة تمويل استهلاكي", "Consumer Finance"), value: "consumer_finance" },
    { label: t("شركة تأجير تمويلي", "Leasing Company"), value: "leasing" },
    { label: t("شركة تمويل عقاري", "Mortgage Finance"), value: "mortgage" },
    { label: t("مؤسسة تمويل متناهي الصغر", "Microfinance Institution"), value: "microfinance" },
    { label: t("شركة تقنية مالية (Fintech)", "Fintech Company"), value: "fintech" },
    { label: t("جهة أخرى", "Other Institution"), value: "other" },
  ]

  const contactMethods = [
    {
      title: t("البريد الإلكتروني المباشر", "Direct Email"),
      description: t("للتواصل المؤسسي والشراكات وطلب العروض", "For corporate inquiries and partnership proposals"),
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      value: "info@est3lamy.com",
      link: "mailto:info@est3lamy.com",
    },
    {
      title: t("المقر والمجموعة الأم", "Headquarters & Group"),
      description: t("Fair Solutions for Consulting — القاهرة، جمهورية مصر العربية", "Fair Solutions for Consulting — Cairo, Egypt"),
      icon: <Building2 className="h-5 w-5 text-teal-600" />,
      value: "fidb-islamic.com",
      link: "https://fidb-islamic.com/",
    },
    {
      title: t("التغطية الميدانية", "Field Operations Reach"),
      description: t("شبكة باحثين تغطي جميع محافظات مصر (27 محافظة)", "Field researcher network covering all 27 governorates"),
      icon: <MapPin className="h-5 w-5 text-purple-600" />,
      value: t("القاهرة الكبرى والإسكندرية والدلتا والصعيد", "Cairo, Alexandria, Delta & Upper Egypt"),
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="secondary" className="mb-5 px-3 py-1.5 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              {t("بدء الشراكة المؤسسية", "Institutional Partnership")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              {t("كيف يمكننا خدمة مؤسستك المالية؟", "How Can We Empower Your Institution?")}
            </h1>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t(
                "فريق استعلامي مستعد لشرح حلول المنصة وتقديم عرض تجريبي حي مخصص لقطاعك الائتماني والتمويلي.",
                "Our team is ready to demonstrate the platform and provide a live tailored walk-through for your credit operations."
              )}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden rounded-3xl">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-8 text-white">
                <h2 className="text-2xl font-bold mb-1">
                  {t("أرسل استفسارك المؤسسي", "Submit Corporate Inquiry")}
                </h2>
                <p className="text-blue-100 text-xs">
                  {t("سيتواصل معك أحد مستشاري التحقيق الميداني خلال يوم عمل واحد.", "Our field operations consultant will respond within 1 business day.")}
                </p>
              </div>
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center"
                  >
                    <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {t("تم إرسال طلبك بنجاح!", "Your Request Has Been Received!")}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                      {t(
                        "شكراً لتواصلك مع استعلامي. سيقوم فريق تطوير الأعمال والتكامل التقني بالتواصل مع ممثل مؤسستكم الكريمة قريباً.",
                        "Thank you for contacting EST3LAMY. Our business development team will follow up shortly."
                      )}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-xs font-semibold">
                          {t("الاسم الأول *", "First Name *")}
                        </Label>
                        <Input
                          id="firstName"
                          required
                          value={draft.firstName}
                          onChange={e => updateDraft("firstName", e.target.value)}
                          className="mt-1.5 rounded-xl h-11 text-xs"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-xs font-semibold">
                          {t("اسم العائلة *", "Last Name *")}
                        </Label>
                        <Input
                          id="lastName"
                          required
                          value={draft.lastName}
                          onChange={e => updateDraft("lastName", e.target.value)}
                          className="mt-1.5 rounded-xl h-11 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-xs font-semibold">
                          {t("البريد الإلكتروني المؤسسي *", "Corporate Email *")}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={draft.email}
                          onChange={e => updateDraft("email", e.target.value)}
                          className="mt-1.5 rounded-xl h-11 text-xs"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-xs font-semibold">
                          {t("رقم الهاتف للتواصل *", "Contact Phone *")}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+20 1•• ••• ••••"
                          value={draft.phone}
                          onChange={e => updateDraft("phone", e.target.value)}
                          className="mt-1.5 rounded-xl h-11 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="institution" className="text-xs font-semibold">
                          {t("اسم المؤسسة المالية / الشركة *", "Financial Institution Name *")}
                        </Label>
                        <Input
                          id="institution"
                          required
                          value={draft.institution}
                          onChange={e => updateDraft("institution", e.target.value)}
                          className="mt-1.5 rounded-xl h-11 text-xs"
                        />
                      </div>
                      <div>
                        <Label htmlFor="sector" className="text-xs font-semibold">
                          {t("القطاع المالي", "Financial Sector")}
                        </Label>
                        <Select
                          value={draft.sector}
                          onValueChange={v => updateDraft("sector", v)}
                        >
                          <SelectTrigger id="sector" className="mt-1.5 rounded-xl h-11 text-xs">
                            <SelectValue placeholder={t("اختر القطاع", "Select Sector")} />
                          </SelectTrigger>
                          <SelectContent>
                            {sectors.map(s => (
                              <SelectItem key={s.value} value={s.value}>
                                {s.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-xs font-semibold">
                        {t("تفاصيل الاستفسار أو متطلبات التحقيق الميداني *", "Inquiry Details or Verification Requirements *")}
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        placeholder={t(
                          "أخبرنا بعدد الحالات التقريبية شهرياً أو المحافظات المطلوبة أو أية متطلبات ربط خاصة...",
                          "Tell us about expected monthly volume, target governorates, or specific LOS integration requirements..."
                        )}
                        value={draft.message}
                        onChange={e => updateDraft("message", e.target.value)}
                        className="mt-1.5 rounded-xl text-xs leading-relaxed"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20"
                    >
                      {t("إرسال طلب الشراكة", "Submit Partnership Request")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact info cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: language === "ar" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-gray-800 flex items-center justify-center shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                          {method.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 leading-relaxed">
                          {method.description}
                        </p>
                        {method.link ? (
                          <a
                            href={method.link}
                            target={method.link.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                            {method.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Direct Email CTA */}
            <Card className="bg-gray-950 text-white overflow-hidden relative group border-0 rounded-3xl">
              <CardContent className="p-8">
                <MessageSquare className="h-40 w-40 text-white/5 absolute -left-8 -bottom-8 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">
                    {t("راسل فريق استعلامي", "Email Our Team Directly")}
                  </h3>
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                    {t(
                      "تواصل مع متخصصي العمليات والتحقق الميداني للحصول على إجابات مباشرة ومناقشة تكامل المنصة.",
                      "Connect with field verification specialists for direct assistance and institutional integrations."
                    )}
                  </p>
                  <a href="mailto:info@est3lamy.com" className="block">
                    <Button className="w-full h-11 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-bold text-xs">
                      info@est3lamy.com
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}
