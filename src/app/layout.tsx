import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Taskify Application',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClerkProvider
          appearance={{ elements: { footer: 'hidden', footerAction: { display: 'none' } } }}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
