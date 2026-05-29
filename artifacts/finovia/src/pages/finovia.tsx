import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Landmark, HelpCircle, ArrowRight } from "lucide-react"

import { loanProducts } from "@/data/finovia"
import { usePageMeta } from "@/hooks/use-page-meta"

export default function FinoviaPage() {
  usePageMeta({
    title: "Loans & Financing — Mortgage, Auto & Personal Loans",
    description: "Get competitive loan rates from Finovia — mortgage from 4.25% APR, auto loans from 3.50% APR, personal loans from 6.99% APR. Estimate your payment with our free loan calculator.",
    canonical: "https://finovia.replit.app/finovia",
  })
  const [loanAmount, setLoanAmount] = useState(250000)
  const monthlyPayment = Math.round((loanAmount * (0.05 / 12)) / (1 - Math.pow(1 + 0.05 / 12, -360)))
  const totalPaid = (monthlyPayment * 360).toLocaleString("en-US")
  const totalInterest = (monthlyPayment * 360 - loanAmount).toLocaleString("en-US")

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-5 px-3 py-1.5 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              Loan Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              Finovia Financial Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Fuel your dreams with competitive rates and tailored lending options built around you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Loan Calculator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <Card className="max-w-4xl mx-auto border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-1">Loan Payment Estimator</h2>
              <p className="text-blue-100 text-sm">See your monthly payment with our competitive rates.</p>
            </div>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Loan Amount</label>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">${loanAmount.toLocaleString("en-US")}</span>
                    </div>
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(val: number[]) => setLoanAmount(val[0])}
                      max={1000000}
                      step={1000}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>$0</span>
                      <span>$1,000,000</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                    <HelpCircle className="h-4 w-4 mt-0.5 shrink-0 text-blue-400" />
                    <span>Estimates based on a 30-year fixed rate at 5.0% APR. Actual rates may vary.</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 rounded-2xl p-8 text-center border border-blue-100 dark:border-blue-900/30">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Est. Monthly Payment</div>
                  <div className="text-5xl font-black text-gray-900 dark:text-white mb-6">
                    ${monthlyPayment.toLocaleString("en-US")}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-blue-100 dark:border-blue-900/30">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Total Paid</div>
                      <div className="text-sm font-bold text-gray-700 dark:text-gray-200">${totalPaid}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Total Interest</div>
                      <div className="text-sm font-bold text-gray-700 dark:text-gray-200">${totalInterest}</div>
                    </div>
                  </div>
                  <Button className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg shadow-blue-500/20">
                    Get Prequalified
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Loan Products */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Choose Your Loan Type
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Whether it's a home, car, or business investment — we have a loan for every goal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanProducts.map((loan, index) => (
              <motion.div
                key={loan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="px-6 pt-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <div className="group-hover:text-white transition-colors duration-300 text-blue-600 dark:text-blue-400">
                          {loan.icon}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs rounded-full">{loan.badge}</Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">{loan.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{loan.description}</p>
                    <div className="text-base font-bold text-blue-600 dark:text-blue-400 mb-5">{loan.rate}</div>
                    <Button className="w-full h-10 rounded-xl text-sm font-medium bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-10 md:p-14 text-white text-center shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <Landmark className="absolute -bottom-8 -right-8 h-52 w-52 text-white/5" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need personalized loan advice?</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Our financial experts are available 24/7 to help you choose the best strategy for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="h-12 px-7 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-semibold text-sm shadow-lg">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-7 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 text-sm">
                Find a Branch
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
