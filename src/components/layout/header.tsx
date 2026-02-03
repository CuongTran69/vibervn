"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Công cụ", href: "/products" },
  { name: "Cộng đồng", href: "/pricing" },
  { name: "Hướng dẫn", href: "/docs" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">VIBER.VN</span>
          <span className="text-xs border border-black px-1">GATEWAY</span>
        </Link>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm hover:underline"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://viber.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800"
          >
            Truy cập Gateway →
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black bg-white">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://viber.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black text-white px-4 py-2 text-sm text-center"
            >
              Truy cập Gateway →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

