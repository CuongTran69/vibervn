export interface Video {
  id: string;
  youtubeId: string;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  category: 'setup' | 'tutorials' | 'tips';
  tool?: string;
}

export const videos: Video[] = [
  {
    id: 'augment-setup',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: {
      vi: 'Hướng dẫn cài đặt Augment Code',
      en: 'How to Setup Augment Code'
    },
    description: {
      vi: 'Video hướng dẫn chi tiết cách cài đặt và cấu hình Augment Code trên VS Code.',
      en: 'Detailed guide on how to install and configure Augment Code on VS Code.'
    },
    category: 'setup',
    tool: 'augment-code'
  },
  {
    id: 'claude-setup',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: {
      vi: 'Hướng dẫn cài đặt Claude Code',
      en: 'How to Setup Claude Code'
    },
    description: {
      vi: 'Video hướng dẫn chi tiết cách cài đặt và sử dụng Claude Code CLI.',
      en: 'Detailed guide on how to install and use Claude Code CLI.'
    },
    category: 'setup',
    tool: 'claude-code'
  },
  {
    id: 'augment-basics',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: {
      vi: 'Sử dụng cơ bản Augment Code',
      en: 'Augment Code Basics'
    },
    description: {
      vi: 'Học cách sử dụng các tính năng cơ bản của Augment Code.',
      en: 'Learn how to use basic features of Augment Code.'
    },
    category: 'tutorials',
    tool: 'augment-code'
  },
  {
    id: 'vibe-coding-tips',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: {
      vi: 'Mẹo Vibe Coding hiệu quả',
      en: 'Effective Vibe Coding Tips'
    },
    description: {
      vi: 'Các mẹo và thủ thuật để code hiệu quả hơn với AI.',
      en: 'Tips and tricks for more effective coding with AI.'
    },
    category: 'tips'
  }
];

export function getVideosByCategory(category: Video['category']): Video[] {
  return videos.filter(video => video.category === category);
}

export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
}

