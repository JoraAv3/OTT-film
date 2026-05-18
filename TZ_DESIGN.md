# Spec: Design & UI/UX

> **Project:** Premium Movie Streaming Platform  
> **Version:** 1.1  
> **Rule:** Learn from top streamers — **do not copy** branding or pixel-perfect UI

---

## 1. Design goal

Original **premium streaming brand** with world-class UX:

- Cinematic immersion  
- Easy catalog navigation  
- Apple TV+ level typography  
- Familiar Netflix patterns, unique visual identity  

---

## 2. References

### 2.1 Netflix — primary UX reference

**URL:** https://www.netflix.com/

| Element | Adopt | Do not copy |
|---------|-------|-------------|
| Home | Full-screen hero, featured title | Red brand, logo |
| Rows | Horizontal snap-scroll | Exact spacing/fonts |
| MovieCard | 2:3 poster, hover scale + info | Icons, sounds |
| Detail | Blurred backdrop, Watch/Info CTAs | 1:1 layout |
| Player | Minimal fading controls | — |
| Navbar | Transparent → solid on scroll | Red accent |

**Patterns:** content-first UI, dark atmosphere, Top 10 numbers, Continue Watching progress bar.

### 2.2 Apple TV+

**URL:** https://tv.apple.com/

Large type, whitespace, minimal chrome, cinematic heroes, soft card shadows.

### 2.3 Disney+

**URL:** https://www.disneyplus.com/

Franchise rows, rounded cards, profile avatars (phase 2).

### 2.4 HBO Max / Max

**URL:** https://www.max.com/

Theatrical tone, wide cinematic backdrops.

### 2.5 Amazon Prime Video

**URL:** https://www.primevideo.com/

Dense grid, filters, detail tabs (episodes, similar).

### 2.6 Kinopoisk

**URL:** https://www.kinopoisk.ru/

Genre/year/country/rating filters, rating badges, RU-friendly catalog UX.

### 2.7 IVI

**URL:** https://www.ivi.ru/

Many homepage rows, subscription tiers, mobile-first, continue watching.

### 2.8 MUBI

**URL:** https://mubi.com/

Editorial / art-house aesthetic (optional inspiration).

### 2.9 Other UI

| Site | Takeaway |
|------|----------|
| [Linear](https://linear.app/) | Micro-animations |
| [Stripe](https://stripe.com/) | Premium forms |
| [Vercel](https://vercel.com/) | Dark glow effects |

---

## 3. Brand

### 3.1 Name (pick one)

- **LUMINA** — light, cinema  
- **NOCTURA** — night theater  
- **FRAMEO** — frame, film  
- **CINEVAULT** — vault of films  

No `-flix` clones or Netflix-like names.

### 3.2 Themes: Dark + Light (required in MVP)

| Mode | Role |
|------|------|
| **Dark** | Default — cinematic |
| **Light** | Premium white / soft gray |

**Shared accent (both themes):** `#6C5CE7` (purple — not Netflix red)

**Theme toggle:**
- Sun/Moon icon in Header + Profile settings  
- Save: `localStorage` (`light | dark | system`)  
- `system` → `prefers-color-scheme`  
- Apply via `<html class="dark">` + inline script before paint (no flash)  
- **Player UI always dark** regardless of site theme  

#### Dark tokens (LUMINA example)

| Token | HEX | Use |
|-------|-----|-----|
| bg-primary | `#0B0B0F` | Page background |
| bg-elevated | `#14141A` | Cards, scrolled header |
| bg-surface | `#1C1C24` | Inputs |
| text-primary | `#FFFFFF` | Headings |
| text-secondary | `#A0A0B0` | Body |
| text-muted | `#6B6B7B` | Meta |
| border | `rgba(255,255,255,0.1)` | Dividers |
| hero-gradient | → `#0B0B0F` | Hero bottom fade |

#### Light tokens

| Token | HEX | Use |
|-------|-----|-----|
| bg-primary | `#FFFFFF` | Page |
| bg-elevated | `#F5F5F7` | Cards |
| bg-surface | `#EBEBEF` | Inputs |
| text-primary | `#0B0B0F` | Headings |
| text-secondary | `#4A4A5A` | Body |
| text-muted | `#7A7A8A` | Meta |
| border | `rgba(0,0,0,0.08)` | Dividers |
| hero-gradient | → `#FFFFFF` | Hero fade |

#### Shared tokens

| Token | HEX |
|-------|-----|
| accent | `#6C5CE7` |
| accent-hover | `#7D6FF0` |
| success | `#00C896` |
| warning | `#FFB020` |
| error | `#EF4444` |

**Light mode rules:** lighter hero gradient, soft shadows, posters unchanged, glass `rgba(255,255,255,0.8)`.

### 3.3 Typography

| Role | Font | Desktop size |
|------|------|--------------|
| Display | Inter or Outfit | 48–72px bold |
| H1 | Inter | 32–40px |
| H2 row title | Inter | 20–24px semibold |
| Body | Inter | 16px |
| Caption | Inter | 12–14px muted |

### 3.4 Spacing

- Base unit: **8px**  
- Max container: **1400px**  
- Section padding: 48px desktop / 24px mobile  
- Card gap in row: **12px**  
- Poster ratio: **2:3**  

### 3.5 Radius & shadows

```css
--radius-md: 8px;
--shadow-card-dark: 0 4px 24px rgba(0,0,0,0.4);
--shadow-card-light: 0 4px 24px rgba(0,0,0,0.08);
--glow-accent: 0 0 20px rgba(108, 92, 231, 0.35);
```

### 3.6 CSS variables

```css
:root {
  --bg-primary: #FFFFFF;
  --text-primary: #0B0B0F;
  --accent: #6C5CE7;
}
.dark {
  --bg-primary: #0B0B0F;
  --text-primary: #FFFFFF;
}
```

Use semantic variables — do not hardcode hex in JSX.

---

## 4. Component specs

### 4.1 Header

`[Logo] [Home] [Movies] [Series] [My List] … [Search] [ThemeToggle] [Avatar]`

- Top: transparent; scrolled: `bg-elevated` + blur  
- Mobile: burger → drawer  

### 4.2 HeroBanner

- Full-width backdrop ~80vh  
- Bottom gradient  
- Title, 2-line description  
- **Watch Now** (accent) + **More Info** (outline)  
- Optional dot indicators for featured rotation  

### 4.3 MovieCard

- Width: 180px desktop / 140px mobile  
- Poster 2:3, radius 8px  
- Hover (desktop, 300ms delay): scale 1.08, title, rating, year, Play/+ buttons, progress bar if continue watching  

### 4.4 MovieCarousel

- Row title + "See all →"  
- `scroll-snap-type: x mandatory`  
- Arrow buttons on row hover (desktop)  
- Side fade masks  

### 4.5 FilterPanel

Search + Genre + Year + Rating + Sort. Mobile: bottom sheet.

### 4.6 Detail page

Backdrop blur, poster, metadata, Play / Trailer / My List, description, cast, similar row, episode list for series.

### 4.7 VideoPlayer

Always **dark chrome.** Play, timeline, volume, fullscreen, quality, subtitles, next episode. Controls fade after 3s idle.

### 4.8 Auth forms

Centered card 400px, themed inputs, password strength on register, social buttons disabled in MVP.

### 4.9 PricingCard

Basic / Standard (highlighted) / Premium. Monthly/yearly toggle with −20% badge.

### 4.10 LoadingSkeleton / EmptyState

Shimmer matching layout. Empty: icon + message + CTA.

### 4.11 404

Cinematic background, witty copy, "Back to Home" CTA.

---

## 5. Motion

| Element | Animation | Duration |
|---------|-----------|----------|
| Page | Fade | 200ms |
| Card hover | Scale + shadow | 200ms |
| Modal | Fade + scale 0.95 | 250ms |
| Hero rotate | Crossfade | 800ms |
| Skeleton | Shimmer | 1.5s |

`prefers-reduced-motion: reduce` → disable scale/autoplay.

---

## 6. Responsive

| Breakpoint | Width | Notes |
|------------|-------|-------|
| sm | 640px | 2-col grid |
| md | 768px | Tablet nav |
| lg | 1024px | Desktop nav |
| xl | 1280px | Container |

**Mobile:** bottom tabs — Home, Search, My List, Profile.

---

## 7. Icons

- **lucide-react** — 16/20/24px, stroke 1.5–2  

---

## 8. Theme system (MVP checklist)

- [ ] Dark on all pages  
- [ ] Light on all pages (except player chrome → dark)  
- [ ] ThemeToggle in Header, persists after reload  
- [ ] No white flash on dark first load  
- [ ] WCAG AA contrast both themes  

---

## 9. Design acceptance checklist

- [ ] Original logo/name  
- [ ] Hero 80vh + gradient  
- [ ] 7+ content rows on Home  
- [ ] Card hover desktop  
- [ ] Continue Watching progress  
- [ ] Age + rating badges  
- [ ] Full player controls UI  
- [ ] Mobile bottom nav  
- [ ] Cookie banner + legal footer  
- [ ] Demo badge on test content  

---

## 10. Tailwind

```js
darkMode: 'class',
// Prefer CSS variables + dark: variants
```

---

## 11. Related docs

- `TZ_MEDIA.md` — posters  
- `TZ_LEGAL.md` — age badges, cookies  
- `TZ_STACK.md` — `useThemeStore`  
- `JULES_TZ.md` — main spec  

---

*Study references for patterns, not pixels.*
