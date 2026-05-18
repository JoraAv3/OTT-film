# AGENTS.md — Premium Streaming Platform MVP

Context for [Google Jules](https://jules.google.com). **Read all TZ files before coding.**

> **Main rules file for Jules** — loaded automatically from the repo root.

## Documentation index

| File | Purpose |
|------|---------|
| `JULES_TZ.md` | Main spec, Jules prompt, routes, phases |
| `TZ_DESIGN.md` | Design refs, dark/light themes, UI components |
| `TZ_STACK.md` | Frontend + backend stack, API, DB |
| `TZ_LEGAL.md` | GDPR, copyright, cookies, age ratings |
| `TZ_MEDIA.md` | Test posters/videos — NO licensed movies |

## Project overview

Build a **full streaming frontend MVP** from scratch — not a landing page. Netflix-level UX with **original branding**. Mock API only in MVP.

## Tech stack (MVP)

React 19, TypeScript, Vite, Tailwind CSS 4, React Router 7, Zustand, TanStack Query, React Hook Form + Zod, lucide-react, mock services (`VITE_USE_MOCK=true`).

Details → `TZ_STACK.md`

## Media rules (critical)

- **Fictional** movie titles, `isDemo: true`
- Posters: picsum or `public/media/posters/` (create when scaffolding)
- Video: royalty-free MP4 in `public/media/videos/`
- **Never** use Netflix/Disney posters or pirated content

Details → `TZ_MEDIA.md`

## Design

Netflix UX (rows, hero, hover cards) + Apple TV+ typography + Kinopoisk/IVI filters. Original brand (e.g. LUMINA), not Netflix red/logo.

**Themes:** Dark (default) + Light. `ThemeToggle` in Header, localStorage, optional `system`. Player UI always dark. CSS variables, `darkMode: 'class'`.

Details → `TZ_DESIGN.md`

## Legal UI (MVP)

`/privacy`, `/terms`, cookie banner, birth date on register, age rating badges, demo disclaimer in footer.

Details → `TZ_LEGAL.md`

## Routes

`/`, `/movies`, `/series`, `/movie/:id`, `/series/:id`, `/watch/:id`, `/login`, `/register`, `/forgot-password`, `/profile`, `/subscription`, `/search`, `/favorites`, `/admin`, `/privacy`, `/terms`, `*` (404)

## Architecture

```
src/{app,pages,widgets,features,entities,shared,data,services,types,hooks}
```

Create `public/media/{videos,posters,backdrops}` when scaffolding the Vite app.

## Conventions

1. Mock services with simulated delay; `services/api/` stub for future backend
2. Business logic in `features/`, thin pages
3. Loading skeletons + empty states everywhere
4. `npm run build` must pass
5. No tests/CI/backend unless requested
6. **English** for all UI copy and code comments

## Jules setup script

```
npm install
npm run build
```
