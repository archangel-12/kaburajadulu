import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

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
  keywords: ["peluang internasional", "kerja di luar negeri", "kuliah di luar negeri", "traveling", "beasiswa", "kelas bahasa"],
  authors: [{ name: "Tim KaburAjaDulu" }],
  openGraph: {
    title: "#KaburAjaDulu | Jelajahi Peluang Internasional",
    description: "Temukan peluang untuk bekerja, belajar, atau menjelajahi dunia.",
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "#KaburAjaDulu | Jelajahi Peluang Internasional",
    description: "Temukan peluang untuk bekerja, belajar, atau menjelajahi dunia.",
    images: ['/images/og-image.jpg'],
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
        className={`${plusJakartaSans.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
