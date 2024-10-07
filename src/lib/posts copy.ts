import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const PostSchema = z.object({
  title: z.string().min(10).max(65),
  description: z.string(),
  publishedAt: z.coerce.string(),
  cover: z.string().optional().default(""),
  published: z.boolean().optional().default(false),
  freelance: z.boolean().optional().default(false),
});

export type Post = z.infer<typeof PostSchema> & {
  slug: string;
  content: string;
};

const parsePostFile = async (fileName: string, postsDirectory: string): Promise<Post | null> => {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContent = await fs.readFile(fullPath, "utf-8");
  const frontmatter = matter(fileContent);
  
  const safeData = PostSchema.safeParse(frontmatter.data);
  
  if (!safeData.success) {
    console.error(`Erreur lors du parsing du fichier: ${fileName}`);
    safeData.error.issues.forEach((issue) => {
      console.error(`  - ${issue.path.join(" -> ")}: ${issue.message}`);
    });
    return null; // Retourne null en cas d'erreur
  }
  
  if (!safeData.data.published && process.env.NODE_ENV !== "development") {
    return null; // Ignore les posts non publiés
  }
  
  return {
    ...safeData.data,
    slug: fileName.replace(/^\d+-/, "").replace(".mdx", ""),
    content: frontmatter.content,
  };
};

export const getMakdowns = async (dirName = "/app/content/posts"): Promise<Post[]> => {
  const postsDirectory = path.join(process.cwd(), dirName);
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(fileNames.map(fileName => parsePostFile(fileName, postsDirectory)));
  
  // Filtrer les posts null
  return posts.filter((post): post is Post => post !== null);
};

export const getMakdown = async (slug: string, dir: string): Promise<Post | undefined> => {
  const posts = await getMakdowns(dir);
  return posts.find((post) => post.slug === slug);
};
