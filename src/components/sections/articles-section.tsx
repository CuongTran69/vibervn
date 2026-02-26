import { Article } from "@/data/articles";
import { Locale } from "@/i18n";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ArticlesSectionProps {
  t: any;
  loc: Locale;
  articles: Article[];
}

export function ArticlesSection({ t, loc, articles }: ArticlesSectionProps) {
  return (
    <section className="border-b-2 border-black dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          {t("home.articles.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              <span className="text-xs border border-black dark:border-gray-600 px-2 py-0.5 dark:text-gray-300 mb-2 inline-block">
                {article.category}
              </span>
              <h3 className="font-bold mb-2 dark:text-white group-hover:underline">
                {article.title[loc]}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {article.excerpt[loc]}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

