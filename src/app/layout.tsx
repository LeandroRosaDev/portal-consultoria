import { Nunito } from "next/font/google";

import Menu from "@/components/Menu";
import "./globals.css";
import { Metadata } from "next";
import { UserContextProvider } from "@/context/user-context";
import { userGetAction } from "@/actions/user/user-get-action";

const mainFontFamily = Nunito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Altuori",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGetAction();

  return (
    <html lang="pt-br">
      <body className="bg-menu-color">
        <UserContextProvider user={user}>
          <div
            className={`bg-black flex justify-center items-center gap-10 w-[1440px] rounded-2xl m-auto ${mainFontFamily.className}`}
          >
            <Menu />
            {children}
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
