import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Taskify Application',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider
          appearance={{ elements: { footer: 'hidden', footerAction: { display: 'none' } } }}>
          <ThemeProvider attribute='class' defaultTheme='light'>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
