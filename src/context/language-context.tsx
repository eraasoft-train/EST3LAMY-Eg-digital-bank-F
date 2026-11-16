import { createContext, useContext, useEffect, useState, useMemo, type ReactNode } from "react"
import { getDictionary, type TranslationSchema } from "@/i18n"
import type { Language, Direction } from "@/types/i18n"

export type { Language, Direction }

export interface LanguageContextType {
  language: Language
  direction: Direction
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  strings: TranslationSchema
  /**
   * Returns Arabic or English value according to current language
   */
  t: <T = string>(ar: T, en: T) => T
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "est3lamy_lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null
      if (saved === "ar" || saved === "en") return saved
      // Default to Arabic for Egyptian market
      return "ar"
    }
    return "ar"
  })

  const direction: Direction = language === "ar" ? "rtl" : "ltr"

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, language)
      document.documentElement.lang = language
      document.documentElement.dir = direction
      if (language === "ar") {
        document.documentElement.classList.add("rtl")
        document.documentElement.classList.remove("ltr")
      } else {
        document.documentElement.classList.add("ltr")
        document.documentElement.classList.remove("rtl")
      }
    }
  }, [language, direction])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"))
  }

  const strings = useMemo(() => getDictionary(language), [language])

  const t = <T = string>(ar: T, en: T): T => {
    return language === "ar" ? ar : en
  }

  const value = useMemo(
    () => ({
      language,
      direction,
      setLanguage,
      toggleLanguage,
      strings,
      t,
    }),
    [language, direction, strings]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const useTranslation = useLanguage
