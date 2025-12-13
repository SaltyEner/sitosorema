import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sara Prosperi | Senior IT Delivery Manager & Product Owner",
  description: "Senior IT Delivery Manager & Certified SAFe® Product Owner driving digital transformation through data-driven strategies. 8+ years of experience at Vodafone, Ariston, and more.",
  keywords: ["IT Delivery Manager", "Product Owner", "SAFe", "Vodafone", "Digital Transformation", "Data Science", "Agile", "Scrum"],
  authors: [{ name: "Sara Prosperi" }],
  creator: "Sara Prosperi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saraprosperi.it",
    title: "Sara Prosperi | Senior IT Delivery Manager",
    description: "Driving digital transformation with 8+ years of experience in IT Delivery and Product Management.",
    siteName: "Sara Prosperi Portfolio",
    images: [
      {
        url: "/sara-profile.jpg", // Using the profile image as the preview for now
        width: 800,
        height: 600,
        alt: "Sara Prosperi - IT Delivery Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sara Prosperi | Senior IT Delivery Manager",
    description: "Driving digital transformation with 8+ years of experience.",
    images: ["/sara-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
