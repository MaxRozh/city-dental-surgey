import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'City Dental Surgery | Îngrijire Dentară Profesională în Cluj-Napoca',
  description: 'Experimentează îngrijirea dentară excepțională la City Dental Surgery în Cluj-Napoca. Facilități moderne, profesioniști cu experiență și tratamente confortabile.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>{children}</body>
    </html>
  );
}