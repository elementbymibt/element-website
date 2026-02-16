import type { MetadataRoute } from "next";

import { projects } from "@/src/data/projects";
import { siteConfig } from "@/src/lib/site-config";

const STATIC_ROUTES = [
  "/",
  "/portfolio",
  "/services",
  "/process",
  "/about",
  "/promo",
  "/contact",
  "/privacy",
  "/uslovi-saradnje",
  "/thank-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${siteConfig.baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.baseUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...projectEntries];
}

