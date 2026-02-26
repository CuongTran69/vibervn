import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAvailableTools, getComingSoonTools } from "@/data/tools";
import { articles } from "@/data/articles";
import { locales, Locale } from "@/i18n";
import { generatePageMetadata, seoContent } from "@/lib/seo";
import {
  HeroSection,
  GatewaySection,
  QuickStartSection,
  ToolsSection,
  VideosSection,
  ArticlesSection,
  CommunitySection,
  CtaSection,
} from "@/components/sections";
import { TerminalPlayground } from "@/components/terminal-playground";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = seoContent.home[locale as Locale];
  return generatePageMetadata({
    title: content.title,
    description: content.description,
    path: "",
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

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSection t={t} tRich={t.rich} />
      <GatewaySection t={t} />
      <QuickStartSection t={t} tRich={t.rich} />
      <TerminalPlayground />
      <ToolsSection t={t} loc={loc} availableTools={availableTools} comingSoonTools={comingSoonTools} />
      <VideosSection t={t} tDynamic={t} loc={loc} />
      <ArticlesSection t={t} loc={loc} articles={articles} />
      <CommunitySection t={t} />
      <CtaSection t={t} />
      <Footer />
    </main>
  );
}
