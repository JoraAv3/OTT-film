# Spec: Technology Stack (Frontend + Backend)

> **Project:** Premium Movie Streaming Platform  
> **Version:** 1.0  
> **Phases:** MVP (frontend + mock) → Production (full stack)

---

## 1. Architecture overview

```
Clients (React SPA)
        │ HTTPS / REST
API Gateway (Nginx / Cloudflare)
        │
   ┌────┴────┬────────────┐
 Auth    Content      Billing
        │
PostgreSQL + Redis + S3/CDN
```

**MVP:** React client + in-browser mock services only.

---

## 2. Frontend (MVP — required)

### 2.1 Core

| Tech | Version | Role |
|------|---------|------|
| React | 19.x | UI |
| TypeScript | 5.x | Types |
| Vite | 6–8.x | Build, HMR |
| React Router | 7.x | Routing |

### 2.2 Styling

| Tech | Role |
|------|------|
| Tailwind CSS | 4.x |
| `@tailwindcss/vite` | Vite plugin |
| `clsx` + `tailwind-merge` | `cn()` helper |
| `darkMode: 'class'` | Dark/Light themes |

### 2.3 State

| Tool | Use |
|------|-----|
| **Zustand** (recommended) | auth, theme, content, player |
| TanStack Query | async cache, loading |
| React Hook Form + Zod | forms, validation |

**Stores:**
- `useAuthStore` — user, token  
- `useThemeStore` — `light | dark | system`  
- `useContentStore` — catalog, favorites cache  
- `usePlayerStore` — playback, progress  
- `useUiStore` — modals, cookie consent  

### 2.4 Data (MVP)

Mock services in `src/services/mock/` with simulated delay.  
Toggle: `VITE_USE_MOCK=true`.

### 2.5 UI libraries

| Library | MVP |
|---------|-----|
| lucide-react | Yes |
| framer-motion | Optional |
| embla-carousel-react | Optional |
| react-player | Yes (MP4) |
| @radix-ui/react-* | Optional (a11y primitives) |

**Avoid:** MUI, Ant Design, Bootstrap.

### 2.6 Folder structure

```
src/
  app/
  pages/
  widgets/
  features/
  entities/
  shared/ui/
  shared/lib/
  data/mocks/
  services/mock/
  services/api/
  types/
  hooks/
public/media/
```

---

## 3. Backend (production plan)

### 3.1 Recommended — Node.js

| Layer | Tech |
|-------|------|
| Runtime | Node 22 LTS |
| Framework | NestJS or Fastify |
| ORM | Prisma |
| DB | PostgreSQL 16 |
| Cache | Redis |
| Storage | S3 / MinIO |
| Search | Meilisearch |
| Queue | BullMQ (transcode) |
| API | REST + OpenAPI |

### 3.2 Alternatives

- **Django + DRF** — strong admin  
- **Laravel** — Sanctum, Horizon  

**Recommendation:** NestJS + Prisma for shared TypeScript with React.

---

## 4. API contract (future)

Base: `https://api.brandname.com/v1`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Sign up |
| POST | `/auth/login` | Sign in |
| GET | `/movies` | Catalog |
| GET | `/movies/:id` | Detail |
| GET | `/series`, `/series/:id/episodes` | Series |
| GET | `/search` | Search |
| POST/DELETE | `/favorites/:id` | Favorites |
| POST | `/watch-progress` | Save progress |
| GET | `/subscriptions/plans` | Plans |
| GET/PATCH/DELETE | `/users/me` | Profile |

Response shape:

```json
{ "data": {}, "meta": { "page": 1, "total": 120 }, "error": null }
```

Auth: `Authorization: Bearer <token>`

---

## 5. Database (simplified)

`users`, `profiles`, `subscription_plans`, `user_subscriptions`,  
`movies`, `series`, `seasons`, `episodes`, `genres`, `cast_credits`,  
`favorites`, `watch_progress`

---

## 6. Media & CDN (production)

Upload → S3 → FFmpeg HLS → CloudFront. Optional DRM (Widevine).

**MVP:** static files in `public/media/` — see `TZ_MEDIA.md`.

---

## 7. DevOps (production)

| Item | Tech |
|------|------|
| Frontend host | Vercel / Cloudflare Pages |
| Backend host | Railway / Fly.io / AWS |
| CI/CD | GitHub Actions |
| Monitoring | Sentry |

---

## 8. Environment variables

### Frontend

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=LUMINA
VITE_USE_MOCK=true
```

### Backend (future)

```env
DATABASE_URL=postgresql://...
JWT_SECRET=...
S3_BUCKET=...
STRIPE_SECRET_KEY=...
CORS_ORIGIN=http://localhost:5173
```

---

## 9. MVP vs production

| Feature | MVP | Production |
|---------|-----|------------|
| Auth | localStorage + mock | JWT httpOnly |
| Catalog | JSON mock | PostgreSQL |
| Video | local MP4 | HLS + CDN |
| Search | client filter | Meilisearch |
| Payments | UI placeholder | Stripe |
| Admin | UI only | Protected API |

---

## 10. package.json (MVP target)

```json
{
  "name": "lumina-streaming",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0",
    "zustand": "^5.0.0",
    "@tanstack/react-query": "^5.0.0",
    "react-hook-form": "^7.0.0",
    "zod": "^3.0.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^3.0.0",
    "react-player": "^2.16.0"
  }
}
```

---

## 11. Mock → real API

```typescript
const movieApi = import.meta.env.VITE_USE_MOCK === 'true'
  ? mockMovieService
  : realMovieService;
```

---

## 12. MVP checklist

- [ ] Vite + React + TS + Tailwind + Router + Zustand  
- [ ] `useThemeStore` + ThemeToggle  
- [ ] Mock services with delay  
- [ ] `public/media/` structure  
- [ ] `services/api/` stub  
- [ ] README with stack summary  

---

## 13. Related docs

- `JULES_TZ.md` — main spec  
- `TZ_DESIGN.md` — UI  
- `TZ_MEDIA.md` — test files  
