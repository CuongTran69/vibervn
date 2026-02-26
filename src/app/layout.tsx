import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viber.vn - AI Coding Assistant Gateway | Augment Code, Claude Code, OpenCode & OpenClaw",
  description:
    "Nền tảng cung cấp dịch vụ AI Coding Assistant hàng đầu Việt Nam. Truy cập Augment Code, Claude Code, OpenCode, OpenClaw với tài liệu tiếng Việt và hỗ trợ 24/7.",
  keywords: [
    "Augment Code",
    "Claude Code",
    "OpenCode",
    "OpenClaw",
    "AI Coding",
    "Vietnam",
    "AI Assistant",
    "Viber.vn",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${spaceMono.className} bg-white dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
