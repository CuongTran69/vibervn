'use client';

import { useLocale } from 'next-intl';
import { YouTubeEmbed } from './youtube-embed';
import { Video } from '@/data/videos';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const locale = useLocale() as 'vi' | 'en';

  return (
    <div className="border-2 border-black dark:border-gray-700">
      <YouTubeEmbed videoId={video.youtubeId} title={video.title[locale]} />
      <div className="p-4">
        <h3 className="font-bold mb-2 dark:text-white">{video.title[locale]}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {video.description[locale]}
        </p>
      </div>
    </div>
  );
}

