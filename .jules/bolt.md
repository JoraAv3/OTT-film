## 2025-05-14 - [Memoization of Content-Heavy Pages]
**Learning:** In React 19 / Vite applications with multiple data-driven carousels, inline array operations (like `.filter()`) in the render function cause re-renders of the entire tree because they generate new array references every time. This negates `React.memo` on child components.
**Action:** Always wrap data transformations in `useMemo` when passing them to components wrapped in `React.memo` to ensure reference stability and prevent redundant DOM updates.
