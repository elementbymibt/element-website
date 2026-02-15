"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/src/components/i18n/language-switcher";
import { useLocale } from "@/src/components/i18n/locale-provider";
import { BookingLink } from "@/src/components/ui/booking-link";
import { IntakeLink } from "@/src/components/ui/intake-link";
import { cn } from "@/src/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems =
    locale === "en"
      ? [
          { href: "/", label: "Home" },
          { href: "/portfolio", label: "Projects" },
          { href: "/intake/start", label: "Intake" },
          { href: "/services", label: "Services" },
          { href: "/process", label: "Process" },
          { href: "/about", label: "About" },
          { href: "/documentation", label: "Docs" },
          { href: "/promo", label: "Offers" },
          { href: "/contact", label: "Contact" },
        ]
      : [
          { href: "/", label: "Početna" },
          { href: "/portfolio", label: "Projekti" },
          { href: "/intake/start", label: "Intake" },
          { href: "/services", label: "Usluge" },
          { href: "/process", label: "Proces" },
          { href: "/about", label: "O nama" },
          { href: "/documentation", label: "Dokumentacija" },
          { href: "/promo", label: "Promo" },
          { href: "/contact", label: "Kontakt" },
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
          aria-label={locale === "en" ? "Homepage" : "Početna stranica"}
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
          aria-label={locale === "en" ? "Main navigation" : "Glavna navigacija"}
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
          <IntakeLink
            variant={transparentOnTop ? "secondary" : "secondary"}
            className={cn(
              "px-5 py-2.5 text-xs",
              transparentOnTop &&
                "border-brand-neutral-100/65 text-brand-neutral-100 hover:bg-brand-neutral-100/10 hover:text-brand-neutral-100",
            )}
          />
          <LanguageSwitcher />
          <BookingLink
            variant={transparentOnTop ? "secondary" : "primary"}
            className={cn(
              "px-5 py-2.5 text-xs",
              transparentOnTop &&
                "border-brand-neutral-100/65 text-brand-neutral-100 hover:bg-brand-neutral-100/10 hover:text-brand-neutral-100",
            )}
          />
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
          aria-label={locale === "en" ? "Open menu" : "Otvori meni"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {locale === "en" ? "Menu" : "Meni"}
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
              aria-label={locale === "en" ? "Mobile navigation" : "Mobilna navigacija"}
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
            <IntakeLink className="mt-4 w-full" />
            <BookingLink className="mt-4 w-full" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
