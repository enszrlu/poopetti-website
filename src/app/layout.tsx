import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://poopetti.com'),
  title: 'Poopetti',
  description: 'A Lightweight Animated Emojis Library, mainly focused on Poop Emoji',
  openGraph: {
    images: [
      {
        url: 'https://poopetti.com/poopetti.png',
        width: 1200,
        height: 630,
        alt: 'Poopetti - A Lightweight Animated Emojis Library, mainly focused on Poop Emoji',
      },
    ],
    type: 'website',
    siteName: 'Poopetti',
    title: 'Poopetti',
    description: 'A Lightweight Animated Emojis Library, mainly focused on Poop Emoji',
    url: 'https://poopetti.com',
    locale: 'en_US',
  },
  twitter: {
    images: 'https://poopetti.com/poopetti.png',
    site: '@AlexZDevs',
    creator: '@AlexZDevs',
    title: 'Poopetti',
    description: 'A Lightweight Animated Emojis Library, mainly focused on Poop Emoji',
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'Poopetti',
    startupImage: 'https://poopetti.com/poopetti.png',
  },
  applicationName: 'Poopetti',
  icons: {
    icon: 'https://poopetti.com/icon.jpg',
    shortcut: 'https://poopetti.com/icon.jpg',
    apple: 'https://poopetti.com/icon.jpg',
  },
  alternates: {
    canonical: `https://www.poopetti.com`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="/stats/script.js"
          data-website-id="0ce10c19-3150-4b74-afa5-46d6380c4262"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-50`}
      >
        <div className="min-h-screen text-foreground px-4 bg-orange-50 flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
