import { useState, useEffect, useCallback } from "react"
import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Globe, ChevronDown, Building2 } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { navigation } from "@/data/navigation"

export function Navbar() {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [pathname]                = useLocation()
  const { theme, setTheme }       = useTheme()

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
        aria-label="التنقل الرئيسي"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="استعلامي — الصفحة الرئيسية">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">استعلامي</span>
                <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">EST3LAMY</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="روابط الموقع">
              {navigation.map((item) => (
                <Link
                  key={item.nameEn}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/60"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side — desktop */}
            <div className="hidden md:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 px-2 gap-1 rounded-xl text-gray-500" aria-label="اختر اللغة">
                    <Globe className="h-4 w-4" />
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl min-w-[130px]">
                  <DropdownMenuItem>🇪🇬 العربية</DropdownMenuItem>
                  <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl relative text-gray-500"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن"}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />

              <Link href="/contact">
                <Button
                  size="sm"
                  className="h-9 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm shadow-blue-500/20"
                >
                  ابدأ الآن
                </Button>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex md:hidden items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl text-gray-500"
                onClick={toggleTheme}
                aria-label="تبديل المظهر"
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
                aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
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
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-white/98 dark:bg-gray-950/98 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-1 mb-4" aria-label="روابط الجوال">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.nameEn}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.18 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/60"
                      }`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-gray-100 dark:border-gray-800 pt-4 pb-2">
                <Link href="/contact" onClick={closeMenu}>
                  <Button
                    size="sm"
                    className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold shadow-sm shadow-blue-500/20"
                  >
                    تواصل معنا لبدء الشراكة
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
            className="fixed inset-0 top-16 z-30 md:hidden bg-black/20 dark:bg-black/40"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}
