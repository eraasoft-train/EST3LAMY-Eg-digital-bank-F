import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  dir: "rtl" | "ltr"
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (ar: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "est3lamy_lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === "ar" || saved === "en") return saved
    }
    return "ar"
  })

  const dir = language === "ar" ? "rtl" : "ltr"

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, language)
      document.documentElement.lang = language
      document.documentElement.dir = dir
      document.body.dir = dir
    }
  }, [language, dir])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"))
  }

  const t = (ar: string, en: string) => (language === "ar" ? ar : en)

  return (
    <LanguageContext.Provider value={{ language, dir, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
