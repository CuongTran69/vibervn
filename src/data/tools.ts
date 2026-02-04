export type ToolStatus = 'available' | 'coming-soon';

export interface Tool {
  slug: string;
  name: string;
  status: ToolStatus;
  gatewayUrl?: string;
  description: {
    vi: string;
    en: string;
  };
  tagline?: {
    vi: string;
    en: string;
  };
  products?: string[];
  strengths?: {
    vi: string[];
    en: string[];
  };
  bestFor?: {
    vi: string[];
    en: string[];
  };
}

export const tools: Tool[] = [
  {
    slug: 'augment-code',
    name: 'Augment Code',
    status: 'available',
    gatewayUrl: 'https://viber.vn/#/augment-gateway',
    description: {
      vi: 'AI coding assistant được thiết kế để hiểu sâu codebase của bạn. Với công nghệ codebase retrieval tiên tiến, Augment có thể đưa ra gợi ý code chính xác dựa trên ngữ cảnh toàn bộ dự án.',
      en: 'AI coding assistant designed to deeply understand your codebase. With advanced codebase retrieval technology, Augment can provide accurate code suggestions based on the context of your entire project.'
    },
    tagline: {
      vi: 'Codebase retrieval • Multi-file editing • Context-aware',
      en: 'Codebase retrieval • Multi-file editing • Context-aware'
    },
    products: ['VS Code Extension', 'JetBrains Plugin', 'Neovim Plugin', 'Auggie CLI'],
    strengths: {
      vi: [
        'Codebase Retrieval - Tìm kiếm semantic trong code',
        'Multi-file Editing - Chỉnh sửa nhiều file cùng lúc',
        'Context Understanding - Hiểu ngữ cảnh project',
        'IDE Integration - VS Code, JetBrains, Neovim'
      ],
      en: [
        'Codebase Retrieval - Semantic search in code',
        'Multi-file Editing - Edit multiple files at once',
        'Context Understanding - Understand project context',
        'IDE Integration - VS Code, JetBrains, Neovim'
      ]
    },
    bestFor: {
      vi: [
        'Refactoring code lớn',
        'Tìm hiểu codebase mới',
        'Code completion thông minh',
        'Debug và fix bugs'
      ],
      en: [
        'Large code refactoring',
        'Understanding new codebases',
        'Smart code completion',
        'Debug and fix bugs'
      ]
    }
  },
  {
    slug: 'claude-code',
    name: 'Claude Code',
    status: 'available',
    gatewayUrl: 'https://viber.vn/#/claude-gateway',
    description: {
      vi: 'Powered bởi Claude - AI model tiên tiến nhất từ Anthropic. Với khả năng reasoning vượt trội, Claude Code có thể giải quyết các vấn đề phức tạp và viết code chất lượng cao.',
      en: 'Powered by Claude - the most advanced AI model from Anthropic. With superior reasoning capabilities, Claude Code can solve complex problems and write high-quality code.'
    },
    tagline: {
      vi: 'Advanced reasoning • Code review • Documentation',
      en: 'Advanced reasoning • Code review • Documentation'
    },
    products: ['CLI'],
    strengths: {
      vi: [
        'Advanced Reasoning - Giải quyết vấn đề phức tạp',
        'Code Review - Đánh giá và cải thiện code',
        'Documentation - Tự động tạo tài liệu',
        'Creative Solutions - Đề xuất giải pháp sáng tạo'
      ],
      en: [
        'Advanced Reasoning - Solve complex problems',
        'Code Review - Evaluate and improve code',
        'Documentation - Auto-generate documentation',
        'Creative Solutions - Suggest creative solutions'
      ]
    },
    bestFor: {
      vi: [
        'Thiết kế architecture',
        'Code review chuyên sâu',
        'Viết documentation',
        'Giải quyết bugs phức tạp'
      ],
      en: [
        'Architecture design',
        'In-depth code review',
        'Writing documentation',
        'Solving complex bugs'
      ]
    }
  },
  {
    slug: 'opencode',
    name: 'OpenCode',
    status: 'coming-soon',
    description: {
      vi: 'Công cụ AI coding mã nguồn mở. Sắp ra mắt.',
      en: 'Open source AI coding tool. Coming soon.'
    }
  },
  {
    slug: 'ampcode',
    name: 'AmpCode',
    status: 'coming-soon',
    description: {
      vi: 'AI coding assistant thế hệ mới. Sắp ra mắt.',
      en: 'Next generation AI coding assistant. Coming soon.'
    }
  },
  {
    slug: 'antigravity',
    name: 'Antigravity',
    status: 'coming-soon',
    description: {
      vi: 'Nền tảng AI coding đột phá. Sắp ra mắt.',
      en: 'Breakthrough AI coding platform. Coming soon.'
    }
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getAvailableTools(): Tool[] {
  return tools.filter(tool => tool.status === 'available');
}

export function getComingSoonTools(): Tool[] {
  return tools.filter(tool => tool.status === 'coming-soon');
}

