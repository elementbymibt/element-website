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
- `/intake/start`
- `/intake/new`
- `/intake/[id]`
- `/projects/[id]`
- `/services`
- `/process`
- `/about`
- `/documentation`
- `/promo`
- `/contact`
- `/privacy`
- `/thank-you`

## Ultimate Client Intake Wizard

Implementiran je kompletan intake flow sa autosave i final confirmation mehanizmom:

- 14 ekrana (Step 0-13) kroz `/intake/[id]`.
- Start flow preko `/intake/start` i kreiranje draft-a preko `/intake/new`.
- Final submit kreira/azurira projekat i vodi na `/projects/[id]`.
- Jedan source of truth: `intake_json` validiran kroz Zod schema.
- Normalizacija podataka:
  - dimenzije kao integer mm
  - enum vrednosti
  - budzeti kao numeric EUR
  - tradeoff i budget alokacije normalizovane na zbir 100
- Kontradikcije:
  - sistem detektuje konflikte (stil/mood/budzet) i trazi potvrdu.
- Upload assets:
  - planovi, keep-item fotografije, inspiration i avoid slike
  - thumbnail fajlovi se kreiraju i vezuju za intake
- Autosave:
  - debounce autosave na promenama
  - save pri promeni koraka
  - indikator stanja cuvanja

## Intake API

- `POST /api/intake/start` - kreira novi draft intake
- `GET /api/intake/[id]` - ucitava draft
- `PATCH /api/intake/[id]` - autosave draft
- `POST /api/intake/[id]/submit` - final validation + submit
- `POST /api/intake/upload` - upload assets
- `GET /api/intake/file/[...path]` - runtime serving upload fajlova (Vercel /tmp fallback)

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

## Intake storage

- Dev fallback: `data/intakes.json`
- Produkcija: Postgres (`DATABASE_URL` ili `POSTGRES_URL`)
- Tabele se kreiraju automatski pri prvom upisu:
  - `intakes`
  - `intake_assets`
  - `projects`

## Deploy

Projekt je spreman za Vercel deploy (`npm run build` prolazi bez dodatne konfiguracije).
