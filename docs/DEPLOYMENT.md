# Deployment Documentation

Comprehensive guide to building and deploying the Finovia Digital Banking platform.

## Table of Contents

- [Quick Start: Vercel (Recommended)](#quick-start-vercel-recommended)
- [Local Build & Preview](#local-build--preview)
- [Requirements](#requirements)
- [Environment Configuration](#environment-configuration)
- [Manual GitHub Action Deploys](#manual-github-action-deploys)

## Quick Start: Vercel (Recommended)

Finovia is built as a **Next.js 14** application, which is natively optimized for **Vercel**.

1. **Connect GitHub**: Import your project to your Vercel account.
2. **Framework Preset**: Ensure "Next.js" is selected.
3. **Build Command**: `next build`
4. **Install Command**: `npm install`
5. **Output Directory**: `.next`
6. **Deploy**: Click the Deploy button.

## Local Build & Preview

Verify that your production build works locally before shipping.

```bash
# Clean install of all dependencies
npm ci

# Generate the optimized production build
npm run build

# Start the local production server
npm run start
```

Visit `http://localhost:3000` to preview the production-ready application.

## Requirements

The Finovia platform requires **Node.js 18.17.0** or higher to support the latest Next.js 14 App Router features.

- **Storage**: ~500MB for build artifacts.
- **Node.js**: 18.x, 20.x, or 22.x
- **Package Manager**: npm (Standard), pnpm, or yarn.

## Environment Configuration

Finovia uses `.env` files for environment-specific settings. 

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Base URL for the banking backend API | `http://localhost:8000` |
| `NEXT_PUBLIC_APP_NAME` | Project display name | `Finovia` |

**Security Note**: Never commit your `.env.local` file to source control.

## Docker Deployment

Finovia supports containerized deployment for production stability.

### 1. Build & Run with Compose (Recommended)

```bash
# Build the image and start the container
docker-compose up --build -d
```

The application will be accessible at `http://localhost:3000`.

### 2. Manual Docker Build

```bash
# Build the production image
docker build -t finovia-banking .

# Run the container
docker run -p 3000:3000 finovia-banking
```

### 3. Environment Variables in Docker
Pass environment variables using the `-e` flag or an `.env` file in the service definition of `docker-compose.yml`.

---

## Performance & Optimization

During deployment, Next.js automatically executes:
1. **Static Segment Generation**: Pre-renders pages that don't depend on dynamic data.
2. **Metadata Optimization**: Minifies SEO title and meta descriptions.
3. **Image Buffering**: Pre-optimizes layout-critical images.
4. **Edge Caching**: If using Vercel, static pages are cached at the Edge globally.
