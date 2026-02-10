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
  homepageUrl?: string;
}

export const tools: Tool[] = [
  {
    slug: 'augment-code',
    name: 'Augment Code',
    status: 'available',
    gatewayUrl: 'https://viber.vn/#/augment-gateway',
    homepageUrl: 'https://www.augmentcode.com/',
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
    homepageUrl: 'https://claude.com/product/claude-code',
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
    status: 'available',
    gatewayUrl: 'https://viber.vn/#/claude-gateway',
    homepageUrl: 'https://opencode.ai/',
    description: {
      vi: 'Công cụ AI coding mã nguồn mở, hỗ trợ nhiều LLM providers. OpenCode mang đến trải nghiệm coding với AI linh hoạt, minh bạch và có thể tùy chỉnh hoàn toàn.',
      en: 'Open source AI coding tool supporting multiple LLM providers. OpenCode delivers a flexible, transparent, and fully customizable AI coding experience.'
    },
    tagline: {
      vi: 'Open source • Multi-provider • Tùy chỉnh cao',
      en: 'Open source • Multi-provider • Highly customizable'
    },
    products: ['CLI', 'Terminal UI'],
    strengths: {
      vi: [
        'Open Source - Mã nguồn mở, minh bạch hoàn toàn',
        'Multi-Provider - Hỗ trợ nhiều LLM providers khác nhau',
        'Customizable - Tùy chỉnh workflow theo nhu cầu',
        'Terminal UI - Giao diện terminal trực quan và mạnh mẽ'
      ],
      en: [
        'Open Source - Fully transparent and open source',
        'Multi-Provider - Support for multiple LLM providers',
        'Customizable - Customize workflows to your needs',
        'Terminal UI - Intuitive and powerful terminal interface'
      ]
    },
    bestFor: {
      vi: [
        'Developers yêu thích open source',
        'Tùy chỉnh AI workflow riêng',
        'Làm việc trong terminal',
        'Sử dụng nhiều LLM providers'
      ],
      en: [
        'Developers who love open source',
        'Custom AI workflow setups',
        'Terminal-based workflows',
        'Using multiple LLM providers'
      ]
    }
  },
  {
    slug: 'openclaw',
    name: 'OpenClaw',
    status: 'available',
    gatewayUrl: 'https://viber.vn/#/claude-gateway',
    homepageUrl: 'https://openclaw.ai/',
    description: {
      vi: 'Trợ lý AI cá nhân mã nguồn mở, chạy trên thiết bị của bạn. OpenClaw kết nối qua các ứng dụng nhắn tin (Telegram, WhatsApp, Slack, Discord, Zalo...) và có toàn quyền truy cập hệ thống, bộ nhớ liên tục 24/7.',
      en: 'Open-source personal AI assistant that runs on your own devices. OpenClaw connects through messaging apps (Telegram, WhatsApp, Slack, Discord, Zalo...) with full system access and persistent 24/7 memory.'
    },
    tagline: {
      vi: 'Local-first • Multi-channel • Trợ lý AI cá nhân 24/7',
      en: 'Local-first • Multi-channel • 24/7 Personal AI assistant'
    },
    products: ['CLI', 'WebChat', 'macOS App', 'iOS/Android Node'],
    strengths: {
      vi: [
        'Multi-Channel - Kết nối qua Telegram, WhatsApp, Slack, Discord, Zalo',
        'Local-First - Chạy trên thiết bị của bạn, dữ liệu thuộc về bạn',
        'Always-On - Hoạt động 24/7 với bộ nhớ liên tục',
        'Hackable - Tự viết skills, tự mở rộng khả năng'
      ],
      en: [
        'Multi-Channel - Connect via Telegram, WhatsApp, Slack, Discord, Zalo',
        'Local-First - Runs on your devices, your data stays yours',
        'Always-On - 24/7 operation with persistent memory',
        'Hackable - Write your own skills, self-extending capabilities'
      ]
    },
    bestFor: {
      vi: [
        'Trợ lý AI cá nhân qua chat',
        'Tự động hóa công việc hàng ngày',
        'Điều khiển hệ thống và trình duyệt',
        'Quản lý đa nền tảng nhắn tin'
      ],
      en: [
        'Personal AI assistant via chat',
        'Automating daily tasks',
        'System and browser control',
        'Multi-platform messaging management'
      ]
    }
  },
  {
    slug: 'ampcode',
    name: 'AmpCode',
    status: 'coming-soon',
    homepageUrl: 'https://ampcode.com/',
    description: {
      vi: 'AI coding assistant thế hệ mới từ Sourcegraph. AmpCode kết hợp code intelligence với AI để mang đến trải nghiệm coding nhanh hơn, chính xác hơn.',
      en: 'Next generation AI coding assistant from Sourcegraph. AmpCode combines code intelligence with AI to deliver a faster, more accurate coding experience.'
    },
    tagline: {
      vi: 'Code intelligence • AI-powered • Fast iteration',
      en: 'Code intelligence • AI-powered • Fast iteration'
    },
    products: ['VS Code Extension'],
    strengths: {
      vi: [
        'Code Intelligence - Hiểu sâu cấu trúc code',
        'Fast Iteration - Vòng lặp phát triển nhanh',
        'AI-Powered Search - Tìm kiếm code thông minh',
        'Context-Aware - Gợi ý dựa trên ngữ cảnh'
      ],
      en: [
        'Code Intelligence - Deep code structure understanding',
        'Fast Iteration - Rapid development cycles',
        'AI-Powered Search - Smart code search',
        'Context-Aware - Context-based suggestions'
      ]
    },
    bestFor: {
      vi: [
        'Tìm kiếm và navigate codebase lớn',
        'Refactoring nhanh với AI',
        'Code review tự động',
        'Onboarding dự án mới'
      ],
      en: [
        'Searching and navigating large codebases',
        'Fast AI-assisted refactoring',
        'Automated code review',
        'Onboarding to new projects'
      ]
    }
  },
  {
    slug: 'antigravity',
    name: 'Antigravity',
    status: 'coming-soon',
    homepageUrl: 'https://antigravity.google/',
    description: {
      vi: 'Nền tảng AI coding đột phá từ Google. Antigravity hứa hẹn mang đến khả năng coding với AI ở tầm cao mới, tích hợp sâu với hệ sinh thái Google.',
      en: 'Breakthrough AI coding platform from Google. Antigravity promises to bring AI coding to new heights, deeply integrated with the Google ecosystem.'
    },
    tagline: {
      vi: 'Google AI • Deep integration • Next-gen coding',
      en: 'Google AI • Deep integration • Next-gen coding'
    },
    products: ['VS Code Extension', 'CLI'],
    strengths: {
      vi: [
        'Google AI - Powered bởi Gemini models',
        'Deep Integration - Tích hợp sâu hệ sinh thái Google',
        'Multi-Modal - Hỗ trợ code, hình ảnh, tài liệu',
        'Cloud-Native - Tối ưu cho cloud development'
      ],
      en: [
        'Google AI - Powered by Gemini models',
        'Deep Integration - Deep Google ecosystem integration',
        'Multi-Modal - Support for code, images, documents',
        'Cloud-Native - Optimized for cloud development'
      ]
    },
    bestFor: {
      vi: [
        'Phát triển ứng dụng Google Cloud',
        'Dự án multi-modal (code + docs)',
        'Full-stack development',
        'Tích hợp với Google Workspace'
      ],
      en: [
        'Google Cloud application development',
        'Multi-modal projects (code + docs)',
        'Full-stack development',
        'Google Workspace integration'
      ]
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

