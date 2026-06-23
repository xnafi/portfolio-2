import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/src/components/ParticleBackground";
import Preloader from "@/src/components/Preloader";

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
      <body className="min-h-full flex flex-col max-w-350 mx-auto relative overflow-x-hidden">
        {children}
        <ParticleBackground />
        <Preloader />
      </body>
    </html>
  );
}
