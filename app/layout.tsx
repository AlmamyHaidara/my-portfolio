import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Spacing from '../src/components/Spacing';
import { ThemeProvider } from "@/components/theme-provider";

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
  description:
    "Développeur Full Stack spécialisé en React, Node.js, Next.js, Angular, React Native et Firebase pour des applications web et mobiles modernes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased h-full max-w-full m-auto px-4 `
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        <div className="pt-5 ">
          <Header />
        </div>
        <div className="gap-5 z-0">
          <div className="z-0 circlePosition w-[260px] h-[400px] max-md:h-[300px] bg-primary/35 rounded-b-3xl absolute z-1 top-[30%] right-[20%]  max-md:right-[40%]  translate-x-[50%] translate-y-[-50%] rotate-45 blur-[90px]"></div>
        </div>
        <div className=" max-w-full flex flex-1 justify-center items-center max-md:px-[3.5%] md:px-[20%] ">

        {children}
        </div>
        <div className="">
          <Spacing />
        </div>
        <div className="items-center  md:px-[18.6%] ">
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
