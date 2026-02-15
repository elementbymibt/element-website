# ÉLÉMENT (by M·I·B·T)

Premium, editorial Next.js website za studio dizajna enterijera.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS design tokens)
- Framer Motion
- Vercel Analytics + Speed Insights
- ESLint + Prettier
- Server Actions za lead/contact capture

## Routes

- `/`
- `/portfolio`
- `/portfolio/[slug]`
- `/services`
- `/process`
- `/about`
- `/documentation`
- `/promo`
- `/contact`
- `/privacy`
- `/thank-you`

## How to run

```bash
npm install
npm run dev
```

Lokalno se podiže na [http://localhost:3005](http://localhost:3005).

## Env vars

Kopirajte `.env.example` u `.env.local` i po potrebi popunite:

```env
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_GA_ID=
RESEND_API_KEY=
CONTACT_EMAIL_TO=
NEXT_PUBLIC_SITE_URL=
DATABASE_URL=
```

Aplikacija radi i bez env var-ova zahvaljujući fallback vrednostima.

## Lead capture storage

- Dev: zapis u `data/leads.json` (fallback).
- Produkcija: Postgres preko `DATABASE_URL` + opcioni Resend adapter.

## Deploy

Projekt je spreman za Vercel deploy (`npm run build` prolazi bez dodatne konfiguracije).
