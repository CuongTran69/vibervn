import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const docCategories = [
  {
    title: "Bắt đầu với Gateway",
    items: [
      { title: "Gateway là gì?", href: "#" },
      { title: "Tạo tài khoản", href: "#" },
      { title: "Lấy API Key", href: "#" },
    ],
  },
  {
    title: "Kết nối Augment Code",
    items: [
      { title: "Cài đặt Extension", href: "#" },
      { title: "Nhập API Key", href: "#" },
      { title: "Cấu hình MCP", href: "#" },
      { title: "Sử dụng cơ bản", href: "#" },
    ],
  },
  {
    title: "Kết nối Claude Code",
    items: [
      { title: "Cài đặt CLI", href: "#" },
      { title: "Cấu hình API", href: "#" },
      { title: "Sử dụng cơ bản", href: "#" },
    ],
  },
  {
    title: "Hỗ trợ",
    items: [
      { title: "FAQ", href: "#" },
      { title: "Troubleshooting", href: "#" },
      { title: "Liên hệ Telegram", href: "https://t.me/augmentsupporter" },
    ],
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="text-sm mb-2 font-mono">[ HƯỚNG DẪN ]</div>
          <h1 className="text-3xl font-bold mb-2">Hướng dẫn sử dụng Gateway</h1>
          <p className="text-gray-600 mb-8">
            Tài liệu hướng dẫn kết nối và sử dụng AI coding tools qua Viber.vn
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {docCategories.map((category) => (
              <div key={category.title} className="border-2 border-black p-6">
                <h2 className="font-bold mb-4">{category.title}</h2>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="text-sm hover:underline text-gray-600">
                        → {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Start */}
          <div className="border-2 border-black p-6 mb-8">
            <h2 className="font-bold mb-4">Quick Start</h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white px-2">1</span>
                <span>Truy cập <a href="https://viber.vn" className="underline" target="_blank" rel="noopener noreferrer">viber.vn</a> và tạo tài khoản</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white px-2">2</span>
                <span>Lấy API key trong dashboard</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white px-2">3</span>
                <span>Cài extension và nhập API key</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono bg-black text-white px-2">4</span>
                <span>Bắt đầu sử dụng!</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="border-2 border-black p-6 bg-gray-50">
            <h2 className="font-bold mb-2">Cần hỗ trợ?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Join Telegram để được hỗ trợ nhanh nhất, hoặc chém gió về coding cùng cộng đồng.
            </p>
            <a
              href="https://t.me/augmentsupporter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-4 py-2 text-sm hover:bg-gray-800"
            >
              💬 Join @augmentsupporter
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

