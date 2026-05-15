import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Pelican Academy | Premium Educational Brand in Chengalpattu",
  description: "ISO 9001:2015 Certified Institution in Singaperumalkoil. Empowering young minds through Abacus, Vedic Math, Jolly Phonics, and Teacher Training.",
  keywords: "Abacus classes in Chengalpattu, Vedic Maths classes Singaperumalkoil, Jolly phonics academy Chengalpattu, Teacher training institute Tamil Nadu, Educational franchise opportunity India",
  authors: [{ name: "Pelican Academy" }],
  creator: "Pelican Academy",
  publisher: "Pelican Academy",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Pelican Academy | Empowering Young Minds",
    description: "ISO 9001:2015 Certified Institution. Modern skill development and educational franchise opportunities in Chengalpattu.",
    url: "https://pelicanacademy.in",
    siteName: "Pelican Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pelican Academy - Premium Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelican Academy | Premium Educational Brand",
    description: "ISO 9001:2015 Certified Institution. Empowering young minds through smart learning.",
    images: ["/og-image.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Pelican Academy",
    "url": "https://pelicanacademy.in",
    "logo": "https://pelicanacademy.in/logo.png",
    "description": "ISO 9001:2015 Certified Institution specializing in Abacus, Vedic Math, and Phonics.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Parashakti Hospital, Singaperumalkoil",
      "addressLocality": "Chengalpattu",
      "addressRegion": "Tamil Nadu",
      "postalCode": "603204",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9994048827",
      "email": "pelicanacademy.21@gmail.com",
      "contactType": "admissions",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    },
    "sameAs": [
      "https://www.facebook.com/pelicanacademychengalpattu",
      "https://www.instagram.com/pelican_academy_chengalpattu"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased text-primary selection:bg-accent/30`}>
        {children}
      </body>
    </html>
  );
}
