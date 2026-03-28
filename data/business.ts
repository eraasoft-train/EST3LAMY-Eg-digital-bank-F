import * as React from "react"
import { Briefcase, BarChart3, Rocket } from "lucide-react"

export const businessSolutions = [
  {
    title: "Commercial Checking",
    description: "Scalable checking solutions for businesses of all sizes.",
    icon: React.createElement(Briefcase, { className: "h-6 w-6 text-blue-600" }),
    features: ["Unlimited transactions", "Free bulk wire transfers", "Integrated payroll tools", "Dedicated relationship manager"]
  },
  {
    title: "Treasury Management",
    description: "Advanced tools to optimize your company's cash flow.",
    icon: React.createElement(BarChart3, { className: "h-6 w-6 text-teal-600" }),
    features: ["Fraud prevention services", "Remote deposit capture", "Automated accounts payable", "Real-time liquidity monitoring"]
  },
  {
    title: "SBA & Commercial Finovia",
    description: "Fuel your expansion with competitive business lending.",
    icon: React.createElement(Rocket, { className: "h-6 w-6 text-purple-600" }),
    features: ["Equipment financing", "Real estate loans", "Working capital lines of credit", "Low down-payment SBA loans"]
  }
]
