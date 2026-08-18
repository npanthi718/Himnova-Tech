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
  title: "Himnova Technologies | The Next Era of Cloud Intelligence",
  description: "Enterprise custom software, cloud migration, and IT engineering solutions.",
  verification: {
    google: "dzV4NBxryD6nX7UbNwa56FrdQ1jgXwzHwgIDbo0SEco",
  },
  robots: {
    index: true,
    follow: true,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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