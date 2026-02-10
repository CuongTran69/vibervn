import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAvailableTools, getComingSoonTools } from "@/data/tools";
import { videos, getVideosByCategory } from "@/data/videos";
import { articles } from "@/data/articles";
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
  const content = seoContent.home[locale as Locale];
  return generatePageMetadata({
    title: content.title,
    description: content.description,
    path: '',
    locale,
  });
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const loc = locale as Locale;
  const availableTools = getAvailableTools();
  const comingSoonTools = getComingSoonTools();
  const videoCategories = ['setup', 'tutorials', 'tips'] as const;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-20 border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="text-sm mb-4 font-mono dark:text-gray-300">{t('home.hero.badge')}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-400">
            {t.rich('home.hero.description', {
              b: (chunks) => <strong className="font-semibold text-black dark:text-white">{chunks}</strong>
            })}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {t('home.hero.cta')}
            </a>
          </div>
        </div>
      </section>

      {/* What is Gateway */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('home.gateway.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-black dark:border-gray-700 p-6">
              <div className="text-2xl mb-2 dark:text-white">{t('home.gateway.connect.number')}</div>
              <h3 className="font-bold mb-2 dark:text-white">{t('home.gateway.connect.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('home.gateway.connect.description')}
              </p>
            </div>
            <div className="border-2 border-black dark:border-gray-700 p-6">
              <div className="text-2xl mb-2 dark:text-white">{t('home.gateway.simple.number')}</div>
              <h3 className="font-bold mb-2 dark:text-white">{t('home.gateway.simple.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('home.gateway.simple.description')}
              </p>
            </div>
            <div className="border-2 border-black dark:border-gray-700 p-6">
              <div className="text-2xl mb-2 dark:text-white">{t('home.gateway.support.number')}</div>
              <h3 className="font-bold mb-2 dark:text-white">{t('home.gateway.support.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('home.gateway.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('home.quickStart.title')}</h2>
          <div className="border-2 border-black dark:border-gray-700 p-6">
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-2">1</span>
                <span className="dark:text-gray-300">{t('home.quickStart.step1')}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-2">2</span>
                <span className="dark:text-gray-300">{t('home.quickStart.step2')}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-2">3</span>
                <span className="dark:text-gray-300">{t('home.quickStart.step3')}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-2">4</span>
                <span className="dark:text-gray-300">{t('home.quickStart.step4')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Tools */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('home.tools.title')}</h2>
          <div className="space-y-6 mb-6">
            {availableTools.map((tool) => (
              <div
                key={tool.slug}
                className="border-2 border-black dark:border-gray-700 p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold dark:text-white">{tool.name}</h3>
                    <span className="text-xs border border-black dark:border-gray-600 px-1 dark:text-gray-300">SUPPORTED</span>
                  </div>
                  {tool.homepageUrl && (
                    <a
                      href={tool.homepageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-black dark:border-gray-600 px-2 py-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300"
                      title={tool.name}
                    >
                      ↗
                    </a>
                  )}
                </div>
                {tool.tagline && (
                  <div className="text-xs text-gray-500 dark:text-gray-500 font-mono mb-3">
                    {tool.tagline[loc]}
                  </div>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {tool.description[loc]}
                </p>
                {tool.strengths && tool.bestFor && (
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-bold mb-2 dark:text-gray-300">{t('tools.strengths')}</h4>
                      <ul className="space-y-1">
                        {tool.strengths[loc].map((s, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-400">• {s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold mb-2 dark:text-gray-300">{t('tools.bestFor')}</h4>
                      <ul className="space-y-1">
                        {tool.bestFor[loc].map((b, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-400">• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {tool.products && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.products.map((product) => (
                      <span key={product} className="text-xs border border-gray-300 dark:border-gray-600 px-2 py-0.5 dark:text-gray-400">
                        {product}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={tool.gatewayUrl || 'https://viber.vn'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                  {t('tools.accessGateway')} →
                </a>
              </div>
            ))}
          </div>
          {/* Coming Soon */}
          <div className="space-y-6">
            {comingSoonTools.map((tool) => (
              <div
                key={tool.slug}
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 opacity-60"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold dark:text-white">{tool.name}</h3>
                    <span className="text-xs border border-gray-400 dark:border-gray-600 px-1 text-gray-400 dark:text-gray-500">COMING SOON</span>
                  </div>
                  {tool.homepageUrl && (
                    <a
                      href={tool.homepageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-gray-300 dark:border-gray-600 px-2 py-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400"
                      title={tool.name}
                    >
                      ↗
                    </a>
                  )}
                </div>
                {tool.tagline && (
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-3">
                    {tool.tagline[loc]}
                  </div>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {tool.description[loc]}
                </p>
                {tool.strengths && tool.bestFor && (
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-bold mb-2 dark:text-gray-400">{t('tools.strengths')}</h4>
                      <ul className="space-y-1">
                        {tool.strengths[loc].map((s, i) => (
                          <li key={i} className="text-xs text-gray-500 dark:text-gray-500">• {s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold mb-2 dark:text-gray-400">{t('tools.bestFor')}</h4>
                      <ul className="space-y-1">
                        {tool.bestFor[loc].map((b, i) => (
                          <li key={i} className="text-xs text-gray-500 dark:text-gray-500">• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {tool.products && (
                  <div className="flex flex-wrap gap-2">
                    {tool.products.map((product) => (
                      <span key={product} className="text-xs border border-gray-300 dark:border-gray-600 px-2 py-0.5 text-gray-400 dark:text-gray-500">
                        {product}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('home.videos.title')}</h2>
          {videoCategories.map((category) => {
            const categoryVideos = getVideosByCategory(category);
            if (categoryVideos.length === 0) return null;
            return (
              <div key={category} className="mb-8 last:mb-0">
                <h3 className="text-sm font-bold mb-4 font-mono dark:text-gray-300">
                  [ {t(`videos.categories.${category}`).toUpperCase()} ]
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryVideos.map((video) => (
                    <a
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                          alt={video.title[loc]}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-2 dark:text-white">{video.title[loc]}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{video.description[loc]}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Articles */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('home.articles.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <span className="text-xs border border-black dark:border-gray-600 px-2 py-0.5 dark:text-gray-300 mb-2 inline-block">
                  {article.category}
                </span>
                <h3 className="font-bold mb-2 dark:text-white group-hover:underline">{article.title[loc]}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{article.excerpt[loc]}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="border-2 border-black dark:border-gray-700 p-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold mb-2 dark:text-white">{t('home.community.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
              {t('home.community.description')}
            </p>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              {t('home.community.joinTelegram')}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white dark:bg-gray-800">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h2 className="text-xl font-bold mb-2">{t('home.cta.title')}</h2>
          <p className="text-sm text-gray-300 mb-6">{t('home.cta.description')}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 inline-block hover:bg-gray-100"
            >
              {t('home.cta.primary')}
            </a>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 inline-block hover:bg-gray-700"
            >
              {t('home.cta.secondary')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

