import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, CheckCircle } from "lucide-react"
import { useState } from "react"
import { contactMethods } from "@/data/contact"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLocalStorage } from "@/hooks/use-local-storage"

interface ContactDraft {
  firstName: string
  lastName: string
  email: string
  phone: string
  institution: string
  sector: string
  message: string
}

const EMPTY_DRAFT: ContactDraft = {
  firstName: "", lastName: "", email: "", phone: "",
  institution: "", sector: "", message: ""
}

const sectors = [
  "بنك",
  "شركة تمويل استهلاكي",
  "شركة تأجير تمويلي",
  "تمويل عقاري",
  "تمويل متناهي الصغر",
  "شركة فينتك",
  "أخرى",
]

export default function ContactPage() {
  usePageMeta({
    title: "تواصل معنا — استعلامي | ابدأ شراكتك مع منصة التحقيق الميداني",
    description: "تواصل مع فريق استعلامي لمعرفة كيف يمكن لمنصتنا رقمنة عمليات التحقيق الميداني في مؤسستك المالية.",
    canonical: "https://est3lamy.com/contact",
  })

  const [draft, setDraft] = useLocalStorage<ContactDraft>("est3lamy-contact-draft", EMPTY_DRAFT)
  const [submitted, setSubmitted] = useState(false)

  const updateDraft = (field: keyof ContactDraft, value: string) => {
    setDraft(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setDraft(EMPTY_DRAFT)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen" dir="rtl">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="secondary" className="mb-5 px-3 py-1.5 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              ابدأ الشراكة
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              كيف يمكننا مساعدتك؟
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              فريقنا مستعد لشرح كيف تعمل منصة استعلامي وكيف يمكنها تحسين عملية التحقيق الميداني في مؤسستك.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-1">أرسل استفسارك</h2>
                <p className="text-blue-100 text-sm">سيتواصل معك أحد متخصصينا خلال يوم عمل واحد.</p>
              </div>
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">تم إرسال رسالتك!</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                      سيتواصل معك أحد متخصصي استعلامي خلال يوم عمل واحد.
                    </p>
                  </motion.div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">الاسم الأول</Label>
                        <Input
                          placeholder="محمد"
                          className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-right"
                          value={draft.firstName}
                          onChange={e => updateDraft("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">الاسم الأخير</Label>
                        <Input
                          placeholder="أحمد"
                          className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-right"
                          value={draft.lastName}
                          onChange={e => updateDraft("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">البريد الإلكتروني</Label>
                        <Input
                          type="email"
                          placeholder="name@institution.com"
                          className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700"
                          value={draft.email}
                          onChange={e => updateDraft("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">رقم الهاتف</Label>
                        <Input
                          type="tel"
                          placeholder="+20 1XX XXX XXXX"
                          className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700"
                          value={draft.phone}
                          onChange={e => updateDraft("phone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">اسم المؤسسة</Label>
                        <Input
                          placeholder="بنك / شركة التمويل"
                          className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-right"
                          value={draft.institution}
                          onChange={e => updateDraft("institution", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">القطاع</Label>
                        <Select onValueChange={v => updateDraft("sector", v)}>
                          <SelectTrigger className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-right">
                            <SelectValue placeholder="اختر القطاع" />
                          </SelectTrigger>
                          <SelectContent>
                            {sectors.map(s => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">رسالتك</Label>
                      <Textarea
                        placeholder="أخبرنا عن احتياجاتك وحجم العمليات في مؤسستك..."
                        className="min-h-[140px] rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 resize-none text-right"
                        value={draft.message}
                        onChange={e => updateDraft("message", e.target.value)}
                      />
                      {draft.message.length > 0 && (
                        <p className="text-xs text-gray-400 text-left">{draft.message.length} حرف — محفوظ تلقائياً</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-base font-semibold shadow-lg shadow-blue-500/20"
                    >
                      إرسال الاستفسار
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactMethods.map((method) => (
              <Card key={method.titleEn} className="border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{method.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{method.description}</p>
                    </div>
                  </div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400 pr-[60px]">
                    {method.value}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Chat CTA */}
            <Card className="bg-gray-950 text-white overflow-hidden relative group border-0">
              <CardContent className="p-8">
                <MessageSquare className="h-40 w-40 text-white/5 absolute -left-8 -bottom-8 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative z-10">
                  <Badge className="mb-4 bg-teal-500/20 text-teal-400 border-teal-500/30 rounded-full text-xs px-3 py-1">
                    ● متاح الآن
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">تحدث مع فريقنا</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">تواصل مباشرة مع متخصصينا للحصول على إجابات فورية حول المنصة.</p>
                  <Button className="w-full h-11 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm">
                    ابدأ المحادثة
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
