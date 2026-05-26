## 2025-05-14 - Flatten DOM structures in grid views
**Learning:** Using complex container widgets (like carousels) for single items in grid views creates excessive DOM reconciliation overhead and redundant hook initializations.
**Action:** Always prefer direct use of individual card components (like `MovieCard`) in grid layouts instead of wrapping them in single-item carousels.
