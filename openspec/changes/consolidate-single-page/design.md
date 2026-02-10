## Context

ViberVN is a Next.js landing site for the Viber.vn Gateway service. It currently has 8+ sub-pages but functions as a simple landing/marketing page. The home page already contains preview sections for tools, videos, and articles. Sub-pages like `/docs` have placeholder content (all links point to `#`), `/pricing` just redirects to `/community`, and `/products` duplicates tool data that's already in `src/data/tools.ts`.

Current home page sections: Hero → Gateway Info → Tools (preview) → Videos (2 preview) → Articles (2 preview) → CTA.

## Goals / Non-Goals

**Goals:**
- Consolidate all content into a single home page
- Show full tool details (strengths, bestFor, products, homepage links, gateway CTA) on home page
- Show all videos and articles on home page (not just previews)
- Add community/Telegram section and Quick Start guide to home page
- Remove all sub-page routes and files
- Clean up unused components, SEO config, and navigation

**Non-Goals:**
- Redesigning the visual style (keep existing brutalist/monospace aesthetic)
- Changing the data layer (`src/data/tools.ts`, `src/data/videos.ts`, `src/data/articles.ts`)
- Adding anchor-based navigation or smooth scrolling (can be done later)
- Changing i18n infrastructure

## Decisions

### 1. Home page section order

**Decision:** Hero → Gateway Info → Quick Start → Tools (full) → Videos (all) → Articles (all) → Community → CTA

**Rationale:** Quick Start moves up because it's the most actionable content after understanding what Gateway is. Tools follow as the core offering. Videos and articles provide supporting content. Community/Telegram is the social proof + support section before the final CTA.

### 2. Tool cards: inline rendering vs ToolCard component

**Decision:** Render tool details inline on the home page using data from `src/data/tools.ts`, similar to how the current home page renders tools but expanded with full details. Do NOT reuse the existing `ToolCard` component.

**Rationale:** The `ToolCard` component was designed for the `/tools` list page with "View details →" links to detail pages. Since detail pages are being removed, the component's purpose is obsolete. Inline rendering using the `Tool` data interface gives full control over layout. The home page is a server component — no need for `ToolCard`'s `'use client'` directive.

**Alternative considered:** Refactoring `ToolCard` to show full details. Rejected because it adds unnecessary abstraction for a single-use case.

### 3. Tool card layout

**Decision:** Full-width cards (1 column), each showing: name + status badge, tagline, description, strengths/bestFor in 2-column grid, products as inline tags, gateway CTA button + `[ ↗ ]` homepage link.

**Rationale:** Full-width gives room for the 2-column strengths/bestFor layout. Matches the brutalist style with clear section breaks. The `[ ↗ ]` homepage link uses monospace style consistent with the existing design.

### 4. Videos section: show all with categories

**Decision:** Show all videos grouped by category (setup, tutorials, tips) with YouTube thumbnail images. Remove "Xem tất cả →" link.

**Rationale:** Currently only 2 preview videos shown. With all videos on one page, no need for a separate page or "view all" link.

### 5. Articles section: show all

**Decision:** Show all articles as cards with external links. Remove "Xem tất cả →" link.

### 6. Community section

**Decision:** Add a simple community section with Telegram CTA, adapted from the `/community` page but simplified (just the main CTA block, not the "trong group có gì" detail cards).

**Rationale:** Keep it concise on the single page. The 4 detail cards from `/community` add bulk without much value.

### 7. Quick Start section

**Decision:** Embed the 4-step Quick Start from `/docs` page directly into the home page, between Gateway Info and Tools sections.

### 8. File cleanup

**Decision:** Delete all sub-page directories and their contents. Delete `ToolCard`, `ArticleCard`, `VideoCard` components if they're only used in deleted pages. Keep data files unchanged.

## Risks / Trade-offs

- **[Long page]** → Single page will be significantly longer. Acceptable for a landing page. Can add anchor nav later if needed.
- **[SEO impact]** → Losing individual page URLs. Mitigated by the fact that these pages had minimal external links and the home page will contain all the content.
- **[Lost docs structure]** → `/docs` page had category structure for future docs. Since all links were `#` placeholders, no real content is lost. Can be re-added when actual docs exist.
- **[Breaking bookmarks]** → Anyone who bookmarked `/tools/augment-code` etc. will get 404. Low risk given the site is relatively new.

