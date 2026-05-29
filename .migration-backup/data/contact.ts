import * as React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export const contactMethods = [
  { title: "Customer Support", description: "Available 24/7 for urgent inquiries.", icon: React.createElement(Phone, { className: "h-5 w-5" }), value: "+1 (800) FINOVIA" },
  { title: "Email Us", description: "Typical response within 2 hours.", icon: React.createElement(Mail, { className: "h-5 w-5" }), value: "support@finovia.com" },
  { title: "Office Location", description: "Visit our technology hub.", icon: React.createElement(MapPin, { className: "h-5 w-5" }), value: "123 Finance Way, San Francisco" }
]
