import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Landmark, ChevronRight, Check, TrendingUp, Users, Zap } from "lucide-react"

import { businessSolutions } from "@/data/business"
import { usePageMeta } from "@/hooks/use-page-meta"

const stats = [
  { value: "$142B+", label: "Business assets managed", icon: TrendingUp },
  { value: "85k+", label: "Business accounts", icon: Users },
  { value: "< 5 min", label: "Account opening time", icon: Zap },
]

export default function BusinessPage() {
  usePageMeta({
    title: "Business Banking — Commercial Checking & Treasury",
    description: "Enterprise-grade business banking with commercial checking, treasury management, SBA loans, and payroll tools. Manage $142B+ in business assets. Open in under 5 minutes.",
    canonical: "https://finovia.replit.app/business",
  })
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-24 pb-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-white/10 text-white border-white/20 rounded-full px-3 py-1 text-sm font-medium">
                  Business Banking
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Enterprise-Grade Banking for Every Business
                </h1>
                <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
                  From startups to global corporations, Finovia provides sophisticated tools and personalized service your business deserves.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button size="lg" className="h-12 px-7 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-lg text-sm">
                    Open Business Account
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-7 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 text-sm">
                    Contact a Specialist
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 w-full max-w-sm lg:max-w-md"
            >
              <div className="relative">
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 flex flex-col justify-center gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 font-bold text-sm">↑</div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Net Cash Flow</div>
                      <div className="text-xl font-black text-gray-900 dark:text-white">$142,500.00</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-5 flex items-center gap-4 ml-6">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm">✓</div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Payroll Status</div>
                      <div className="text-xl font-black text-gray-900 dark:text-white">Active</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 font-bold text-xs">+</div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">New Invoices</div>
                      <div className="text-xl font-black text-gray-900 dark:text-white">12 Pending</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-50 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Everything Your Business Needs
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive banking solutions built around how your business actually operates.
          </p>
        </div>

        {/* Business Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {businessSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="flex flex-col w-full border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="px-7 pt-7 pb-4">
                  <div className="mb-5">{solution.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 px-7">
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Check className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-7 pb-7 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <Button variant="outline" className="w-full h-11 rounded-xl text-sm font-medium bg-transparent group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 flex items-center gap-2">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <Landmark className="absolute -bottom-10 -right-10 h-56 w-56 text-white/5" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to accelerate your business growth?</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Open your business account online in minutes or visit one of our commercial banking centers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="h-12 px-7 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-semibold text-sm shadow-lg">
                Compare Business Plans
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-7 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 text-sm">
                Find Commercial Center
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
