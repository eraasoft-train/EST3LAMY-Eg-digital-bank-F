import { HeroSection }         from "@/components/sections/hero-section"
import { PlatformFeatures }    from "@/components/sections/account-offerings"
import { WorkflowSection }     from "@/components/sections/loan-tools"
import { TechSection }         from "@/components/sections/security-section"
import { DashboardPreview }    from "@/components/sections/dashboard-preview"
import { ClientsSection }      from "@/components/sections/onboarding-section"
import { usePageMeta }         from "@/hooks/use-page-meta"

export default function Home() {
  usePageMeta({
    title: "استعلامي — منصة التحقيق الميداني الرقمي للمؤسسات المالية",
    description: "استعلامي منصة رقمية متكاملة لرقمنة عملية التحقيق الميداني والتحقق من العملاء للبنوك وشركات التمويل في مصر.",
    canonical: "https://est3lamy.com/",
  })
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PlatformFeatures />
      <WorkflowSection />
      <TechSection />
      <DashboardPreview />
      <ClientsSection />
    </div>
  )
}
