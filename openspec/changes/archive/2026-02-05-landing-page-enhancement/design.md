## Context

ViberVN là một static landing page được build với Next.js 14 và deploy trên Cloudflare Pages. Hiện tại site chỉ có giao diện light mode, tiếng Việt, và cấu trúc pages đơn giản. Cần nâng cấp để hỗ trợ dark mode, đa ngôn ngữ, và thêm các sections mới cho video tutorials và articles preview.

**Current State:**
- Next.js 14 với `output: 'export'` (static)
- Tailwind CSS cho styling
- Cloudflare Pages hosting
- Không có i18n, không có dark mode
- Pages: `/`, `/products`, `/docs`, `/pricing`

**Constraints:**
- Phải giữ static export (không dùng server-side features)
- Phải tương thích với Cloudflare Pages
- Performance là ưu tiên (static site)

## Goals / Non-Goals

**Goals:**
- Implement dark mode với 3 options: Light, Dark, System
- Implement i18n với 2 locales: Vietnamese (default), English
- Tạo tools showcase page với current và coming soon tools
- Embed YouTube videos cho tutorials
- Tạo articles preview section redirect đến Gateway
- Cải thiện UX với language switcher và theme toggle trong header

**Non-Goals:**
- Không implement full blog system (chỉ preview cards)
- Không implement user authentication
- Không implement server-side rendering
- Không implement CMS integration
- Không implement search functionality

## Decisions

### Decision 1: i18n Library - next-intl

**Choice:** `next-intl`

**Alternatives considered:**
- `next-i18next`: Phổ biến nhưng cần server-side features
- `react-intl`: Cần nhiều setup, không tối ưu cho Next.js
- Custom implementation: Tốn thời gian, dễ bugs

**Rationale:**
- Hỗ trợ tốt cho Next.js App Router
- Hoạt động với static export
- API đơn giản, DX tốt
- Active maintenance

**Implementation:**
```
/messages
  /vi.json
  /en.json
/src/app/[locale]/...
/src/i18n.ts
/src/middleware.ts (for locale detection)
```

### Decision 2: Dark Mode - next-themes

**Choice:** `next-themes`

**Alternatives considered:**
- Custom CSS variables + localStorage: Nhiều boilerplate
- Tailwind dark class manual: Không có system preference detection
- `use-dark-mode`: Ít features hơn

**Rationale:**
- Zero-config với Tailwind CSS
- System preference detection built-in
- No flash on page load (SSR-safe)
- Persistent preference với localStorage

**Implementation:**
```tsx
// tailwind.config.js
darkMode: 'class'

// ThemeProvider wrapper
<ThemeProvider attribute="class" defaultTheme="system">
```

### Decision 3: Routing Structure

**Choice:** Locale-prefixed routes `/[locale]/...`

**Structure:**
```
/src/app/
  /[locale]/
    /page.tsx              # Home
    /tools/
      /page.tsx            # Tools overview
      /[slug]/page.tsx     # Tool detail (augment-code, claude-code, etc.)
    /videos/page.tsx       # Video tutorials
    /articles/page.tsx     # Articles preview
    /docs/page.tsx         # Quick start
    /community/page.tsx    # Community links
    /layout.tsx            # Locale layout with providers
  /layout.tsx              # Root layout
```

### Decision 4: Video Embedding

**Choice:** YouTube iframe embeds với lazy loading

**Rationale:**
- Không cần thêm dependencies
- YouTube handles video hosting/streaming
- Lazy loading để improve initial page load

**Implementation:**
```tsx
<iframe
  src="https://www.youtube.com/embed/{videoId}"
  loading="lazy"
  allowFullScreen
/>
```

### Decision 5: Tools Data Structure

**Choice:** Static data file với TypeScript types

**Rationale:**
- Type-safe
- Easy to maintain
- No runtime fetching needed

**Implementation:**
```typescript
// src/data/tools.ts
export const tools: Tool[] = [
  {
    slug: 'augment-code',
    name: 'Augment Code',
    status: 'available',
    products: ['Extension', 'Auggie CLI'],
    strengths: [...],
    bestFor: [...],
  },
  // ...
]
```

## Risks / Trade-offs

### Risk 1: Static Export Limitations with i18n
- **Risk:** next-intl middleware không hoạt động với static export
- **Mitigation:** Sử dụng client-side locale detection và redirect, hoặc generate tất cả locale pages at build time

### Risk 2: Bundle Size Increase
- **Risk:** Thêm next-intl và next-themes tăng bundle size
- **Mitigation:** Cả hai libraries đều nhỏ (<10KB combined), acceptable trade-off

### Risk 3: SEO với Multiple Locales
- **Risk:** Duplicate content issues
- **Mitigation:** Proper hreflang tags, canonical URLs cho mỗi locale

### Risk 4: Dark Mode Flash
- **Risk:** Flash of wrong theme on page load
- **Mitigation:** next-themes handles này với script injection

## Open Questions

1. **Video Content:** Cần danh sách YouTube video IDs cụ thể để embed
2. **Articles Data:** Cần format của articles data từ Gateway để tạo preview cards
3. **Default Locale:** Vietnamese hay English là default? (Assumed: Vietnamese)

