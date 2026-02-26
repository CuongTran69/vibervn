## Why

The ViberVN landing page is currently a static, read-only experience. Visitors scroll through content passively with no interactive elements beyond navigation and theme/language toggles. For a site promoting AI coding tools to developers, this is a missed opportunity — developers expect playful, interactive experiences that demonstrate technical culture. Adding interactive features (terminal playground, keyboard shortcuts, easter egg) transforms the landing page from a brochure into an engaging playground that resonates with the developer audience and increases time-on-site.

## What Changes

- **New interactive terminal section**: A simulated terminal emulator where users can type commands (`help`, `list-tools`, `compare`, `connect`, `clear`) and receive mock responses showcasing the gateway's capabilities. Placed between QuickStart and Tools sections.
- **New keyboard shortcuts system**: Global keyboard shortcuts for navigating between sections (`g+h`, `g+t`, `g+v`, etc.), toggling theme (`d`), switching language (`l`), focusing terminal (`/`), and showing a help modal (`?`). Includes a subtle footer indicator.
- **New Konami Code easter egg**: Hidden easter egg triggered by ↑↑↓↓←→←→BA sequence. Triggers a matrix rain animation effect with a "DEVELOPER MODE ACTIVATED" message. Auto-dismisses after 5 seconds. Respects `prefers-reduced-motion`.
- **Section IDs added**: All homepage sections get `id` attributes for scroll-to navigation.
- **New i18n keys**: Translation keys for terminal commands/responses, shortcut labels, and easter egg message in both VI and EN.
- **New CSS animations**: Matrix rain keyframes and terminal styling in globals.css.

## Capabilities

### New Capabilities
- `terminal-playground`: Interactive terminal emulator component with command parsing, response rendering, command history, and bilingual output
- `keyboard-shortcuts`: Global keyboard shortcut system with two-key combos (g+x), help modal overlay, section scroll navigation, and input-aware disabling
- `konami-easter-egg`: Hidden Konami Code detector with matrix rain animation, auto-dismiss timer, and reduced-motion fallback

### Modified Capabilities
- `i18n`: Adding new translation key namespaces for terminal, shortcuts, and easter egg (existing i18n spec at `openspec/specs/i18n/spec.md`)

## Impact

- **Components**: 3 new client components (`TerminalPlayground`, `KeyboardShortcuts`, `KonamiCode`)
- **Page layout**: `src/app/[locale]/page.tsx` — add terminal section + section IDs
- **Locale layout**: `src/app/[locale]/layout.tsx` — mount global keyboard/konami hooks
- **Sections barrel**: `src/components/sections/index.ts` — export new section
- **Footer**: Add keyboard shortcut hint indicator
- **i18n files**: `messages/vi.json` and `messages/en.json` — new key namespaces
- **CSS**: `src/app/globals.css` — matrix rain animation, terminal playground styles
- **Dependencies**: None — pure CSS animations, no new packages
- **Static export**: Fully compatible — all client-side only
- **Bundle size**: Minimal — CSS animations + small client components

