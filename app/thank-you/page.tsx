import Link from "next/link";

import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Hvala",
  description: "Potvrda uspešne prijave ili slanja upita.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <Container className="py-24">
      <FadeIn className="border-brand-neutral-500/70 mx-auto max-w-3xl rounded-3xl border bg-white p-10 text-center">
        <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">Thank You</p>
        <h1 className="font-display text-brand-burgundy mt-3 text-5xl">
          Hvala na prijavi.
        </h1>
        <p className="text-brand-earth mt-4">
          Vaš zahtev je evidentiran. Uskoro vam šaljemo sledeće korake ili potvrdu
          konsultacija.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <BookingLink className="px-7 py-3 text-sm font-semibold" />
          <Link
            href="/"
            className="btn-secondary inline-flex rounded-full px-7 py-3 text-sm font-semibold"
          >
            Nazad na početnu
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}
