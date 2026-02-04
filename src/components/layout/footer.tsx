"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t-2 border-black dark:border-gray-700 py-8 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm dark:text-gray-400">
            © {new Date().getFullYear()} VIBER.VN — {t('footer.description')}
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/tools" className="hover:underline dark:text-gray-300">{t('nav.tools')}</Link>
            <Link href="/community" className="hover:underline dark:text-gray-300">{t('nav.community')}</Link>
            <Link href="/docs" className="hover:underline dark:text-gray-300">{t('nav.docs')}</Link>
            <a href="https://t.me/augmentsupporter" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-gray-300">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

