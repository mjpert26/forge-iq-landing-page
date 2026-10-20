import type { MetadataRoute } from "next";
import { pageMeta, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pageMeta).map((page) => ({
    url: `${siteConfig.url}${page.path === "/" ? "/" : page.path}`,
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}
