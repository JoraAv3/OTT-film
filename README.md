# OTT-film — Premium Streaming Platform MVP

Documentation for a Netflix-quality streaming frontend (original brand). **Application code is built from scratch** per `JULES_TZ.md` (Google Jules).

## Documentation

| File | Description |
|------|-------------|
| [JULES_TZ.md](./JULES_TZ.md) | Main spec + Jules prompt |
| [TZ_DESIGN.md](./TZ_DESIGN.md) | Design system, themes, UI references |
| [TZ_STACK.md](./TZ_STACK.md) | Frontend & backend stack |
| [TZ_LEGAL.md](./TZ_LEGAL.md) | Legal & compliance |
| [TZ_MEDIA.md](./TZ_MEDIA.md) | Test media (no licensed movies) |
| [AGENTS.md](./AGENTS.md) | Rules for Google Jules (auto-read) |

## Rules (Jules)

Jules reads **`AGENTS.md`** automatically from the repo root.  
In your task prompt: `Read AGENTS.md and all TZ_*.md files. Follow JULES_TZ.md.`

## Media (MVP)

Fictional titles and test assets only — see `TZ_MEDIA.md`.

## Setup (after Jules scaffolds the app)

```bash
npm install
npm run dev
```

Jules setup script: `npm install && npm run build`
