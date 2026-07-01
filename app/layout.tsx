import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import GalaxyBackground from "@/src/components/GalaxyBackground";
import Preloader from "@/src/components/Preloader";
import ScrollProgressIndicator from "@/src/components/ScrollProgressIndicator";
import CustomCursor from "@/src/components/CustomCursor";
import PageTransition from "./PageTransition";

const antonFont = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
  weight: ["100", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: "Portfolio - Forhad Khan",
  description:
    "Personal portfolio of Forhad Khan, a passionate Frontend developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonFont.variable} ${robotoFlex.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <div className="page-transition fixed inset-0 z-50 pointer-events-none">
          <div className="page-transition--inner w-full h-full bg-primary" />
        </div>
        <PageTransition />
        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
        <CustomCursor />
        <GalaxyBackground />
        <Preloader />
        <ScrollProgressIndicator />
      </body>
    </html>
  );
}
