## Why

Two UX improvements: (1) The System theme option is redundant since `enableSystem` is already `false` in the provider — the UI button should match. (2) The terminal-style Quick Start section is being replaced with a simpler 2-step guide that better reflects the actual user journey: visit the gateway site, then join Telegram for account setup support.

## What Changes

- Remove the System/Monitor button from the dark mode toggle (keep Light + Dark only)
- Remove the `Monitor` icon import from lucide-react
- Replace terminal-style Quick Start block with 2 vertical brutalist cards
- Update translation keys from 4 steps to 2 steps with indirect language (avoid buy/sell references)
- Remove unused `terminal-line` CSS animations and `terminal-fade-in` keyframe from globals.css
- Clean up `prefers-reduced-motion` rule for removed terminal-line class

## Capabilities

### New Capabilities
_(none — modifications only)_

### Modified Capabilities
- `dark-mode`: Remove System theme option — toggle only supports Light and Dark

## Impact

- `src/components/ui/theme-toggle.tsx` — Remove Monitor button + import
- `src/app/[locale]/page.tsx` — Replace Quick Start section (~lines 125-186)
- `src/app/globals.css` — Remove terminal-line CSS (keep cursor-blink for hero badge)
- `messages/vi.json` — Update quickStart keys (4 → 2 steps)
- `messages/en.json` — Update quickStart keys (4 → 2 steps)
- `openspec/specs/dark-mode/spec.md` — Update spec to remove System theme scenarios

