import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { formatDate } from "@/utils";
import { ViewCount } from "./ViewCount";
import { Mdx } from "@/features/mdx/Mdx";

// Méthode pour générer les pages statiquement
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Génération dynamique des métadonnées pour chaque page de blog
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article non trouvé",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${post.title} | Blog de Almamy Aly Haïdara`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.codecraft.ml/blog/${post.slug}`,
      images: post.coverImage
        ? [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }]
        : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 mdx-content prose dark:prose-invert">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>Par {post.author}</span>
        <span className="mx-2">•</span>
        <time
          dateTime={
            post.date instanceof Date ? post.date.toISOString() : post.date
          }
        >
          {post.date instanceof Date
            ? formatDate(post.date)
            : new Date(post.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
        </time>
        <span className="mx-2">•</span>
        <ViewCount slug={params.slug} />
      </div>

      {post.coverImage && (
        <div className="mb-8 relative h-[400px] w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <Mdx>{post.content}</Mdx>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
