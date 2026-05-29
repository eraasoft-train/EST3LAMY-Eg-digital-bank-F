import { Link } from "wouter"
import { Shield, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
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
    title: "Banking",
    links: [
      { label: "Checking Accounts",  href: "/accounts" },
      { label: "Savings Accounts",   href: "/accounts" },
      { label: "Student Accounts",   href: "/accounts" },
      { label: "Business Banking",   href: "/business" },
    ],
  },
  {
    title: "Loans",
    links: [
      { label: "Home Loans",         href: "/finovia" },
      { label: "Auto Loans",         href: "/finovia" },
      { label: "Personal Loans",     href: "/finovia" },
      { label: "Business Loans",     href: "/business" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",           href: "/about"   },
      { label: "Careers",            href: "#"        },
      { label: "Investor Relations", href: "#"        },
      { label: "Press Room",         href: "#"        },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us",         href: "/contact" },
      { label: "Help Center",        href: "#"        },
      { label: "Branch Locator",     href: "#"        },
      { label: "Security Center",    href: "#"        },
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
  "Privacy Policy",
  "Terms of Service",
  "Accessibility",
  "Disclosures",
]

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useLocalStorage<string>("finovia-newsletter-draft", "")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!newsletterEmail.trim()) return
    setSubscribed(true)
    setNewsletterEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gray-950 text-white">

      {/* Newsletter Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Stay up to date</h3>
              <p className="text-sm text-gray-400">Get the latest banking insights and product updates.</p>
            </div>
            {subscribed ? (
              <p className="text-sm font-medium text-teal-400">Thanks for subscribing!</p>
            ) : (
              <div className="flex gap-2 w-full md:w-auto md:max-w-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                />
                <Button
                  size="sm"
                  className="h-10 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 shrink-0"
                  onClick={handleSubscribe}
                >
                  Subscribe
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
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Finovia home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Finovia</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Secure, innovative banking for the digital age. Your financial future starts here — protected and empowered.
            </p>

            {/* Page quick-links */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { label: "Home",     href: "/"         },
                { label: "Accounts", href: "/accounts" },
                { label: "Loans",    href: "/finovia"  },
                { label: "Business", href: "/business" },
                { label: "About",    href: "/about"    },
                { label: "Contact",  href: "/contact"  },
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
                    <Link
                      href={href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Finovia. All rights reserved. Member FDIC. Equal Housing Lender.
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
