import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { MessageSquare, Clock, Globe, Lock } from "lucide-react"

import { contactMethods } from "@/data/contact"
import { usePageMeta } from "@/hooks/use-page-meta"

const supportStats = [
  { Icon: Clock, label: "24/7 Availability", desc: "Access your accounts and get support via automated systems anytime." },
  { Icon: Globe, label: "Global Ready", desc: "Support for 40+ languages and international banking expertise." },
  { Icon: Lock, label: "Encrypted End-to-End", desc: "All communications are hardened with the latest security standards." },
]

export default function ContactPage() {
  usePageMeta({
    title: "Contact Finovia — Secure 24/7 Banking Support",
    description: "Get in touch with Finovia's team of financial specialists via phone, email, or secure live chat. Available 24/7 in 40+ languages with encrypted communication.",
    canonical: "https://finovia.replit.app/contact",
  })
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
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              How Can We Help You?
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Our team of financial specialists is ready to assist with any questions or support needs.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-1">Send a Secure Message</h2>
                <p className="text-blue-100 text-sm">All information is encrypted using 256-bit bank-grade security protocols.</p>
              </div>
              <CardContent className="p-8">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">First Name</Label>
                      <Input placeholder="John" className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Name</Label>
                      <Input placeholder="Doe" className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</Label>
                    <Input type="email" placeholder="john.doe@example.com" className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject</Label>
                    <Input placeholder="Inquiry about Loan Rates" className="h-11 rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</Label>
                    <Textarea
                      placeholder="How can we assist your financial goals today?"
                      className="min-h-[140px] rounded-xl bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 resize-none"
                    />
                  </div>
                  <Button size="lg" className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-base font-semibold shadow-lg shadow-blue-500/20">
                    Submit Secure Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods + Live Chat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactMethods.map((method) => (
              <Card key={method.title} className="border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{method.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{method.description}</p>
                    </div>
                  </div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400 pl-[60px]">
                    {method.value}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Live Chat Card */}
            <Card className="bg-gray-950 text-white overflow-hidden relative group border-0">
              <CardContent className="p-8">
                <MessageSquare className="h-40 w-40 text-white/5 absolute -right-8 -bottom-8 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative z-10">
                  <Badge className="mb-4 bg-teal-500/20 text-teal-400 border-teal-500/30 rounded-full text-xs px-3 py-1">
                    ● Live Now
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">Secure Live Chat</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">Connect instantly with a Finovia representative for immediate guidance.</p>
                  <Button className="w-full h-11 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm">
                    Start Secure Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Support Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-gray-100 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {supportStats.map(({ Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{label}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
