import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StructuredData from '@/components/StructuredData';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dental-clinic.art/'),
  title: {
    default: 'City Dental Surgery | Îngrijire Dentară Profesională în Cluj-Napoca',
    template: '%s | City Dental Surgery',
  },
  keywords: ['dentist', 'dental surgery', 'Cluj-Napoca', 'dental care', 'stomatologie'],
  description:
    'Experimentează îngrijirea dentară excepțională la City Dental Surgery în Cluj-Napoca. Facilități moderne, profesioniști cu experiență și tratamente confortabile.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  authors: [{ name: 'City Dental Surgery' }],
  creator: 'City Dental Surgery',
  publisher: 'City Dental Surgery',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'City Dental Surgery | Îngrijire Dentară Profesională în Cluj-Napoca',
    description: 'Experimentează îngrijirea dentară excepțională la City Dental Surgery în Cluj-Napoca.',
    url: 'https://www.dental-clinic.art/',
    siteName: 'City Dental Surgery',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: 'https://www.dental-clinic.art/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'City Dental Surgery',
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ro'>
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
        />
        <link
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'
        />
        <meta
          name='theme-color'
          content='#0080ff'
        />
        <meta
          name='google-site-verification'
          content='_GViOzCizBV1XehWURCjSN5BJQh4-0LjR3mYzFu6O5M'
        />
        <Script
          async
          src=''
        />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=AW-17555042525'
          strategy='afterInteractive'
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17555042525', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
