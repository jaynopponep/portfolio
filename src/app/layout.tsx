import type { Metadata } from "next";
import "./globals.css";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Jay Noppone P",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen`}>
      <Navbar/>
        <main className="flex-grow">{children}</main>
      <Timeline/>
        <Projects />
      </body>
    </html>
  );
}
