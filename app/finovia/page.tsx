"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Landmark, Car, Home, HardHat, TrendingUp, HelpCircle } from "lucide-react"

import { loanProducts } from "@/data/finovia"

export default function FinoviaPage() {
  const [loanAmount, setLoanAmount] = useState(250000)
  
  // Simulated monthly payment calculation (very basic)
  const monthlyPayment = Math.round((loanAmount * (0.05 / 12)) / (1 - Math.pow(1 + 0.05 / 12, -360)))

  return (
    <div className="bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Finovia Financial Solutions
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fuel your dreams with Finovia's competitive rates and tailored lending options.
          </p>
        </div>

        {/* Loan Calculator Simulator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-24"
        >
          <Card className="max-w-4xl mx-auto border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
            <CardHeader className="text-center bg-blue-600 dark:bg-blue-800 text-white p-8">
              <CardTitle className="text-2xl">Mortgage Payment Estimator</CardTitle>
              <CardDescription className="text-blue-100">See how much you could save with our competitive rates.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 italic">Loan Amount</label>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">${loanAmount.toLocaleString('en-US')}</span>
                    </div>
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(val) => setLoanAmount(val[0])}
                      max={1000000}
                      step={1000}
                      className="py-4 cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 italic">
                    <HelpCircle className="h-4 w-4" />
                    <span>Based on a 30-year fixed rate at 5.0% APR</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-inner border border-gray-100 dark:border-gray-700">
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Estimated Monthly Payment</div>
                  <div className="text-5xl font-black text-gray-900 dark:text-white mb-6">
                    ${monthlyPayment.toLocaleString('en-US')}
                  </div>
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">Get Prequalified</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Loan Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {loanProducts.map((loan, index) => (
            <motion.div
              key={loan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all group hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex justify-between items-start">
                    <div className="p-2 bg-blue-50 dark:bg-gray-800 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors">
                      {loan.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">{loan.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{loan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{loan.description}</p>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-6">{loan.rate}</div>
                  <Button variant="outline" className="w-full bg-transparent group-hover:bg-blue-600 group-hover:text-white transition-colors">Apply Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advisor CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Need personalized loan advice?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our financial experts are available 24/7 to help you choose the best lending strategy for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3">Schedule a Call</Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8">Find a Branch</Button>
            </div>
          </div>
          <Landmark className="absolute -bottom-10 -right-10 h-48 w-48 text-white/10 rotate-12" />
        </div>
      </div>
    </div>
  )
}
