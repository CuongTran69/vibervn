import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArticleCard } from "@/components/articles/article-card";
import { articles } from "@/data/articles";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ArticlesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-sm mb-2 font-mono dark:text-gray-300">[ {t('nav.articles').toUpperCase()} ]</div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{t('articles.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('articles.subtitle')}
          </p>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Note about external links */}
          <div className="border-2 border-black dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
            <h3 className="font-bold mb-2 dark:text-white">{t('common.note')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('language.vi') === 'Tiếng Việt'
                ? 'Bài viết đầy đủ được đăng trên Gateway (viber.vn). Click vào bài viết để đọc chi tiết.'
                : 'Full articles are published on Gateway (viber.vn). Click on an article to read the details.'}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

