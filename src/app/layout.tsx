import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quincy AI - AI-Powered Building Permits for BC",
  description: "Fast-track building permit approvals in British Columbia with AI-powered compliance checking. Get permit approvals 90% faster with automated plan review and BC Building Code validation.",
  keywords: ["building permits", "BC", "British Columbia", "AI", "construction", "development", "compliance", "building code"],
  authors: [{ name: "Quincy AI" }],
  openGraph: {
    title: "Quincy AI - AI-Powered Building Permits for BC",
    description: "Fast-track building permit approvals in British Columbia with AI-powered compliance checking. Get permit approvals 90% faster.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quincy AI - AI-Powered Building Permits for BC",
    description: "Fast-track building permit approvals in British Columbia with AI-powered compliance checking. Get permit approvals 90% faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
