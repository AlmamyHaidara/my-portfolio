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
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased h-full max-w-5xl m-auto px-4 `)}
      >
        <div className="pt-5  ">

        <Header/>
        </div>
      <div className="gap-5">

        <div className="circlePosition w-[460px] h-[400px] bg-primary/35 rounded-b-3xl absolute z-1 top-[50%] left-[50%] translate-x-[50%] translate-y-[-50%] rotate-45 blur-[90px]"></div>
        <div className="circlePosition w-[460px] h-[400px] bg-primary/35 rounded-b-3xl absolute z-1 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] rotate-45 blur-[90px]"></div>
      </div>
        {children}
      </body>
    </html>
  );
}
