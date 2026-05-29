# 🤝 Contributing Guidelines

We welcome contributions to the Finovia banking application! Follow these standards to maintain codebase health, code quality, and styling guidelines.

---

## 🚀 Setup & Local Development

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Mostafa-SAID7/Finovia.git
    cd Finovia
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
4.  **Open in Browser**: Navigate to `http://localhost:5173`.

---

## 🛠️ Build and Compilation Checks

Before submitting a Pull Request, run these validation checks:

*   **TypeScript Check**: Ensures no type discrepancies exist.
    ```bash
    npm run typecheck
    ```
*   **Production Build**: Compiles components into optimized web chunks.
    ```bash
    npm run build
    ```

---

## 🎨 Code Style & Design Tokens

To ensure consistency, adhere to these practices:

1.  **Tailwind CSS CSS-First Styling**: Use Tailwind v4 classes for styling. Avoid inline styles.
2.  **Harmonious Color Palettes**: Stick to established HSL/CSS custom design tokens in `index.css` (e.g., brand blues, indigos, slate backgrounds). Avoid random raw colors.
3.  **Semantic HTML**: Wrap content in `<main>`, `<section>`, `<article>`, `<header>` instead of nested generic `<div>` tags where possible.
4.  **Reusable Components**: Place new base components under `src/components/ui/` and complex page-specific panels under `src/components/sections/`.
5.  **Clean Imports**: Use `@/` path alias for absolute imports.
    *   Example: `import { Button } from "@/components/ui/button"`

---

## 📥 Git Commit Guidelines

Commit messages must be descriptive and follow conventional patterns:

*   `feat: add dark mode capability to accounts page`
*   `fix: resolve mortgage calculator NaN edge case when input is zero`
*   `docs: create technology stack documentation`
*   `style: align text fields on personal credit forms`

---

## 📬 Pull Request Checklist

When submitting a PR:
- [ ] Verify that `npm run build` succeeds without warnings.
- [ ] Run `npm run typecheck` to confirm zero TS compiling issues.
- [ ] Test the interface across responsive screen sizes (mobile, tablet, desktop).
- [ ] Confirm dark mode color readability is pristine.
- [ ] Reference related GitHub issues if applicable.
