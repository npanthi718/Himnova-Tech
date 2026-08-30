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

const siteUrl = "https://www.himnovatech.com";
const brandIcon = `${siteUrl}/icon-512.png`;
const brandLogo = `${siteUrl}/logos/icon-circle.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Himnova Technologies",
  title: {
    default: siteData.meta.title,
    template: "%s",
  },
  description: siteData.meta.description,
  keywords: siteData.meta.keywords,
  authors: [{ name: "Himnova Technologies Private Limited", url: siteUrl }],
  creator: "Himnova Technologies Private Limited",
  publisher: "Himnova Technologies Private Limited",
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-48x48.png",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: siteUrl,
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
    siteName: "Himnova Technologies",
    images: [
      {
        url: siteData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Himnova Technologies — official IT company at himnovatech.com",
      },
      {
        url: "/logos/icon-circle.png",
        width: 512,
        height: 512,
        alt: "Himnova circular brand mark",
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
  other: {
    "msapplication-TileColor": "#0B0F19",
    "msapplication-TileImage": "/icon-192.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Himnova Technologies Private Limited",
      legalName: "Himnova Technologies Private Limited",
      alternateName: ["Himnova", "Himnova Tech", "Himnova Technologies", "Himnova Technologies Pvt. Ltd."],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: brandLogo,
        width: 512,
        height: 512,
      },
      image: brandIcon,
      description: siteData.meta.description,
      foundingDate: "2024",
      slogan: siteData.company.motto,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Baneshwor-31",
        addressLocality: "Kathmandu",
        postalCode: "44600",
        addressCountry: "NP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.6944,
        longitude: 85.3422,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+977-9823009467",
        contactType: "customer support",
        email: "support.himnovatech@gmail.com",
        areaServed: ["NP", "IN", "Global"],
        availableLanguage: ["English", "Nepali"],
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      sameAs: [
        siteData.company.social.linkedin,
        siteData.company.social.github,
        siteData.company.social.twitter,
        siteData.company.social.facebook,
        siteData.company.social.instagram,
      ].filter(Boolean),
      knowsAbout: [
        "Himnova Technologies",
        "Custom Software Development",
        "Cloud Computing",
        "DevOps Automation",
        "Web Application Engineering",
        "Mobile App Development",
        "Agentic Artificial Intelligence",
        "Enterprise IT Infrastructure",
      ],
      brand: {
        "@type": "Brand",
        name: "Himnova",
        logo: brandLogo,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Himnova Technologies",
      alternateName: ["Himnova", "Himnova Tech", "himnovatech.com"],
      description: "Official website of Himnova Technologies — enterprise software, cloud, and AI engineering.",
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
        <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon-48x48.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} min-h-screen flex flex-col font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
