import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marc Racille Arenga Portfolio",
  description: "Portfolio of Marc Racille Arenga",
  other: {"google-site-verification": "ZJZ7lgM7gW-t1dRZPxv4TkyiJJTZsQefpH332I8V2L4"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral`}
      >
        <Analytics />
        <Header />
        
        {children}
      </body>
    </html>
  );
}
