# 🛠️ Technology Stack & Decisions

Finovia is built on a modern frontend stack designed for high performance, type safety, modular structure, and smooth user interactions.

---

## ⚡ Core Frameworks

### React 19
*   **Version**: `^19.0.0`
*   **Rationale**: React 19 brings concurrent rendering enhancements, native form handling primitives (e.g. actions, `useActionState`), and improved hook ergonomics. This ensures that the dynamic banking interfaces remain highly responsive during heavy rendering.

### Vite 6
*   **Version**: `^6.0.0`
*   **Rationale**: Fast development reload speeds and optimized rollup-based production builds. Configured with `@tailwindcss/vite` for CSS compiling and `@vitejs/plugin-react` for React JSX transformation.

### TypeScript 5
*   **Version**: `^5.0.0`
*   **Rationale**: Strictly typed models for transactions, loan calculations, accounts data, and component configurations to eliminate runtime type errors.

---

## 🎨 Styling & Component Library

### Tailwind CSS v4
*   **Version**: `^4.0.0`
*   **Rationale**: A streamlined compiler (CSS-first engine) offering superior build times, container queries, native CSS variables customization, and dynamic custom classes.

### Radix UI Primities
*   **Rationale**: Unstyled accessible components (Radix UI) backing the Shadcn design system (Accordion, Alert Dialog, Dialog, Hover Card, Menubar, etc.). Ensures complete keyboard accessibility and screen-reader friendliness out-of-the-box.

### Lucide React & React Icons
*   **Versions**: `lucide-react` (`^0.545.0`) & `react-icons` (`^5.4.0`)
*   **Rationale**: SVG-based iconography that scales nicely, is lightweight, and easily integrates into theme palettes.

---

## 🧭 Application State & Routing

### Wouter
*   **Version**: `^3.3.5`
*   **Rationale**: An ultra-lightweight routing solution (~2.1KB gzipped) optimized for single-page applications. Avoids the boilerplate of heavier alternatives like React Router, while providing hook-based routing and hash/base path flexibility.

### TanStack Query (React Query)
*   **Version**: `^5.90.21`
*   **Rationale**: Client-side state caching, asynchronous query tracking, automatic deduplication, and retry logic. Keeps mock dashboard statistics synchronized efficiently.

### React Hook Form & Zod
*   **Versions**: `react-hook-form` (`^7.55.0`) & `zod` (`^3.25.76`)
*   **Rationale**: Form management and schema-based client-side validation. Used across authentication modals and transaction inputs in the interactive dashboard to validate inputs immediately.

---

## 📈 Animations & Data Visuals

### Recharts
*   **Version**: `^2.15.2`
*   **Rationale**: SVG chart library optimized for React. Renders transaction analytics, balance history charts, and category breakdowns dynamically inside the dashboard.

### Framer Motion
*   **Version**: `^12.23.24`
*   **Rationale**: Powers smooth page transitions, interactive hover effects, and slide-in onboarding panels to give Finovia its premium, fluid visual aesthetic.
