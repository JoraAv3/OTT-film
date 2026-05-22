# LUMINA — Premium Streaming Platform MVP

LUMINA is a high-performance, Netflix-quality streaming platform built from scratch. It features a modern design system, light/dark mode support, and a comprehensive discovery experience for movies and series.

## 🚀 Quick Start

### Prerequisites
- Node.js (v20+)
- npm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Architecture (FSD-inspired)

The project follows a structured architecture defined in `TZ_STACK.md`:

- **app/**: Global providers, styles, and routing configuration.
- **pages/**: Full-page components (Home, Movies, Series, Legal, etc.).
- **widgets/**: Complex UI components (Header, Sidebar, HeroBanner).
- **features/**: Interactive user actions (Theme toggle, Filtering).
- **entities/**: Domain-specific components (MovieCard, MovieCarousel).
- **shared/**: Reusable UI components, hooks, and utilities.
- **services/**: Mock API logic (`ContentService`).
- **data/**: Mock database (20 movies, 10 series).
- **types/**: TypeScript interfaces.

## ✨ Key Features

- **Original Branding**: LUMINA — a unique visual identity, not a clone.
- **Theme Support**: Seamless Dark and Light modes with local storage persistence.
- **12+ Routes**: Including specialized discovery pages (Movies, Series, Categories).
- **Mock Service Layer**: Simulated async data fetching with TypeScript safety.
- **Responsive Design**: Mobile-friendly navigation with a persistent sidebar.
- **Legal Compliance**: Privacy, Terms, and Cookie Policy pages with an interactive banner.

## 🛠️ Tech Stack

- **Framework**: React 19 (Strict Mode)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **State Management**: Zustand
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📄 Documentation

- [JULES_TZ.md](./JULES_TZ.md): Main specifications.
- [TZ_DESIGN.md](./TZ_DESIGN.md): Design system and theming.
- [TZ_STACK.md](./TZ_STACK.md): Folder structure and stack.
- [TZ_LEGAL.md](./TZ_LEGAL.md): Compliance requirements.
- [TZ_MEDIA.md](./TZ_MEDIA.md): Media asset strategy.
- [AGENTS.md](./AGENTS.md): Instructions for Jules.

---
Built by Jules. *isDemo: true*
