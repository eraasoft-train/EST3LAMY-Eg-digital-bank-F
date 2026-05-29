"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight, ShieldCheck, Wallet, Landmark, PiggyBank } from "lucide-react"

import { accountTypes } from "@/data/accounts"

export default function AccountsPage() {

  return (
    <div className="bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Smarter Accounts for Your Money
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the financial foundation that fits your lifestyle. Securely managed, beautifully designed.
          </p>
        </div>

        {/* Account Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accountTypes.map((account, index) => (
            <motion.div
              key={account.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-xs relative overflow-hidden group">
                {account.badge && (
                  <Badge className="absolute top-4 right-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-none">
                    {account.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="mb-4">{account.icon}</div>
                  <CardTitle className="text-2xl font-bold">{account.title}</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400">
                    {account.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{account.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">{account.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {account.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Open Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-24 py-12 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Bank with confidence</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8">
              Every Finovia account is FDIC-insured up to $250,000 and protected by our advanced security infrastructure.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" className="bg-transparent">Learn about security</Button>
              <Button className="bg-blue-600">Sign In to Dashboard</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
