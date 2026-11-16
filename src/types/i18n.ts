export type Language = "ar" | "en"
export type Direction = "rtl" | "ltr"

export interface LanguageContextType {
  language: Language
  direction: Direction
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  /**
   * Helper that returns either Arabic or English text depending on current language
   */
  t: {
    <T = string>(ar: T, en: T): T
  }
}
