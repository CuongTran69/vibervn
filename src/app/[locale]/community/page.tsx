import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CommunityPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-sm mb-2 font-mono dark:text-gray-300">[ {t('nav.community').toUpperCase()} ]</div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{t('nav.community')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('footer.description')}
          </p>

          {/* Telegram Community */}
          <div className="border-2 border-black dark:border-gray-700 p-8 mb-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold mb-2 dark:text-white">Telegram Community</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
              Join group Telegram để chém gió về coding, vibe code, AI tools,
              và mọi thứ liên quan đến lập trình.
            </p>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Join Telegram →
            </a>
          </div>

          {/* What you get */}
          <h2 className="text-xl font-bold mb-4 dark:text-white">Trong group có gì?</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="border-2 border-black dark:border-gray-700 p-4">
              <h3 className="font-bold mb-1 dark:text-white">🗣️ Chém gió về coding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Chia sẻ kinh nghiệm, tips & tricks, best practices
              </p>
            </div>
            <div className="border-2 border-black dark:border-gray-700 p-4">
              <h3 className="font-bold mb-1 dark:text-white">🤖 AI Coding Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Thảo luận về Augment, Claude, Cursor, Copilot...
              </p>
            </div>
            <div className="border-2 border-black dark:border-gray-700 p-4">
              <h3 className="font-bold mb-1 dark:text-white">🎯 Vibe Coding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cách code hiệu quả với AI, workflow optimization
              </p>
            </div>
            <div className="border-2 border-black dark:border-gray-700 p-4">
              <h3 className="font-bold mb-1 dark:text-white">🆘 Hỗ trợ 24/7</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hỏi đáp, troubleshooting, giúp đỡ lẫn nhau
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="border-2 border-black dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
            <h2 className="font-bold mb-2 dark:text-white">Cần hỗ trợ riêng?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Nếu cần hỗ trợ về Gateway hoặc có câu hỏi riêng,
              liên hệ trực tiếp qua Telegram.
            </p>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline dark:text-gray-300"
            >
              @augmentsupporter →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

