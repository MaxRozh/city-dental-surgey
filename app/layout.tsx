import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'City Dental Surgery | Îngrijire Dentară Profesională în Cluj-Napoca',
  description: 'Experimentează îngrijirea dentară excepțională la City Dental Surgery în Cluj-Napoca. Facilități moderne, profesioniști cu experiență și tratamente confortabile.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0080ff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}