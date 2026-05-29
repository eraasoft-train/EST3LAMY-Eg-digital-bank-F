import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Clock, ArrowRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const headlines = ["Bank Smarter", "Secure Your Future", "Open an Account Today"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full shadow-sm">
              <Shield className="h-3.5 w-3.5 text-blue-600" />
              FDIC Insured
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full shadow-sm">
              <Lock className="h-3.5 w-3.5 text-blue-600" />
              256-bit Encryption
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full shadow-sm">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              24/7 Support
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full shadow-sm">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              4.9 Rating
            </Badge>
          </div>

          {/* Rotating Headline */}
          <div className="h-24 md:h-32 flex items-center justify-center mb-6 w-full">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadline}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {headlines[currentHeadline]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of banking with Finovia — secure, innovative, and designed for your financial success.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 h-12 text-base shadow-lg shadow-blue-500/25 rounded-xl"
            >
              Open Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12 text-base bg-white dark:bg-transparent rounded-xl border-gray-200 dark:border-gray-700">
              View Plans
            </Button>
            <Button size="lg" variant="ghost" className="px-8 h-12 text-base rounded-xl">
              Talk to Advisor
            </Button>
          </div>

          {/* Stats */}
          <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "2M+", label: "Trusted Customers", color: "text-blue-600 dark:text-blue-400", delay: 0.2 },
              { value: "$50B+", label: "Assets Under Management", color: "text-teal-600 dark:text-teal-400", delay: 0.35 },
              { value: "99.9%", label: "Uptime Guarantee", color: "text-purple-600 dark:text-purple-400", delay: 0.5 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: stat.delay }}
                className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
