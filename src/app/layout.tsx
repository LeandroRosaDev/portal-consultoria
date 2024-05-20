import { Nunito } from 'next/font/google';

import Menu from '@/components/Menu';
import './globals.css';
import { Metadata } from 'next';
import { UserContextProvider } from '@/context/user-context';
import { userGetAction } from '@/actions/user/user-get-action';

const mainFontFamily = Nunito({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portal Altuori',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGetAction();

  return (
    <html lang="pt-br">
      <body
        className={`bg-menu-color flex justify-center gap-10 ${mainFontFamily.className}`}
      >
        <UserContextProvider user={user}>
          <Menu />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
