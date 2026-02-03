import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-sm mb-2 font-mono">[ CÔNG CỤ ]</div>
          <h1 className="text-3xl font-bold mb-2">Công cụ có sẵn qua Gateway</h1>
          <p className="text-gray-600 mb-8">
            Viber.vn gateway hỗ trợ kết nối với các AI coding tools sau
          </p>

          {/* Augment Code */}
          <div className="border-2 border-black p-6 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold">Augment Code</h2>
              <span className="text-xs border border-black px-1">SUPPORTED</span>
            </div>
            <p className="text-gray-600 mb-4">
              AI coding assistant được thiết kế để hiểu sâu codebase của bạn.
              Với công nghệ codebase retrieval tiên tiến, Augment có thể đưa ra
              gợi ý code chính xác dựa trên ngữ cảnh toàn bộ dự án.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-bold mb-2">Tính năng chính</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Codebase Retrieval - Tìm kiếm semantic trong code</li>
                  <li>• Multi-file Editing - Chỉnh sửa nhiều file cùng lúc</li>
                  <li>• Context Understanding - Hiểu ngữ cảnh project</li>
                  <li>• IDE Integration - VS Code, JetBrains, Neovim</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Phù hợp cho</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Refactoring code lớn</li>
                  <li>• Tìm hiểu codebase mới</li>
                  <li>• Code completion thông minh</li>
                  <li>• Debug và fix bugs</li>
                </ul>
              </div>
            </div>
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              Kết nối qua Gateway →
            </a>
          </div>

          {/* Claude Code */}
          <div className="border-2 border-black p-6 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold">Claude Code</h2>
              <span className="text-xs border border-black px-1">SUPPORTED</span>
            </div>
            <p className="text-gray-600 mb-4">
              Powered bởi Claude - AI model tiên tiến nhất từ Anthropic.
              Với khả năng reasoning vượt trội, Claude Code có thể giải quyết
              các vấn đề phức tạp và viết code chất lượng cao.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-bold mb-2">Tính năng chính</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Advanced Reasoning - Giải quyết vấn đề phức tạp</li>
                  <li>• Code Review - Đánh giá và cải thiện code</li>
                  <li>• Documentation - Tự động tạo tài liệu</li>
                  <li>• Creative Solutions - Đề xuất giải pháp sáng tạo</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Phù hợp cho</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Thiết kế architecture</li>
                  <li>• Code review chuyên sâu</li>
                  <li>• Viết documentation</li>
                  <li>• Giải quyết bugs phức tạp</li>
                </ul>
              </div>
            </div>
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              Kết nối qua Gateway →
            </a>
          </div>

          {/* Note */}
          <div className="border-2 border-black p-6 bg-gray-50">
            <h3 className="font-bold mb-2">Lưu ý</h3>
            <p className="text-sm text-gray-600">
              Gateway chỉ cung cấp kết nối và hỗ trợ thanh toán.
              Các công cụ trên được phát triển bởi Augment Code Inc. và Anthropic.
              Viber.vn không phải đại lý chính thức.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

