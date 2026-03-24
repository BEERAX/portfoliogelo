import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeloDev Portfolio",
  description: "Software Engineer Portfolio | Next.js & TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white flex flex-col min-h-screen`}
      >
        <Navbar /> {/* THIS CAN BE CLIENT COMPONENT */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
