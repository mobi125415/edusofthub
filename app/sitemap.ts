import type { MetadataRoute } from "next";
import { softwareData } from "./software/data";
import { gamesData } from "./games/data";
import { aiToolsData } from "./ai-tools/data";
import { blogData } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://edusofthub-new.vercel.app";

  const staticPages = [
    "",
    "/software",
    "/games",
    "/ai-tools",
    "/blog",
    "/education",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const softwarePages = Object.keys(softwareData).map((slug) => ({
    url: `${baseUrl}/software/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const gamePages = Object.keys(gamesData).map((slug) => ({
    url: `${baseUrl}/games/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const aiToolPages = Object.keys(aiToolsData).map((slug) => ({
    url: `${baseUrl}/ai-tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = Object.keys(blogData).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...softwarePages,
    ...gamePages,
    ...aiToolPages,
    ...blogPages,
  ];
}
