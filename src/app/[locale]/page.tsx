import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { getAvailableTools, getComingSoonTools } from "@/data/tools";
import { videos } from "@/data/videos";
import { articles } from "@/data/articles";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const availableTools = getAvailableTools();
  const comingSoonTools = getComingSoonTools();
  const previewVideos = videos.slice(0, 2);
  const previewArticles = articles.slice(0, 2);

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
            {t('home.hero.description')}
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

      {/* Available Tools */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('home.tools.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            {availableTools.map((tool) => (
              <a
                key={tool.slug}
                href={tool.gatewayUrl || `https://viber.vn`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold dark:text-white">{tool.name}</h3>
                  <span className="text-xs border border-black dark:border-gray-600 px-1 dark:text-gray-300">SUPPORTED</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {tool.description.vi}
                </p>
                {tool.tagline && (
                  <div className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                    {tool.tagline.vi}
                  </div>
                )}
              </a>
            ))}
          </div>
          {/* Coming Soon */}
          <div className="flex flex-wrap gap-3 mb-6">
            {comingSoonTools.map((tool) => (
              <div key={tool.slug} className="border border-gray-300 dark:border-gray-600 px-3 py-2 opacity-60">
                <span className="text-sm dark:text-gray-400">{tool.name}</span>
                <span className="text-xs ml-2 text-gray-400">{t('common.comingSoon')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Preview */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('home.videos.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {previewVideos.map((video) => (
              <div key={video.id} className="border-2 border-black dark:border-gray-700">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title.vi}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 dark:text-white">{video.title.vi}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{video.description.vi}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/videos" className="underline text-sm dark:text-gray-300">
              {t('home.videos.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="border-b-2 border-black dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('home.articles.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {previewArticles.map((article) => (
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
                <h3 className="font-bold mb-2 dark:text-white group-hover:underline">{article.title.vi}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{article.excerpt.vi}</p>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://viber.vn/#/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm dark:text-gray-300"
            >
              {t('home.articles.viewAll')}
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

