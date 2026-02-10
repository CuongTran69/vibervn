## Context

ViberVN is a Next.js 14 static-export bilingual (VI/EN) gateway website for AI coding tools. Currently it showcases 2 available tools (Augment Code, Claude Code) and 3 coming-soon placeholders (OpenCode, AmpCode, Antigravity). Tool data lives in `src/data/tools.ts` as a static array with the `Tool` interface. Pages auto-render from this data via `getAvailableTools()` and `getComingSoonTools()` filters. The site uses `next-intl` for i18n with JSON message files and `generateStaticParams` for SSG.

OpenCode and OpenClaw are now ready. Both use Claude Code's API infrastructure (same gateway URL). OpenCode already exists as a coming-soon entry; OpenClaw is entirely new.

## Goals / Non-Goals

**Goals:**
- Make OpenCode and OpenClaw appear as fully available tools with detail pages
- Both tools use Claude Code's gateway URL (`https://viber.vn/#/claude-gateway`)
- Provide complete bilingual content (descriptions, taglines, strengths, bestFor, products)
- Update SEO metadata to reflect expanded tool catalog
- Maintain consistent UI/UX with existing Augment Code and Claude Code entries

**Non-Goals:**
- No new page layouts or components needed — existing ToolCard and tool detail page handle everything
- No backend/API changes — this is a static content update
- No changes to AmpCode or Antigravity (remain coming-soon)
- No new routing patterns — existing `[slug]` dynamic route covers new tools

## Decisions

### Decision 1: Reuse Claude Code gateway URL for both tools
**Choice**: Both OpenCode and OpenClaw will use `https://viber.vn/#/claude-gateway` as their `gatewayUrl`.
**Rationale**: They share Claude Code's API key and URL infrastructure. Users access them through the same gateway endpoint.
**Alternative considered**: Separate gateway URLs per tool — rejected because they share the same backend.

### Decision 2: Data-only change, no component modifications
**Choice**: Only modify `src/data/tools.ts`, translation files, and SEO config. No component or layout changes.
**Rationale**: The existing `Tool` interface, `ToolCard` component, tools list page, and `[slug]` detail page already support any number of available tools dynamically. Adding data entries is sufficient.

### Decision 3: OpenCode — update in-place, OpenClaw — add new entry
**Choice**: Update the existing OpenCode object in the tools array. Add OpenClaw as a new object before AmpCode.
**Rationale**: OpenCode already has a slug and position in the array. OpenClaw is new and should be grouped with the other newly-available tools.

### Decision 4: Products page update
**Choice**: Update `src/app/[locale]/products/page.tsx` to include OpenCode and OpenClaw sections alongside Augment Code and Claude Code.
**Rationale**: The products page currently hardcodes only Augment Code and Claude Code. New available tools should appear there too for consistency.

## Risks / Trade-offs

- **[Low] Placeholder YouTube video IDs**: Video tutorials for new tools don't exist yet — no action needed since videos are separate from tool pages.
- **[Low] Products page hardcoded content**: The products page has hardcoded Vietnamese strings for tool details. Adding new tools there requires matching the same pattern. → Mitigation: Follow existing pattern exactly.
- **[Low] SEO description length**: Adding more tool names to SEO descriptions may make them longer. → Mitigation: Keep descriptions concise.

