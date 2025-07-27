import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This metadata will be applied to all pages
export const metadata: Metadata = {
  title: {
    default: 'SiR Musiz - Creative Audio & Visual Production',
    template: '%s | SiR Musiz', // For nested pages, e.g., "About Us | SiR Musiz"
  },
  description: 'A creative haven where sonic innovation meets soulful storytelling. We turn raw ideas into immersive audio-visual experiences.',
  keywords: ['Music Production', 'Video Editing', 'Mixing', 'Audio Engineering', 'Graphics Design'],
  openGraph: {
    title: 'SiR Musiz - Creative Audio & Visual Production',
    description: 'A creative haven for audio and visual arts.',
    url: 'https://sirmusizstudios.com', // Replace with your actual domain
    siteName: 'SiR Musiz',
    images: [
      {
        url: 'https://sirmusizstudios.com/og-image.png', // Replace with a link to your OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiR Musiz - Creative Audio & Visual Production',
    description: 'A creative haven for audio and visual arts.',
    // creator: '@your_twitter_handle', // Replace with your Twitter handle
    images: ['https://sirmusizstudios.com/og-image.png'], // Replace with a link to your OG image
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup', // Or 'Organization'
    name: 'SiR Musiz',
    url: 'https://sirmusizstudios.com', // Replace with your actual domain
    logo: 'https://sirmusizstudios.com/logo.png', // Replace with your logo URL
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 84678 98698', // Replace with your phone number
      contactType: 'customer service',
    },
  };
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="json-ld-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
