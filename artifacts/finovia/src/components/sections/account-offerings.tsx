import { memo, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, PiggyBank, Building2, GraduationCap, TrendingUp, Check } from "lucide-react"
import { motion } from "framer-motion"

const accounts = [
  {
    id: "checking",
    name: "Smart Checking",
    icon: Wallet,
    description: "Everyday banking made simple and fee-free.",
    features: ["No monthly fees", "Free ATM access worldwide", "Mobile check deposit", "Overdraft protection"],
    rate: "No fees",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "savings",
    name: "High-Yield Savings",
    icon: PiggyBank,
    description: "Grow your money with industry-leading rates.",
    features: ["4.5% APY", "No minimum balance", "Automatic savings rules", "FDIC insured"],
    rate: "4.5% APY",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "business",
    name: "Business Banking",
    icon: Building2,
    description: "Powerful tools for businesses of every size.",
    features: ["Business checking", "Merchant services", "Business loans", "Cash management"],
    rate: "Custom rates",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "student",
    name: "Student Account",
    icon: GraduationCap,
    description: "Banking designed to grow with you.",
    features: ["No monthly fees", "Student discounts", "Financial education tools", "Mobile banking"],
    rate: "Student perks",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "investment",
    name: "Investment Account",
    icon: TrendingUp,
    description: "Invest smarter with expert guidance.",
    features: ["Commission-free trades", "Robo-advisor", "Portfolio management", "Tax optimization"],
    rate: "Low fees",
    gradient: "from-teal-500 to-cyan-600",
  },
]

/* ── Skeleton ─────────────────────────────────────────────── */

function AccountsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab bar skeleton */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-1 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-xl" />
          ))}
        </div>
      </div>

      {/* Card skeleton */}
      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
        {/* Gradient header */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <Skeleton className="w-16 h-16 rounded-2xl shrink-0" />
            <div className="space-y-2 w-full max-w-sm">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-8 w-48 rounded-xl" />
              <Skeleton className="h-4 w-64 rounded-lg" />
            </div>
          </div>
        </div>
        {/* Body */}
        <div className="p-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Skeleton className="h-5 w-28 rounded-lg mb-2" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="w-5 h-5 rounded-full shrink-0" />
                <Skeleton className="h-4 w-40 rounded-lg" />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Tab card content — memoised ──────────────────────────── */

const AccountCard = memo(function AccountCard({ account }: { account: typeof accounts[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="max-w-4xl mx-auto border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
        <div className={`bg-gradient-to-br ${account.gradient} p-8 text-white`}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <account.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-2">
                {account.rate}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{account.name}</h3>
              <p className="text-white/80 text-base">{account.description}</p>
            </div>
          </div>
        </div>

        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-5 text-base">Key Features</h4>
              <ul className="space-y-3.5">
                {account.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <Button size="lg" className="w-full h-12 rounded-xl text-base bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                Open {account.name}
              </Button>
              <Button variant="outline" size="lg" className="w-full h-12 rounded-xl text-base bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
})

/* ── Main component ───────────────────────────────────────── */

export const AccountOfferings = memo(function AccountOfferings() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 350)
    return () => clearTimeout(t)
  }, [])

  const renderTrigger = useCallback((account: typeof accounts[0]) => (
    <TabsTrigger
      key={account.id}
      value={account.id}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
    >
      <account.icon className="h-4 w-4 shrink-0" />
      <span className="hidden sm:inline">{account.name}</span>
    </TabsTrigger>
  ), [])

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
            Account Types
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Choose Your Perfect Account
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            From everyday checking to high-yield savings, we have the right account for every financial goal.
          </p>
        </motion.div>

        {!ready ? (
          <AccountsSkeleton />
        ) : (
          <Tabs defaultValue="checking" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="flex flex-wrap justify-center gap-1 h-auto p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                {accounts.map(renderTrigger)}
              </TabsList>
            </div>

            {accounts.map((account) => (
              <TabsContent key={account.id} value={account.id}>
                <AccountCard account={account} />
              </TabsContent>
            ))}
          </Tabs>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl text-base bg-transparent">
            Compare All Plans
          </Button>
        </motion.div>
      </div>
    </section>
  )
})
