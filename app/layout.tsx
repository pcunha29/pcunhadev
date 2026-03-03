import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pcunhadev.com"),
  title: "Pedro Cunha — Product Engineer",
  description:
    "Product Engineer building scalable, revenue-driven digital products. Bridging product strategy, design systems, and engineering execution.",
  keywords: [
    "Product Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "Pedro Cunha",
    "Porto",
    "Portugal",
  ],
  authors: [{ name: "Pedro Cunha", url: "https://pcunhadev.com" }],
  creator: "Pedro Cunha",
  alternates: {
    canonical: "https://pcunhadev.com",
  },
  openGraph: {
    title: "Pedro Cunha — Product Engineer",
    description:
      "Product Engineer building scalable, revenue-driven digital products. Bridging product strategy, design systems, and engineering execution.",
    type: "website",
    locale: "en_US",
    url: "https://pcunhadev.com",
    siteName: "Pedro Cunha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Cunha — Product Engineer",
    description:
      "Product Engineer building scalable, revenue-driven digital products. Bridging product strategy, design systems, and engineering execution.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
