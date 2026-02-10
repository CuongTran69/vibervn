## Why

Each tool displayed on the tools page currently links only to its detail page within the site. Users have no quick way to visit the tool's official homepage to learn more from the source. Adding a small monospace-style homepage icon link (`[ ↗ ]`) at the bottom of each tool block provides a subtle, non-intrusive way to access the official site directly.

## What Changes

- Add optional `homepageUrl` field to the `Tool` data interface
- Populate homepage URLs for all 4 available tools:
  - Augment Code → `https://www.augmentcode.com/`
  - Claude Code → `https://claude.com/product/claude-code`
  - OpenCode → `https://opencode.ai/`
  - OpenClaw → `https://openclaw.ai/`
- Update `ToolCard` component to render a small `[ ↗ ]` monospace link at the bottom of each available tool card, linking to the tool's official homepage
- The icon only appears for available tools that have a `homepageUrl` set

## Capabilities

### New Capabilities

_(none — this is a small enhancement to an existing capability)_

### Modified Capabilities

- `tools-showcase`: Add homepage link icon to tool cards for available tools

## Impact

- `src/data/tools.ts` — Add `homepageUrl` to `Tool` interface + populate for 4 tools
- `src/components/tools/tool-card.tsx` — Add `[ ↗ ]` link rendering
- No API, routing, or dependency changes

