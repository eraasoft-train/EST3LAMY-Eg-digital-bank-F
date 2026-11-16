import { ar } from "./ar"
import { en, type TranslationSchema } from "./en"
import type { Language } from "@/types/i18n"

export { ar, en }
export type { TranslationSchema }

export const translations: Record<Language, TranslationSchema> = {
  ar,
  en,
}

export function getDictionary(lang: Language): TranslationSchema {
  return translations[lang] || translations.ar
}
