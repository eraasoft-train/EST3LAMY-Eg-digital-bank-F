# 🚀 Deployment Guidelines

Finovia is compiled as an optimized Single Page Application (SPA) using Vite. The static output in `dist/` can be served on any modern hosting provider.

---

## ⚡ Recommended Hostings

### Vercel (Recommended)
1.  Install the Vercel CLI or connect the GitHub Repository to your Vercel Dashboard.
2.  Use the following configuration setup:
    *   **Framework Preset**: `Vite` (or `Other`)
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
3.  Ensure you configure routing fallbacks in Vercel to route all subpaths back to `index.html`. For static hosting, create a `vercel.json` file in the root:
    ```json
    {
      "rewrites": [
        { "source": "/(.*)", "destination": "/index.html" }
      ]
    }
    ```

### Netlify
1.  Link your repository to Netlify.
2.  Set the build settings:
    *   **Build Command**: `npm run build`
    *   **Publish Directory**: `dist`
3.  Add a `_redirects` file in the `public/` folder to prevent 404s on refresh:
    ```text
    /*  /index.html  200
    ```

### GitHub Pages
To deploy to GitHub Pages under a subpath project page (e.g. `https://username.github.io/Finovia`):
1.  Configure the `base` key in `vite.config.ts` to matching repository name:
    ```typescript
    export default defineConfig({
      base: '/Finovia/',
      // ...
    })
    ```
2.  Generate build:
    ```bash
    npm run build
    ```
3.  Deploy contents of `dist/` to the `gh-pages` branch.

---

## 🐳 Docker Deployment

To build and run Finovia inside a containerized Nginx server:

1.  **Create a `Dockerfile`**:
    ```dockerfile
    # Build stage
    FROM node:20-alpine AS build
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build

    # Production stage
    FROM nginx:stable-alpine
    COPY --from=build /app/dist /usr/share/nginx/html
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    ```

2.  **Create a matching `nginx.conf`**:
    ```nginx
    server {
        listen 80;
        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
    }
    ```

3.  **Build and Run**:
    ```bash
    docker build -t finovia-frontend .
    docker run -d -p 8080:80 finovia-frontend
    ```
