import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import HomePageJsonLd, { CommunityJsonLd } from "@/components/schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'], // Light, Regular, Medium, SemiBold, Bold, ExtraBold
  display: 'swap',
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'], // Regular, Medium, SemiBold, Bold
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://kaburajadulu.com'),
  title: "#KaburAjaDulu | Jelajahi Peluang Internasional",
  description: "Temukan peluang untuk bekerja, belajar, atau menjelajahi dunia dengan sumber daya komprehensif, daftar pekerjaan, beasiswa, kelas bahasa, dan banyak lagi.",
  keywords: ["peluang internasional", "kerja di luar negeri", "kuliah di luar negeri", "traveling", "beasiswa", "kelas bahasa", "karir global", "komunitas expatriat"],
  authors: [{ name: "Tim KaburAjaDulu" }],
  applicationName: "KaburAjaDulu",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://kaburajadulu.com/',
  },
  openGraph: {
    title: "#KaburAjaDulu | Jelajahi Peluang Internasional",
    description: "Temukan peluang untuk bekerja, belajar, atau menjelajahi dunia.",
    images: ['/images/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "#KaburAjaDulu | Jelajahi Peluang Internasional",
    description: "Temukan peluang untuk bekerja, belajar, atau menjelajahi dunia.",
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${plusJakartaSans.variable} ${caveat.variable} antialiased`}
      >
        <HomePageJsonLd />
        <CommunityJsonLd />
        {children}
      </body>
    </html>
  );
}
