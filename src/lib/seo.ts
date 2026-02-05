import { Metadata } from 'next';
import { locales, defaultLocale } from '@/i18n';

const BASE_URL = 'https://viber.vn';

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  locale: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  locale,
  image = '/og-image.png',
}: SEOConfig): Metadata {
  const url = `${BASE_URL}/${locale}${path}`;
  const canonicalUrl = url;

  // Generate alternate language URLs
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = `${BASE_URL}/${loc}${path}`;
  });
  languages['x-default'] = `${BASE_URL}/${defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Viber.vn - AI Coding Gateway',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// SEO content for each page by locale
export const seoContent = {
  home: {
    vi: {
      title: 'Viber.vn - AI Coding Assistant Gateway | Augment Code & Claude Code',
      description:
        'Nền tảng cung cấp dịch vụ AI Coding Assistant hàng đầu Việt Nam. Truy cập Augment Code, Claude Code với tài liệu tiếng Việt và hỗ trợ 24/7.',
    },
    en: {
      title: 'Viber.vn - AI Coding Assistant Gateway | Augment Code & Claude Code',
      description:
        'Leading AI Coding Assistant platform in Vietnam. Access Augment Code, Claude Code with Vietnamese documentation and 24/7 support.',
    },
  },
  tools: {
    vi: {
      title: 'AI Coding Tools - Augment Code, Claude Code | Viber.vn',
      description:
        'Khám phá các công cụ AI hỗ trợ lập trình hàng đầu: Augment Code, Claude Code. So sánh tính năng, điểm mạnh và cách sử dụng.',
    },
    en: {
      title: 'AI Coding Tools - Augment Code, Claude Code | Viber.vn',
      description:
        'Discover leading AI coding tools: Augment Code, Claude Code. Compare features, strengths, and usage guides.',
    },
  },
  videos: {
    vi: {
      title: 'Video Hướng Dẫn AI Coding Tools | Viber.vn',
      description:
        'Video hướng dẫn cài đặt và sử dụng Augment Code, Claude Code. Tutorials từ cơ bản đến nâng cao.',
    },
    en: {
      title: 'AI Coding Tools Tutorial Videos | Viber.vn',
      description:
        'Tutorial videos for setting up and using Augment Code, Claude Code. From beginner to advanced guides.',
    },
  },
  articles: {
    vi: {
      title: 'Bài Viết về AI Coding | Viber.vn',
      description:
        'Tin tức, bài viết và hướng dẫn về AI Coding. Cập nhật xu hướng, tips và tricks cho developers.',
    },
    en: {
      title: 'AI Coding Articles | Viber.vn',
      description:
        'News, articles, and guides about AI Coding. Stay updated with trends, tips, and tricks for developers.',
    },
  },
  docs: {
    vi: {
      title: 'Hướng Dẫn Sử Dụng Gateway | Viber.vn',
      description:
        'Tài liệu hướng dẫn sử dụng Gateway, cài đặt Augment Code và Claude Code. Quick start guide tiếng Việt.',
    },
    en: {
      title: 'Gateway User Guide | Viber.vn',
      description:
        'Documentation for using Gateway, setting up Augment Code and Claude Code. Quick start guide.',
    },
  },
  community: {
    vi: {
      title: 'Cộng Đồng AI Coding Vietnam | Viber.vn',
      description:
        'Tham gia cộng đồng AI Coding Vietnam trên Telegram. Thảo luận, hỗ trợ và chia sẻ kinh nghiệm 24/7.',
    },
    en: {
      title: 'AI Coding Vietnam Community | Viber.vn',
      description:
        'Join the AI Coding Vietnam community on Telegram. Discuss, get support, and share experiences 24/7.',
    },
  },
} as const;

export type PageKey = keyof typeof seoContent;

