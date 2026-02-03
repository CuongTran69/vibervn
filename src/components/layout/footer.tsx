import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 border-black py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} VIBER.VN — Gateway for AI Coding Tools
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/products" className="hover:underline">Công cụ</Link>
            <Link href="/pricing" className="hover:underline">Cộng đồng</Link>
            <Link href="/docs" className="hover:underline">Hướng dẫn</Link>
            <a href="https://t.me/augmentsupporter" target="_blank" rel="noopener noreferrer" className="hover:underline">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

