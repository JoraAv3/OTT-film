# Spec: Legal & Compliance

> **Project:** Premium Movie Streaming Platform  
> **Version:** 1.0  
> **Note:** Technical spec for compliance UI — not legal advice. Consult a lawyer before production.

---

## 1. Principles

| Principle | Requirement |
|-----------|-------------|
| Transparency | Users understand what they agree to and what data is collected |
| Data minimization | Collect only necessary personal data |
| Consent | Explicit opt-in for processing and marketing |
| Age limits | Content ratings; 18+ verification where required |
| Content | Only licensed or owned content in production |

---

## 2. Copyright & content

### 2.1 MVP (current phase)

- **Do not** use real movie catalogs, studio posters, or pirated streams without license
- Use **test assets:** placeholders, Unsplash/Pexels (license-compliant), fictional titles
- Footer / About: *"Demo platform. Content is not commercially licensed."*

### 2.2 Production (future)

| Requirement | Implementation |
|-------------|----------------|
| Movie licenses | Agreements with rights holders |
| DMCA | "Report copyright infringement" page + takedown process |
| Geo-blocking | Restrict content by country per license |
| DRM | Per licensor (Widevine, FairPlay) — backend phase |
| Credits | Rights holder on content card (optional) |

### 2.3 Prohibited

- Commercial movie posters/frames without permission  
- Netflix/Disney trademarks in platform name  
- Pirate streams or torrent links  

---

## 3. Personal data (GDPR / similar)

### 3.1 Data collected

| Data | Purpose | Required |
|------|---------|----------|
| Email | Auth | Yes |
| Password (hash) | Auth | Yes |
| Display name | Profile | No |
| Date of birth | Age restrictions | Yes |
| Country | Geo-licensing, tax | Optional |
| Watch history | Recommendations, Continue Watching | On use |
| Payment | Subscription | PCI provider only — never store CVV |
| IP, cookies | Security, analytics | With consent |

### 3.2 Required UI

| Page / element | Path | Content |
|----------------|------|---------|
| Privacy Policy | `/privacy` | What data, why, retention, user rights |
| Terms of Service | `/terms` | Rules, liability, cancellation |
| Cookie banner | Global | Analytics opt-in (EU) |
| Register checkboxes | `/register` | Terms + Privacy (required), Marketing (optional) |
| Delete account | `/profile/settings` | Button + confirmation |
| Export data | `/profile/settings` | "Download my data" (placeholder OK in MVP) |

### 3.3 User rights (UI + API)

- Access, rectify, delete account and data  
- Withdraw marketing consent  
- Link to supervisory authority in Privacy Policy  

### 3.4 Cookies

| Type | Examples | Consent |
|------|----------|---------|
| Essential | session, auth | No opt-in |
| Analytics | GA, Plausible | Opt-in (EU) |
| Marketing | pixels | Opt-in |

MVP banner: "Accept all" / "Essential only" / "Customize".

---

## 4. Age ratings & parental controls

### 4.1 Ratings on content

| Code | UI |
|------|-----|
| G / 0+ | Badge on card |
| PG / 6+ | Badge |
| PG-13 / 12+ | Badge |
| 16+ | Badge + warning |
| 18+ | Badge + block without verification |

### 4.2 Registration

- **Date of birth** required  
- Under 18 → block 18+ content  
- MVP: date check only; production: optional ID verification  

### 4.3 Parental controls (phase 2)

- Child profile PIN, time limits, genre whitelist  

---

## 5. Subscriptions & payments

### 5.1 Price transparency

- Price with currency and period  
- Auto-renewal disclosed in Terms and checkout  
- Cancel subscription visible in profile  
- Payment history (placeholder in MVP)  

### 5.2 MVP payments

Placeholder only. Label: *"Demo mode. Payments are not processed."*

### 5.3 Refunds

- Policy in Terms; link from Subscription and Profile  

---

## 6. Accessibility (legal aspect)

- WCAG AA contrast (4.5:1)  
- Keyboard navigation  
- `aria-label` on player controls  
- `alt` on posters (movie title)  
- Subtitle toggle in player (UI in MVP)  

---

## 7. Moderation

- Terms prohibit piracy, CSAM (zero tolerance + report), spam  
- "Report" on content page (placeholder)  
- Footer: `support@`, `abuse@` emails (placeholders)  

---

## 8. Localization

| Item | MVP | Production |
|------|-----|------------|
| UI language | English (+ optional RU) | Per market |
| Currency | USD placeholder | Local |
| Data residency | — | Region-specific storage |

---

## 9. Security

- HTTPS in production  
- bcrypt/argon2 passwords, min 8 chars  
- HttpOnly cookies, refresh rotation  
- Rate limit login/register/reset  
- No passwords in logs  
- Breach notification process (72h GDPR) — document in Privacy  

---

## 10. MVP checklist

- [ ] Footer links: Privacy, Terms, Cookie Policy  
- [ ] Cookie banner on first visit  
- [ ] Register: Terms + Privacy checkboxes  
- [ ] Age rating on content cards  
- [ ] Birth date on register  
- [ ] Demo content disclaimer  
- [ ] `/privacy` and `/terms` pages (template text OK)  

### Not in MVP

- Real payments without PCI  
- Real commercial catalog  
- Passport storage  

---

## 11. Template copy (MVP placeholders)

```
Privacy Policy (demo)
This policy describes how [BRAND_NAME] processes personal data...
[Replace with counsel before production]
```

```
Terms of Service (demo)
By using the service you agree to...
[Replace with counsel before production]
```

---

## 12. Related docs

- `JULES_TZ.md` — main spec  
- `TZ_MEDIA.md` — copyright-safe media  
- `TZ_DESIGN.md` — age badges, cookie UI  
