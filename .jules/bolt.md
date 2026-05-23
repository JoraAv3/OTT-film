## 2026-05-23 - [Route-based Code Splitting]
**Learning:** Initial bundle included all page components and heavy dependencies like 'react-player' (used only in WatchPage), leading to a large entry chunk (~356kB).
**Action:** Use React.lazy and Suspense at the router level to defer loading of non-critical pages and their dependencies, reducing initial bundle size by ~22% in this MVP.
