import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-sm mb-2 font-mono">[ CỘNG ĐỒNG ]</div>
          <h1 className="text-3xl font-bold mb-2">Tham gia cộng đồng</h1>
          <p className="text-gray-600 mb-8">
            Kết nối với developers Việt Nam, chia sẻ kinh nghiệm về AI coding tools
          </p>

          {/* Telegram Community */}
          <div className="border-2 border-black p-8 mb-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold mb-2">Telegram Community</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Join group Telegram để chém gió về coding, vibe code, AI tools,
              và mọi thứ liên quan đến lập trình. Không cần mua account,
              ai cũng được chào đón!
            </p>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 hover:bg-gray-800"
            >
              Join Telegram →
            </a>
          </div>

          {/* What you get */}
          <h2 className="text-xl font-bold mb-4">Trong group có gì?</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="border-2 border-black p-4">
              <h3 className="font-bold mb-1">🗣️ Chém gió về coding</h3>
              <p className="text-sm text-gray-600">
                Chia sẻ kinh nghiệm, tips & tricks, best practices
              </p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-bold mb-1">🤖 AI Coding Tools</h3>
              <p className="text-sm text-gray-600">
                Thảo luận về Augment, Claude, Cursor, Copilot...
              </p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-bold mb-1">🎯 Vibe Coding</h3>
              <p className="text-sm text-gray-600">
                Cách code hiệu quả với AI, workflow optimization
              </p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-bold mb-1">🆘 Hỗ trợ 24/7</h3>
              <p className="text-sm text-gray-600">
                Hỏi đáp, troubleshooting, giúp đỡ lẫn nhau
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="border-2 border-black p-6 bg-gray-50">
            <h2 className="font-bold mb-2">Cần hỗ trợ riêng?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Nếu cần hỗ trợ về Gateway hoặc có câu hỏi riêng,
              liên hệ trực tiếp qua Telegram.
            </p>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              @augmentsupporter →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

