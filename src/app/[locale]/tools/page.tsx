import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ToolCard } from "@/components/tools/tool-card";
import { getAvailableTools, getComingSoonTools } from "@/data/tools";
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
  const content = seoContent.tools[locale as Locale];
  return generatePageMetadata({
    title: content.title,
    description: content.description,
    path: '/tools',
    locale,
  });
}

export default async function ToolsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const availableTools = getAvailableTools();
  const comingSoonTools = getComingSoonTools();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-sm mb-2 font-mono dark:text-gray-300">[ {t('nav.tools').toUpperCase()} ]</div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{t('tools.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('tools.subtitle')}
          </p>

          {/* Available Tools */}
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            {t('tools.available')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {availableTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          {/* Coming Soon */}
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            {t('tools.comingSoon')}
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {comingSoonTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          {/* Note */}
          <div className="border-2 border-black dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
            <h3 className="font-bold mb-2 dark:text-white">{t('common.note')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('tools.note')}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

