## 1. Foundation — Section IDs & i18n Keys

- [x] 1.1 Add `id` attributes to all section components (hero, gateway, quick-start, tools, videos, articles, community, cta)
- [x] 1.2 Add terminal playground i18n keys to `messages/vi.json` (terminal namespace: title, welcome, prompt, commands, responses, errors)
- [x] 1.3 Add terminal playground i18n keys to `messages/en.json`
- [x] 1.4 Add keyboard shortcuts i18n keys to both locale files (shortcuts namespace: title, descriptions, hint, categories)
- [x] 1.5 Add konami easter egg i18n keys to both locale files (konami namespace: message) ← (verify: all i18n keys exist in both vi.json and en.json, no missing keys between locales)

## 2. Terminal Playground Component

- [x] 2.1 Create `src/components/terminal-playground.tsx` client component with input field, command history state, and auto-scroll
- [x] 2.2 Implement command parser: `help`, `list-tools`, `compare`, `connect`, `clear`, `cat`, `sudo rm -rf /`, unknown command handler
- [x] 2.3 Wire up i18n — all command responses use `useTranslations('terminal')` for bilingual output
- [x] 2.4 Style terminal: dark bg, green text, monospace, blinking cursor, border consistent with site design
- [x] 2.5 Add terminal section to page.tsx between QuickStart and Tools sections with `id="terminal"`

## 3. Keyboard Shortcuts Component

- [x] 3.1 Create `src/components/keyboard-shortcuts.tsx` client component with keydown listener and two-phase detection (g+x combos)
- [x] 3.2 Implement navigation shortcuts: g+h (hero), g+t (tools), g+v (videos), g+a (articles), g+c (community) with smooth scroll
- [x] 3.3 Implement action shortcuts: ? (help modal), d (toggle theme), l (switch language), / (focus terminal), Esc (close modal)
- [x] 3.4 Implement input guard — disable shortcuts when focus is on input/textarea/select/contentEditable
- [x] 3.5 Create help modal overlay with all shortcuts listed, grouped by Navigation and Actions, with aria attributes
- [x] 3.6 Add shortcut hint to footer component ("Press ? for shortcuts")
- [x] 3.7 Mount KeyboardShortcuts component in locale layout

## 4. Konami Code Easter Egg

- [x] 4.1 Create `src/components/konami-code.tsx` client component with sequence detector (↑↑↓↓←→←→BA)
- [x] 4.2 Add matrix rain CSS animation to globals.css (@keyframes matrix-rain, column styles, overlay)
- [x] 4.3 Implement matrix rain overlay with "DEVELOPER MODE ACTIVATED" centered message, auto-dismiss after 5s, click/key to dismiss early
- [x] 4.4 Add `prefers-reduced-motion` fallback — simple text flash instead of animation
- [x] 4.5 Mount KonamiCode component in locale layout

## 5. Integration & Polish

- [x] 5.1 Update sections barrel export (`src/components/sections/index.ts`) if terminal is a section component
- [x] 5.2 Verify build succeeds with `npm run build` — static export compatible
- [x] 5.3 Test dark mode for all 3 features

