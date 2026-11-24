import type { MetadataRoute } from "next";
import { siteHomeUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteHomeUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}