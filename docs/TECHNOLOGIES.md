# Technologies

Comprehensive overview of the technologies, frameworks, and tools used in Dr. MediCare.

---

## Core Technologies

### Frontend Framework

#### Next.js
- **Version**: `15.2.8` (App Router)
- **Purpose**: React framework for production
- **Key Features**:
  - App Router for file-based routing and layout nesting
  - React Server Components (RSC) for optimized initial loading and server-side data preparation
  - Dynamic API routes and static asset optimization
  - Automatic font/image optimizations and customized metadata integration

### UI Library

#### React
- **Version**: `^19`
- **Purpose**: Component-based UI logic
- **Key Features**:
  - Support for React 19 concurrent features
  - Built-in `Suspense` for lazy loading modals and widgets
  - State management using local hooks and global Context API

### Programming Language

#### TypeScript
- **Version**: `^5`
- **Purpose**: Type-safe development
- **Configuration**: Strict mode enabled (`tsconfig.json`)

---

## Styling & Layout

### Tailwind CSS
- **Version**: `^3.4.17`
- **Purpose**: Utility-first CSS styling
- **Key Plugins**:
  - `tailwindcss-animate` – Smooth micro-animations and transition controls

### PostCSS
- **Version**: `^8.5`
- **Purpose**: Modern CSS compilation and autoprefixing

---

## UI Components & Design System

### Radix UI Primitives
Low-level, unstyled accessible UI primitives used as the structural foundation:
- `@radix-ui/react-accordion` (`1.2.2`)
- `@radix-ui/react-alert-dialog` (`1.1.4`)
- `@radix-ui/react-aspect-ratio` (`1.1.1`)
- `@radix-ui/react-avatar` (`1.1.2`)
- `@radix-ui/react-checkbox` (`1.1.3`)
- `@radix-ui/react-dialog` (`1.1.4`)
- `@radix-ui/react-dropdown-menu` (`2.1.4`)
- `@radix-ui/react-navigation-menu` (`1.2.3`)
- `@radix-ui/react-popover` (`1.1.4`)
- `@radix-ui/react-select` (`2.1.4`)
- `@radix-ui/react-tabs` (`1.1.2`)
- `@radix-ui/react-tooltip` (`1.1.6`)

### Icons & Animations
- **Lucide React** (`^0.454.0`) – Vector icons
- **Embla Carousel React** (`8.5.1`) – Touch-friendly slider support

### Toast & Overlay Systems
- **Sonner** (`^1.7.1`) – Beautiful, accessible notifications
- **Vaul** (`^1.1.1`) – Bottom drawer components (React 19 overrides applied)

---

## Forms & Validation

- **React Hook Form** (`^7.54.1`) – Performance-optimized, declarative form state management
- **Zod** (`^3.24.1`) – Schema-based type-safe validation
- **@hookform/resolvers** (`^3.9.1`) – Integrates Zod with React Hook Form

---

## Utilities

- **date-fns** (`4.1.0`) – High-performance modular date utility
- **react-day-picker** (`9.8.0`) – Custom medical calendar booking picker
- **recharts** (`2.15.0`) – Medical stats and appointment analytics rendering
- **next-themes** (`^0.4.4`) – System preference dark mode toggle

---

## Development & Deployment

- **Package Manager**: npm
- **Linting & Formatting**: ESLint (via Next.js rules) + Prettier rules
- **Hosting Platform**: Vercel
