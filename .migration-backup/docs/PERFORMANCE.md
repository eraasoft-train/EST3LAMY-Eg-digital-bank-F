# Performance Guide

Comprehensive guide to the performance optimizations and strategies for the Finovia Digital Banking platform.

## Table of Contents

- [Next.js App Router (RSC)](#nextjs-app-router-rsc)
- [Next/Image Optimization](#nextimage-optimization)
- [Asset Management](#asset-management)
- [Core Web Vitals](#core-web-vitals)

## Next.js App Router (RSC)

**React Server Components (RSC)** are the backbone of Finovia's fast initial load. 
- **Zero Client-Side Bundle**: Server-rendered layouts don't send extra JS for static content.
- **Hydration Focus**: Only interactive elements (modals, navigators, sliders) are hydrated on the client.

## Next/Image Optimization

We use `next/image` for automatic image orchestration.
- **Lazy Loading**: Images below the fold don't block initial page render.
- **Priority Loading**: Hero images are marked as `priority` to improve Leading Contentful Paint (LCP).
- **Responsive Sizing**: Dynamic `srcsets` ensure mobile users don't download 4K desktop assets.

## Asset Management

**Tailwind CSS** automatically purges unused styles during the build process.
- **Minification**: JavaScript and CSS are minified by **Terser** and **Lightning CSS** during `next build`.
- **Gzip/Brotli**: Production assets are served with Brotli compression for maximum bandwidth efficiency.

## Core Web Vitals

Finovia targets high scores in Google's **Core Web Vitals**:

- **LCP (Largest Contentful Paint)**: Optimized via priority image loading (< 2.5s).
- **FID (First Input Delay)**: Minimized via strategic code splitting (< 100ms).
- **CLS (Cumulative Layout Shift)**: Aspect-ratio containers prevent layout jumps (< 0.1).

---

## Performance Auditing

To audit the performance locally, run:
```bash
# Build production bundle
npm run build

# Run Lighthouse in Chromium DevTools
```

For more details, see:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Build process details
- [STRUCTURE.md](./STRUCTURE.md) - Architecture overview
