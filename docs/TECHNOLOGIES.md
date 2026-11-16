# Technologies — EST3LAMY

EST3LAMY is built on a modern frontend stack designed for high performance, type safety, and maintainability.

## Core Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19 | UI library |
| TypeScript | 5.x | Type safety |
| Vite | 6.x | Build tool & dev server |
| Tailwind CSS | 4.x | Utility-first styling |

## UI & Animation

| Library | Purpose |
|---------|---------|
| Radix UI | Accessible primitives (dialogs, dropdowns, tabs, etc.) |
| Lucide React | SVG icon set |
| Framer Motion | Page transitions and interactive animations |
| cmdk | Command palette |
| vaul | Drawer component |

## State & Data

| Library | Purpose |
|---------|---------|
| TanStack Query | Server state management |
| Wouter | Lightweight routing |
| React Hook Form | Form state and validation |
| Zod | Schema validation |
| next-themes | Dark/light theme switching |

## Charts & Date

| Library | Purpose |
|---------|---------|
| Recharts | Data visualization |
| date-fns | Date utilities |
| react-day-picker | Date pickers |

## Why These Choices

- **Vite over webpack**: Faster HMR and simpler config for SPAs.
- **Wouter over React Router**: Minimal footprint, sufficient for this app's routing needs.
- **Tailwind v4**: Design tokens via CSS variables, central theming.
- **Radix + shadcn pattern**: Accessible, customizable components without heavy dependencies.
- **Framer Motion**: Smooth page transitions and interactive hover effects without custom animation code.
