import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getToolBySlug, tools } from "@/data/tools";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";

interface ToolDetailPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export function generateStaticParams() {
  const availableTools = tools.filter(tool => tool.status === 'available');
  return locales.flatMap((locale) =>
    availableTools.map((tool) => ({ locale, slug: tool.slug }))
  );
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const tool = getToolBySlug(slug);
  const t = await getTranslations();

  if (!tool || tool.status !== 'available') {
    notFound();
  }

  const lang = locale as 'vi' | 'en';

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-sm mb-2 font-mono dark:text-gray-300">
            [ {t('nav.tools').toUpperCase()} / {tool.name.toUpperCase()} ]
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold dark:text-white">{tool.name}</h1>
            <span className="text-xs border border-black dark:border-gray-600 px-2 py-1 dark:text-gray-300">
              SUPPORTED
            </span>
          </div>

          {tool.tagline && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-mono">
              {tool.tagline[lang]}
            </p>
          )}

          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            {tool.description[lang]}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {tool.strengths && (
              <div className="border-2 border-black dark:border-gray-700 p-6">
                <h2 className="font-bold mb-4 dark:text-white">{t('tools.strengths')}</h2>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {tool.strengths[lang].map((strength, index) => (
                    <li key={index}>• {strength}</li>
                  ))}
                </ul>
              </div>
            )}

            {tool.bestFor && (
              <div className="border-2 border-black dark:border-gray-700 p-6">
                <h2 className="font-bold mb-4 dark:text-white">{t('tools.bestFor')}</h2>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {tool.bestFor[lang].map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {tool.products && tool.products.length > 0 && (
            <div className="border-2 border-black dark:border-gray-700 p-6 mb-8">
              <h2 className="font-bold mb-4 dark:text-white">{t('tools.products')}</h2>
              <div className="flex flex-wrap gap-2">
                {tool.products.map((product, index) => (
                  <span
                    key={index}
                    className="text-sm border border-black dark:border-gray-600 px-3 py-1 dark:text-gray-300"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="border-2 border-black dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
            <h2 className="font-bold mb-2 dark:text-white">
              {lang === 'vi' ? 'Bắt đầu sử dụng' : 'Get Started'}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {lang === 'vi'
                ? 'Truy cập Gateway để mua tài khoản và bắt đầu sử dụng ngay.'
                : 'Access Gateway to purchase an account and start using immediately.'}
            </p>
            <a
              href={tool.gatewayUrl || 'https://viber.vn/#/referral'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              {t('tools.accessGateway')} →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

