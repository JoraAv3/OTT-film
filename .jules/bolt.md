## 2025-05-15 - [Architecture] Carousel-per-card Anti-pattern
**Learning:** In the LUMINA codebase, the `MovieCarousel` component was being used to wrap individual `MovieCard` instances in main gallery pages (Movies/Series). This created a massive DOM overhead as each "carousel" instance included navigation buttons, scroll containers, and logic that were never used or visible, but still cost rendering and reconciliation time.
**Action:** Always prefer flat CSS Grid layouts for gallery views. Reserve `MovieCarousel` only for distinct horizontal sections where actual side-scrolling functionality is required (e.g., "Trending Now" rows).

## 2025-05-16 - [Rendering] Reference Stability for Content Grids
**Learning:** In LUMINA, `MovieCard` components are rendered in high volume across various pages (Home, Movies, Series, Search). Without `React.memo` and stable prop references (via `useMemo` for filtering), every state update in the parent page (like a theme toggle or filter change) triggers a full re-render of every card on screen. Given the cards contain SVG icons and complex hover animations, this causes measurable jank during interactions.
**Action:** Always memoize leaf UI components that appear in lists and ensure that array transformations (filtering/sorting) in parent components are memoized to maintain reference stability.
