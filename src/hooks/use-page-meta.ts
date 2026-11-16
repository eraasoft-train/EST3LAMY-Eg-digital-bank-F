import { useEffect } from "react"
import type { PageMeta } from "@/types/meta"

const BASE_TITLE = "استعلامي — EST3LAMY"

export function usePageMeta({ title, description, canonical, noIndex }: PageMeta) {
  useEffect(() => {
    const fullTitle = title === BASE_TITLE
      ? `${BASE_TITLE} — Digital Investigation & Customer Verification Solutions`
      : `${title} | ${BASE_TITLE}`

    document.title = fullTitle

    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement("meta")
        const attr = selector.includes("property") ? "property" : "name"
        const val = selector.match(/["']([^"']+)["']/)?.[1] ?? ""
        el.setAttribute(attr, val)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', description)
    if (noIndex) {
      setMeta('meta[name="robots"]', 'noindex, nofollow')
    } else {
      setMeta('meta[name="robots"]', 'index, follow')
    }
    if (canonical) {
      setMeta('meta[property="og:url"]', canonical)
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement("link")
        link.rel = "canonical"
        document.head.appendChild(link)
      }
      link.href = canonical
    }
  }, [title, description, canonical])
}
