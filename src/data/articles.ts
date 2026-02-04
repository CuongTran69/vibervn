export interface Article {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  excerpt: {
    vi: string;
    en: string;
  };
  category: string;
  date: string;
  externalUrl: string;
}

export const articles: Article[] = [
  {
    id: 'openspec-user-guide',
    title: {
      vi: 'OpenSpec - Hướng Dẫn Sử Dụng: Quản lý Specs cho AI Coding',
      en: 'OpenSpec - User Guide: Managing Specs for AI Coding'
    },
    excerpt: {
      vi: 'Hướng dẫn toàn diện về OpenSpec với các commands: explore, new, ff, continue, apply, verify, sync, archive. Bao gồm use cases và flow diagrams chi tiết.',
      en: 'Comprehensive guide to OpenSpec with commands: explore, new, ff, continue, apply, verify, sync, archive. Includes detailed use cases and flow diagrams.'
    },
    category: 'Tutorials',
    date: '2026-02-04',
    externalUrl: 'https://viber.vn/#/p/TBXbncOW'
  },
  {
    id: 'speckit-introduction',
    title: {
      vi: 'SpecKit nhập môn: Hướng dẫn sử dụng Spec Kit cho AI Coding',
      en: 'SpecKit Introduction: A Guide to Using Spec Kit for AI Coding'
    },
    excerpt: {
      vi: 'Tìm hiểu cách sử dụng SpecKit để quản lý specs trong AI coding - từ task nhỏ đến feature phức tạp, planning, implement, validate và sync legacy code.',
      en: 'Learn how to use SpecKit for managing specs in AI coding - from small tasks to complex features, planning, implementation, validation, and syncing legacy code.'
    },
    category: 'Tutorials',
    date: '2026-02-04',
    externalUrl: 'https://viber.vn/#/p/WEoADXJ3'
  },
  {
    id: 'what-is-vibe-coding',
    title: {
      vi: 'Vibe Coding là gì? Tại sao nó đang thay đổi cách lập trình?',
      en: 'What is Vibe Coding? Why is it changing how we code?'
    },
    excerpt: {
      vi: 'Tìm hiểu về xu hướng Vibe Coding - cách tiếp cận mới trong lập trình với sự hỗ trợ của AI.',
      en: 'Learn about the Vibe Coding trend - a new approach to programming with AI assistance.'
    },
    category: 'Trends',
    date: '2024-01-15',
    externalUrl: 'https://viber.vn/#/posts'
  },
  {
    id: 'augment-vs-cursor',
    title: {
      vi: 'So sánh Augment Code vs Cursor: Nên chọn tool nào?',
      en: 'Augment Code vs Cursor: Which tool should you choose?'
    },
    excerpt: {
      vi: 'Phân tích chi tiết ưu nhược điểm của Augment Code và Cursor để giúp bạn chọn công cụ phù hợp.',
      en: 'Detailed analysis of pros and cons of Augment Code and Cursor to help you choose the right tool.'
    },
    category: 'Comparison',
    date: '2024-01-10',
    externalUrl: 'https://viber.vn/#/posts'
  },
  {
    id: 'claude-code-tips',
    title: {
      vi: '10 mẹo sử dụng Claude Code hiệu quả',
      en: '10 tips for using Claude Code effectively'
    },
    excerpt: {
      vi: 'Các mẹo và thủ thuật giúp bạn tận dụng tối đa sức mạnh của Claude Code.',
      en: 'Tips and tricks to help you maximize the power of Claude Code.'
    },
    category: 'Tips',
    date: '2024-01-05',
    externalUrl: 'https://viber.vn/#/posts'
  },
  {
    id: 'ai-coding-2024',
    title: {
      vi: 'AI Coding năm 2024: Xu hướng và dự đoán',
      en: 'AI Coding in 2024: Trends and predictions'
    },
    excerpt: {
      vi: 'Những xu hướng AI coding đáng chú ý trong năm 2024 và tương lai của lập trình.',
      en: 'Notable AI coding trends in 2024 and the future of programming.'
    },
    category: 'Trends',
    date: '2024-01-01',
    externalUrl: 'https://viber.vn/#/posts'
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

