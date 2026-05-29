import * as React from "react"
import { Wallet, Landmark, PiggyBank } from "lucide-react"

export const accountTypes = [
  {
    title: "Essential Checking",
    description: "Simple, secure, and perfect for your daily banking needs.",
    icon: React.createElement(Wallet, { className: "h-6 w-6 text-blue-600" }),
    features: ["No monthly maintenance fee", "Free debit card", "Online & mobile banking", "24/7 fraud monitoring"],
    price: "$0",
    period: "per month",
    badge: "Popular"
  },
  {
    title: "High-Yield Savings",
    description: "Grow your wealth faster with industry-leading interest rates.",
    icon: React.createElement(PiggyBank, { className: "h-6 w-6 text-teal-600" }),
    features: ["4.50% APY", "Direct deposit options", "Automated savings tools", "No minimum balance"],
    price: "$0",
    period: "per month",
    badge: "Best Rate"
  },
  {
    title: "Premium Venture",
    description: "Exclusive rewards and personalized service for high achievers.",
    icon: React.createElement(Landmark, { className: "h-6 w-6 text-purple-600" }),
    features: ["Priority customer support", "Unlimited wire transfers", "World-wide ATM fee rebates", "Higher transfer limits"],
    price: "$15",
    period: "per month",
    badge: "Premium"
  }
]
