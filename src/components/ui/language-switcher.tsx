'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, Locale } from '@/i18n';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    if (!pathname) return;

    // Get the path without the current locale prefix
    // pathname is like /vi/tools or /en/tools
    const segments = pathname.split('/');
    // segments[0] is empty string, segments[1] is locale
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    }
    const newPath = segments.join('/') || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 border border-black dark:border-gray-600 p-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 text-xs font-mono uppercase ${
            locale === loc
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300'
          }`}
          aria-label={`Switch to ${loc === 'vi' ? 'Vietnamese' : 'English'}`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}

