## 1. Setup & Dependencies

- [x] 1.1 Install next-intl package for internationalization
- [x] 1.2 Install next-themes package for dark mode
- [x] 1.3 Configure Tailwind CSS for dark mode (darkMode: 'class')
- [x] 1.4 Create i18n configuration file (src/i18n.ts)
- [x] 1.5 Update next.config.mjs for i18n routing

## 2. Translation Files

- [x] 2.1 Create messages/vi.json with Vietnamese translations
- [x] 2.2 Create messages/en.json with English translations
- [x] 2.3 Add translations for all existing page content
- [x] 2.4 Add translations for new sections (tools, videos, articles)

## 3. Routing & Layout Structure

- [x] 3.1 Create [locale] dynamic route folder structure
- [x] 3.2 Create src/app/[locale]/layout.tsx with ThemeProvider and i18n provider
- [x] 3.3 Migrate existing pages to [locale] folder structure
- [x] 3.4 Create middleware.ts for locale detection and redirect

## 4. Dark Mode Implementation

- [x] 4.1 Create ThemeProvider component wrapper
- [x] 4.2 Create ThemeToggle component (Light/Dark/System options)
- [x] 4.3 Update Header component to include ThemeToggle
- [x] 4.4 Update all components with dark mode Tailwind classes
- [ ] 4.5 Test theme persistence across page reloads

## 5. Language Switcher

- [x] 5.1 Create LanguageSwitcher component
- [x] 5.2 Add LanguageSwitcher to Header component
- [x] 5.3 Implement locale switching with URL update
- [ ] 5.4 Test language persistence across sessions

## 6. Tools Data & Pages

- [x] 6.1 Create src/data/tools.ts with tools data structure
- [x] 6.2 Add Augment Code data (products, strengths, best use cases)
- [x] 6.3 Add Claude Code data (products, strengths, best use cases)
- [x] 6.4 Add Coming Soon tools data (OpenCode, AmpCode, Antigravity)
- [x] 6.5 Create /[locale]/tools/page.tsx (tools overview)
- [x] 6.6 Create /[locale]/tools/[slug]/page.tsx (tool detail)
- [x] 6.7 Create ToolCard component for grid display
- [x] 6.8 Create ToolDetailPage component
- [x] 6.9 Add Gateway CTA button to tool pages

## 7. Video Tutorials Section

- [x] 7.1 Create src/data/videos.ts with video data structure
- [x] 7.2 Add sample YouTube video IDs for tutorials
- [x] 7.3 Create /[locale]/videos/page.tsx
- [x] 7.4 Create VideoEmbed component with lazy loading
- [x] 7.5 Create VideoCard component for grid display
- [x] 7.6 Implement video categorization (Setup, Tutorials, Tips)

## 8. Articles Preview Section

- [x] 8.1 Create src/data/articles.ts with article data structure
- [x] 8.2 Add sample article data (title, excerpt, thumbnail, gateway URL)
- [x] 8.3 Create /[locale]/articles/page.tsx
- [x] 8.4 Create ArticleCard component with external link indicator
- [x] 8.5 Implement redirect to Gateway on card click

## 9. Home Page Updates

- [x] 9.1 Add Tools Preview section to home page
- [x] 9.2 Add Videos Preview section to home page
- [x] 9.3 Add Articles Preview section to home page
- [x] 9.4 Add Gateway introduction section
- [x] 9.5 Update Hero section with new messaging

## 10. SEO & Meta Tags

- [ ] 10.1 Add hreflang tags for multi-language support
- [ ] 10.2 Add canonical URLs per locale
- [ ] 10.3 Update meta descriptions for all pages
- [ ] 10.4 Add Open Graph tags for social sharing

## 11. Testing & Polish

- [x] 11.1 Test all pages in both locales (vi, en)
- [x] 11.2 Test dark mode on all pages
- [ ] 11.3 Test responsive design on mobile/tablet/desktop
- [x] 11.4 Test static export build
- [x] 11.5 Verify Cloudflare Pages deployment compatibility

