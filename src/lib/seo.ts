import { Metadata } from "next";
import { locales, defaultLocale } from "@/i18n";

const BASE_URL = "https://viber.vn";

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
  image = "/og-image.png",
}: SEOConfig): Metadata {
  const url = `${BASE_URL}/${locale}${path}`;
  const canonicalUrl = url;

  // Generate alternate language URLs
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = `${BASE_URL}/${loc}${path}`;
  });
  languages["x-default"] = `${BASE_URL}/${defaultLocale}${path}`;

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
      siteName: "Viber.vn - AI Coding Gateway",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
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
      card: "summary_large_image",
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
      title:
        "Viber.vn - AI Coding Assistant Gateway | Augment Code, Claude Code, OpenCode & OpenClaw",
      description:
        "Nền tảng cung cấp dịch vụ AI Coding Assistant hàng đầu Việt Nam. Truy cập Augment Code, Claude Code, OpenCode, OpenClaw với tài liệu tiếng Việt và hỗ trợ 24/7.",
    },
    en: {
      title:
        "Viber.vn - AI Coding Assistant Gateway | Augment Code, Claude Code, OpenCode & OpenClaw",
      description:
        "Leading AI Coding Assistant platform in Vietnam. Access Augment Code, Claude Code, OpenCode, OpenClaw with Vietnamese documentation and 24/7 support.",
    },
  },
} as const;

export type PageKey = keyof typeof seoContent;
