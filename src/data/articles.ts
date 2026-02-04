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

