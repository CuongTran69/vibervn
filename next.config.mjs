import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

// Note: Middleware is not used with static export (output: 'export')
// Locale routing is handled via generateStaticParams in [locale] pages
export default withNextIntl(nextConfig);

