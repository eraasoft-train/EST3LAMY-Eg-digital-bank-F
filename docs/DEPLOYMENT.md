# Deployment — EST3LAMY

EST3LAMY is compiled as an optimized Single Page Application (SPA) using Vite.

## Build

```bash
npm run build
# Output in dist/
```

## Vercel (recommended)

The repo includes `vercel.json`. Connect the repository to Vercel and it deploys automatically.

## GitHub Pages

```js
// vite.config.ts
export default defineConfig({
  base: '/EST3LAMY-Eg-digital-bank-F/',
})
```

```bash
npm run build
# Deploy dist/ to GitHub Pages
```

## Docker / Nginx

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
docker build -t est3lamy-frontend .
docker run -d -p 8080:80 est3lamy-frontend
```
