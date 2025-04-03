import type { Metadata } from "next";
import { Inter, Belgrano, Convergence } from "next/font/google";
import "./globals.css";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay Noppone P",
};

const belgrano = Belgrano({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const convergence = Convergence({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${belgrano.variable} ${convergence.variable}`}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <Navbar/>
        <main className="flex-grow">{children}</main>
        <Experiences />
        <Projects />
      </body>
    </html>
  );
}
