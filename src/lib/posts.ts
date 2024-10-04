import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const PostSchema = z.object({
  title: z.string().min(10).max(65),
  description: z.string(),
  publishedAt: z.coerce.string(),
  cover:z.string().optional().default(""),
  published: z.boolean().optional().default(false),
  freelance: z.boolean().optional().default(false),
});

export type Post = z.infer<typeof PostSchema> & {
  slug: string;
  content: string;
};

export const getMakdowns = async (dirName="/app/content/posts") => {
  console.log("---dirName",dirName);
  
  const postsDirectory = path.join(process.cwd(), dirName);
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((f) => f.endsWith(".mdx"));

  const posts: Post[] = [];
  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const frontmatter = matter(fileContent);
    
    const safeData = PostSchema.safeParse(frontmatter.data);
    
    if (!safeData.success) {
      console.error(`Error parsing file: ${fileName}`);
      safeData.error.issues.forEach((issue) => {
        console.error(`  - ${issue.path.join(" -> ")}: ${issue.message}`);
      });
      continue;
    }
    
    if (!safeData.data.published && process.env.NODE_ENV !== "development") {
      continue;
    }
    
    posts.push({
      ...safeData.data,
      slug: fileName.replace(/^\d+-/, "").replace(".mdx", ""),
      content: frontmatter.content,
    });
  }
  
  return posts;
};

export const getMakdown = async (slug: string, dir:string) => {
  const posts = await getMakdowns(dir);
  console.log("yyyyy",posts);
  return posts.find((post) => post.slug === slug);
};
