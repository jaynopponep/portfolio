import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import MyTools from "@/components/MyTools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay Noppone P",
  description: "My Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">{children}</main>
        <Experiences />
        <Projects />
        <MyTools />
      </body>
    </html>
  );
}
