import { useState, useEffect, useCallback } from "react"
import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Moon, Sun, Globe, ChevronDown, User } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

import { navigation } from "@/data/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Navbar() {
  const [isOpen, setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pathname]            = useLocation()
  const { theme, setTheme }   = useTheme()
  const { toast }             = useToast()

  // Authentication Dialog states
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")

  // Form states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (authMode === "login") {
      if (!email || !password) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive"
        })
        return
      }
      toast({
        title: "Welcome back!",
        description: `Successfully signed in as ${email}.`,
      })
    } else {
      if (!name || !email || !password || !confirmPassword) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive"
        })
        return
      }
      if (password !== confirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "Passwords do not match.",
          variant: "destructive"
        })
        return
      }
      if (!agreeTerms) {
        toast({
          title: "Terms & Conditions",
          description: "You must agree to the terms and conditions to proceed.",
          variant: "destructive"
        })
        return
      }
      toast({
        title: "Account Created",
        description: `Registration successful for ${name}. Welcome to Finovia!`,
      })
    }
    
    // Clear forms and close modal
    setEmail("")
    setPassword("")
    setName("")
    setConfirmPassword("")
    setRememberMe(false)
    setAgreeTerms(false)
    setIsAuthOpen(false)
  }

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 12)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  const closeMenu = useCallback(() => setIsOpen(false), [])
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
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group" aria-label="Finovia — go to homepage">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Finovia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Site links">
              {navigation.map((item) => (
                <Link
                  key={item.name}
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
                  <Button variant="ghost" size="sm" className="h-9 px-2 gap-1 rounded-xl text-gray-500" aria-label="Select language">
                    <Globe className="h-4 w-4" />
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl min-w-[130px]">
                  <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
                  <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
                  <DropdownMenuItem>🇪🇸 Español</DropdownMenuItem>
                  <DropdownMenuItem>🇸🇦 العربية</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl relative text-gray-500"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />

              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center"
                onClick={() => {
                  setAuthMode("login")
                  setIsAuthOpen(true)
                }}
                aria-label="Account Login or Registration"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex md:hidden items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl text-gray-500"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl text-gray-500"
                onClick={() => {
                  setAuthMode("login")
                  setIsAuthOpen(true)
                }}
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 rounded-xl"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
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
              <nav className="space-y-1 mb-4" aria-label="Mobile site links">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
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
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-11 rounded-xl bg-transparent text-sm font-medium border-gray-200 dark:border-gray-700"
                    onClick={() => {
                      setAuthMode("login")
                      setIsAuthOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold shadow-sm shadow-blue-500/20"
                    onClick={() => {
                      setAuthMode("register")
                      setIsAuthOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    Open Account
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Authentication Modal Dialog */}
      <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
        <DialogContent className="sm:max-w-[440px] rounded-3xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 bg-white/98 dark:bg-gray-950/98 backdrop-blur-xl shadow-2xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {authMode === "login" ? "Sign In to Finovia" : "Create Your Finovia Account"}
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-gray-500 dark:text-gray-400">
              {authMode === "login"
                ? "Enter your secure credentials to access your financial dashboard."
                : "Open an FDIC-insured digital bank account in less than 3 minutes."}
            </DialogDescription>
          </DialogHeader>

          {/* Mode Switcher */}
          <div className="grid grid-cols-2 p-1.5 bg-gray-50 dark:bg-gray-900/60 rounded-xl mb-6 border border-gray-100/50 dark:border-gray-800/40">
            <button
              type="button"
              className={`py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                authMode === "login"
                  ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
              onClick={() => setAuthMode("login")}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                authMode === "register"
                  ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
              onClick={() => setAuthMode("register")}
            >
              Open Account
            </button>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {authMode === "register" && (
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold text-gray-700 dark:text-gray-300">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-xl bg-transparent border-gray-200 dark:border-gray-800 text-sm focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-semibold text-gray-700 dark:text-gray-300">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-xl bg-transparent border-gray-200 dark:border-gray-800 text-sm focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-xs font-semibold text-gray-700 dark:text-gray-300">Password</Label>
                {authMode === "login" && (
                  <button
                    type="button"
                    onClick={() => toast({ title: "Reset Link Sent", description: "If the email is registered, we've sent reset guidelines." })}
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 rounded-xl bg-transparent border-gray-200 dark:border-gray-800 text-sm focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>

            {authMode === "register" && (
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-xs font-semibold text-gray-700 dark:text-gray-300">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-11 rounded-xl bg-transparent border-gray-200 dark:border-gray-800 text-sm focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
            )}

            {authMode === "login" ? (
              <div className="flex items-center gap-2 py-1">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(!!checked)}
                />
                <Label htmlFor="remember" className="text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer select-none">
                  Keep me signed in on this device
                </Label>
              </div>
            ) : (
              <div className="flex items-start gap-2 py-1">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(!!checked)}
                  className="mt-0.5"
                />
                <Label htmlFor="terms" className="text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer select-none leading-relaxed">
                  I accept the Finovia{" "}
                  <button type="button" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</button>{" "}
                  and{" "}
                  <button type="button" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</button>.
                </Label>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 mt-4 transition-all duration-200"
            >
              {authMode === "login" ? "Sign In to Finovia" : "Create Free Account"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

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
