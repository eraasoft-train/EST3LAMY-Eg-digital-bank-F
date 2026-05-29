# 📜 Changelog

All notable changes to the Finovia banking application are recorded in this document. This project adheres to Semantic Versioning.

---

## [1.0.0] - 2026-05-29

### Added
- Replaced the template Next.js `Dr-Medicare` setup with Finovia's custom React + Vite application.
- Configured a standalone `tsconfig.json` for independent building.
- Set up a clean `package.json` with React 19, Vite 6, and Tailwind CSS v4 dependencies.
- Added path aliases (`@/*`) inside `vite.config.ts` for absolute imports.
- Re-styled home, about, business, contact, and accounts pages.
- Standardized UI using `shadcn/ui` components based on Radix UI primitives.
- Integrated the interactive **Loan payment estimator slider** with local storage state persistence.
- Added comprehensive documentation files:
  - `docs/STRUCTURE.md`
  - `docs/TECHNOLOGIES.md`
  - `docs/FEATURES.md`
  - `docs/CONTRIBUTING.md`
  - `docs/DEPLOYMENT.md`
  - `docs/SECURITY.md`
  - `docs/CHANGELOG.md`
- Created a polished repository `README.md` with ASCII logos, feature charts, and tech badges.
- Setup standard `.gitignore` rules for Vite and Node.js.
