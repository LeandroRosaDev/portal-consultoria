import { Nunito } from 'next/font/google';

import Menu from '@/components/Menu';
import './globals.css';
import { Metadata } from 'next';

const mainFontFamily = Nunito({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portal Altuori',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`bg-menu-color flex justify-center gap-10 ${mainFontFamily.className}`}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
