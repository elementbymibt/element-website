"use client";

import { BookingLink } from "@/src/components/ui/booking-link";
import { IntakeLink } from "@/src/components/ui/intake-link";
import { cn } from "@/src/lib/utils";

export function MobileStickyCta({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-50 pb-[calc(env(safe-area-inset-bottom)+1rem)] lg:hidden",
        className,
      )}
      aria-hidden="false"
    >
      <div className="pointer-events-auto mx-auto w-full max-w-7xl px-4">
        <div className="border-brand-neutral-300/60 bg-brand-neutral-100/90 rounded-3xl border p-2 shadow-[0_18px_50px_rgba(59,13,24,0.18)] backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2">
            <BookingLink
              trackingLocation="mobile_sticky"
              className="w-full rounded-2xl py-3 text-xs font-semibold"
            />
            <IntakeLink
              trackingLocation="mobile_sticky"
              className="w-full rounded-2xl py-3 text-xs font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
