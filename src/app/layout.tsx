import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteData } from "@/config/siteData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.himnovatech.com"),
  title: siteData.meta.title,
  description: siteData.meta.description,
  keywords: siteData.meta.keywords,
  alternates: {
    canonical: "https://www.himnovatech.com",
  },
  verification: {
    google: ["google8f1c6d9e19595f09", "dzV4NBxryD6nX7UbNwa56FrdQ1jgXwzHwgIDbo0SEco"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteData.meta.title,
    description: siteData.meta.description,
    url: siteData.meta.url,
    siteName: siteData.company.name,
    images: [
      {
        url: siteData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: siteData.company.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.meta.title,
    description: siteData.meta.description,
    images: [siteData.meta.ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.himnovatech.com/#organization",
      "name": "Himnova Technologies Private Limited",
      "alternateName": ["Himnova Tech", "Himnova Technologies", "Himnova"],
      "url": "https://www.himnovatech.com",
      "logo": "https://www.himnovatech.com/logos/logo.png",
      "description": siteData.meta.description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Baneshwor-31",
        "addressLocality": "Kathmandu",
        "postalCode": "44600",
        "addressCountry": "NP",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+977-9823009467",
        "contactType": "customer support",
        "email": "support.himnovatech@gmail.com",
        "areaServed": "Global",
        "availableLanguage": ["English", "Nepali"],
      },
      "sameAs": [
        siteData.company.social.linkedin,
        siteData.company.social.github,
        siteData.company.social.twitter,
        siteData.company.social.facebook,
      ],
      "knowsAbout": [
        "Custom Software Development",
        "Technology Solutions",
        "Cloud Computing",
        "DevOps Automation",
        "Web Application Engineering",
        "Mobile App Development",
        "Agentic Artificial Intelligence",
        "Enterprise IT Infrastructure",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.himnovatech.com/#website",
      "url": "https://www.himnovatech.com",
      "name": "Himnova Technologies",
      "description": "Enterprise Technology, Software Development & Cloud Engineering",
      "publisher": {
        "@id": "https://www.himnovatech.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} min-h-screen flex flex-col font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}