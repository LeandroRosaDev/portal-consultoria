import { Nunito } from 'next/font/google';

import Menu from '@/components/Menu';
import './globals.css';

const mainFontFamily = Nunito({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={` bg-menu-color flex justify-between ${mainFontFamily.className}`}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
