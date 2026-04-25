import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
