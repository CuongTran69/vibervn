"use client";

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
            <span className="text-xs text-gray-400 hidden md:inline">{t('shortcuts.hint')}</span>
            <a href="https://t.me/augmentsupporter" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-gray-300">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

