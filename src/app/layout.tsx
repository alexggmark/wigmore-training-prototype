import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/components/header/Header'
import { HeaderProvider } from "@/components/header/HeaderProvider";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400']
})

// In real build probably dont want to save fonts in /src/ but localFont can't reference /public/
const headerFont = localFont({
  src: [
    { path: '../fonts/fonnts.com-Ivy-Presto-Headline-Light.otf', weight: '400', style: 'normal' },
    { path: '../fonts/fonnts.com-Ivy-Presto-Text-Semi-Bold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/fonnts.com-Ivy-Presto-Display-Light.otf', weight: '400', style: 'italic' }
  ],
  variable: '--font-heading',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Wigmore Training",
  description: "Prototype for Wigmore Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${headerFont.variable} antialiased`}
      >
        <HeaderProvider>
          <Header />
          {children}
        </HeaderProvider>
      </body>
    </html>
  );
}
