"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { tools } from "@/data/tools";
import { Locale } from "@/i18n";

interface HistoryEntry {
  command: string;
  output: string[];
}

export function TerminalPlayground() {
  const t = useTranslations("terminal");
  const locale = useLocale() as Locale;
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const executeCommand = useCallback(
    (raw: string): string[] => {
      const trimmed = raw.trim();
      if (!trimmed) return [];

      const parts = trimmed.split(/\s+/);
      const cmd = parts[0].toLowerCase();

      if (trimmed.toLowerCase().startsWith("sudo rm")) {
        return [t("commands.sudo.output")];
      }

      switch (cmd) {
        case "help": {
          const lines = [t("commands.help.output")];
          lines.push("  help          — " + t("commands.help.desc"));
          lines.push("  list-tools    — " + t("commands.listTools.desc"));
          lines.push("  compare <a> <b> — " + t("commands.compare.desc"));
          lines.push("  connect <tool>  — " + t("commands.connect.desc"));
          lines.push("  clear         — " + t("commands.clear.desc"));
          lines.push("  cat           — " + t("commands.cat.desc"));
          return lines;
        }
        case "list-tools": {
          const lines: string[] = [];
          const available = tools.filter((tl) => tl.status === "available");
          const coming = tools.filter((tl) => tl.status === "coming-soon");
          lines.push(`── ${t("commands.listTools.available")} ──`);
          available.forEach((tl) => lines.push(`  ✓ ${tl.name} — ${tl.description[locale]?.slice(0, 60)}...`));
          lines.push(`── ${t("commands.listTools.comingSoon")} ──`);
          coming.forEach((tl) => lines.push(`  ◌ ${tl.name} — ${tl.description[locale]?.slice(0, 60)}...`));
          return lines;
        }
        case "compare": {
          if (parts.length < 3) return [t("commands.compare.usage")];
          const slug1 = parts[1].toLowerCase();
          const slug2 = parts[2].toLowerCase();
          const t1 = tools.find((tl) => tl.slug.includes(slug1) || tl.name.toLowerCase().includes(slug1));
          const t2 = tools.find((tl) => tl.slug.includes(slug2) || tl.name.toLowerCase().includes(slug2));
          if (!t1) return [t("commands.compare.notFound", { tool: parts[1] })];
          if (!t2) return [t("commands.compare.notFound", { tool: parts[2] })];
          const lines: string[] = [];
          lines.push(`┌─ ${t1.name} vs ${t2.name} ─┐`);
          lines.push(`\n${t("commands.compare.strengths")}:`);
          lines.push(`  ${t1.name}:`);
          t1.strengths?.[locale]?.forEach((s) => lines.push(`    • ${s}`));
          lines.push(`  ${t2.name}:`);
          t2.strengths?.[locale]?.forEach((s) => lines.push(`    • ${s}`));
          lines.push(`\n${t("commands.compare.bestFor")}:`);
          lines.push(`  ${t1.name}:`);
          t1.bestFor?.[locale]?.forEach((b) => lines.push(`    • ${b}`));
          lines.push(`  ${t2.name}:`);
          t2.bestFor?.[locale]?.forEach((b) => lines.push(`    • ${b}`));
          return lines;
        }
        case "connect": {
          if (parts.length < 2) return [t("commands.connect.desc")];
          const slug = parts[1].toLowerCase();
          const tool = tools.find((tl) => tl.slug.includes(slug) || tl.name.toLowerCase().includes(slug));
          if (!tool) return [t("commands.connect.notFound", { tool: parts[1] })];
          if (tool.status === "coming-soon") return [t("commands.connect.comingSoon", { tool: tool.name })];
          return [t("commands.connect.url", { url: tool.gatewayUrl || tool.homepageUrl || "#" })];
        }
        case "clear":
          setHistory([]);
          return [];
        case "cat":
          return t("commands.cat.output").split("\\n");
        default:
          return [t("notFound", { cmd })];
      }
    },
    [t, locale]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const output = executeCommand(input);
    if (input.trim().toLowerCase() !== "clear") {
      setHistory((prev) => [...prev, { command: input, output }]);
    }
    if (input.trim()) {
      setCmdHistory((prev) => [input, ...prev]);
    }
    setInput("");
    setCmdIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(next);
      if (cmdHistory[next]) setInput(cmdHistory[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = cmdIndex - 1;
      if (next < 0) { setCmdIndex(-1); setInput(""); }
      else { setCmdIndex(next); setInput(cmdHistory[next]); }
    }
  };

  return (
    <section id="terminal" className="border-b-2 border-black dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          {">"} {t("title")} <span className="animate-cursor-blink">_</span>
        </h2>
        <div
          className="bg-gray-950 border-2 border-black dark:border-gray-600 rounded-sm overflow-hidden font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
          role="application"
          aria-label={t("title")}
        >
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-900 border-b border-gray-700">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-gray-400 text-xs">{t("title")}</span>
          </div>
          <div ref={scrollRef} className="p-4 h-72 overflow-y-auto">
            <div className="text-green-400 mb-2">{t("welcome")}</div>
            {history.map((entry, i) => (
              <div key={i} className="mb-2">
                <div className="text-green-300">
                  <span className="text-blue-400">{t("prompt")}</span> {entry.command}
                </div>
                {entry.output.map((line, j) => (
                  <div key={j} className="text-gray-300 whitespace-pre-wrap pl-2">{line}</div>
                ))}
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-blue-400 mr-2 shrink-0">{t("prompt")}</span>
              <input
                ref={inputRef}
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-green-300 outline-none caret-green-400"
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal command input"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

