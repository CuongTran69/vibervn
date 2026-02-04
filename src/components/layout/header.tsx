"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();

  const navigation = [
    { name: t('nav.tools'), href: "/tools" },
    { name: t('nav.community'), href: "/community" },
    { name: t('nav.docs'), href: "/docs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b-2 border-black dark:border-gray-700">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold dark:text-white">VIBER.VN</span>
          <span className="text-xs border border-black dark:border-gray-600 px-1 dark:text-gray-300">GATEWAY</span>
        </Link>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            className="p-1 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-6 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm hover:underline dark:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="https://viber.vn/#/referral"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            {t('home.hero.cta')}
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm hover:underline dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://viber.vn/#/referral"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm text-center"
            >
              {t('home.hero.cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

