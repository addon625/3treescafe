import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3 Trees Cafe — Lusaka's Finest Dining Experience",
  description: "From gourmet mains to artisanal coffee, every dish at 3 Trees Cafe is crafted with passion. Located at 2 Nkanchibaya Rd, Lusaka 10101, Zambia.",
  keywords: ["3 Trees Cafe", "Lusaka", "Zambia", "restaurant", "dining", "breakfast", "lunch", "sushi", "coffee"],
  authors: [{ name: "3 Trees Cafe" }],
  icons: {
    icon: "/logo-3trees.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#FAF9F6' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
