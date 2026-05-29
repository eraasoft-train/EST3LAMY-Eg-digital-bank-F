import { useState, useEffect, memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Clock, ArrowRight, Star, TrendingUp, CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

/* ── App Mockup — static, memo-ised so it never re-renders ── */

const AppMockup = memo(function AppMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative w-full max-w-sm mx-auto lg:mx-0"
      aria-hidden="true"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-400/20 rounded-3xl blur-3xl scale-110 pointer-events-none" />

      {/* Main card */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {/* Card top bar */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 pt-6 pb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">Finovia</span>
            </div>
            <Badge className="bg-white/20 text-white border-white/30 text-xs rounded-full px-2 py-0.5">
              ● Live
            </Badge>
          </div>
          <div className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">Total Balance</div>
          <div className="text-4xl font-black text-white mb-1">$27,100.75</div>
          <div className="flex items-center gap-1.5 text-emerald-300 text-sm font-medium">
            <TrendingUp className="h-3.5 w-3.5" />
            +2.4% this month
          </div>
        </div>

        {/* Account chips */}
        <div className="px-6 -mt-4 mb-5 flex gap-2">
          {[
            { label: "Checking", balance: "$5,420", color: "bg-blue-600" },
            { label: "Savings",  balance: "$12,750", color: "bg-teal-600" },
            { label: "Invest",   balance: "$8,930",  color: "bg-purple-600" },
          ].map((a) => (
            <div key={a.label} className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-3 text-center">
              <div className={`w-2 h-2 rounded-full ${a.color} mx-auto mb-1.5`} />
              <div className="text-xs text-gray-400 font-medium">{a.label}</div>
              <div className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">{a.balance}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="px-6 mb-5">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</div>
          <div className="grid grid-cols-4 gap-2">
            {["Send", "Receive", "Pay", "Invest"].map((action) => (
              <button
                key={action}
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-xs text-gray-500 font-medium">{action}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="px-6 pb-6">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Recent</div>
          <div className="space-y-3">
            {[
              { name: "Salary Deposit",    amount: "+$3,500", type: "credit", date: "Today" },
              { name: "Grocery Store",     amount: "-$85.50", type: "debit",  date: "Yesterday" },
              { name: "Investment Return", amount: "+$250",   type: "credit", date: "2 days ago" },
            ].map((tx) => (
              <div key={tx.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    tx.type === "credit" ? "bg-emerald-50 dark:bg-emerald-900/20" : "bg-red-50 dark:bg-red-900/20"
                  }`}>
                    {tx.type === "credit"
                      ? <ArrowDownRight className="h-4 w-4 text-emerald-600" />
                      : <ArrowUpRight className="h-4 w-4 text-red-500" />
                    }
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">{tx.name}</div>
                    <div className="text-xs text-gray-400">{tx.date}</div>
                  </div>
                </div>
                <span className={`text-sm font-bold ${tx.type === "credit" ? "text-emerald-600" : "text-red-500"}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge — FDIC */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-4 py-2.5 flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <Shield className="h-4 w-4 text-emerald-600" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900 dark:text-white">FDIC Insured</div>
          <div className="text-xs text-gray-400">Up to $250k</div>
        </div>
      </motion.div>

      {/* Floating notification — rating */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-4 py-2.5 flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Star className="h-4 w-4 text-yellow-500" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900 dark:text-white">4.9★ Rating</div>
          <div className="text-xs text-gray-400">App Store</div>
        </div>
      </motion.div>
    </motion.div>
  )
})

/* ── Trust badges data — stable reference outside component ─ */

const trustBadges = [
  { icon: Shield, label: "FDIC Insured",  accent: false },
  { icon: Lock,   label: "256-bit SSL",   accent: false },
  { icon: Clock,  label: "24/7 Support",  accent: false },
  { icon: Star,   label: "4.9 ★ Rated",  accent: true  },
] as const

const heroStats = [
  { value: "2M+",  label: "Customers", color: "text-blue-600 dark:text-blue-400" },
  { value: "$50B+", label: "Managed",  color: "text-teal-600 dark:text-teal-400" },
  { value: "99.9%", label: "Uptime",   color: "text-purple-600 dark:text-purple-400" },
] as const

const headlines = [
  { text: "Bank Smarter,",    accent: "Not Harder" },
  { text: "Secure Your",      accent: "Financial Future" },
  { text: "Open an Account",  accent: "in Minutes" },
] as const

/* ── Hero section ─────────────────────────────────────────── */

export function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
      aria-label="Finovia Banking Hero"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -right-64 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-64 -left-64 w-[700px] h-[700px] bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-300/5 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-blue-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {trustBadges.map(({ icon: Icon, label, accent }) => (
                <Badge
                  key={label}
                  variant="secondary"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
                >
                  <Icon className={`h-3.5 w-3.5 ${accent ? "text-yellow-500" : "text-blue-600"}`} />
                  {label}
                </Badge>
              ))}
            </div>

            {/* Rotating Headline */}
            <div className="mb-6 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex items-start justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
                >
                  {headlines[currentHeadline].text}{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {headlines[currentHeadline].accent}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the future of banking — FDIC-insured, zero fees, AI-powered insights, and 24/7 expert support at your fingertips.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 h-12 text-base shadow-lg shadow-blue-500/30 rounded-xl"
              >
                Open Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 h-12 text-base bg-white/80 dark:bg-transparent rounded-xl border-gray-200 dark:border-gray-700 backdrop-blur-sm"
              >
                View All Plans
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-center lg:text-left"
                >
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — App Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
