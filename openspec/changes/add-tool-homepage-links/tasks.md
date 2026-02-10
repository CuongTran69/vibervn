## 1. Data Model

- [x] 1.1 Add `homepageUrl?: string` field to the `Tool` interface in `src/data/tools.ts`
- [x] 1.2 Add `homepageUrl: 'https://www.augmentcode.com/'` to Augment Code entry
- [x] 1.3 Add `homepageUrl: 'https://claude.com/product/claude-code'` to Claude Code entry
- [x] 1.4 Add `homepageUrl: 'https://opencode.ai/'` to OpenCode entry
- [x] 1.5 Add `homepageUrl: 'https://openclaw.ai/'` to OpenClaw entry

## 2. ToolCard Component

- [x] 2.1 Update `src/components/tools/tool-card.tsx` to render a `[ ↗ ]` monospace link below the "View details →" link when `tool.homepageUrl` is defined and `tool.status === 'available'`
- [x] 2.2 Style the link: `text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 font-mono`, opens in new tab with `target="_blank" rel="noopener noreferrer"`

## 3. Verification

- [x] 3.1 Confirm `[ ↗ ]` link appears on all 4 available tool cards (Augment Code, Claude Code, OpenCode, OpenClaw)
- [x] 3.2 Confirm `[ ↗ ]` link does NOT appear on coming-soon tool cards (AmpCode, Antigravity)
- [x] 3.3 Run `npm run build` to verify successful build

