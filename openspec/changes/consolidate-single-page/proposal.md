## Why

The site currently has 8+ sub-pages (`/tools`, `/tools/[slug]`, `/videos`, `/articles`, `/community`, `/docs`, `/pricing`, `/products`) but functions as a landing page for the Viber.vn Gateway service. Most sub-pages duplicate content already on the home page or contain placeholder content (docs links all point to `#`). Users must navigate multiple pages to see all information. Consolidating into a single-page landing site simplifies the experience and matches the site's actual purpose.

## What Changes

- **BREAKING**: Remove all sub-page routes: `/tools`, `/tools/[slug]`, `/videos`, `/articles`, `/community`, `/docs`, `/pricing`, `/products`
- **BREAKING**: Delete page files: `src/app/[locale]/tools/`, `src/app/[locale]/videos/`, `src/app/[locale]/articles/`, `src/app/[locale]/community/`, `src/app/[locale]/docs/`, `src/app/[locale]/pricing/`, `src/app/[locale]/products/`
- Expand home page tool section: show full tool details (strengths, bestFor, products, `[ ↗ ]` homepage link, gateway CTA) instead of preview cards
- Expand home page video section: show ALL videos grouped by category instead of 2 previews
- Expand home page article section: show ALL articles instead of 2 previews
- Add community/Telegram section to home page
- Add Quick Start guide section to home page
- Remove "Xem tất cả →" / "View all →" links (no sub-pages to link to)
- Update Header: remove any navigation to deleted pages
- Clean up SEO config: remove metadata for deleted pages
- Delete unused components: `ToolCard`, `ArticleCard`, `VideoCard` (if only used on deleted pages)

## Capabilities

### New Capabilities
- `single-page-landing`: Full single-page landing site with all content sections (hero, gateway info, quick start, tools, videos, articles, community, CTA)

### Modified Capabilities
- `tools-showcase`: Tools now display full details inline on home page (strengths, bestFor, products, homepage links) instead of linking to separate detail pages
- `video-tutorials`: All videos displayed on home page grouped by category, no separate videos page
- `articles-preview`: All articles displayed on home page, no separate articles page

## Impact

- **Routes**: All sub-routes removed. Only `/` (with locale prefix) remains as content page
- **Components**: `src/components/tools/tool-card.tsx`, `src/components/articles/article-card.tsx`, `src/components/videos/video-card.tsx` — evaluate for reuse or deletion
- **Data layer**: `src/data/tools.ts`, `src/data/videos.ts`, `src/data/articles.ts` — unchanged (still used by home page)
- **SEO**: `src/lib/seo.ts` — remove entries for deleted pages, consolidate into home page meta
- **i18n**: Translation keys for deleted pages may become unused
- **Header**: Navigation links to sub-pages must be removed

