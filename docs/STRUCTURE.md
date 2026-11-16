# Project Structure — EST3LAMY

This document outlines the codebase layout of **EST3LAMY**, explaining the architecture and responsibilities of each directory.

## Architecture Overview

EST3LAMY is designed as a single-page application (SPA) with a component-driven architecture. It uses React 19 with TypeScript, bundled by Vite 6, and styled with Tailwind CSS v4.

## Directory Layout

```
EST3LAMY-Eg-digital-bank-F/
├── src/
│   ├── components/
│   │   ├── layout/           # Navbar, Footer, PageLoader
│   │   ├── sections/          # Homepage sections (hero, features, workflow...)
│   │   └── ui/                # shadcn/ui base components
│   ├── data/                  # Content data (navigation, about, contact, solutions...)
│   ├── hooks/                 # Custom hooks (use-page-meta, use-local-storage, use-mobile, use-toast)
│   ├── lib/                   # Utilities (cn helper)
│   ├── pages/                 # Route pages
│   ├── App.tsx                # Root component + router
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles + design tokens
├── public/                    # Static assets
├── docs/                      # Project documentation
├── index.html                 # HTML entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## Pages

- `home.tsx`: EST3LAMY home page displaying the hero and primary onboarding path.
- `about.tsx`: Information about EST3LAMY's vision, history, and values.
- `solutions.tsx`: Platform capabilities and service packages.
- `how-it-works.tsx`: 8-step investigation workflow walkthrough.
- `industries.tsx`: Sectors served by the platform.
- `contact.tsx`: Institution inquiry and partnership form.
- `not-found.tsx`: 404 fallback page.

## Data Layer

All content lives in `src/data/` as typed exports, keeping copy separate from presentation:

- `navigation.ts` — top nav links (Arabic + English)
- `about.ts` — company values and milestones
- `contact.ts` — contact methods
- `security.ts` — platform features and client types
- `accounts.ts` — service plans
- `business.ts` — industries served
- `loan-tools.ts` — workflow steps
- `dashboard.ts` — demo investigation data (clearly marked as demo)
