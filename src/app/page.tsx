import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-20 border-b-2 border-black">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="text-sm mb-4 font-mono">[ GATEWAY ]</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kết nối với AI Coding Tools
          </h1>
          <p className="text-lg mb-8 max-w-2xl text-gray-600">
            Viber.vn là gateway giúp bạn truy cập và sử dụng Augment Code, Claude Code
            một cách dễ dàng. Tài liệu tiếng Việt, hỗ trợ 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 hover:bg-gray-800"
            >
              Truy cập Gateway →
            </a>
            <Link href="/docs" className="border-2 border-black px-6 py-3 hover:bg-gray-100">
              Hướng dẫn sử dụng
            </Link>
          </div>
        </div>
      </section>

      {/* What is Gateway */}
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Gateway là gì?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-black p-6">
              <div className="text-2xl mb-2">1</div>
              <h3 className="font-bold mb-2">Kết nối</h3>
              <p className="text-sm text-gray-600">
                Gateway kết nối bạn với các AI coding tools như Augment Code và Claude Code
                thông qua một điểm truy cập duy nhất.
              </p>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-2xl mb-2">2</div>
              <h3 className="font-bold mb-2">Đơn giản</h3>
              <p className="text-sm text-gray-600">
                Tài liệu tiếng Việt, hướng dẫn chi tiết từng bước,
                dễ dàng setup và sử dụng.
              </p>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-2xl mb-2">3</div>
              <h3 className="font-bold mb-2">Hỗ trợ</h3>
              <p className="text-sm text-gray-600">
                Cộng đồng Telegram active, team support sẵn sàng giúp đỡ 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Tools */}
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Công cụ có sẵn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-2">Augment Code</h3>
              <p className="text-sm text-gray-600 mb-4">
                AI assistant hiểu ngữ cảnh codebase. Tích hợp VS Code, JetBrains, Neovim.
              </p>
              <div className="text-sm text-gray-600">
                Codebase retrieval • Multi-file editing • Context-aware
              </div>
            </div>
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-2">Claude Code</h3>
              <p className="text-sm text-gray-600 mb-4">
                Powered by Anthropic. Khả năng reasoning vượt trội cho task phức tạp.
              </p>
              <div className="text-sm text-gray-600">
                Advanced reasoning • Code review • Documentation
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/products" className="underline text-sm">
              Xem chi tiết các công cụ →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h2 className="text-xl font-bold mb-2">Sẵn sàng bắt đầu?</h2>
          <p className="text-sm text-gray-300 mb-6">Truy cập gateway để kết nối với AI coding tools</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 inline-block hover:bg-gray-100"
            >
              Truy cập viber.vn →
            </a>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 inline-block hover:bg-gray-800"
            >
              💬 Hỗ trợ Telegram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

