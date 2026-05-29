import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from "lucide-react"

import { contactMethods } from "@/data/contact"

export default function ContactPage() {

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
            How Can We Help You?
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our team of financial specialists is ready to assist you with any questions or support needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
               <div className="bg-blue-600 p-8 text-white">
                 <h2 className="text-2xl font-bold">Send a Secure Message</h2>
                 <p className="text-blue-100 mt-2">All information is encrypted using 256-bit bank-grade security protocols.</p>
               </div>
               <CardContent className="p-8">
                 <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">First Name</label>
                       <Input placeholder="John" className="bg-gray-50 dark:bg-gray-800 border-none h-12" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Last Name</label>
                       <Input placeholder="Doe" className="bg-gray-50 dark:bg-gray-800 border-none h-12" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Email Address</label>
                     <Input type="email" placeholder="john.doe@example.com" className="bg-gray-50 dark:bg-gray-800 border-none h-12" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Subject</label>
                     <Input placeholder="Inquiry about Finovia Rates" className="bg-gray-50 dark:bg-gray-800 border-none h-12" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Message</label>
                     <Textarea placeholder="How can we assist your financial goals today?" className="bg-gray-50 dark:bg-gray-800 border-none min-h-[150px]" />
                   </div>
                   <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12">Submit Secure Inquiry</Button>
                 </form>
               </CardContent>
            </Card>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors">
                 <CardContent className="p-6">
                   <div className="flex items-center space-x-4">
                     <div className="p-3 bg-blue-50 dark:bg-gray-800 rounded-xl text-blue-600">
                       {method.icon}
                     </div>
                     <div>
                       <h3 className="font-bold text-gray-900 dark:text-white">{method.title}</h3>
                       <p className="text-sm text-gray-500">{method.description}</p>
                     </div>
                   </div>
                   <div className="mt-4 text-lg font-bold text-blue-600 dark:text-blue-400 pl-14">
                     {method.value}
                   </div>
                 </CardContent>
              </Card>
            ))}

            <Card className="bg-gray-900 text-white overflow-hidden relative group">
              <CardContent className="p-8">
                <MessageSquare className="h-48 w-48 text-white/5 absolute -right-10 -bottom-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative z-10">
                  <Badge className="mb-4 bg-teal-500 text-white hover:bg-teal-600 border-none font-bold">Live Now</Badge>
                  <h3 className="text-2xl font-bold mb-2">Secure Live Chat</h3>
                  <p className="text-gray-400 mb-6">Connect instantly with a Finovia human representative for immediate guidance.</p>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold uppercase tracking-wider w-full">Start Secure Session</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Global Support Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-gray-100 dark:border-gray-800 text-center">
           <div className="flex flex-col items-center">
             <Clock className="h-8 w-8 text-blue-600 mb-4" />
             <h4 className="font-bold">24/7 Availability</h4>
             <p className="text-sm text-gray-500 mt-2">Access your accounts and get support via automated systems anytime.</p>
           </div>
           <div className="flex flex-col items-center">
             <Globe className="h-8 w-8 text-teal-600 mb-4" />
             <h4 className="font-bold">Global Ready</h4>
             <p className="text-sm text-gray-500 mt-2">Support for 40+ languages and international banking expertise.</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="h-8 w-8 text-purple-600 mb-4 font-black">256</div>
             <h4 className="font-bold">Encrypted End-to-End</h4>
             <p className="text-sm text-gray-500 mt-2">All communications are hardened with the latest security standards.</p>
           </div>
        </div>
      </div>
    </div>
  )
}
