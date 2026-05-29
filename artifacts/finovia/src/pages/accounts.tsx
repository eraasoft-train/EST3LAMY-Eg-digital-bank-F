import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react"

import { accountTypes } from "@/data/accounts"

export default function AccountsPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-5 px-3 py-1.5 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
              Personal Accounts
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              Smarter Accounts for Your Money
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Choose the financial foundation that fits your lifestyle. Securely managed, beautifully designed.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Account Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {accountTypes.map((account, index) => (
            <motion.div
              key={account.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex"
            >
              <Card className={`flex flex-col w-full border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${
                account.badge === "Most Popular"
                  ? "border-blue-300 dark:border-blue-700 shadow-lg shadow-blue-500/10"
                  : "border-gray-100 dark:border-gray-800"
              }`}>
                {account.badge && (
                  <div className="absolute top-5 right-5">
                    <Badge className={`text-xs font-semibold rounded-full px-2.5 py-1 ${
                      account.badge === "Most Popular"
                        ? "bg-blue-600 text-white border-none"
                        : account.badge === "Best Rate"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-none"
                        : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-none"
                    }`}>
                      {account.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4 pt-7 px-7">
                  <div className="mb-4">{account.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{account.title}</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {account.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 px-7">
                  <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{account.price}</span>
                    <span className="text-sm text-gray-400 ml-2">{account.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {account.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="px-7 pb-7 pt-6">
                  <Button className={`w-full h-11 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 ${
                    account.badge === "Most Popular"
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white"
                  }`}>
                    Open Account
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-br from-blue-600 to-teal-600 p-px shadow-xl"
        >
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-900 p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-5">
              <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Bank with confidence</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Every Finovia account is FDIC-insured up to $250,000 and protected by our advanced security infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" className="h-11 px-6 rounded-xl bg-white dark:bg-transparent border-gray-200 dark:border-gray-700">
                Learn about security
              </Button>
              <Button className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20">
                Sign In to Dashboard
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
