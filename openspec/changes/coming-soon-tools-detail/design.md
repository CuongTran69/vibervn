# Design: Coming Soon Tools Full Detail Cards

## Approach

### 1. Data Layer (`src/data/tools.ts`)
Add full fields to AmpCode and Antigravity entries:
- `homepageUrl` — working links
- `tagline` — bilingual
- `products` — array of product names
- `strengths` — bilingual arrays (4 items each)
- `bestFor` — bilingual arrays (4 items each)
- Keep `status: 'coming-soon'`, no `gatewayUrl`

### 2. UI Layer (`src/app/[locale]/page.tsx`)
Replace the minimal badge rendering with full card rendering for coming-soon tools:
- Same card structure as available tools
- Dashed border (`border-dashed`) instead of solid
- Reduced opacity (`opacity-60`)
- "COMING SOON" badge instead of "SUPPORTED"
- Homepage `[ ↗ ]` link works normally
- NO gateway CTA button rendered

### 3. No translation file changes needed
Tool data uses inline bilingual objects, not i18n keys.

