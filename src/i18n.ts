import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['vi', 'en'] as const;
export const defaultLocale = 'vi' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) notFound();

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

// Helper to get messages for static generation
export async function getMessagesForLocale(locale: string) {
  return (await import(`../messages/${locale}.json`)).default;
}

