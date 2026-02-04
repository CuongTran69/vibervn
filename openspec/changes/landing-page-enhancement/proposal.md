## Why

ViberVN landing page cần được nâng cấp để trở thành một trang marketing chuyên nghiệp cho AI Coding Tools. Hiện tại trang còn thiếu các tính năng quan trọng: dark mode, đa ngôn ngữ (EN/VI), video tutorials, và showcase đầy đủ các AI tools. Việc nâng cấp này sẽ giúp thu hút nhiều developers Việt Nam hơn và cung cấp trải nghiệm người dùng tốt hơn.

## What Changes

- **Thêm Dark Mode**: Hỗ trợ Light/Dark/System theme với next-themes
- **Thêm Internationalization (i18n)**: Hỗ trợ 2 ngôn ngữ English và Vietnamese với next-intl
- **Cải thiện AI Tools Showcase**: 
  - Chi tiết về Augment Code (Extension + Auggie CLI)
  - Chi tiết về Claude Code (CLI)
  - Placeholder "Coming Soon" cho: OpenCode, AmpCode, Antigravity
- **Thêm Videos Section**: Embed YouTube tutorials cho setup guides
- **Thêm Articles Preview**: Preview cards redirect đến Gateway (viber.vn)
- **Cập nhật Site Structure**:
  - `/[locale]/` - Home với locale routing
  - `/[locale]/tools` - AI Coding Tools overview
  - `/[locale]/tools/[tool-slug]` - Chi tiết từng tool
  - `/[locale]/videos` - Video tutorials
  - `/[locale]/articles` - Articles preview
  - `/[locale]/docs` - Quick start guide
  - `/[locale]/community` - Community links
- **Cập nhật Header/Footer**: Thêm language switcher và theme toggle

## Capabilities

### New Capabilities

- `dark-mode`: Theme switching functionality với Light/Dark/System options, persistent preference
- `i18n`: Internationalization với 2 locales (vi, en), locale routing, translation files
- `video-tutorials`: YouTube video embeds section cho setup guides và tutorials
- `articles-preview`: Preview cards cho blog articles với redirect đến Gateway
- `tools-showcase`: Detailed showcase của AI Coding Tools với current và coming soon tools

### Modified Capabilities

<!-- No existing capabilities to modify - this is a new project enhancement -->

## Impact

- **Code Changes**:
  - Cấu trúc routing thay đổi từ `/page` sang `/[locale]/page`
  - Thêm dependencies: next-intl, next-themes
  - Tạo translation files: `messages/vi.json`, `messages/en.json`
  - Cập nhật tất cả components để support dark mode classes
  - Cập nhật Header component với language switcher và theme toggle
  
- **Dependencies**:
  - `next-intl` - i18n library cho Next.js
  - `next-themes` - Theme management cho dark mode
  
- **Configuration**:
  - `next.config.mjs` - Cập nhật cho i18n routing
  - `tailwind.config.js` - Thêm dark mode configuration
  
- **Deployment**:
  - Static export vẫn hoạt động với Cloudflare Pages
  - Build output sẽ có thêm locale folders

