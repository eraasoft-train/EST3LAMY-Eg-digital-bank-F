import { motion } from "framer-motion"
import { Shield, Target, Users, Globe, Landmark, Code, Heart } from "lucide-react"

import { values, milestones } from "@/data/about"

export default function AboutPage() {

  return (
    <div className="bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 uppercase tracking-tight"
            >
              Building the Future of <span className="text-blue-600">Trust</span>
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At Finovia, we believe banking should be more than just transactions. It's about empowering your dreams, securing your legacy, and providing the tools to thrive in a digital-first economy.
            </p>
            <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-xs">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Global HQ</div>
                <div className="text-sm text-gray-500">San Francisco & London</div>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
               <div className="h-48 bg-blue-600 rounded-3xl flex items-center justify-center p-8 shadow-xl">
                 <Landmark className="h-16 w-16 text-white opacity-50" />
               </div>
               <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 flex flex-col justify-end">
                 <div className="text-3xl font-black text-blue-600 mb-2">250+</div>
                 <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Financial Nodes</div>
               </div>
             </div>
             <div className="space-y-4">
               <div className="h-64 bg-teal-600 rounded-3xl flex items-center justify-center p-8 shadow-xl">
                 <Code className="h-16 w-16 text-white opacity-50" />
               </div>
               <div className="h-48 bg-blue-50 dark:bg-gray-800 rounded-3xl p-8 flex flex-col justify-end border border-blue-100 dark:border-gray-700">
                 <Heart className="h-8 w-8 text-pink-500 mb-2" />
                 <div className="text-sm font-bold text-gray-500">Customer Centric</div>
               </div>
             </div>
          </div>
        </div>

        {/* Value Section */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, index) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="max-w-4xl mx-auto py-24 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-center mb-24">The Finovia Journey</h2>
          <div className="relative border-l-2 border-blue-200 dark:border-gray-800 ml-4 md:ml-0 space-y-16">
             {milestones.map((m, index) => (
               <motion.div
                 key={m.year}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.1 }}
                 className="relative pl-12"
               >
                 <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-xs" />
                 <div className="text-blue-600 font-black text-xl mb-1">{m.year}</div>
                 <h3 className="text-2xl font-bold mb-2">{m.title}</h3>
                 <p className="text-gray-500 dark:text-gray-400 max-w-lg">{m.description}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}
