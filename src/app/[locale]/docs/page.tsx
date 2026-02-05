import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales, Locale } from "@/i18n";
import { generatePageMetadata, seoContent } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = seoContent.docs[locale as Locale];
  return generatePageMetadata({
    title: content.title,
    description: content.description,
    path: '/docs',
    locale,
  });
}

export default async function DocsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const docCategories = [
    {
      title: "Bắt đầu với Gateway",
      titleEn: "Getting Started with Gateway",
      items: [
        { title: "Gateway là gì?", titleEn: "What is Gateway?", href: "#" },
        { title: "Tạo tài khoản", titleEn: "Create Account", href: "#" },
        { title: "Lấy API Key", titleEn: "Get API Key", href: "#" },
      ],
    },
    {
      title: "Kết nối Augment Code",
      titleEn: "Connect Augment Code",
      items: [
        { title: "Cài đặt Extension", titleEn: "Install Extension", href: "#" },
        { title: "Nhập API Key", titleEn: "Enter API Key", href: "#" },
        { title: "Cấu hình MCP", titleEn: "Configure MCP", href: "#" },
        { title: "Sử dụng cơ bản", titleEn: "Basic Usage", href: "#" },
      ],
    },
    {
      title: "Kết nối Claude Code",
      titleEn: "Connect Claude Code",
      items: [
        { title: "Cài đặt CLI", titleEn: "Install CLI", href: "#" },
        { title: "Cấu hình API", titleEn: "Configure API", href: "#" },
        { title: "Sử dụng cơ bản", titleEn: "Basic Usage", href: "#" },
      ],
    },
    {
      title: "Hỗ trợ",
      titleEn: "Support",
      items: [
        { title: "FAQ", titleEn: "FAQ", href: "#" },
        { title: "Troubleshooting", titleEn: "Troubleshooting", href: "#" },
        { title: "Liên hệ Telegram", titleEn: "Contact Telegram", href: "https://t.me/augmentsupporter" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="text-sm mb-2 font-mono dark:text-gray-300">[ {t('nav.docs').toUpperCase()} ]</div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{t('nav.docs')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('footer.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {docCategories.map((category) => (
              <div key={category.title} className="border-2 border-black dark:border-gray-700 p-6">
                <h2 className="font-bold mb-4 dark:text-white">{category.title}</h2>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="text-sm hover:underline text-gray-600 dark:text-gray-400">
                        → {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Start */}
          <div className="border-2 border-black dark:border-gray-700 p-6 mb-8">
            <h2 className="font-bold mb-4 dark:text-white">Quick Start</h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-2">1</span>
                <span className="dark:text-gray-300">Truy cập <a href="https://viber.vn" className="underline" target="_blank" rel="noopener noreferrer">viber.vn</a> và tạo tài khoản</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-2">2</span>
                <span className="dark:text-gray-300">Lấy API key trong dashboard</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-2">3</span>
                <span className="dark:text-gray-300">Cài extension và nhập API key</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-2">4</span>
                <span className="dark:text-gray-300">Bắt đầu sử dụng!</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="border-2 border-black dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
            <h2 className="font-bold mb-2 dark:text-white">{t('common.support')}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Join Telegram để được hỗ trợ nhanh nhất.
            </p>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              💬 Join @augmentsupporter
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

