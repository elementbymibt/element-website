import { siteConfig } from "@/src/lib/site-config";

export function StructuredData() {
  const baseUrl = siteConfig.baseUrl;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      name: siteConfig.legalName,
      url: baseUrl,
      logo: `${baseUrl}/brand/logo-dark.png`,
      sameAs: [siteConfig.instagram],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${baseUrl}#localbusiness`,
      name: siteConfig.legalName,
      url: baseUrl,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      image: `${baseUrl}/brand/og-image.jpg`,
      sameAs: [siteConfig.instagram],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beograd",
        addressCountry: "RS",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
