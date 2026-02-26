// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CommunitySectionProps {
  t: any;
}

export function CommunitySection({ t }: CommunitySectionProps) {
  return (
    <section id="community" className="border-b-2 border-black dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="border-2 border-black dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-2xl font-bold mb-2 dark:text-white">
            {t("home.community.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
            {t("home.community.description")}
          </p>
          <a
            href="https://t.me/augmentsupporter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            {t("home.community.joinTelegram")}
          </a>
        </div>
      </div>
    </section>
  );
}

