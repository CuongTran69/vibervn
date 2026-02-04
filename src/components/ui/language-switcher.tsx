'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { locales, Locale } from '@/i18n';

const LOCALE_STORAGE_KEY = 'preferred-locale';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // On mount, check if user has a saved locale preference
  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;

    // If saved locale exists and differs from current, redirect
    if (savedLocale && locales.includes(savedLocale) && savedLocale !== locale) {
      if (!pathname) return;

      const segments = pathname.split('/');
      if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
        segments[1] = savedLocale;
      }
      const newPath = segments.join('/') || `/${savedLocale}`;
      router.replace(newPath);
    }
  }, []); // Only run on mount

  const switchLocale = (newLocale: Locale) => {
    if (!pathname) return;

    // Save preference to localStorage
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);

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

