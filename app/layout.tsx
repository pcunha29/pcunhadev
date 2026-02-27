import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Cunha — Product-Focused Engineer",
  description:
    "I build high-impact web platforms at the intersection of product, performance, and business growth.",
  openGraph: {
    title: "Pedro Cunha — Product-Focused Engineer",
    description:
      "I build high-impact web platforms at the intersection of product, performance, and business growth.",
    type: "website",
    locale: "en_US",
    url: "https://pcunha.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Cunha — Product-Focused Engineer",
    description:
      "I build high-impact web platforms at the intersection of product, performance, and business growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
