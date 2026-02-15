const defaultBaseUrl = "https://element-website-seven.vercel.app";

function normalizeBaseUrl(input?: string) {
  if (!input) {
    return defaultBaseUrl;
  }

  const trimmed = input.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    return new URL(withProtocol).toString().replace(/\/$/, "");
  } catch {
    return defaultBaseUrl;
  }
}

const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const siteConfig = {
  name: "ÉLÉMENT",
  legalName: "ÉLÉMENT (by M·I·B·T)",
  description:
    "Premium studio za dizajn enterijera. Projektujemo rezidencijalne i poslovne prostore sa jasnim potpisom elegancije.",
  baseUrl,
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "https://calendly.com",
  email: "studio@element-design.rs",
  phone: "+381 60 123 4567",
  instagram: "https://instagram.com/element.by.mibt",
  website: baseUrl,
  location: "Beograd, Srbija",
};
