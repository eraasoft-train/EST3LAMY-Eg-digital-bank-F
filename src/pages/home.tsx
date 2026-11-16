import { HeroSection } from "@/components/sections/hero-section"
import { PlatformFeatures } from "@/components/sections/platform-features"
import { WorkflowSection } from "@/components/sections/workflow-section"
import { TechSection } from "@/components/sections/tech-section"
import { DashboardPreview } from "@/components/sections/dashboard-preview"
import { ClientsSection } from "@/components/sections/clients-section"
import { usePageMeta } from "@/hooks/use-page-meta"
import { useLanguage } from "@/context/language-context"

export default function Home() {
  const { t } = useLanguage()

  usePageMeta({
    title: t(
      "استعلامي — منصة التحقيق الميداني الرقمي للمؤسسات المالية في مصر",
      "EST3LAMY — Digital Field Investigation Platform for Financial Institutions in Egypt"
    ),
    description: t(
      "استعلامي منصة رقمية متكاملة لرقمنة عملية التحقيق الميداني والتحقق من العملاء للبنوك وشركات التمويل في مصر.",
      "EST3LAMY is an integrated digital platform transforming field investigation and applicant verification for Egyptian banks and finance firms."
    ),
    canonical: "https://est3lamy.vercel.app/",
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
