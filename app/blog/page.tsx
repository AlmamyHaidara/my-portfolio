import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';
import { formatDate } from '@/utils';

export const metadata: Metadata = {
  title: 'Blog | Almamy Ali Haïdara',
  description: 'Articles sur le développement web, Next.js, React, et plus encore.',
  openGraph: {
    title: 'Blog | Almamy Ali Haïdara',
    description: 'Articles sur le développement web, Next.js, React, et plus encore.',
    url: 'https://www.almamyhaidara.com/blog',
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              {post.coverImage && (
                <div className="aspect-video relative">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <div className="text-sm text-muted-foreground mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={post.date instanceof Date ? post.date.toISOString() : post.date}>
                    {post.date instanceof Date ? formatDate(post.date) : post.date}
                  </time>
                </div>
                
                <p className="text-muted-foreground">{post.excerpt}</p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
