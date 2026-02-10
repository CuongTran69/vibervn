# Tasks: simplify-toggle-quickstart

## 1. Dark Mode Toggle

- [x] 1.1 Remove `Monitor` import from lucide-react in `src/components/ui/theme-toggle.tsx`
- [x] 1.2 Remove System/Monitor button (lines 41-48) from theme toggle component

## 2. Quick Start Redesign

- [x] 2.1 Update `messages/vi.json` — rewrite quickStart keys (remove step3/step4, rewrite step1/step2 with sub-keys for title/description/cta)
- [x] 2.2 Update `messages/en.json` — same structure as vi.json
- [x] 2.3 Replace terminal Quick Start block in `src/app/[locale]/page.tsx` with 2 vertical brutalist cards (number + description + CTA button)

## 3. CSS Cleanup

- [x] 3.1 Remove `terminal-fade-in` keyframe from `src/app/globals.css`
- [x] 3.2 Remove `.terminal-line` classes and nth-child rules from `src/app/globals.css`
- [x] 3.3 Remove `.terminal-line` from `prefers-reduced-motion` rule (keep `.animate-cursor-blink`)

## 4. Verification

- [x] 4.1 Run `npm run build` — confirm successful build (14.8KB bundle)

