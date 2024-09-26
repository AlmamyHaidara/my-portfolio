import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

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

export const metadata: Metadata = {
  title: "Almamy Ali Haidara - Mon Portfolio",
  description: "Développeur Full Stack spécialisé en React, Node.js, Next.js, Angular, React Native et Firebase pour des applications web et mobiles modernes.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased h-full max-w-7xl m-auto px-4`)}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
