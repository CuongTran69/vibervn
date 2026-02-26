// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CtaSectionProps {
  t: any;
}

export function CtaSection({ t }: CtaSectionProps) {
  return (
    <section id="cta" className="bg-black text-white dark:bg-gray-800">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center">
        <h2 className="text-xl font-bold mb-2">{t("home.cta.title")}</h2>
        <p className="text-sm text-gray-300 mb-6">
          {t("home.cta.description")}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://viber.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 inline-block hover:bg-gray-100"
          >
            {t("home.cta.primary")}
          </a>
          <a
            href="https://t.me/augmentsupporter"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 inline-block hover:bg-gray-700"
          >
            {t("home.cta.secondary")}
          </a>
        </div>
      </div>
    </section>
  );
}

