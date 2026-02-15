export const siteConfig = {
  name: "ÉLÉMENT",
  legalName: "ÉLÉMENT (by M·I·B·T)",
  description:
    "Premium studio za dizajn enterijera. Projektujemo rezidencijalne i poslovne prostore sa jasnim potpisom elegancije.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://element-by-mibt.vercel.app",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "https://calendly.com",
  email: "studio@element-design.rs",
  phone: "+381 60 123 4567",
  instagram: "https://instagram.com/element.by.mibt",
  website: "https://element-by-mibt.vercel.app",
  location: "Beograd, Srbija",
};
