## 1. Tool Data Updates

- [x] 1.1 Update OpenCode entry in `src/data/tools.ts`: change status to `available`, add gatewayUrl (`https://viber.vn/#/claude-gateway`), add bilingual description, tagline, products, strengths, bestFor
- [x] 1.2 Add OpenClaw entry in `src/data/tools.ts` with slug `openclaw`, status `available`, gatewayUrl (`https://viber.vn/#/claude-gateway`), bilingual description, tagline, products, strengths, bestFor
- [x] 1.3 Verify `getAvailableTools()` returns 4 tools and `getComingSoonTools()` returns 2 tools (AmpCode, Antigravity)

## 2. Translation Files

- [x] 2.1 Add OpenCode tool translation keys to `messages/vi.json` (name, description if referenced by translation keys)
- [x] 2.2 Add OpenClaw tool translation keys to `messages/vi.json`
- [x] 2.3 Add OpenCode tool translation keys to `messages/en.json`
- [x] 2.4 Add OpenClaw tool translation keys to `messages/en.json`

## 3. SEO Updates

- [x] 3.1 Update `src/lib/seo.ts` tools page SEO title and description (vi) to include OpenCode and OpenClaw
- [x] 3.2 Update `src/lib/seo.ts` tools page SEO title and description (en) to include OpenCode and OpenClaw
- [x] 3.3 Update `src/lib/seo.ts` home page SEO description (vi/en) to mention expanded tool catalog

## 4. Products Page Update

- [x] 4.1 Add OpenCode section to `src/app/[locale]/products/page.tsx` following existing Augment Code / Claude Code pattern
- [x] 4.2 Add OpenClaw section to `src/app/[locale]/products/page.tsx` following existing pattern

## 5. Verification

- [x] 5.1 Verify `generateStaticParams` in `src/app/[locale]/tools/[slug]/page.tsx` generates pages for `opencode` and `openclaw`
- [x] 5.2 Verify homepage tools preview displays all 4 available tools and 2 coming-soon tools
- [x] 5.3 Run `npm run build` to confirm static export succeeds with new tool pages

