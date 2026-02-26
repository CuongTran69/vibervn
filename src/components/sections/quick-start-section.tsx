// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface QuickStartSectionProps {
  t: any;
  tRich: any;
}

export function QuickStartSection({ t, tRich }: QuickStartSectionProps) {
  return (
    <section id="quick-start" className="border-b-2 border-black dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          {t("home.quickStart.title")}
        </h2>
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="border-2 border-black dark:border-gray-700 p-6">
            <div className="flex items-start gap-4">
              <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-lg font-bold shrink-0">1</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 dark:text-white">{t("home.quickStart.step1.title")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {tRich("home.quickStart.step1.description", {
                    b: (chunks: React.ReactNode) => <strong className="font-semibold text-black dark:text-white">{chunks}</strong>
                  })}
                </p>
                <a
                  href="https://viber.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                  {t("home.quickStart.step1.cta")}
                </a>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="border-2 border-black dark:border-gray-700 p-6">
            <div className="flex items-start gap-4">
              <span className="font-mono bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-lg font-bold shrink-0">2</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 dark:text-white">{t("home.quickStart.step2.title")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {t("home.quickStart.step2.description")}
                </p>
                <a
                  href="https://t.me/augmentsupporter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                  {t("home.quickStart.step2.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

