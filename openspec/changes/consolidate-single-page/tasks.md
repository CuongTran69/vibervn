## 1. Home Page — Expand Tools Section

- [x] 1.1 Replace inline tool preview cards with full-detail tool cards: name, status badge, tagline, description, strengths/bestFor (2-col grid), products (inline tags), gateway CTA button, `[ ↗ ]` homepage link
- [x] 1.2 Use locale-aware text (tool.description[locale], tool.strengths[locale], tool.bestFor[locale]) instead of hardcoded `.vi`
- [x] 1.3 Keep coming-soon tools (AmpCode, Antigravity) as minimal badges below available tools
- [x] 1.4 Remove "Xem tất cả →" / "View all →" link from tools section (if any)

## 2. Home Page — Add Quick Start Section

- [x] 2.1 Add Quick Start section between Gateway Info and Tools sections with 4 numbered steps (from /docs page)
- [x] 2.2 Use i18n-ready text (add translation keys if needed)

## 3. Home Page — Expand Videos Section

- [x] 3.1 Import all videos and `getVideosByCategory` from `src/data/videos`
- [x] 3.2 Replace 2-video preview with full video list grouped by category (setup, tutorials, tips)
- [x] 3.3 Remove "Xem tất cả →" link to `/videos`

## 4. Home Page — Expand Articles Section

- [x] 4.1 Import all articles from `src/data/articles`
- [x] 4.2 Replace 2-article preview with full article list
- [x] 4.3 Remove "Xem tất cả →" link to external articles page

## 5. Home Page — Add Community Section

- [x] 5.1 Add community/Telegram section between Articles and CTA sections
- [x] 5.2 Include Telegram join CTA button linking to `https://t.me/augmentsupporter`

## 6. Delete Sub-Page Files

- [x] 6.1 Delete `src/app/[locale]/tools/` directory (page.tsx + [slug]/page.tsx)
- [x] 6.2 Delete `src/app/[locale]/videos/page.tsx`
- [x] 6.3 Delete `src/app/[locale]/articles/page.tsx`
- [x] 6.4 Delete `src/app/[locale]/community/page.tsx`
- [x] 6.5 Delete `src/app/[locale]/docs/page.tsx`
- [x] 6.6 Delete `src/app/[locale]/pricing/page.tsx`
- [x] 6.7 Delete `src/app/[locale]/products/page.tsx`

## 7. Delete Unused Components

- [x] 7.1 Check if `src/components/tools/tool-card.tsx` is used elsewhere; if not, delete
- [x] 7.2 Check if `src/components/articles/article-card.tsx` is used elsewhere; if not, delete
- [x] 7.3 Check if `src/components/videos/video-card.tsx` is used elsewhere; if not, delete

## 8. Update Header & Navigation

- [x] 8.1 Remove any navigation links to deleted sub-pages from Header component

## 9. Clean Up SEO & Config

- [x] 9.1 Remove SEO entries for deleted pages from `src/lib/seo.ts` (tools, videos, articles, community, docs)
- [x] 9.2 Remove unused translation keys related to deleted pages (if any obvious ones)

## 10. Verification

- [x] 10.1 Run `npm run build` — confirm successful build with no errors
- [x] 10.2 Verify home page shows all tool details with `[ ↗ ]` links and gateway CTAs
- [x] 10.3 Verify all videos displayed grouped by category
- [x] 10.4 Verify all articles displayed
- [x] 10.5 Verify Quick Start and Community sections present
- [x] 10.6 Verify no broken links to removed sub-pages

