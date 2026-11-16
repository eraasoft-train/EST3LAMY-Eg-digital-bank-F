import { Link } from "wouter"
import { Building2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { useState } from "react"

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const footerColumns: FooterColumn[] = [
  {
    title: "الحلول",
    links: [
      { label: "التحقيق الميداني",           href: "/solutions"    },
      { label: "التحقق من العملاء",          href: "/solutions"    },
      { label: "إدارة الباحثين الميدانيين",  href: "/solutions"    },
      { label: "لوحات التحليل والمتابعة",   href: "/solutions"    },
    ],
  },
  {
    title: "القطاعات",
    links: [
      { label: "البنوك",                       href: "/industries"   },
      { label: "شركات التمويل الاستهلاكي",   href: "/industries"   },
      { label: "التأجير التمويلي",            href: "/industries"   },
      { label: "التمويل العقاري",             href: "/industries"   },
    ],
  },
  {
    title: "الشركة",
    links: [
      { label: "من نحن",          href: "/about"   },
      { label: "كيف يعمل النظام", href: "/how-it-works" },
      { label: "Fair Solutions",  href: "https://fidb-islamic.com/" },
      { label: "تواصل معنا",     href: "/contact" },
    ],
  },
  {
    title: "الدعم",
    links: [
      { label: "تواصل معنا",         href: "/contact" },
      { label: "سياسة الخصوصية",    href: "#"        },
      { label: "الشروط والأحكام",   href: "#"        },
    ],
  },
]

const socialLinks = [
  { Icon: Facebook,  href: "#", label: "Facebook"  },
  { Icon: Twitter,   href: "#", label: "Twitter"   },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin,  href: "#", label: "LinkedIn"  },
]

const legalLinks = [
  "سياسة الخصوصية",
  "الشروط والأحكام",
  "إمكانية الوصول",
]

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useLocalStorage<string>("est3lamy-newsletter-draft", "")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!newsletterEmail.trim()) return
    setSubscribed(true)
    setNewsletterEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gray-950 text-white" dir="rtl">

      {/* Newsletter Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">ابقَ على اطلاع</h3>
              <p className="text-sm text-gray-400">آخر التحديثات حول منصة استعلامي وأفضل الممارسات في التحقيق الميداني.</p>
            </div>
            {subscribed ? (
              <p className="text-sm font-medium text-teal-400">شكراً! تم تسجيلك بنجاح.</p>
            ) : (
              <div className="flex gap-2 w-full md:w-auto md:max-w-sm">
                <Input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="h-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-xl focus:border-blue-500 focus:ring-blue-500 text-right"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                  dir="rtl"
                />
                <Button
                  size="sm"
                  className="h-10 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 shrink-0"
                  onClick={handleSubscribe}
                >
                  اشترك
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
                <span className="text-lg font-bold text-white">استعلامي</span>
                <span className="text-[10px] font-medium text-blue-400 uppercase tracking-wider">EST3LAMY</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-3 max-w-xs">
              منصة رقمية متكاملة لرقمنة عملية التحقيق الميداني والتحقق من العملاء للمؤسسات المالية في مصر.
            </p>
            <p className="text-xs text-gray-500 mb-6">
              شركة من مجموعة{" "}
              <a href="https://fidb-islamic.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                Fair Solutions for Consulting
              </a>
            </p>

            {/* Page quick-links */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { label: "الرئيسية",    href: "/"             },
                { label: "الحلول",      href: "/solutions"    },
                { label: "كيف يعمل",   href: "/how-it-works" },
                { label: "القطاعات",   href: "/industries"   },
                { label: "من نحن",     href: "/about"        },
                { label: "تواصل معنا", href: "/contact"      },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-xs font-medium text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-all duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
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
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith("http") ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {label}
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
            © {new Date().getFullYear()} استعلامي — EST3LAMY. جميع الحقوق محفوظة.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
