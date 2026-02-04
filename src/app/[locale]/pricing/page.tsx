import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  redirect(`/${locale}/community`);
}

