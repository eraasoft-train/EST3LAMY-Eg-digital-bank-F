import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, PiggyBank, Wallet, ArrowUpRight, LayoutDashboard } from "lucide-react"
import { motion } from "framer-motion"

import { accounts, transactions } from "@/data/dashboard"

export function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
            Live Dashboard
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Your Financial Dashboard
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            A complete view of your finances — track spending, monitor investments, and reach your goals faster.
          </p>
        </motion.div>

        {/* Dashboard Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-10"
        >
          {/* Dashboard Header Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <LayoutDashboard className="h-4.5 w-4.5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Welcome back, Sarah!</h3>
                <p className="text-blue-100 text-sm">Here's your financial overview</p>
              </div>
            </div>
            <Badge className="bg-green-400/20 text-green-100 border-green-400/30 rounded-full text-xs font-medium px-3 py-1">
              ● All systems operational
            </Badge>
          </div>

          <div className="p-6 sm:p-8">
            {/* Account Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {accounts.map((account, index) => (
                <Card key={index} className="border border-gray-100 dark:border-gray-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-5 px-5">
                    <CardTitle className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {account.name}
                    </CardTitle>
                    {account.name === "Checking" && <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center"><Wallet className="h-3.5 w-3.5 text-blue-600" /></div>}
                    {account.name === "Savings" && <div className="w-7 h-7 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center"><PiggyBank className="h-3.5 w-3.5 text-green-600" /></div>}
                    {account.name === "Investment" && <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center"><TrendingUp className="h-3.5 w-3.5 text-purple-600" /></div>}
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      ${account.balance.toLocaleString("en-US")}
                    </div>
                    <div className={`flex items-center text-xs font-medium ${account.type === "up" ? "text-green-600" : "text-red-500"}`}>
                      {account.type === "up"
                        ? <TrendingUp className="h-3 w-3 mr-1" />
                        : <TrendingDown className="h-3 w-3 mr-1" />
                      }
                      {account.change}% from last month
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Transactions + Quick Actions */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border border-gray-100 dark:border-gray-800">
                <CardHeader className="px-6 pt-5 pb-4">
                  <CardTitle className="text-base font-semibold">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5">
                  <div className="space-y-1">
                    {transactions.map((transaction, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-200 -mx-1 cursor-default group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:scale-110 ${
                            transaction.type === "credit"
                              ? "bg-green-50 dark:bg-green-900/20 text-green-600"
                              : "bg-red-50 dark:bg-red-900/20 text-red-500"
                          }`}>
                            {transaction.type === "credit" ? "+" : "−"}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{transaction.name}</div>
                            <div className="text-xs text-gray-400">{transaction.date}</div>
                          </div>
                        </div>
                        <div className={`text-sm font-bold transition-colors duration-200 ${transaction.type === "credit" ? "text-green-600" : "text-red-500"}`}>
                          {transaction.type === "credit" ? "+" : "−"}${Math.abs(transaction.amount).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 dark:border-gray-800">
                <CardHeader className="px-6 pt-5 pb-4">
                  <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-5">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Transfer Money", primary: true },
                      { label: "Pay Bills", primary: false },
                      { label: "Deposit Check", primary: false },
                      { label: "Investments", primary: false },
                    ].map((action) => (
                      <Button
                        key={action.label}
                        variant={action.primary ? "default" : "outline"}
                        className={`h-11 justify-between text-sm rounded-xl ${action.primary ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent"}`}
                      >
                        <span>{action.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 ml-1 shrink-0" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="h-12 px-8 text-base rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/20">
            Experience the Dashboard
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
