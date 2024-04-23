import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pcunhadev",
  description: "Personal website of Pedro Cunha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-10 bg-primary`}>{children}</body>
    </html>
  );
}
