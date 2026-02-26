## Context

ViberVN is a Next.js 14 static export landing page with brutalist/terminal aesthetic (Space Mono font, black borders, monochrome palette). Currently single-page with 8 sections, i18n (vi/en), dark mode via next-themes, hosted on Cloudflare Pages. All section components are server-rendered; only Header, Footer, ThemeToggle, LanguageSwitcher, and TerminalTyping are client components. No existing keyboard event handling or animation libraries beyond `react-type-animation` for the hero typing effect.

## Goals / Non-Goals

**Goals:**
- Add an interactive terminal playground section that lets users explore AI tool info via CLI commands
- Add global keyboard shortcuts for fast section navigation and common actions
- Add a hidden Konami Code easter egg with matrix rain animation
- Maintain zero new dependencies — pure React + CSS
- Full dark mode and i18n support for all new features
- Respect `prefers-reduced-motion` for all animations
- Compatible with static export (`output: 'export'`)

**Non-Goals:**
- No real API calls or backend integration
- No persistent state (localStorage for shortcuts/easter egg)
- No mobile-specific gesture shortcuts
- No sound effects
- No analytics tracking for easter egg discovery

## Decisions

### D1: Component Architecture — 3 separate client components

**Decision**: Create `TerminalPlayground` (section), `KeyboardShortcuts` (global), `KonamiCode` (global) as independent client components.

**Rationale**: Each feature has distinct state and lifecycle. Combining them would create unnecessary coupling. Global components (shortcuts, konami) mount in locale layout; terminal mounts as a page section.

**Alternative considered**: Single `InteractiveFeatures` wrapper component — rejected because it would be a god component with mixed concerns.

### D2: Terminal command system — switch/case with i18n responses

**Decision**: Simple switch/case command parser. Each command returns a translated string array. No command aliases, no piping, no complex parsing.

**Rationale**: This is a fun demo, not a real terminal. Keeping it simple means fewer bugs and smaller bundle. Commands are hardcoded — `help`, `list-tools`, `compare <a> <b>`, `connect <tool>`, `clear`, `cat`, `sudo rm -rf /`.

**Alternative considered**: Command registry pattern with plugins — overkill for 7 commands.

### D3: Keyboard shortcut system — two-phase key detection

**Decision**: Use a `keySequence` state that tracks the last key pressed. When `g` is pressed, enter "navigation mode" for 1 second. Next key determines target section. Single keys (`?`, `d`, `l`, `/`) trigger immediately.

**Rationale**: Two-key combos (g+h, g+t) are familiar from GitHub/Gmail. Timeout prevents accidental triggers. Single keys for frequent actions.

**Alternative considered**: Modifier keys (Ctrl+1, Ctrl+2) — conflicts with browser shortcuts. Vim-style modes — too complex for a landing page.

### D4: Input guard — disable shortcuts when typing

**Decision**: Check `document.activeElement` tag name and type. Disable shortcuts when focus is on `INPUT`, `TEXTAREA`, `SELECT`, or any element with `contentEditable`. Also disable when terminal playground input is focused.

**Rationale**: Prevents shortcuts from interfering with text input. Standard pattern used by GitHub, Gmail.

### D5: Matrix rain animation — pure CSS with fixed columns

**Decision**: CSS `@keyframes` animation with absolutely positioned columns of random characters. Pre-generate column positions and delays. No canvas, no requestAnimationFrame.

**Rationale**: CSS animations are GPU-accelerated, don't block main thread, and work with `prefers-reduced-motion` media query natively. For a 5-second effect, CSS is sufficient.

**Alternative considered**: Canvas-based matrix rain — heavier, requires cleanup, harder to respect reduced-motion. Framer Motion — adds dependency.

### D6: Section IDs — kebab-case matching section names

**Decision**: Add `id` attributes to section wrappers: `hero`, `gateway`, `quick-start`, `tools`, `terminal`, `videos`, `articles`, `community`, `cta`.

**Rationale**: Enables both keyboard shortcut navigation and potential future anchor links. Kebab-case is consistent with URL conventions.

### D7: Shortcut help modal — portal-free overlay

**Decision**: Render modal as a fixed-position div inside the KeyboardShortcuts component. No React portal needed since it's already in the layout.

**Rationale**: Simpler than portal. The component is mounted at layout level so z-index stacking is straightforward.

## Risks / Trade-offs

- **[Risk] Keyboard shortcuts conflict with screen readers** → Mitigation: All shortcuts use non-standard keys (g+x, ?, /) that don't conflict with common AT shortcuts. Modal is properly labeled with aria attributes.
- **[Risk] Terminal playground increases page weight** → Mitigation: Component is client-only, lazy-loaded via Next.js dynamic import is not needed since it's a section on the page. The command responses are just strings — minimal JS.
- **[Risk] Matrix rain animation performance on low-end devices** → Mitigation: Use CSS `will-change: transform` on columns, limit to 20 columns, auto-dismiss after 5s. Reduced-motion users get text-only flash.
- **[Risk] Konami code detection conflicts with keyboard shortcuts** → Mitigation: Konami detector runs independently on raw keydown events. It only triggers on the exact 10-key sequence which is unlikely to overlap with navigation shortcuts.
- **[Trade-off] No command history persistence** → Terminal history resets on page reload. Acceptable for a demo feature.
- **[Trade-off] No mobile keyboard shortcuts** → Mobile users don't have physical keyboards. The terminal playground works on mobile via touch input. Shortcuts are desktop-only.

