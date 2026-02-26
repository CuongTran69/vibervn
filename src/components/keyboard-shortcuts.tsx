"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { locales, Locale } from "@/i18n";

const NAV_SHORTCUTS: Record<string, string> = {
  h: "hero", t: "tools", v: "videos", a: "articles", c: "community",
};

export function KeyboardShortcuts() {
  const t = useTranslations("shortcuts");
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [gMode, setGMode] = useState(false);
  const gTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevFocus = useRef<HTMLElement | null>(null);

  const switchLocale = useCallback(() => {
    if (!pathname) return;
    const next = locale === "vi" ? "en" : "vi";
    localStorage.setItem("preferred-locale", next);
    const segs = pathname.split("/");
    if (segs.length > 1 && locales.includes(segs[1] as Locale)) segs[1] = next;
    router.push(segs.join("/") || `/${next}`);
  }, [locale, pathname, router]);

  const isInputFocused = useCallback(() => {
    const el = document.activeElement;
    if (!el) return false;
    const tag = el.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if ((el as HTMLElement).isContentEditable) return true;
    return false;
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (isInputFocused()) return;

      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        prevFocus.current?.focus();
        return;
      }

      if (gMode) {
        setGMode(false);
        if (gTimer.current) clearTimeout(gTimer.current);
        const sectionId = NAV_SHORTCUTS[e.key.toLowerCase()];
        if (sectionId) {
          e.preventDefault();
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      switch (e.key) {
        case "g":
          setGMode(true);
          gTimer.current = setTimeout(() => setGMode(false), 1000);
          break;
        case "?":
          e.preventDefault();
          prevFocus.current = document.activeElement as HTMLElement;
          setShowModal(true);
          break;
        case "d":
          setTheme(theme === "dark" ? "light" : "dark");
          break;
        case "l":
          switchLocale();
          break;
        case "/":
          e.preventDefault();
          document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => document.getElementById("terminal-input")?.focus(), 400);
          break;
      }
    };

    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      if (gTimer.current) clearTimeout(gTimer.current);
    };
  }, [gMode, showModal, theme, setTheme, switchLocale, isInputFocused]);

  if (!showModal) return null;

  const navKeys = Object.entries(NAV_SHORTCUTS);
  const sectionNames: Record<string, string> = {
    hero: t("sections.hero"), tools: t("sections.tools"),
    videos: t("sections.videos"), articles: t("sections.articles"),
    community: t("sections.community"),
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => { setShowModal(false); prevFocus.current?.focus(); }}
      role="dialog"
      aria-modal="true"
      aria-label={t("title")}
    >
      <div
        className="bg-white dark:bg-gray-900 border-2 border-black dark:border-gray-600 p-6 max-w-md w-full mx-4 font-mono text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold dark:text-white">{t("title")}</h3>
          <button onClick={() => { setShowModal(false); prevFocus.current?.focus(); }} className="text-gray-500 hover:text-black dark:hover:text-white" aria-label={t("actionLabels.close")}>✕</button>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-xs uppercase text-gray-500 mb-2">{t("navigation")}</h4>
          {navKeys.map(([key, id]) => (
            <div key={key} className="flex justify-between py-1 dark:text-gray-300">
              <span>{t("goTo", { section: sectionNames[id] })}</span>
              <kbd className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs border border-gray-300 dark:border-gray-600">g → {key}</kbd>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase text-gray-500 mb-2">{t("actions")}</h4>
          {[
            ["?", t("actionLabels.help")],
            ["d", t("actionLabels.theme")],
            ["l", t("actionLabels.language")],
            ["/", t("actionLabels.terminal")],
            ["Esc", t("actionLabels.close")],
          ].map(([key, label]) => (
            <div key={key} className="flex justify-between py-1 dark:text-gray-300">
              <span>{label}</span>
              <kbd className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs border border-gray-300 dark:border-gray-600">{key}</kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

