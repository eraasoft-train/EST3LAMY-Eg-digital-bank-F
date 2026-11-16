import { lazy, Suspense } from "react"
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PageLoader } from "@/components/layout/page-loader"
import { ErrorBoundary } from "@/components/common/error-boundary"

const Home       = lazy(() => import("@/pages/home"))
const About      = lazy(() => import("@/pages/about"))
const Solutions  = lazy(() => import("@/pages/solutions"))
const Industries = lazy(() => import("@/pages/industries"))
const HowItWorks = lazy(() => import("@/pages/how-it-works"))
const Technology = lazy(() => import("@/pages/technology"))
const Dashboard  = lazy(() => import("@/pages/dashboard"))
const Contact    = lazy(() => import("@/pages/contact"))
const Privacy    = lazy(() => import("@/pages/privacy"))
const Terms      = lazy(() => import("@/pages/terms"))
const NotFound   = lazy(() => import("@/pages/not-found"))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
})

function Router() {
  const [location] = useLocation()
  const isDashboard = location === "/dashboard" || location.startsWith("/dashboard/")

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className={isDashboard ? "h-screen overflow-hidden" : "min-h-screen"}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/"            component={Home} />
              <Route path="/about"       component={About} />
              <Route path="/solutions"   component={Solutions} />
              <Route path="/industries"  component={Industries} />
              <Route path="/how-it-works" component={HowItWorks} />
              <Route path="/technology"  component={Technology} />
              <Route path="/dashboard"   component={Dashboard} />
              <Route path="/contact"     component={Contact} />
              <Route path="/privacy"     component={Privacy} />
              <Route path="/terms"       component={Terms} />
              <Route                     component={NotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </main>
      {!isDashboard && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <ErrorBoundary variant="fullscreen">
                <Router />
              </ErrorBoundary>
            </WouterRouter>
          </LanguageProvider>
        </ThemeProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  )
}
