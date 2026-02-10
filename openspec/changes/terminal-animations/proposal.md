# Proposal: Terminal Animations

## Problem
The landing page is static text. For an AI coding tools gateway, terminal-style animations would reinforce the developer brand and make the page more engaging.

## Solution
Add 3 terminal animations (combo from explore session):

1. **Hero Typing Effect** — Cycle through tool names with typewriter animation using `react-type-animation` (~5KB)
2. **Terminal Quick Start** — Transform 4-step guide into a terminal command block with dark bg, `$` prompts, green checkmarks
3. **Cursor Blink on Badge** — Blinking cursor after `[ GATEWAY ]` badge text

## Impact
- +5KB bundle (react-type-animation)
- CSS-only for animations 2 & 3
- No breaking changes

