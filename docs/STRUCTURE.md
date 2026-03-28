# Project Structure

Comprehensive guide to the architecture and organization of the Finovia Digital Banking platform.

## Table of Contents

- [Directory Overview](#directory-overview)
- [Architecture Patterns](#architecture-patterns)
- [Component Structure](#component-structure)
- [State & Theming](#state--theming)

## Directory Overview

```text
Finovia/
├── app/                  # Next.js App Router (Routes & Layouts)
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Core Tailwind CSS & design tokens
├── components/          # React Components
│   ├── layout/          # Global layout parts (Navigation, Footer)
│   ├── sections/        # Main landing page blocks (Hero, Loans, etc.)
│   ├── ui/              # Reusable Radix-based primitives
│   └── theme-provider.tsx # Theme switching logic
├── hooks/                # Custom React hooks (use-mobile, etc.)
├── lib/                  # Shared utilities and configurations
├── public/               # Static assets (logos, illustrations)
├── styles/               # Component-specific style overrides
├── node_modules/         # Project dependencies
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Design system configuration
├── tsconfig.json          # TypeScript definitions
└── package.json          # Dependency management
```

## Architecture Patterns

### 1. App Router (Next.js 14)
Finovia utilizes the **Next.js App Router** logic. 
- **Server Components**: By default, components in the `app/` directory are Server Components for optimal performance and SEO.
- **Client Components**: Interactive UI (buttons, loaders, stateful forms) use the `"use client"` directive.

### 2. Component Composition
We follow an atomic design approach with three layers:
1. **Atoms (UI Components)**: Located in `components/ui/`. These represent the smallest building blocks (Buttons, Badges, Checkboxes).
2. **Sections**: Located in `components/sections/`. These are the large, opinionated parts of the Landing Page that consume UI components.
3. **Layout**: Located in `components/layout/`. These wrap sections (Header, Footer).

### 3. Utility-First Styling
Styling is managed via **Tailwind CSS**. 
- Custom design tokens (colors, radii, shadows) are defined in `tailwind.config.js`.
- Responsive design is handled natively via Tailwind's `md:`, `lg:`, and `xl:` breakpoints.

## Component Structure

Every component should follow a standard template for consistency:

```tsx
"use client" // Only if interactivity or hooks are needed

import * as React from "react"
import { cn } from "@/lib/utils" // Utility for merging Tailwind classes

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline-solid"
}

export function ComponentName({ className, variant, ...props }: ComponentProps) {
  return (
    <div 
      className={cn("base-styles", variant === "outline-solid" && "outline-styles", className)} 
      {...props}
    >
      {/* Content */}
    </div>
  )
}
```

## State & Theming

### Theming
We use `next-themes` for robust light/dark mode support. Global variables are stored in `app/globals.css` using CSS variables (`--background`, `--foreground`, `--primary`, etc.).

### Navigation State
Responsive navigation behavior (mobile menu) is handled via the `hooks/use-mobile.tsx` hook, which provides a simple boolean for viewport detection.

---

For functional details, see:
- [FEATURES.md](./FEATURES.md) - Full feature list
- [STYLES.md](./STYLES.md) - Design system guidelines
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Build and ship guide
