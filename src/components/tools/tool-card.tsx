'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Tool } from '@/data/tools';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const locale = useLocale() as 'vi' | 'en';

  const isAvailable = tool.status === 'available';

  return (
    <div className={`border-2 border-black dark:border-gray-700 p-6 ${!isAvailable ? 'opacity-60' : ''}`}>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-bold dark:text-white">{tool.name}</h3>
        <span className={`text-xs border px-1 ${
          isAvailable 
            ? 'border-black dark:border-gray-600 dark:text-gray-300' 
            : 'border-gray-400 text-gray-400 dark:border-gray-600 dark:text-gray-500'
        }`}>
          {isAvailable ? 'SUPPORTED' : 'COMING SOON'}
        </span>
      </div>
      
      {tool.tagline && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-mono">
          {tool.tagline[locale]}
        </p>
      )}
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {tool.description[locale]}
      </p>

      {isAvailable ? (
        <Link
          href={`/tools/${tool.slug}`}
          className="text-sm underline dark:text-gray-300 hover:no-underline"
        >
          {locale === 'vi' ? 'Xem chi tiết →' : 'View details →'}
        </Link>
      ) : (
        <span className="text-sm text-gray-400 dark:text-gray-500">
          {locale === 'vi' ? 'Sắp ra mắt' : 'Coming soon'}
        </span>
      )}
    </div>
  );
}

