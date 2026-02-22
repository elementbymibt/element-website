const productionBaseUrl = "https://www.elementbymibt.com";
const defaultBaseUrl = "https://elementbymibt.com";

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
const hasVercelHost = (() => {
  try {
    return new URL(baseUrl).hostname.endsWith(".vercel.app");
  } catch {
    return false;
  }
})();

const resolvedBaseUrl =
  process.env.NODE_ENV === "production" && hasVercelHost
    ? productionBaseUrl
    : baseUrl;

export const siteConfig = {
  name: "ÉLÉMENT",
  legalName: "ÉLÉMENT (by M·I·B·T)",
  description:
    "Premium studio za dizajn enterijera. Projektujemo rezidencijalne i poslovne prostore sa jasnim potpisom elegancije.",
  baseUrl: resolvedBaseUrl,
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "https://calendly.com",
  email: "element.by.mibt@gmail.com",
  phone: "0659080995",
  instagram: "https://www.instagram.com/element_by_mibt/",
  website: resolvedBaseUrl,
  location: "Srbija",
};
