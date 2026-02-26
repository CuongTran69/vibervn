// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface GatewaySectionProps {
  t: any;
}

export function GatewaySection({ t }: GatewaySectionProps) {
  return (
    <section className="border-b-2 border-black dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          {t("home.gateway.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-black dark:border-gray-700 p-6">
            <div className="text-2xl mb-2 dark:text-white">
              {t("home.gateway.connect.number")}
            </div>
            <h3 className="font-bold mb-2 dark:text-white">
              {t("home.gateway.connect.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("home.gateway.connect.description")}
            </p>
          </div>
          <div className="border-2 border-black dark:border-gray-700 p-6">
            <div className="text-2xl mb-2 dark:text-white">
              {t("home.gateway.simple.number")}
            </div>
            <h3 className="font-bold mb-2 dark:text-white">
              {t("home.gateway.simple.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("home.gateway.simple.description")}
            </p>
          </div>
          <div className="border-2 border-black dark:border-gray-700 p-6">
            <div className="text-2xl mb-2 dark:text-white">
              {t("home.gateway.support.number")}
            </div>
            <h3 className="font-bold mb-2 dark:text-white">
              {t("home.gateway.support.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("home.gateway.support.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

