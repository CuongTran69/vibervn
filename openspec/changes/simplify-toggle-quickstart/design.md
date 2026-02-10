## Context

The Viber.vn landing page uses next-themes for dark mode with a 3-button toggle (Light/Dark/System). The provider already has `enableSystem={false}`, making the System button non-functional. The Quick Start section currently uses a terminal-style UI with 4 steps, staggered fade-in animations, and command-line aesthetics. This needs to be simplified to 2 steps reflecting the actual user journey.

## Goals / Non-Goals

**Goals:**
- Remove System theme button from toggle — match UI to provider config
- Replace terminal Quick Start with 2 vertical brutalist cards
- Use indirect language for account setup (avoid buy/sell references)
- Clean up unused CSS (terminal-line animations)

**Non-Goals:**
- Changing theme provider configuration (already correct)
- Modifying hero typing animation or cursor blink (keep those)
- Adding new features or sections

## Decisions

### 1. Theme toggle: Remove button vs. hide
**Decision:** Remove the Monitor button and its import entirely.
**Rationale:** `enableSystem={false}` already disables system theme at provider level. The button is dead UI. Removing is cleaner than hiding.

### 2. Quick Start layout: Vertical stacked cards
**Decision:** 2 cards stacked vertically, each with number badge + description + CTA button.
**Rationale:** User confirmed vertical layout. Matches brutalist design (border-2 border-black). Each card is a clear action step.

### 3. Translation key structure: Flat step1/step2 with sub-keys
**Decision:** Use `quickStart.step1.title`, `quickStart.step1.description`, `quickStart.step1.cta` pattern. Remove step3/step4.
**Rationale:** Each card needs title, description, and CTA text. Flat keys are simpler but sub-keys group related content.

### 4. CSS cleanup: Remove terminal-line, keep cursor-blink
**Decision:** Remove `terminal-fade-in` keyframe, `.terminal-line` classes, and their `prefers-reduced-motion` rule. Keep `cursor-blink` for hero badge.
**Rationale:** `terminal-line` is only used in Quick Start (confirmed via grep). `cursor-blink` is still used by hero `[ GATEWAY▌ ]` badge.

### 5. Language approach: Indirect service activation
**Decision:** Use "thiết lập tài khoản" (account setup) and "kích hoạt dịch vụ" (service activation) instead of purchase language.
**Rationale:** User explicitly requested avoiding buy/sell/purchase references. These terms describe the same action indirectly.

## Risks / Trade-offs

- [Minimal risk] Removing terminal-line CSS is safe — only used in Quick Start section being replaced.
- [No risk] Theme toggle change — provider already has `enableSystem={false}`, so no behavioral change.

