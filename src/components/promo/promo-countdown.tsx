"use client";

import { useEffect, useMemo, useState } from "react";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { pickLocaleText } from "@/src/lib/i18n/config";

type PromoCountdownProps = {
  targetDate: string;
};

function format(value: number) {
  return String(Math.max(value, 0)).padStart(2, "0");
}

export function PromoCountdown({ targetDate }: PromoCountdownProps) {
  const { locale } = useLocale();
  const end = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState(end);

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const distance = Math.max(end - now, 0);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  return (
    <div className="border-brand-gold/50 bg-brand-burgundy text-brand-neutral-100 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs tracking-[0.15em] uppercase">
      <span>{pickLocaleText(locale, { sr: "Ističe za", en: "Ends in", de: "Läuft ab in" })}</span>
      <span className="text-brand-gold font-semibold">
        {format(days)}d : {format(hours)}h : {format(minutes)}m
      </span>
    </div>
  );
}
