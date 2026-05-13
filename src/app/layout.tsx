import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Pelican Academy | Premium Educational Brand",
  description: "ISO 9001:2015 Certified Institution. Empowering young minds through smart learning. Abacus, Vedic Math, Jolly Phonics, and more in Chengalpattu.",
  keywords: "Abacus classes in Chengalpattu, Vedic Maths classes, Jolly phonics academy, Teacher training institute, Online tuition academy, Educational franchise opportunity",
  openGraph: {
    title: "Pelican Academy | Empowering Young Minds",
    description: "ISO 9001:2015 Certified Institution. Modern skill development and educational franchise opportunities.",
    url: "https://pelicanacademy.in", // Placeholder URL
    siteName: "Pelican Academy",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased text-primary selection:bg-accent/30`}>
        {children}
      </body>
    </html>
  );
}
