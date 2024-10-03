import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();
  return (
    <div className=" w-full h-full flex justify-start mt-16 flex-col ">
      {posts.map((post) => (
        <Card key={post.slug}>
          <CardHeader>
            <p className="text-xs text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              className="text-blue-500 hover:underline"
              href={`/posts/${post.slug}`}
            >
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
