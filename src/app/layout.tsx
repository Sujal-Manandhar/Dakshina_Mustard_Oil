import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dakshinamustardoil.com'),
  title: 'Dakshina Mustard Oil | Pure Roasted Mustard Oil from Hetauda, Nepal',
  description: 'Dakshina Tel Mill manufactures pure roasted mustard oil (भुटेको तोरीको तेल / चेपुवाको तेल) in Hetauda, Nepal. Made from quality mustard seeds, sealed in 1000ml pouches.',
  keywords: [
    'Dakshina Mustard Oil',
    'Dakshina Tel Mill',
    'Mustard Oil Nepal',
    'Mustard Oil Manufacturer Nepal',
    'Mustard Oil Hetauda',
    'Mustard Oil Supplier Nepal',
    'भुटेको तोरीको तेल',
    'दक्षिणा तेल मिल'
  ],
  authors: [{ name: 'Dakshina Tel Mill' }],
  openGraph: {
    title: 'Dakshina Mustard Oil | दक्षिणा तोरीको तेल',
    description: 'Tasty & fragrant roasted mustard oil produced by Dakshina Tel Mill in Hetauda, Nepal.',
    url: 'https://www.dakshinamustardoil.com',
    siteName: 'Dakshina Mustard Oil',
    images: [
      {
        url: '/images/products/dakshina-1l.png',
        width: 600,
        height: 900,
        alt: 'Dakshina Roasted Mustard Oil 1L Pouch',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-dakshina-cream text-dakshina-text selection:bg-dakshina-gold/30 selection:text-dakshina-brown">
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

