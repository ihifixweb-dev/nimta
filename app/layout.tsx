import type { Metadata, Viewport } from 'next';
import { Archivo, Fraunces } from 'next/font/google';
import AnnounceBar from '@/components/AnnounceBar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import Nav from '@/components/Nav';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'NIMTA | NAOWA Institute of Management & Technology',
    template: '%s | NIMTA',
  },
  description:
    'NIMTA is a vocational institute training skilled, self-reliant Nigerians across technology, fashion, culinary arts, beauty, and enterprise.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body>
        <AnnounceBar />
        <Nav />
        {children}
        <Footer />
        <MobileStickyBar />
        <ScrollToTop />
      </body>
    </html>
  );
}
