export const localeOptions = ["sr", "en", "de"] as const;
export type SiteLocale = (typeof localeOptions)[number];

export const defaultLocale: SiteLocale = "sr";
export const localeCookieName = "element_locale";

export function isLocale(value: unknown): value is SiteLocale {
  return typeof value === "string" && localeOptions.includes(value as SiteLocale);
}

export type LocalizedText<T> = {
  sr: T;
  en: T;
  de?: T;
};

export function pickLocaleText<T>(locale: SiteLocale, copy: LocalizedText<T>): T {
  if (locale === "sr") {
    return copy.sr;
  }

  if (locale === "de") {
    return copy.de ?? copy.en;
  }

  return copy.en;
}
