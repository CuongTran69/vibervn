'use client';

import { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isLoaded) {
    return (
      <button
        onClick={() => setIsLoaded(true)}
        className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 group cursor-pointer"
        aria-label={`Play video: ${title}`}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="relative w-full aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

