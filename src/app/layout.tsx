import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-IS-US | Enterprise AI Solutions",
  description:
    "From Idea to Enterprise-Scale AI. Institutional-grade artificial intelligence architectures designed with precision.",
  keywords: ["AI", "Enterprise AI", "Machine Learning", "AI Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
