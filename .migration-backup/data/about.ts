import * as React from "react"
import { Shield, Target, Users } from "lucide-react"

export const values = [
  { title: "Security First", description: "Your financial safety is our absolute priority, guarded by bank-grade encryption and 24/7 monitoring.", icon: React.createElement(Shield, { className: "h-6 w-6 text-blue-600" }) },
  { title: "Radical Transparency", description: "No hidden fees, no complex jargon. Just clear banking that empowers your dreams.", icon: React.createElement(Target, { className: "h-6 w-6 text-teal-600" }) },
  { title: "Human Innovation", description: "We blend the latest AI financial tools with empathetic human advice to guide your journey.", icon: React.createElement(Users, { className: "h-6 w-6 text-purple-600" }) }
]

export const milestones = [
  { year: "2018", title: "The Vision", description: "Finovia was founded with a single mission: to revolutionize digital banking through radical trust." },
  { year: "2020", title: "Public Launch", description: "Opened our doors to over 100,000 pioneer customers who believed in a better way to bank." },
  { year: "2022", title: "Commercial Expansion", description: "Launched our full business banking suite to support regional economy and innovation." },
  { year: "2024", title: "Global Reach", description: "Expanded our operations to provide secure cross-border wealth management to millions." }
]
