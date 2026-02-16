import type { Metadata } from "next";

import { siteConfig } from "@/src/lib/site-config";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const metadataBase = new URL(siteConfig.baseUrl);

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/brand/og-image.jpg",
}: BuildMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.legalName}`;
  const url = new URL(path, siteConfig.baseUrl).toString();

  return {
    title: fullTitle,
    description,
    metadataBase,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.legalName,
      type: "website",
      locale: "sr_RS",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    icons: {
      icon: [{ url: "/icon", type: "image/png" }],
      apple: [{ url: "/apple-icon", type: "image/png" }],
      shortcut: ["/icon"],
    },
  };
}
