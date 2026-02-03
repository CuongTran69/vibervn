import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Viber.vn - AI Coding Assistant Gateway | Augment Code & Claude Code",
  description: "Nền tảng cung cấp dịch vụ AI Coding Assistant hàng đầu Việt Nam. Mua tài khoản Augment Code, Claude Code với giá tốt nhất.",
  keywords: ["Augment Code", "Claude Code", "AI Coding", "Vietnam", "AI Assistant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={spaceMono.className}>
        {children}
      </body>
    </html>
  );
}

