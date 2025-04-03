// Ce fichier contient des données factices pour remplacer temporairement les données Contentlayer
// À utiliser uniquement pendant que nous résolvons les problèmes de configuration Contentlayer

export interface MockProject {
  title: string;
  description: string;
  publishedAt: string;
  cover: string;
  freelance: boolean;
  published: boolean;
  url: string;
}

export const MOCK_PROJECTS: MockProject[] = [
  {
    title: "Projet Portfolio",
    description: "Un portfolio professionnel basé sur Next.js avec des fonctionnalités modernes et une interface utilisateur élégante.",
    publishedAt: "2024-04-01",
    cover: "/images/projects/portfolio.jpg",
    freelance: false,
    published: true,
    url: "projets/portfolio"
  },
  {
    title: "Archivage MIDI SARL",
    description: "Système de gestion d'archives numériques pour MIDI SARL, permettant la numérisation et l'organisation des documents.",
    publishedAt: "2024-03-15",
    cover: "/images/projects/archivage.jpg",
    freelance: true,
    published: true,
    url: "projets/archivage-midi-sarl"
  },
  {
    title: "Application E-commerce",
    description: "Plateforme de commerce électronique complète avec panier, gestion des commandes et intégration de paiement.",
    publishedAt: "2024-02-20",
    cover: "/images/projects/ecommerce.jpg",
    freelance: true,
    published: true,
    url: "projets/application-ecommerce"
  }
];

export interface MockBlogPost {
  title: string;
  description: string;
  publishedAt: string;
  cover: string;
  freelance: boolean;
  published: boolean;
  url: string;
  content: string;
  tags: string[];
}

export const MOCK_BLOG_POSTS: MockBlogPost[] = [
  {
    title: "Créer une API REST avec Node.js et Express",
    description: "Un guide complet pour créer une API REST robuste et évolutive avec Node.js et Express.",
    publishedAt: "2024-03-25",
    cover: "/images/blog/api-rest.jpg",
    freelance: false,
    published: true,
    url: "blog/api-rest-node-express",
    content: "# Créer une API REST avec Node.js et Express\n\nCet article présente les étapes pour créer une API REST complète...",
    tags: ["Node.js", "Express", "API", "Backend"]
  },
  {
    title: "Introduction à Next.js 14",
    description: "Découvrez les nouvelles fonctionnalités et améliorations de Next.js 14.",
    publishedAt: "2024-03-10",
    cover: "/images/blog/nextjs-14.jpg",
    freelance: false,
    published: true,
    url: "blog/introduction-nextjs-14",
    content: "# Introduction à Next.js 14\n\nNext.js 14 apporte de nombreuses améliorations...",
    tags: ["Next.js", "React", "Frontend", "Web Development"]
  }
];

// Fonction pour obtenir tous les tags uniques
export function getAllTags(): string[] {
  const allTags = MOCK_BLOG_POSTS.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
}

// Fonction pour obtenir tous les posts de blog
export function getAllBlogPosts(): MockBlogPost[] {
  return MOCK_BLOG_POSTS.filter(post => post.published);
}

// Fonction pour obtenir un post de blog par son slug
export function getBlogPostBySlug(slug: string): MockBlogPost | undefined {
  return MOCK_BLOG_POSTS.find(post => {
    const postSlug = post.url.split('/').pop();
    return postSlug === slug;
  });
}

// Fonction pour obtenir des posts de blog par tag
export function getBlogPostsByTag(tag: string): MockBlogPost[] {
  return MOCK_BLOG_POSTS.filter(post => post.published && post.tags.includes(tag));
}

// Fonction pour obtenir tous les projets
export function getAllProjects(): MockProject[] {
  return MOCK_PROJECTS.filter(project => project.published);
}

// Fonction pour obtenir un projet par son slug
export function getProjectBySlug(slug: string): MockProject | undefined {
  return MOCK_PROJECTS.find(project => {
    const projectSlug = project.url.split('/').pop();
    return projectSlug === slug;
  });
} 