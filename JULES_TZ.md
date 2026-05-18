# Technical Specification — Google Jules

> **Project:** Premium Movie Streaming Platform (frontend MVP)  
> **Version:** 3.0  
> **Status:** Greenfield — build from scratch

---

## Project documentation

| File | Content |
|------|---------|
| **JULES_TZ.md** (this file) | Main spec, Jules prompt, pages, phases |
| **TZ_DESIGN.md** | Design references, dark/light themes, UI specs |
| **TZ_STACK.md** | Frontend + backend stack, API, DB |
| **TZ_LEGAL.md** | Legal & compliance |
| **TZ_MEDIA.md** | Test posters & video (no real movies) |
| **AGENTS.md** | Rules for Jules (auto-read) |

**Jules must read all files above before starting.**

---

## Main prompt for Jules

Copy into [jules.google.com](https://jules.google.com):

```
Create a full frontend MVP for a premium movie streaming platform from scratch.

READ ALL SPEC FILES IN REPO ROOT:
- JULES_TZ.md (main spec)
- TZ_DESIGN.md (Netflix, Apple TV+, Disney+, HBO Max, Prime Video, Kinopoisk, IVI)
- TZ_STACK.md (frontend + backend stack)
- TZ_LEGAL.md (legal/compliance UI)
- TZ_MEDIA.md (test images and videos only — NO real licensed movies)
- AGENTS.md (agent context)

1. Project goal
Build a serious modern streaming website similar in quality to Netflix, Apple TV+, Kinopoisk and IVI, with an ORIGINAL brand. NOT a landing page. Must feel like a real subscription streaming service.

2. Tech stack (TZ_STACK.md)
React, TypeScript, Vite, Tailwind CSS, React Router, Zustand, TanStack Query,
React Hook Form + Zod, mock API (VITE_USE_MOCK=true), lucide-react.

3. Media (TZ_MEDIA.md) — CRITICAL
- Do NOT use real movie posters, Netflix content, or pirated streams
- FICTIONAL titles in mock data (isDemo: true)
- Posters: picsum.photos or /public/media/posters/
- Videos: royalty-free MP4 in /public/media/videos/
- Footer: demo platform disclaimer

4. Design (TZ_DESIGN.md)
- Netflix UX: hero, horizontal rows, hover cards, player
- Apple TV+ typography and spacing
- Kinopoisk/IVI catalog filters
- Original brand (NOT Netflix red/logo)
- Dark + Light themes with ThemeToggle

5. Legal UI (TZ_LEGAL.md)
- /privacy, /terms, cookie banner, age ratings, birth date on register

6. Pages
Home, Movies, TV Series, Detail, Watch/Player, Login, Register, Forgot Password,
Profile, Subscription, Search, Favorites, Admin (placeholder), 404

7. Components
Layout, Header, MobileMenu, Footer, HeroBanner, MovieCard, MovieCarousel,
FilterPanel, SearchBar, RatingBadge, GenreBadge, VideoPlayer, PricingCard,
AuthForm, LoadingSkeleton, EmptyState, Modal, TrailerModal, ThemeToggle,
AdminTable, AdminForm, CookieBanner

8. Architecture (TZ_STACK.md)
src/app, pages, widgets, features, entities, shared, data, services, types, hooks

9. UX
Responsive, mobile bottom nav, carousels, skeletons, hover previews, empty states, a11y

10. Final requirements
- npm install && npm run dev && npm run build work
- README with setup and doc index
- No broken imports
- Full streaming MVP, not a landing page
- All UI text and code comments in English
```

---

## 1. Project goal

Build a **full frontend MVP** for a premium movie/series streaming platform from scratch.

| Requirement | Details |
|-------------|---------|
| Type | Multi-page SPA, 12+ routes |
| Quality | Netflix / Apple TV+ / Kinopoisk / IVI level UX |
| Brand | Original — see `TZ_DESIGN.md` |
| Content | Test media only — see `TZ_MEDIA.md` |
| Backend | Mock in MVP — see `TZ_STACK.md` |
| Legal | Compliance UI — see `TZ_LEGAL.md` |
| Language | **English** for all UI copy, docs, and code comments |

---

## 2. Media content (summary)

Do **not** connect real movie catalogs or pirated sources in MVP.

Use fictional titles, `isDemo: true`, test posters and royalty-free MP4 files.

Details → **`TZ_MEDIA.md`**

---

## 3. Stack (summary)

**MVP:** React, TypeScript, Vite, Tailwind, React Router, Zustand, mock API.

**Production (later):** NestJS + PostgreSQL + Redis + S3 + Stripe.

Details → **`TZ_STACK.md`**

---

## 4. Design (summary)

References: Netflix (UX), Apple TV+ (typography), Kinopoisk/IVI (catalog).  
**Dark + Light themes** required. Player UI always dark.

Details → **`TZ_DESIGN.md`**

---

## 5. Legal (summary)

Privacy, Terms, cookie banner, age ratings, demo disclaimer.

Details → **`TZ_LEGAL.md`**

---

## 6. Routes

| Route | Page |
|-------|------|
| `/` | Home — hero + 7+ content rows |
| `/movies` | Movie catalog + filters |
| `/series` | TV series catalog |
| `/movie/:id` | Movie detail |
| `/series/:id` | Series detail + episodes |
| `/watch/:id` | Video player |
| `/login` | Sign in |
| `/register` | Sign up |
| `/forgot-password` | Password reset |
| `/profile` | User profile |
| `/subscription` | Plans |
| `/search` | Global search |
| `/favorites` | Saved content |
| `/admin` | Admin placeholder |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `*` | 404 cinematic page |

### Home content rows

1. Trending Now  
2. New Releases  
3. Popular Movies  
4. TV Series  
5. Continue Watching (progress bar)  
6. Recommended For You  
7. Top 10  

---

## 7. Components

Layout, Header, MobileMenu, Footer, HeroBanner, MovieCard, MovieCarousel, FilterPanel, SearchBar, RatingBadge, GenreBadge, VideoPlayer, PricingCard, AuthForm, LoadingSkeleton, EmptyState, Modal, TrailerModal, **ThemeToggle**, AdminTable, AdminForm, **CookieBanner**, **AgeRatingBadge**.

UI specs → **`TZ_DESIGN.md`**

---

## 8. Mock data

Types: `Movie`, `Series`, `Season`, `Episode`, `User`, `SubscriptionPlan`, `Genre`, `Actor`, `Director`, `WatchProgress`, `Favorite`.

Minimum: 20 movies, 10 series, 3 plans, 1 demo user. All titles fictional.

---

## 9. Architecture

```
src/
  app/           # router, providers
  pages/
  widgets/       # HeroBanner, ContentRow
  features/      # auth, player, favorites, search
  entities/
  shared/ui/
  data/mocks/
  services/mock/
  services/api/  # future backend
  types/
  hooks/
```

Create `public/media/{videos,posters,backdrops}` when scaffolding (Vite).

---

## 10. UX requirements

- [ ] Responsive: 375px / 768px / 1280px+
- [ ] Mobile bottom navigation
- [ ] Carousel snap-scroll
- [ ] Hover card preview (desktop)
- [ ] Loading skeletons
- [ ] Empty states
- [ ] Dark + Light themes, no flash on load
- [ ] `prefers-reduced-motion` support
- [ ] WCAG AA contrast

---

## 11. Jules VM setup

```
npm install
npm run build
```

---

## 12. Acceptance criteria

- [ ] `npm install`, `npm run dev`, `npm run build` pass
- [ ] All routes in section 6 work
- [ ] Streaming MVP, not a landing page
- [ ] Original brand (not Netflix clone)
- [ ] Test content only (`isDemo`, fictional titles)
- [ ] `/privacy`, `/terms`, cookie banner
- [ ] Dark + Light themes with ThemeToggle
- [ ] README with doc index
- [ ] No broken imports
- [ ] English UI and code comments

---

## 13. Development phases

| # | Phase | Reference |
|---|-------|-----------|
| 1 | Scaffold + arch + mock data | TZ_STACK, TZ_MEDIA |
| 2 | Design tokens + Layout + Header + ThemeToggle | TZ_DESIGN |
| 3 | Home + Hero + carousels | TZ_DESIGN §4 |
| 4 | Movies + Series + filters | TZ_DESIGN |
| 5 | Detail + Favorites | — |
| 6 | Player + test MP4 | TZ_MEDIA |
| 7 | Auth + legal pages | TZ_LEGAL |
| 8 | Profile + Subscription | TZ_LEGAL §5 |
| 9 | Search + Admin + 404 | — |
| 10 | Polish + README | ALL |

---

## 14. Agent constraints

1. Build **from scratch** — no old landing code  
2. Not a marketing landing — full streaming SPA  
3. No licensed movie content — follow TZ_MEDIA  
4. No Netflix branding — UX patterns only  
5. No backend, Stripe, DRM in MVP  
6. No tests/CI unless requested  
7. **English only** for UI strings and comments  

---

## 15. Links

- Jules: https://jules.google/docs  
- Prompts: https://github.com/google-labs-code/jules-awesome-list  

---

*Spec v3.0 — English-only documentation. Modular TZ files.*
