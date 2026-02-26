import { TerminalTyping } from "@/components/terminal-typing";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface HeroSectionProps {
  t: any;
  tRich: any;
}

export function HeroSection({ t, tRich }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-20 border-b-2 border-black dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="text-sm mb-4 font-mono dark:text-gray-300">
          [ GATEWAY ]
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 dark:text-white">
          {t("home.hero.title")}
        </h1>
        <div className="text-xl md:text-2xl font-mono mb-6">
          <TerminalTyping />
        </div>
        <p className="text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-400">
          {tRich("home.hero.description", {
            b: (chunks: React.ReactNode) => (
              <strong className="font-semibold text-black dark:text-white">
                {chunks}
              </strong>
            ),
          })}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://viber.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {t("home.hero.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}

