import { Link } from "wouter"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search, ShieldAlert } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <ShieldAlert className="h-32 w-32 text-blue-600 dark:text-blue-400 opacity-20" />
            <span className="absolute inset-0 flex items-center justify-center text-8xl font-black text-gray-900 dark:text-white">
              404
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Security Check: Page Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            It seems you've wandered into an unencrypted territory. The page you're looking for might have been moved, deleted, or never existed in our secure vault.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return to Safety
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent">
            <Link href="/contact" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Error Code: 0x80404N0TF0UND | Finovia Security Protocol
          </p>
        </motion.div>
      </div>
    </div>
  )
}
