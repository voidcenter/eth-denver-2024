'use client';

import Script from "next/script";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/icons"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Spin</title>
        <meta name="description" content="Spin APP" />
        <Script src="https://kit.fontawesome.com/847402aaf8.js" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}