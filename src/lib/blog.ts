import { BlogPostValues } from '@/utils/validation';
import { allPosts } from 'contentlayer/generated';

/**
 * Récupère tous les articles de blog
 */
export async function getAllBlogPosts(): Promise<BlogPostValues[]> {
  // Convertir les posts de Contentlayer au format BlogPostValues
  return allPosts
    .filter(post => post.published)
    .map(post => ({
      title: post.title,
      excerpt: post.description,
      content: post.body.raw,
      slug: post._raw.flattenedPath.replace('blog/', ''),
      date: post.publishedAt,
      author: "Almamy Ali Haïdara", // Vous pourriez ajouter ceci dans le frontmatter
      tags: post.tags || [],
      coverImage: post.cover,
    }));
}

/**
 * Récupère un article de blog par son slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPostValues | null> {
  const post = allPosts.find(post => post._raw.flattenedPath === `blog/${slug}`);
  
  if (!post) return null;
  
  return {
    title: post.title,
    excerpt: post.description,
    content: post.body.raw,
    slug: post._raw.flattenedPath.replace('blog/', ''),
    date: post.publishedAt,
    author: "Almamy Ali Haïdara", // Vous pourriez ajouter ceci dans le frontmatter
    tags: post.tags || [],
    coverImage: post.cover,
  };
}

/**
 * Récupère les articles de blog par tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPostValues[]> {
  const posts = allPosts
    .filter(post => post.published && post.tags?.includes(tag))
    .map(post => ({
      title: post.title,
      excerpt: post.description,
      content: post.body.raw,
      slug: post._raw.flattenedPath.replace('blog/', ''),
      date: post.publishedAt,
      author: "Almamy Ali Haïdara", // Vous pourriez ajouter ceci dans le frontmatter
      tags: post.tags || [],
      coverImage: post.cover,
    }));
  
  return posts;
}

/**
 * Récupère tous les tags uniques de tous les articles
 */
export async function getAllTags(): Promise<string[]> {
  const allTags = allPosts
    .filter(post => post.published)
    .flatMap(post => post.tags || []);
  
  return Array.from(new Set(allTags));
} 