import { cookies } from "next/headers";

import {
  defaultLocale,
  isLocale,
  localeCookieName,
  pickLocaleText,
  type LocalizedText,
  type SiteLocale,
} from "@/src/lib/i18n/config";

export async function getCurrentLocale(): Promise<SiteLocale> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(localeCookieName)?.value;

  if (isLocale(raw)) {
    return raw;
  }

  return defaultLocale;
}

export function textByLocale<T>(locale: SiteLocale, copy: LocalizedText<T>): T {
  return pickLocaleText(locale, copy);
}
