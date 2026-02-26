"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";

const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";
const COLUMN_COUNT = 20;

export function KonamiCode() {
  const t = useTranslations("konami");
  const [active, setActive] = useState(false);
  const seqIndex = useRef(0);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const dismiss = useCallback(() => {
    setActive(false);
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (active) { dismiss(); return; }

      const expected = KONAMI_SEQUENCE[seqIndex.current];
      if (e.key.toLowerCase() === expected.toLowerCase()) {
        seqIndex.current++;
        if (seqIndex.current === KONAMI_SEQUENCE.length) {
          seqIndex.current = 0;
          setActive(true);
          dismissTimer.current = setTimeout(dismiss, 5000);
        }
      } else {
        seqIndex.current = 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    };
  }, [active, dismiss]);

  if (!active) return null;

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 cursor-pointer"
        onClick={dismiss}
      >
        <div className="text-green-400 text-2xl font-mono font-bold animate-pulse">
          {t("message")}
        </div>
      </div>
    );
  }

  const columns = Array.from({ length: COLUMN_COUNT }, (_, i) => ({
    left: `${(i / COLUMN_COUNT) * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${1.5 + Math.random() * 2}s`,
    chars: Array.from({ length: 20 }, () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]).join("\n"),
  }));

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden bg-black cursor-pointer"
      onClick={dismiss}
    >
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute top-0 text-green-400 font-mono text-xs whitespace-pre leading-tight opacity-80 matrix-column"
          style={{
            left: col.left,
            animationDelay: col.delay,
            animationDuration: col.duration,
          }}
        >
          {col.chars}
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-green-400 text-3xl md:text-5xl font-mono font-bold text-center px-4 drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]">
          {t("message")}
        </div>
      </div>
    </div>
  );
}

