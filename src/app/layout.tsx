import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Esra Impex Private Ltd - Premium Agricultural & Natural Products Export",
  description: "Leading export company from Pakistan specializing in premium fruits, vegetables, rice, and Himalayan salt. Delivering quality and freshness to global markets.",
  keywords: "export, Pakistan, fruits, vegetables, rice, Himalayan salt, agricultural products",
  authors: [{ name: "Esra Impex Private Ltd" }],
  openGraph: {
    title: "Esra Impex Private Ltd - Premium Agricultural & Natural Products Export",
    description: "Leading export company from Pakistan specializing in premium fruits, vegetables, rice, and Himalayan salt.",
    url: "https://www.esraimpex.com",
    siteName: "Esra Impex Private Ltd",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
