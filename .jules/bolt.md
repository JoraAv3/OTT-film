## 2026-05-25 - High-frequency component memoization and Grid flattening
**Learning:** `MovieCard` is used extensively across the app. Lack of `React.memo` caused cascading re-renders during simple state updates. Additionally, wrapping grid items in `MovieCarousel` components created a massive performance bottleneck due to redundant refs and event listeners for every single card in the grid.
**Action:** Always memoize leaf components used in large lists and carousels. Flatten DOM structures in grids by avoiding complex container widgets (like Carousels) when simple layouts suffice.
