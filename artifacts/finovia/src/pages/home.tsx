import { HeroSection } from "@/components/sections/hero-section"
import { AccountOfferings } from "@/components/sections/account-offerings"
import { FinoviaTools } from "@/components/sections/loan-tools"
import { SecuritySection } from "@/components/sections/security-section"
import { DashboardPreview } from "@/components/sections/dashboard-preview"
import { OnboardingSection } from "@/components/sections/onboarding-section"
import { usePageMeta } from "@/hooks/use-page-meta"

export default function Home() {
  usePageMeta({
    title: "Finovia Banking",
    description: "Finovia offers FDIC-insured checking, 4.50% APY savings, personal loans, and business banking with 256-bit encryption, zero monthly fees, and 24/7 expert support.",
    canonical: "https://finovia.replit.app/",
  })
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AccountOfferings />
      <FinoviaTools />
      <SecuritySection />
      <DashboardPreview />
      <OnboardingSection />
    </div>
  )
}
