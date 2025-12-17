import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Utilise la variable d'environnement ou une valeur par défaut de sécurité
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://www.codecraft.ml";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/", "/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
