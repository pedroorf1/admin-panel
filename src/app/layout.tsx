"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
// import { checkIsPublicPath } from "../functions/check-is-public-route";
import { Header } from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Hostvsl-Admin",
//   description: "application to manger hostvsl product",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  console.log(pathName);

  // const isPublicPage = checkIsPublicPath(pathName);
  // console.log({ isPublicPage });
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
