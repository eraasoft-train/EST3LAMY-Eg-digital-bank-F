import { useState, useEffect, useCallback } from "react"
import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Globe, ChevronDown, Building2, LayoutDashboard } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { navigation } from "@/data/navigation"
import { useLanguage } from "@/context/language-context"

export function Navbar() {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [pathname]                = useLocation()
  const { theme, setTheme }       = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 12)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  const closeMenu  = useCallback(() => setIsOpen(false), [])
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-sm border-b border-gray-100/80 dark:border-gray-800/60"
            : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/60"
        }`}
        aria-label={t("التنقل الرئيسي", "Main Navigation")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="استعلامي — الصفحة الرئيسية">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                  {t("استعلامي", "EST3LAMY")}
                </span>
                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {t("Eg Digital Bank", "Digital Investigation")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label={t("روابط الموقع", "Site links")}>
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/60"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{language === "ar" ? item.name : item.nameEn}</span>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        {language === "ar" ? item.badge : item.badgeEn}
                      </span>
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right side — desktop */}
            <div className="hidden md:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 px-2 gap-1 rounded-xl text-gray-600 dark:text-gray-300" aria-label={t("اختر اللغة", "Select Language")}>
                    <Globe className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase">{language}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl min-w-[130px]">
                  <DropdownMenuItem onClick={() => setLanguage("ar")} className={language === "ar" ? "bg-blue-50 dark:bg-blue-950 font-bold" : ""}>
                    🇪🇬 العربية
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-blue-50 dark:bg-blue-950 font-bold" : ""}>
                    🇺🇸 English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl relative text-gray-500"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? t("الوضع الفاتح", "Light Mode") : t("الوضع الداكن", "Dark Mode")}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />

              <Link href="/dashboard">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-9 px-3.5 rounded-xl border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950 text-xs font-semibold gap-1.5"
                >
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  {t("بوابة العمليات", "Portal Demo")}
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="sm"
                  className="h-9 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm shadow-blue-500/20"
                >
                  {t("تواصل معنا", "Contact Us")}
                </Button>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex lg:hidden items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-9 px-2 gap-1 rounded-xl text-gray-600 dark:text-gray-300"
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-bold uppercase">{language}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl text-gray-500"
                onClick={toggleTheme}
                aria-label={t("تبديل المظهر", "Toggle Theme")}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label={isOpen ? t("إغلاق القائمة", "Close Menu") : t("فتح القائمة", "Open Menu")}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-white/98 dark:bg-gray-950/98 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-1 mb-4" aria-label={t("روابط الجوال", "Mobile links")}>
                {navigation.map((item, i) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: language === "ar" ? 12 : -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.18 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/60"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="flex items-center gap-2">
                          <span>{language === "ar" ? item.name : item.nameEn}</span>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                              {language === "ar" ? item.badge : item.badgeEn}
                            </span>
                          )}
                        </div>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <div className="border-t border-gray-100 dark:border-gray-800 pt-4 pb-2 space-y-2">
                <Link href="/dashboard" onClick={closeMenu}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full h-10 rounded-xl border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold gap-2"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    {t("بوابة العمليات الميدانية (محاكاة)", "Field Operations Portal (Demo)")}
                  </Button>
                </Link>
                <Link href="/contact" onClick={closeMenu}>
                  <Button
                    size="sm"
                    className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold shadow-sm shadow-blue-500/20"
                  >
                    {t("تواصل معنا لبدء الشراكة", "Contact Us for Partnership")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-30 lg:hidden bg-black/20 dark:bg-black/40"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}
