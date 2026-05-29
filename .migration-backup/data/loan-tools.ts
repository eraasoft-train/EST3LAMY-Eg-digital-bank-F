import { Home, Car, User, Building } from "lucide-react"

export const loanTypes = [
  {
    id: "home",
    name: "Home Finovia",
    icon: Home,
    description: "Competitive rates for your dream home",
    rate: "From 3.25% APR",
    features: ["First-time buyer programs", "Jumbo loans available", "Fast pre-approval"],
  },
  {
    id: "auto",
    name: "Auto Finovia",
    icon: Car,
    description: "Finance your next vehicle",
    rate: "From 2.99% APR",
    features: ["New and used cars", "Refinancing options", "Quick approval"],
  },
  {
    id: "personal",
    name: "Personal Finovia",
    icon: User,
    description: "Flexible financing for life events",
    rate: "From 5.99% APR",
    features: ["No collateral required", "Fixed rates", "Same-day funding"],
  },
  {
    id: "business",
    name: "Business Finovia",
    icon: Building,
    description: "Fuel your business growth",
    rate: "Custom rates",
    features: ["SBA loans", "Equipment financing", "Lines of credit"],
  },
]
