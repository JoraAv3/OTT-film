# Spec: Media Content (Test Assets)

> **Version:** 1.0  
> **Rule:** MVP uses **legal test assets only** — no licensed commercial movies.

---

## 1. Why not real movies

| Reason | Explanation |
|--------|-------------|
| Copyright | Studio posters and videos are protected |
| Licenses | Streaming requires rights agreements |
| APIs | TMDB metadata ≠ video rights; posters have ToS limits |
| MVP goal | UX and architecture, not blockbuster catalog |

**Solution:** fictional titles + free test media.

---

## 2. Approved test sources

### 2.1 Video (royalty-free)

| Source | Example | License |
|--------|---------|---------|
| [Blender Foundation](https://peach.blender.org/) | Big Buck Bunny | CC BY 3.0 |
| [Blender Foundation](https://durian.blender.org/) | Sintel | CC BY 3.0 |
| [sample-videos.com](https://sample-videos.com/) | sample.mp4 | Free |

Store in `public/media/videos/`.

### 2.2 Images (posters, backdrops)

| Source | License |
|--------|---------|
| [Unsplash](https://unsplash.com/) | Unsplash License |
| [Pexels](https://www.pexels.com/) | Pexels License |
| [picsum.photos](https://picsum.photos/) | Placeholder |

```
https://picsum.photos/seed/poster1/300/450
https://picsum.photos/seed/hero1/1920/1080
```

**Do not use:** Google Images posters of real films, Netflix CDN assets.

### 2.3 Folder structure

```
public/
  media/
    videos/
      sample.mp4
    posters/
      poster-01.jpg
    backdrops/
      hero-01.jpg
    subtitles/
      demo-001-en.vtt
```

---

## 3. Mock data schema

```typescript
interface MediaAssets {
  posterUrl: string;
  backdropUrl: string;
  trailerUrl?: string | null;
  videoUrl?: string;
  thumbnailUrl?: string;
}
```

```json
{
  "id": "demo-001",
  "title": "Neon Horizon",
  "description": "Demo sci-fi thriller. Fictional MVP content.",
  "year": 2024,
  "duration": 7200,
  "ageRating": "16+",
  "isDemo": true,
  "media": {
    "posterUrl": "/media/posters/poster-01.jpg",
    "backdropUrl": "/media/backdrops/hero-01.jpg",
    "videoUrl": "/media/videos/sample.mp4"
  }
}
```

**Required:** `isDemo: true` — optional "Demo" badge on cards.

---

## 4. Player (Watch page)

| Mode | Source |
|------|--------|
| MVP | Local MP4 via `<video>` or `react-player` |
| Fallback | "Video unavailable in demo" |
| Production | HLS (m3u8) + CDN + DRM |

Quality selector (480p/720p/1080p) can point to same file in MVP — UI demo only.

Subtitles: simple `.vtt` in `public/media/subtitles/`.

---

## 5. Hero banner

- Backdrop min **1920×1080**  
- Bottom gradient for text readability  
- No official Netflix/Disney key art  

---

## 6. Hover preview

MVP without licensed trailer clips:

- Scale card + show metadata  
- Optional: short loop of same sample MP4 (muted)  

---

## 7. Future APIs (do not use in MVP)

| API | Video | MVP |
|-----|-------|-----|
| TMDB | No | Do not connect |
| OMDb | No | Do not connect |
| Own CDN | Yes | Production |

---

## 8. Checklist

- [ ] All mock titles fictional  
- [ ] `isDemo: true` on content  
- [ ] 12+ unique posters  
- [ ] 2+ MP4 in `public/media/videos/`  
- [ ] Footer demo disclaimer  
- [ ] Player plays local MP4  
- [ ] No hotlinks to netflix.com / ivi.ru CDN  

---

## 9. Optional download command

```bash
mkdir -p public/media/{videos,posters,backdrops,subtitles}
curl -L -o public/media/videos/sample.mp4 \
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
```

---

## 10. Related docs

- `TZ_LEGAL.md` — copyright  
- `TZ_DESIGN.md` — poster display  
- `JULES_TZ.md` — main spec  
