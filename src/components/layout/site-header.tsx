"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/src/components/i18n/language-switcher";
import { useLocale } from "@/src/components/i18n/locale-provider";
import { pickLocaleText } from "@/src/lib/i18n/config";
import { cn } from "@/src/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: pickLocaleText(locale, { sr: "Početna", en: "Home", de: "Startseite" }) },
    {
      href: "/portfolio",
      label: pickLocaleText(locale, { sr: "Projekti", en: "Projects", de: "Projekte" }),
    },
    { href: "/services", label: pickLocaleText(locale, { sr: "Usluge", en: "Services", de: "Leistungen" }) },
    { href: "/process", label: pickLocaleText(locale, { sr: "Proces", en: "Process", de: "Ablauf" }) },
    { href: "/about", label: pickLocaleText(locale, { sr: "O nama", en: "About", de: "Über uns" }) },
    { href: "/promo", label: pickLocaleText(locale, { sr: "Ponude", en: "Offers", de: "Angebote" }) },
    { href: "/contact", label: pickLocaleText(locale, { sr: "Kontakt", en: "Contact", de: "Kontakt" }) },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparentOnTop = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        transparentOnTop
          ? "border-transparent bg-transparent"
          : "border-brand-neutral-300/60 bg-brand-neutral-100/90 shadow-[0_10px_30px_rgba(59,13,24,0.08)] backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2"
          aria-label={pickLocaleText(locale, {
            sr: "Početna stranica",
            en: "Homepage",
            de: "Startseite",
          })}
          onClick={() => setMenuOpen(false)}
        >
          <span
            className={cn(
              "font-display group-hover:text-brand-gold text-3xl transition",
              transparentOnTop ? "text-brand-neutral-100" : "text-brand-burgundy",
            )}
          >
            ÉLÉMENT
          </span>
          <span
            className={cn(
              "hidden text-[10px] tracking-[0.28em] uppercase md:inline",
              transparentOnTop ? "text-brand-neutral-200" : "text-brand-earth",
            )}
          >
            by M·I·B·T
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label={pickLocaleText(locale, {
            sr: "Glavna navigacija",
            en: "Main navigation",
            de: "Hauptnavigation",
          })}
        >
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "hover:text-brand-gold focus-visible:ring-brand-gold text-sm tracking-wide transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  active
                    ? transparentOnTop
                      ? "text-brand-neutral-100"
                      : "text-brand-burgundy"
                    : transparentOnTop
                      ? "text-brand-neutral-200"
                      : "text-brand-earth",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs tracking-[0.2em] uppercase lg:hidden",
            transparentOnTop
              ? "border-brand-neutral-100/40 text-brand-neutral-100 border"
              : "border-brand-earth/30 text-brand-burgundy border",
          )}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={pickLocaleText(locale, {
            sr: "Otvori meni",
            en: "Open menu",
            de: "Menü öffnen",
          })}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {pickLocaleText(locale, { sr: "Meni", en: "Menu", de: "Menü" })}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-brand-neutral-300/60 bg-brand-neutral-100/95 overflow-hidden border-t px-6 py-4 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="flex flex-col gap-2"
              aria-label={pickLocaleText(locale, {
                sr: "Mobilna navigacija",
                en: "Mobile navigation",
                de: "Mobile Navigation",
              })}
            >
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-md px-2 py-2 text-sm transition",
                      active
                        ? "bg-brand-neutral-300 text-brand-burgundy"
                        : "text-brand-earth hover:bg-brand-neutral-200 hover:text-brand-burgundy",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <LanguageSwitcher className="mt-4" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
