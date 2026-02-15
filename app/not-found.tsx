import Link from "next/link";

import { Container } from "@/src/components/ui/container";

export default function NotFoundPage() {
  return (
    <Container className="py-24 text-center">
      <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">404</p>
      <h1 className="font-display text-brand-burgundy mt-3 text-5xl">
        Stranica nije pronađena
      </h1>
      <p className="text-brand-earth mt-4">Traženi sadržaj trenutno nije dostupan.</p>
      <Link
        href="/"
        className="btn-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold"
      >
        Vratite se na početnu
      </Link>
    </Container>
  );
}
