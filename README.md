# LUMINA — Premium Streaming Platform MVP

LUMINA is a high-fidelity streaming platform MVP built with React 19, TypeScript, and Tailwind CSS 4. It features a cinematic user experience, dark/light theme support, and a comprehensive set of routes for a full-scale streaming service.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root and add:
   ```env
   VITE_USE_MOCK=true
   VITE_APP_NAME=LUMINA
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Build for production:
```bash
npm run build
```

## 📂 Project Structure

LUMINA follows a feature-sliced inspired architecture:

- `src/app/`: Global providers, layout, and global styles.
- `src/pages/`: Main application routes (Home, Movies, Series, Detail, Watch, etc.).
- `src/widgets/`: Complex UI components (Header, Footer, HeroBanner, MovieCarousel).
- `src/features/`: Business logic components (Auth forms, Cookie banner).
- `src/entities/`: Domain entities and their specific UI/logic (optional in MVP).
- `src/shared/`: Reusable UI components, hooks, and utility functions.
- `src/services/`: Mock and future API services.
- `src/data/`: Mock data and constants.
- `src/types/`: TypeScript definitions.

## 📑 Documentation Index

| File | Description |
|------|-------------|
| [JULES_TZ.md](./JULES_TZ.md) | Main project specification and requirements |
| [TZ_DESIGN.md](./TZ_DESIGN.md) | Design system, themes, and UI references |
| [TZ_STACK.md](./TZ_STACK.md) | Technical stack overview |
| [TZ_LEGAL.md](./TZ_LEGAL.md) | Legal requirements and compliance UI |
| [TZ_MEDIA.md](./TZ_MEDIA.md) | Media asset rules and test data |
| [AGENTS.md](./AGENTS.md) | Instructions for development agents |

## ⚖️ Legal Disclaimer

LUMINA is a demonstration platform. All movie titles, descriptions, and assets are fictional or royalty-free. No commercial content is licensed for this MVP.

---

Built with ❤️ for cinematic experiences.
