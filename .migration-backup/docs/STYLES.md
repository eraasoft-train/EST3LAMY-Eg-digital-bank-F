# Branding & Style Guide

Comprehensive guide to the visual identity and design system of the Finovia Digital Banking platform.

## Table of Contents

- [Vision & Persona](#vision--persona)
- [Typography](#typography)
- [Colors](#colors)
- [Responsive States](#responsive-states)
- [Common Components](#common-components)

## Vision & Persona

**Finovia** is a modern, trust-focused digital banking platform. Its visual language balances professional stability with contemporary tech-driven efficiency.

- **Stability**: Clean, high-contrast layouts.
- **Trust**: Consistent use of professional blue and neutral tones.
- **Efficiency**: Minimal clutter, focused interactions, and fast animations via **Framer Motion**.

## Typography

Finovia is built using system fonts and **Inter** for optimal readability across various display densities. 

- **Primary Font**: `Inter`, system-ui, -apple-system, blinkmacsystemfont
- **Fallback**: Sans-serif
- **Heading Styles**: Bold, semi-bold for clear information hierarchy.
- **Body Styles**: Regular with optimized line heights (1.5-1.6) to ensure long-form clarity.

## Colors

The color palette is managed via **Tailwind CSS** variables in `app/globals.css`.

| Token | Light Mode HEX | Dark Mode HEX | Usage |
|-------|----------------|---------------|-------|
| `background` | `#FFFFFF` | `#030712` | Main page background |
| `foreground` | `#030712` | `#F9FAFB` | Main text content |
| `primary` | `#2563EB` | `#3B82F6` | Call-to-action buttons |
| `muted` | `#F3F4F6` | `#1F2937` | Secondary containers |
| `accent` | `#EFF6FF` | `#1E3A8A` | Highlights & hover states |

## Responsive States

We use **Tailwind breakpoints** to ensure a flawless experience across all devices.

- **Mobile (< 768px)**: Stacked layouts, simplified navigation (Hamburger Menu).
- **Tablet (768px - 1024px)**: Dual-column layouts for complex tools (Loan Calculator).
- **Desktop (> 1024px)**: Full multi-column dashboard previews and expanded marketing sections.

## Common Components

Finovia leverages **Radix UI** primitives and **shadcn/ui** patterns.

### 1. The Button
- **Primary**: Solid background for the most important action.
- **Outline**: Bordered for secondary choices.
- **Ghost**: Minimal padding and no background for utility links.

### 2. Cards & Containers
- **Dashboard Card**: Subtle shadows and rounded corners (border-radius: 0.75rem).
- **Marketing Grid**: Bordered, high-contrast blocks for feature highlights.

### 3. Progressive Loaders
- **Skeleton Screens**: Used during data fetching simulations.
- **Radix Progress**: Smooth bar animations for onboarding flows.
