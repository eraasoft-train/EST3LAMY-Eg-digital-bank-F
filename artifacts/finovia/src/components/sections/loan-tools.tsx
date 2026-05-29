import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, Check } from "lucide-react"
import { motion } from "framer-motion"

import { loanTypes } from "@/data/loan-tools"
import { useLocalStorage } from "@/hooks/use-local-storage"

export function FinoviaTools() {
  const [loanAmount, setLoanAmount] = useLocalStorage<number[]>("finovia-calc-amount", [250000])
  const [loanTerm, setLoanTerm] = useLocalStorage<number[]>("finovia-calc-term", [30])
  const [interestRate, setInterestRate] = useLocalStorage<number[]>("finovia-calc-rate", [3.5])

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0]
    const monthlyRate = interestRate[0] / 100 / 12
    const numPayments = loanTerm[0] * 12
    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    return monthlyPayment.toFixed(2)
  }

  const totalPaid = (parseFloat(calculateMonthlyPayment()) * loanTerm[0] * 12).toLocaleString("en-US", { maximumFractionDigits: 0 })
  const totalInterest = (parseFloat(calculateMonthlyPayment()) * loanTerm[0] * 12 - loanAmount[0]).toLocaleString("en-US", { maximumFractionDigits: 0 })

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
            Loan Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Financing Made Simple
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Competitive rates and flexible terms for every milestone — home, car, or business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Loan Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Calculator className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Loan Calculator</CardTitle>
                </div>
                <CardDescription className="text-blue-100">
                  Estimate your monthly payment in seconds — your values are saved automatically.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-7">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Loan Amount</Label>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">${loanAmount[0].toLocaleString("en-US")}</span>
                  </div>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={1000000}
                    min={10000}
                    step={5000}
                    className="mt-1"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                    <span>$10k</span>
                    <span>$1M</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Loan Term</Label>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{loanTerm[0]} years</span>
                  </div>
                  <Slider value={loanTerm} onValueChange={setLoanTerm} max={30} min={5} step={1} className="mt-1" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                    <span>5 yr</span>
                    <span>30 yr</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Interest Rate</Label>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{interestRate[0]}%</span>
                  </div>
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    max={10}
                    min={1}
                    step={0.1}
                    className="mt-1"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                    <span>1%</span>
                    <span>10%</span>
                  </div>
                </div>

                {/* Result */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30">
                  <div className="text-center mb-5">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Monthly Payment</div>
                    <div className="text-4xl font-black text-blue-600 dark:text-blue-400">
                      ${parseFloat(calculateMonthlyPayment()).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-100 dark:border-blue-900/30">
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-0.5">Total Paid</div>
                      <div className="text-sm font-bold text-gray-700 dark:text-gray-200">${totalPaid}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-0.5">Total Interest</div>
                      <div className="text-sm font-bold text-gray-700 dark:text-gray-200">${totalInterest}</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full h-12 text-base rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/20">
                  Get Pre-Approved
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Loan Types */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {loanTypes.map((loan, index) => (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                        <loan.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                          <h3 className="text-base font-bold text-gray-900 dark:text-white">{loan.name}</h3>
                          <Badge variant="secondary" className="text-xs rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none">
                            {loan.rate}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{loan.description}</p>
                        <ul className="space-y-1.5">
                          {loan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
