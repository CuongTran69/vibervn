import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VideoCard } from "@/components/videos/video-card";
import { videos, getVideosByCategory } from "@/data/videos";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function VideosPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  
  const setupVideos = getVideosByCategory('setup');
  const tutorialVideos = getVideosByCategory('tutorials');
  const tipsVideos = getVideosByCategory('tips');

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-sm mb-2 font-mono dark:text-gray-300">[ {t('nav.videos').toUpperCase()} ]</div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{t('videos.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('videos.subtitle')}
          </p>

          {/* Setup Videos */}
          {setupVideos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-4 dark:text-white">
                {t('videos.categories.setup')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {setupVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </>
          )}

          {/* Tutorial Videos */}
          {tutorialVideos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-4 dark:text-white">
                {t('videos.categories.tutorials')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {tutorialVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </>
          )}

          {/* Tips Videos */}
          {tipsVideos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-4 dark:text-white">
                {t('videos.categories.tips')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {tipsVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </>
          )}

          {/* Note */}
          <div className="border-2 border-black dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
            <h3 className="font-bold mb-2 dark:text-white">{t('common.note')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('language.vi') === 'Tiếng Việt' 
                ? 'Video được cập nhật thường xuyên. Subscribe channel để nhận thông báo video mới.'
                : 'Videos are updated regularly. Subscribe to the channel to get notified of new videos.'}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

