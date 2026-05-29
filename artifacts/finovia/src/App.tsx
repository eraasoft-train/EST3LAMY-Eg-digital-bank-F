import { lazy, Suspense } from "react"
import { Switch, Route, Router as WouterRouter } from "wouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PageLoader } from "@/components/layout/page-loader"

const Home     = lazy(() => import("@/pages/home"))
const About    = lazy(() => import("@/pages/about"))
const Accounts = lazy(() => import("@/pages/accounts"))
const Business = lazy(() => import("@/pages/business"))
const Contact  = lazy(() => import("@/pages/contact"))
const Finovia  = lazy(() => import("@/pages/finovia"))
const NotFound = lazy(() => import("@/pages/not-found"))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
})

function Router() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/"         component={Home} />
            <Route path="/about"    component={About} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/business" component={Business} />
            <Route path="/contact"  component={Contact} />
            <Route path="/finovia"  component={Finovia} />
            <Route                  component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </ThemeProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  )
}
