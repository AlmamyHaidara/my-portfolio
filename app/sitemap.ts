import { MetadataRoute } from 'next';

// Configuration du site
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.almamyhaidara.com';

// Liste des pages pour le sitemap
const routes = [
  '',
  '/a-propos',
  '/outil',
  '/projets',
  '/blog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Création des entrées du sitemap pour les routes statiques
  const staticRoutes = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // On pourrait aussi ajouter ici des routes dynamiques basées sur des contenus de blog ou de projets
  // Exemple :
  // const blogPosts = await getBlogPosts();
  // const dynamicRoutes = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes];
} 