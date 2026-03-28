import * as React from "react"
import { Home, Car, TrendingUp, HardHat } from "lucide-react"

export const loanProducts = [
  {
    title: "Mortgage Loans",
    description: "Low fixed rates and flexible terms for your dream home.",
    icon: React.createElement(Home, { className: "h-6 w-6 text-blue-600" }),
    rate: "From 4.25% APR",
    badge: "Fixed Rate"
  },
  {
    title: "Auto Loans",
    description: "Fast approval and competitive rates for your next vehicle.",
    icon: React.createElement(Car, { className: "h-6 w-6 text-teal-600" }),
    rate: "From 3.50% APR",
    badge: "Quick Approval"
  },
  {
    title: "Personal Loans",
    description: "No-collateral loans for life's biggest milestones.",
    icon: React.createElement(TrendingUp, { className: "h-6 w-6 text-purple-600" }),
    rate: "From 6.99% APR",
    badge: "No Fees"
  },
  {
    title: "Home Equity",
    description: "Leverage your home's equity for renovations and more.",
    icon: React.createElement(HardHat, { className: "h-6 w-6 text-orange-600" }),
    rate: "From 5.15% APR",
    badge: "Flexible"
  }
]
