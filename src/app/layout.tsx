import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

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
  metadataBase: new URL('https://poopetti.vercel.app/'),
  title: 'Poopetti',
  description: 'A Lightweight Animated Emojis Library, mainly focused on Poop Emoji',
  openGraph: {
    images: [
      {
        url: 'https://poopetti.vercel.app/poopetti.png',
        width: 1200,
        height: 630,
        alt: 'Poopetti - A Lightweight Animated Emojis Library, mainly focused on Poop Emoji',
      },
    ],
    type: 'website',
    siteName: 'Poopetti',
    title: 'Poopetti',
    description: 'A Lightweight Animated Emojis Library, mainly focused on Poop Emoji',
    url: 'https://poopetti.vercel.app/',
    locale: 'en_US',
  },
  twitter: {
    images: 'https://poopetti.vercel.app/poopetti.png',
    site: '@AlexZDevs',
    creator: '@AlexZDevs',
    title: 'Poopetti',
    description: 'A Lightweight Animated Emojis Library, mainly focused on Poop Emoji',
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'Poopetti',
    startupImage: 'https://poopetti.vercel.app/poopetti.png',
  },
  applicationName: 'Poopetti',
  icons: {
    icon: 'https://poopetti.vercel.app/icon.jpg',
    shortcut: 'https://poopetti.vercel.app/icon.jpg',
    apple: 'https://poopetti.vercel.app/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
