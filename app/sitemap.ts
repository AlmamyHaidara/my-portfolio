import { MetadataRoute } from "next";

// Utilisation d'une  unique pour tout le projet
const baseUrl = process.env.NEXT_PUBLIC_URL || "https://www.codecraft.ml";

const routes = ["", "/a-propos", "/outil", "/projets", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => {
    const path = route.startsWith("/") || route === "" ? route : `/${route}`;

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: (route === "" ? "daily" : "weekly") as any,
    };
  });

  return [...staticRoutes];
}
