import { Component, type ErrorInfo, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  AlertTriangle,
  RotateCcw,
  Home,
  RefreshCw,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Terminal,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
  variant?: "fullscreen" | "card" | "compact"
  sectionTitle?: string
  sectionTitleAr?: string
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  copied: boolean
  showDetails: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    copied: false,
    showDetails: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      copied: false,
      showDetails: false,
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo })
    console.error("[EST3LAMY System Exception]:", error, errorInfo)

    // Handle Vite/Vercel chunk deployment mismatch gracefully
    const isChunkError =
      error?.message?.includes("Failed to fetch dynamically imported module") ||
      error?.message?.includes("Importing a module script failed") ||
      error?.message?.includes("error loading dynamically imported module")

    if (isChunkError && typeof window !== "undefined") {
      const hasReloaded = sessionStorage.getItem("est3lamy_chunk_reload")
      if (!hasReloaded) {
        sessionStorage.setItem("est3lamy_chunk_reload", "true")
        window.location.reload()
      }
    }
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      copied: false,
      showDetails: false,
    })
  }

  private handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload()
    }
  }

  private handleGoHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }

  private handleCopy = async () => {
    const { error, errorInfo } = this.state
    const log = `=== EST3LAMY DIAGNOSTIC SYSTEM LOG ===\nTime: ${new Date().toISOString()}\nPlatform: EST3LAMY Digital Bank Investigation Platform\nURL: ${typeof window !== "undefined" ? window.location.href : "N/A"}\nMessage: ${error?.message || "Unknown error"}\nStack:\n${error?.stack || "No stack trace"}\nComponent Stack:\n${errorInfo?.componentStack || "No component stack"}`
    try {
      await navigator.clipboard.writeText(log)
      this.setState({ copied: true })
      setTimeout(() => this.setState({ copied: false }), 2500)
    } catch {
      // Ignore clipboard write failures
    }
  }

  private toggleDetails = () => {
    this.setState((prev) => ({ showDetails: !prev.showDetails }))
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      const isArabic = typeof document !== "undefined" ? document.documentElement.lang !== "en" : true
      const variant = this.props.variant || "fullscreen"

      // Compact card variant for section-level recovery
      if (variant === "card" || variant === "compact") {
        return (
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className="w-full my-6 p-6 rounded-3xl bg-card border border-destructive/30 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center shrink-0 border border-destructive/20">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {this.props.sectionTitleAr && isArabic
                      ? `تعذر تحميل ${this.props.sectionTitleAr}`
                      : this.props.sectionTitle
                      ? `Unable to load ${this.props.sectionTitle}`
                      : isArabic
                      ? "تعذر تحميل هذا القسم"
                      : "Failed to load section"}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {this.state.error?.message || (isArabic ? "حدث خطأ غير متوقع" : "Unexpected error occurred")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  onClick={this.handleReset}
                  size="sm"
                  className="h-9 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>{isArabic ? "إعادة المحاولة" : "Retry"}</span>
                </Button>
                <Button
                  onClick={this.handleReload}
                  variant="outline"
                  size="sm"
                  className="h-9 px-3 rounded-xl border-border/80 font-medium text-xs gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>{isArabic ? "تحديث" : "Reload"}</span>
                </Button>
              </div>
            </div>
          </div>
        )
      }

      // Fullscreen flagship variant
      return (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="relative min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-hidden selection:bg-blue-600 selection:text-white"
        >
          {/* Animated Background High-Tech Grid & Glow Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-destructive/15 via-red-500/10 to-blue-600/10 rounded-full blur-3xl opacity-80" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] dark:opacity-[0.07]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-card/80 dark:bg-card/90 backdrop-blur-2xl border border-border/80 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-blue-500/5 ring-1 ring-border/50"
          >
            {/* Top Indicator Header */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-border/60">
              <div className="flex items-center gap-3.5">
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-destructive/10 text-destructive border border-destructive/25 shadow-inner">
                  <motion.div
                    animate={{ rotate: [-4, 4, -4], scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <AlertTriangle className="h-7 w-7" />
                  </motion.div>
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-destructive"></span>
                  </span>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-destructive/10 text-destructive border border-destructive/20 mb-1">
                    <ShieldAlert className="h-3 w-3" />
                    <span>{isArabic ? "استثناء تشغيلي في المنظومة" : "Operational System Alert"}</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                    {isArabic ? "حدث خطأ غير متوقع أثناء المعالجة" : "An Unexpected System Error Occurred"}
                  </h1>
                </div>
              </div>

              <div className="hidden sm:block text-end">
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase px-2 py-1 rounded-md bg-muted/50 border border-border/50">
                  EST-SYS-ERR
                </span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              {isArabic
                ? "واجهت منصة استعلامي استثناءً غير متوقع في معالجة هذه الواجهة. جلسات التحقيق الميداني وسجلات التحقق والبيانات المصرفية في أمان تام دون تأثر. يمكنك إعادة المحاولة أو الانتقال إلى البوابة الرئيسية."
                : "EST3LAMY encountered an unexpected client-side runtime exception. Field inquiry records, verified geospatial evidence, and active portal sessions remain completely safe. You can retry the operation or return to the main dashboard."}
            </p>

            {/* Error Message Box */}
            {this.state.error && (
              <div className="mb-6 p-4 rounded-2xl bg-destructive/5 border border-destructive/20 text-xs sm:text-sm font-mono text-destructive flex items-start gap-2.5">
                <Terminal className="h-4 w-4 shrink-0 mt-0.5 text-destructive" />
                <div className="break-all">
                  <span className="font-bold">{isArabic ? "كود الاستثناء: " : "Exception details: "}</span>
                  <span>{this.state.error.message || (isArabic ? "استثناء غير محدد" : "Unspecified exception")}</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Button
                onClick={this.handleReset}
                size="lg"
                className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                <RotateCcw className="h-4 w-4" />
                <span>{isArabic ? "إعادة المحاولة" : "Try Again"}</span>
              </Button>

              <Button
                onClick={this.handleReload}
                variant="outline"
                size="lg"
                className="h-11 px-5 rounded-xl border-border/80 font-semibold text-xs sm:text-sm gap-2 hover:bg-muted/60 cursor-pointer"
              >
                <RefreshCw className="h-4 w-4" />
                <span>{isArabic ? "تحديث الصفحة" : "Reload Page"}</span>
              </Button>

              <Button
                onClick={this.handleGoHome}
                variant="ghost"
                size="lg"
                className="h-11 px-5 rounded-xl font-semibold text-xs sm:text-sm gap-2 hover:bg-muted/60 cursor-pointer"
              >
                <Home className="h-4 w-4" />
                <span>{isArabic ? "الرئيسية" : "Home"}</span>
              </Button>

              <a
                href="mailto:support@est3lamy.com?subject=System%20Exception%20Report"
                className="ms-auto"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-11 px-3 text-xs text-muted-foreground hover:text-foreground gap-1.5"
                >
                  <span>{isArabic ? "إبلاغ الدعم الفني" : "Report to IT"}</span>
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </a>
            </div>

            {/* Collapsible Diagnostics Accordion */}
            <div className="pt-4 border-t border-border/60">
              <button
                type="button"
                onClick={this.toggleDetails}
                className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors py-1 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-blue-500" />
                  <span>{isArabic ? "سجل التشخيص الفني ومسار الاستثناء (Stack Trace)" : "Technical Stack Trace & Diagnostics"}</span>
                </span>
                {this.state.showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              <AnimatePresence>
                {this.state.showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="relative p-4 rounded-2xl bg-zinc-950 text-zinc-300 font-mono text-[11px] leading-relaxed max-h-60 overflow-auto border border-zinc-800">
                      <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-zinc-800 text-[10px] text-zinc-400">
                        <span className="tracking-wider">SYS_EXCEPTION_DUMP</span>
                        <button
                          type="button"
                          onClick={this.handleCopy}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer text-[10px]"
                        >
                          {this.state.copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                          <span>{this.state.copied ? (isArabic ? "تم النسخ بنجاح" : "Copied!") : (isArabic ? "نسخ السجل" : "Copy Log")}</span>
                        </button>
                      </div>
                      <pre className="whitespace-pre-wrap select-all font-mono text-[11px]">
                        {this.state.error?.stack || "No stack trace available."}
                        {"\n\nComponent Hierarchy:\n"}
                        {this.state.errorInfo?.componentStack || "No component stack trace."}
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}
