# Bolt's Journal - Critical Learnings

## 2025-01-24 - Grid DOM Bloat and Memoization
**Learning:** In data-heavy grid views (Movies and Series pages), wrapping every individual card in a carousel component (MovieCarousel) significantly bloats the DOM and adds unnecessary overhead (hooks, event listeners, and extra divs).
**Action:** Flatten the DOM by using simple CSS Grid layouts and rendering MovieCard directly. Additionally, memoize MovieCard with React.memo to prevent unnecessary re-renders during parent state updates (e.g., filtering).
