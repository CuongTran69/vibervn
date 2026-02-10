## Why

The ViberVN gateway currently supports only 2 AI coding tools (Augment Code and Claude Code). OpenCode and OpenClaw are now ready to be offered through the gateway, both using Claude Code's API key and URL infrastructure. Adding them expands the platform's tool catalog and provides users with more AI coding options — all accessible through the same Claude Code gateway endpoint.

## What Changes

- **OpenCode**: Update status from `coming-soon` to `available` with full tool details (description, tagline, products, strengths, bestFor, gatewayUrl)
- **OpenClaw**: Add as a new tool entry with status `available` and full tool details
- Both tools share Claude Code's gateway URL (`https://viber.vn/#/claude-gateway`)
- Update bilingual translation files (vi.json, en.json) for new tool content
- Update homepage tools preview to reflect newly available tools
- Update SEO metadata to include new tools in descriptions
- Ensure static generation covers new tool detail page slugs (`opencode`, `openclaw`)

## Capabilities

### New Capabilities

_None — no new capability specs needed. The existing tools-showcase capability covers the tool catalog system._

### Modified Capabilities

- `tools-showcase`: OpenCode changes from "coming soon" to "available" with full details. OpenClaw is added as a new available tool. The "Coming soon" placeholder requirement changes to only include AmpCode and Antigravity. Both new tools use Claude Code's gateway URL.

## Impact

- `src/data/tools.ts` — Update OpenCode entry, add OpenClaw entry
- `messages/vi.json` — Add translation keys for OpenCode and OpenClaw details
- `messages/en.json` — Add translation keys for OpenCode and OpenClaw details
- `src/lib/seo.ts` — Update tools page SEO descriptions to mention new tools
- `src/app/[locale]/page.tsx` — Homepage tools preview will auto-update (reads from data)
- `src/app/[locale]/tools/page.tsx` — Tools list will auto-update (reads from data)
- `src/app/[locale]/tools/[slug]/page.tsx` — New detail pages generated via `generateStaticParams`
- `src/app/[locale]/products/page.tsx` — May need update to mention new tools

