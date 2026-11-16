import { commonEn } from "./common"
import { navEn } from "./nav"
import { homeEn } from "./home"
import { aboutEn } from "./about"
import { dashboardEn } from "./dashboard"
import { contactEn } from "./contact"
import { errorsEn } from "./errors"
import { legalEn } from "./legal"

export const en = {
  common: commonEn,
  nav: navEn,
  home: homeEn,
  about: aboutEn,
  dashboard: dashboardEn,
  contact: contactEn,
  errors: errorsEn,
  legal: legalEn,
}

export type TranslationSchema = typeof en
