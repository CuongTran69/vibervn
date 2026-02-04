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

export default async function ProductsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-sm mb-2 font-mono dark:text-gray-300">[ {t('nav.tools').toUpperCase()} ]</div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{t('tools.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('tools.subtitle')}
          </p>

          {/* Augment Code */}
          <div className="border-2 border-black dark:border-gray-700 p-6 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold dark:text-white">{t('tools.augmentCode.name')}</h2>
              <span className="text-xs border border-black dark:border-gray-600 px-1 dark:text-gray-300">SUPPORTED</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('tools.augmentCode.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-bold mb-2 dark:text-white">{t('tools.strengths')}</h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Codebase Retrieval - Tìm kiếm semantic trong code</li>
                  <li>• Multi-file Editing - Chỉnh sửa nhiều file cùng lúc</li>
                  <li>• Context Understanding - Hiểu ngữ cảnh project</li>
                  <li>• IDE Integration - VS Code, JetBrains, Neovim</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 dark:text-white">{t('tools.bestFor')}</h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Refactoring code lớn</li>
                  <li>• Tìm hiểu codebase mới</li>
                  <li>• Code completion thông minh</li>
                  <li>• Debug và fix bugs</li>
                </ul>
              </div>
            </div>
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline dark:text-gray-300"
            >
              {t('tools.accessGateway')} →
            </a>
          </div>

          {/* Claude Code */}
          <div className="border-2 border-black dark:border-gray-700 p-6 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold dark:text-white">{t('tools.claudeCode.name')}</h2>
              <span className="text-xs border border-black dark:border-gray-600 px-1 dark:text-gray-300">SUPPORTED</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('tools.claudeCode.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-bold mb-2 dark:text-white">{t('tools.strengths')}</h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Advanced Reasoning - Giải quyết vấn đề phức tạp</li>
                  <li>• Code Review - Đánh giá và cải thiện code</li>
                  <li>• Documentation - Tự động tạo tài liệu</li>
                  <li>• Creative Solutions - Đề xuất giải pháp sáng tạo</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 dark:text-white">{t('tools.bestFor')}</h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Thiết kế architecture</li>
                  <li>• Code review chuyên sâu</li>
                  <li>• Viết documentation</li>
                  <li>• Giải quyết bugs phức tạp</li>
                </ul>
              </div>
            </div>
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline dark:text-gray-300"
            >
              {t('tools.accessGateway')} →
            </a>
          </div>

          {/* Note */}
          <div className="border-2 border-black dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
            <h3 className="font-bold mb-2 dark:text-white">Lưu ý</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gateway chỉ cung cấp kết nối và hỗ trợ thanh toán.
              Các công cụ trên được phát triển bởi Augment Code Inc. và Anthropic.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

