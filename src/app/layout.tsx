import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import MyTools from "@/components/MyTools";
import Resume from "@/components/Resume";

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
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Projects/>
      <Experiences/>
      <MyTools/>
      <Resume/>
      </body>
    </html>
  );
}
