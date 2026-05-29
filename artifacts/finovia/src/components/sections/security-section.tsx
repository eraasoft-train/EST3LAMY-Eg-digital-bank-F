import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { securityFeatures, testimonials } from "@/data/security"
import { Quote } from "lucide-react"

export function SecuritySection() {
  const trustStats = [
    { value: "FDIC", label: "Insured up to $250,000", color: "from-blue-500 to-blue-600" },
    { value: "99.9%", label: "Uptime guarantee", color: "from-green-500 to-emerald-600" },
    { value: "24/7", label: "Security monitoring", color: "from-purple-500 to-purple-600" },
    { value: "SOC 2", label: "Type II compliant", color: "from-teal-500 to-teal-600" },
  ]

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
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
            Bank-Grade Security
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Your Security is Our Priority
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Advanced security measures and 24/7 monitoring keep your money and data safe at all times.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-7 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-blue-600 to-teal-600 p-px mb-16 shadow-xl"
        >
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">Why Trust Finovia?</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-3xl md:text-4xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">What Our Customers Say</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-7">
                  <Quote className="h-6 w-6 text-blue-200 dark:text-blue-800 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{testimonial.role}</div>
                    </div>
                    <Badge variant="secondary" className="text-xs rounded-full">{testimonial.years}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
