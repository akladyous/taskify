import { ClerkProvider } from '@clerk/nextjs';
import { Inter, Roboto, Roboto_Mono } from 'next/font/google';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import NavBar from '@/components/ui/header/NavBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}  ${roboto_mono.variable} ${roboto.variable}`}>
        <ClerkProvider
          appearance={{ elements: { footer: 'hidden', footerAction: { display: 'none' } } }}>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <NavBar />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
