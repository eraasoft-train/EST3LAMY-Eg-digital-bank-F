# Finovia Banking

A modern banking landing site for Finovia — showcasing accounts, loans, business banking, security, and onboarding features.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/finovia/src/pages/` — route components (home, accounts, about, business, contact, finovia)
- `artifacts/finovia/src/components/layout/` — Navbar and Footer
- `artifacts/finovia/src/components/sections/` — homepage section components
- `artifacts/finovia/src/data/` — static data files powering the pages
- `artifacts/finovia/src/index.css` — Tailwind v4 theme with HSL CSS variables

## Architecture decisions

- Pure frontend app (no API routes) — migrated from Next.js to Vite + React with wouter routing
- `next/link` replaced with `wouter Link`; `usePathname` replaced with `useLocation`
- `next-themes` ThemeProvider retained (compatible without Next.js)
- "use client" directives stripped (no-op in Vite/React)
- Tailwind v4 with `@tailwindcss/vite` plugin; no postcss.config.js

## Product

Multi-page banking marketing site with: hero section, account types, loan calculator, security features, dashboard preview, onboarding wizard, and dedicated pages for Accounts, Finovia (loans), Business, About, and Contact.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
