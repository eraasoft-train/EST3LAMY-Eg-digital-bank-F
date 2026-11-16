# Project Structure — EST3LAMY Eg Digital Bank

This document outlines the codebase layout of **EST3LAMY**, explaining the architecture and responsibilities of each directory.

## Architecture Overview

EST3LAMY is designed as an enterprise single-page application (SPA) with a component-driven architecture. It uses React 19 with TypeScript, bundled by Vite 6, and styled with Tailwind CSS v4. It features bidirectional language support (Arabic RTL and English LTR) via `LanguageContext`.

## Directory Layout

```
EST3LAMY-Eg-digital-bank-F/
├── src/
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, PageLoader
│   │   ├── sections/          # Homepage sections (Hero, PlatformFeatures, Workflow, Tech, DashboardPreview, Clients)
│   │   └── ui/                # Accessible Radix UI / shadcn base components
│   ├── context/               # Global state providers (LanguageContext for RTL/LTR)
│   ├── data/                  # Content data & models (portal, workflow, services, about, contact, business...)
│   ├── hooks/                 # Custom hooks (use-page-meta, use-local-storage, use-mobile, use-toast)
│   ├── lib/                   # Utilities (cn helper)
│   ├── pages/                 # Application route pages
│   │   ├── home.tsx           # Main landing page
│   │   ├── solutions.tsx      # Platform solutions & service tiers
│   │   ├── how-it-works.tsx   # 8-stage investigation lifecycle
│   │   ├── technology.tsx     # Technical stack, mobile app, GPS & encryption
│   │   ├── industries.tsx     # Financial sectors served
│   │   ├── dashboard.tsx      # Interactive Operations Portal Demo
│   │   ├── about.tsx          # Company overview & Fair Solutions group context
│   │   ├── contact.tsx        # Institutional partnership inquiry form
│   │   ├── privacy.tsx        # Financial data privacy policy
│   │   ├── terms.tsx          # Terms of service & institutional SLA
│   │   └── not-found.tsx      # 404 handler
│   ├── App.tsx                # Root component, routing, theme & language providers
│   ├── main.tsx               # Entry point
│   └── index.css              # Design tokens, fonts (Cairo & Inter), CSS variables
├── public/                    # Static assets, sitemap.xml, robots.txt
├── docs/                      # Technical documentation
├── index.html                 # Entry HTML with Cairo/Inter fonts and SEO schema
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Operations Portal Demo (`/dashboard`)

An interactive operational environment for prospective financial institutions demonstrating:
- Live investigation case listings with status filters (New, Assigned, In Field, QC Review, Approved).
- Interactive Case Detail dialog showing applicant profiles, residential addresses, and stated employer verification.
- Researcher fleet status and real-time GPS geofencing verification.
- Quality Control (QC) review and approval workflow with one-click report certification.
- New investigation case registration form with immediate in-memory state dispatch.
- Prominent demo simulation indicators.
