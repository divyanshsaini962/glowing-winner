import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import SiteForSalePopup from "@/components/layout/SiteForSalePopup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piano Studio - Music, Lessons, Podcast & More",
  description: "Experience the art of piano through music, lessons, and inspiration. Join our community of passionate musicians.",
};

export const viewport: Viewport = {
  // Mobile responsiveness settings
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
        <SiteForSalePopup />
      </body>
    </html>
  );
}

