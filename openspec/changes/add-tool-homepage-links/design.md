## Context

The tools page (`/[locale]/tools`) displays AI coding tools using the `ToolCard` component. Each card shows the tool's name, status badge, tagline, description, and a "View details →" link for available tools. The `Tool` interface in `src/data/tools.ts` defines the data model. Currently there is no field or UI element linking to a tool's official homepage.

## Goals / Non-Goals

**Goals:**
- Add a subtle monospace-style `[ ↗ ]` icon link at the bottom of each available tool card that opens the tool's official homepage in a new tab
- Keep the change minimal — data-only addition to the interface + small rendering update

**Non-Goals:**
- No changes to tool detail pages (they already have CTA buttons)
- No changes to the homepage tools preview section
- No new components or routing changes
- No changes to coming-soon tool cards

## Decisions

### 1. Data model: optional `homepageUrl` field

Add `homepageUrl?: string` to the `Tool` interface. Optional because coming-soon tools may not have a homepage URL yet.

**Alternative considered:** Hardcode URLs in the component. Rejected — keeping data in `tools.ts` is consistent with the existing pattern.

### 2. Placement: below "View details →" link

The `[ ↗ ]` icon renders below the existing "View details →" link inside the tool card, with a small top margin (`mt-2`). This keeps the card layout clean and the icon discoverable without being intrusive.

**Alternative considered:** Inline next to the tool name. Rejected — clutters the header area.

### 3. Styling: monospace `[ ↗ ]` with subtle gray

Use `text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 font-mono` to keep it subtle and consistent with the brutalist/monospace design system. The brackets `[ ]` reinforce the monospace aesthetic.

### 4. Conditional rendering

Only render the homepage link when:
- `tool.status === 'available'` AND
- `tool.homepageUrl` is defined

This naturally excludes coming-soon tools.

## Risks / Trade-offs

- [Minimal visual impact] → Intentional — the icon should be subtle, not a primary CTA. Users who want it will find it.
- [No i18n for the icon] → The `↗` symbol is universal, no translation needed.

