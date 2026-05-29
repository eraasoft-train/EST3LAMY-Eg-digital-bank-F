import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Briefcase, BarChart3, Landmark, Rocket, ChevronRight, Check } from "lucide-react"

import { businessSolutions } from "@/data/business"

export default function BusinessPage() {

  return (
    <div className="bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Enterprise-Grade Banking for Every Business
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              From startups to global corporations, Finovia provides the sophisticated tools and personalized service your business deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Open Business Account</Button>
              <Button size="lg" variant="outline" className="bg-transparent">Contact a Specialist</Button>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full max-w-md relative"
          >
            <div className="aspect-square bg-blue-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center p-12">
              <Landmark className="h-48 w-48 text-blue-600/20" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">↑</div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Net Cash Flow</div>
                    <div className="text-xl font-black text-gray-900 dark:text-white">$142,500.00</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 flex items-center gap-4 ml-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">✓</div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Payroll Status</div>
                    <div className="text-xl font-black text-gray-900 dark:text-white">Active</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Business Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {businessSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all group overflow-hidden bg-background/50">
                <CardHeader>
                  <div className="mb-4">{solution.icon}</div>
                  <CardTitle className="text-2xl font-bold">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <Check className="h-4 w-4 text-teal-500 mr-3 mt-1 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8 border-t border-gray-100 dark:border-gray-800">
                  <Button variant="ghost" className="w-full text-blue-600 group-hover:bg-blue-50 transition-colors">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to accelerate your business growth?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Open your business account online in minutes or visit one of our commercial banking centers across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">Compare Business Plans</Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">Find Commercial Center</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
