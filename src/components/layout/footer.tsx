import { Link } from "wouter"
import { Building2, Facebook, Twitter, Instagram, Linkedin, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"

const socialLinks = [
  { Icon: Facebook,  href: "https://facebook.com", label: "Facebook" },
  { Icon: Twitter,   href: "https://twitter.com", label: "Twitter" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Linkedin,  href: "https://eg.linkedin.com/company/fair-solutions-for-consulting-fsc", label: "LinkedIn" },
]

export function Footer() {
  const { language, t } = useLanguage()
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!newsletterEmail.trim()) return
    setSubscribed(true)
    setNewsletterEmail("")
    setTimeout(() => setSubscribed(false), 4000)
  }

  const footerColumns = [
    {
      title: t("الحلول والخدمات", "Solutions & Services"),
      links: [
        { label: t("التحقيق الميداني الرقمي", "Field Investigation"), href: "/solutions" },
        { label: t("التحقق من محل الإقامة والعمل", "Residency & Work Verification"), href: "/solutions" },
        { label: t("إدارة أسطول الباحثين", "Researcher Fleet Management"), href: "/solutions" },
        { label: t("بوابة العمليات (محاكاة)", "Operations Portal (Demo)"), href: "/dashboard" },
      ],
    },
    {
      title: t("القطاعات المالية", "Financial Sectors"),
      links: [
        { label: t("البنوك والائتمان المصرفي", "Commercial Banks"), href: "/industries" },
        { label: t("شركات التمويل الاستهلاكي", "Consumer Finance"), href: "/industries" },
        { label: t("شركات التأجير التمويلي", "Leasing Companies"), href: "/industries" },
        { label: t("التمويل العقاري ومتناهي الصغر", "Mortgage & Microfinance"), href: "/industries" },
      ],
    },
    {
      title: t("المنصة والشركة", "Company & Tech"),
      links: [
        { label: t("من نحن", "About Us"), href: "/about" },
        { label: t("كيف يعمل النظام", "How It Works"), href: "/how-it-works" },
        { label: t("التقنية والبنية التحتية", "Technology & Security"), href: "/technology" },
        { label: t("مجموعة Fair Solutions", "Fair Solutions Group"), href: "https://fidb-islamic.com/", isExternal: true },
      ],
    },
    {
      title: t("الامتثال والاتصال", "Compliance & Contact"),
      links: [
        { label: t("تواصل معنا لبدء الشراكة", "Contact & Partnership"), href: "/contact" },
        { label: t("سياسة الخصوصية وسرية البيانات", "Privacy Policy"), href: "/privacy" },
        { label: t("الشروط والأحكام والـ SLA", "Terms of Service & SLA"), href: "/terms" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-950 text-white" dir={language === "ar" ? "rtl" : "ltr"}>

      {/* Newsletter Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {t("ابقَ على اطلاع بأحدث التطورات", "Stay Updated with EST3LAMY")}
              </h3>
              <p className="text-sm text-gray-400">
                {t(
                  "تحديثات منصة استعلامي وأفضل الممارسات في التحقيق والتحقق الميداني للمؤسسات المالية.",
                  "Platform updates and best practices in credit field investigation for financial institutions."
                )}
              </p>
            </div>
            {subscribed ? (
              <p className="text-sm font-medium text-teal-400">
                {t("شكراً! تم استلام بريدك وسنتواصل معك.", "Thank you! We received your request.")}
              </p>
            ) : (
              <div className="flex gap-2 w-full md:w-auto md:max-w-sm">
                <Input
                  type="email"
                  placeholder={t("بريدك الإلكتروني المؤسسي", "Corporate email")}
                  className="h-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-xl focus:border-blue-500 focus:ring-blue-500 text-xs"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                />
                <Button
                  size="sm"
                  className="h-10 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shrink-0"
                  onClick={handleSubscribe}
                >
                  {t("متابعة", "Subscribe")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="استعلامي - الصفحة الرئيسية">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">
                  {t("استعلامي", "EST3LAMY")}
                </span>
                <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">
                  {t("Eg Digital Bank", "Digital Investigation")}
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed mb-3 max-w-xs">
              {t(
                "منصة رقمية متكاملة لرقمنة عملية التحقيق الميداني والتحقق من العملاء للمؤسسات المالية في مصر.",
                "Integrated digital platform digitizing field investigation and applicant verification for financial institutions in Egypt."
              )}
            </p>
            <p className="text-xs text-gray-500 mb-6">
              {t("شركة من مجموعة", "A member of")}{" "}
              <a
                href="https://fidb-islamic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Fair Solutions for Consulting
              </a>
            </p>

            {/* Quick Portal CTA */}
            <div className="mb-6">
              <Link href="/dashboard">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-900/40 text-blue-300 border border-blue-700/50 hover:bg-blue-800/40 transition-colors text-xs font-semibold">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  {t("تجربة بوابة العمليات الميدانية", "Open Operations Demo Portal")}
                </span>
              </Link>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {(link as any).isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500 text-center sm:text-right">
            © {new Date().getFullYear()} {t("استعلامي — EST3LAMY Eg Digital Bank. جميع الحقوق محفوظة.", "EST3LAMY Eg Digital Bank. All rights reserved.")}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t("سياسة الخصوصية", "Privacy Policy")}
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t("الشروط والأحكام", "Terms of Service")}
            </Link>
            <Link href="/contact" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t("تواصل معنا", "Contact Us")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
