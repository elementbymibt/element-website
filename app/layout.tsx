import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

import { AnalyticsProviders } from "@/src/components/analytics/analytics-providers";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";
import { siteConfig } from "@/src/lib/site-config";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.legalName} | Premium Studio`,
    template: `%s | ${siteConfig.legalName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.legalName} | Premium Studio`,
    description: siteConfig.description,
    type: "website",
    locale: "sr_RS",
    siteName: siteConfig.legalName,
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.legalName,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const runtime = "nodejs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        <a
          href="#main-content"
          className="focus:bg-brand-burgundy sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:px-4 focus:py-2 focus:text-white"
        >
          Preskoči na sadržaj
        </a>
        <SiteHeader />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <SiteFooter />
        <AnalyticsProviders />
      </body>
    </html>
  );
}
