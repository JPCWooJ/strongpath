import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-big-daily-short",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-basel-grotesk",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "StrongPath",
  description: "An evidence-based strength platform for adults who refuse to accept muscle loss as inevitable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
