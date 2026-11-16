import { Component, type ErrorInfo, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, RotateCcw, Home, RefreshCw, Copy, Check, ChevronDown, ChevronUp, ShieldAlert, LifeBuoy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
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
    // Log to console for observability
    console.error("[EST3LAMY System Exception]:", error, errorInfo)
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
    const log = `[EST3LAMY Error Log]\nMessage: ${error?.message || "Unknown error"}\nStack: ${error?.stack || "No stack"}\nComponent Stack: ${errorInfo?.componentStack || "No component stack"}`
    try {
      await navigator.clipboard.writeText(log)
      this.setState({ copied: true })
      setTimeout(() => this.setState({ copied: false }), 2500)
    } catch {
      // Fallback
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

      // Check current language preference from document
      const isArabic = typeof document !== "undefined" ? document.documentElement.lang !== "en" : true

      return (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center p-4 sm:p-6 selection:bg-blue-600 selection:text-white"
        >
          {/* Ambient Glow Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-card/90 backdrop-blur-xl border border-border/80 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-blue-500/5"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                  >
                    <AlertTriangle className="h-6 w-6" />
                  </motion.div>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 mb-1">
                    <ShieldAlert className="h-3 w-3" />
                    <span>{isArabic ? "تنبيه تشغيلي في النظام" : "Operational Alert"}</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {isArabic ? "حدث خطأ غير متوقع في المنظومة" : "An Unexpected System Error Occurred"}
                  </h1>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              {isArabic
                ? "واجهت منصة استعلامي استثناءً برمجياً غير متوقع أثناء معالجة الصفحة. بيانات التحري وجلسات العمليات الميدانية في أمان تام. يمكنك إعادة المحاولة أو الرجوع للصفحة الرئيسية."
                : "EST3LAMY platform encountered an unexpected runtime exception. Field investigation records and portal session state remain secure. You can retry the operation or return to the main dashboard."}
            </p>

            {/* Error Message Box */}
            {this.state.error && (
              <div className="mb-6 p-4 rounded-2xl bg-destructive/5 border border-destructive/20 text-xs sm:text-sm font-mono text-destructive break-words">
                <span className="font-bold">{isArabic ? "رسالة الخطأ: " : "Error message: "}</span>
                {this.state.error.message || (isArabic ? "خطأ غير معروف" : "Unknown exception")}
              </div>
            )}

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Button
                onClick={this.handleReset}
                size="lg"
                className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm gap-2 shadow-lg shadow-blue-500/20"
              >
                <RotateCcw className="h-4 w-4" />
                <span>{isArabic ? "إعادة المحاولة" : "Try Again"}</span>
              </Button>

              <Button
                onClick={this.handleReload}
                variant="outline"
                size="lg"
                className="h-11 px-5 rounded-xl border-border/80 font-medium text-xs sm:text-sm gap-2 hover:bg-muted/60"
              >
                <RefreshCw className="h-4 w-4" />
                <span>{isArabic ? "تحديث الصفحة" : "Reload Page"}</span>
              </Button>

              <Button
                onClick={this.handleGoHome}
                variant="ghost"
                size="lg"
                className="h-11 px-5 rounded-xl font-medium text-xs sm:text-sm gap-2 hover:bg-muted/60"
              >
                <Home className="h-4 w-4" />
                <span>{isArabic ? "الرئيسية" : "Home"}</span>
              </Button>
            </div>

            {/* Collapsible Diagnostics */}
            <div className="pt-4 border-t border-border/60">
              <button
                type="button"
                onClick={this.toggleDetails}
                className="flex items-center justify-between w-full text-xs font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                <span className="flex items-center gap-1.5">
                  <LifeBuoy className="h-3.5 w-3.5 text-blue-500" />
                  {isArabic ? "التشخيص الفني وسجل الخطأ للـ IT" : "Technical Diagnostics & Stack Trace"}
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
                    <div className="relative p-3.5 rounded-2xl bg-zinc-950 text-zinc-300 font-mono text-[11px] leading-relaxed max-h-56 overflow-auto border border-zinc-800">
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-zinc-800 text-[10px] text-zinc-400">
                        <span>STACK TRACE</span>
                        <button
                          type="button"
                          onClick={this.handleCopy}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
                        >
                          {this.state.copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                          <span>{this.state.copied ? (isArabic ? "تم النسخ" : "Copied") : (isArabic ? "نسخ" : "Copy")}</span>
                        </button>
                      </div>
                      <pre className="whitespace-pre-wrap select-all">
                        {this.state.error?.stack || "No stack trace available."}
                        {"\n\nComponent Stack:\n"}
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
