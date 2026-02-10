# Design: Terminal Animations

## 1. Hero Typing Effect
- Use `react-type-animation` library (client component needed)
- Create a small client component `TerminalTyping` that cycles: "Augment Code" → "Claude Code" → "OpenCode" → "OpenClaw" → "AI Coding Tools"
- Render as part of hero title: `$ connect --with {typing}`
- Speed: 50ms/char, 2s pause between names
- Wrap in `dynamic()` import or separate client component file

## 2. Terminal Quick Start
- Restyle existing Quick Start section as terminal block
- Dark background (`bg-gray-900`), green text (`text-green-400`), monospace
- Terminal header bar with 3 dots (● ● ●)
- Each step: `$ command` + `✓ result` format
- CSS-only staggered fade-in animation on each line
- Works in both light and dark mode (always dark terminal look)

## 3. Cursor Blink Badge
- Add `▌` character after GATEWAY text
- CSS `@keyframes blink` animation
- Add to `globals.css`

## Technical Notes
- `react-type-animation` needs client component — create `src/components/terminal-typing.tsx` as `'use client'`
- Page stays as server component, only typing widget is client
- CSS animations in `globals.css` for cursor blink + terminal fade-in

