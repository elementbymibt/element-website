"use client";

import { track } from "@vercel/analytics";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventName =
  | "email_popup_submit"
  | "email_popup_skip"
  | "booking_click"
  | "intake_click"
  | "intake_start"
  | "intake_submit"
  | "newsletter_submit"
  | "lead_submit"
  | "contact_submit"
  | "documentation_download";

export function trackEvent(
  eventName: AnalyticsEventName,
  params: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    track(eventName, params);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  } catch {
    // Analytics errors must never block primary UX flows.
  }
}
