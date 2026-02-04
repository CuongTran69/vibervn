'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Article } from '@/data/articles';
import { ExternalLink } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const locale = useLocale() as 'vi' | 'en';
  const t = useTranslations();

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === 'vi' ? 'vi-VN' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <a
      href={article.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-2 border-black dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs border border-black dark:border-gray-600 px-2 py-0.5 dark:text-gray-300">
          {article.category}
        </span>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="font-bold mb-2 dark:text-white group-hover:underline">
        {article.title[locale]}
      </h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {article.excerpt[locale]}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
        <span>{formattedDate}</span>
        <span className="flex items-center gap-1">
          {t('articles.readMore')}
        </span>
      </div>
    </a>
  );
}

