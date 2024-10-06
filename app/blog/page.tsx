import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMakdowns } from "@/lib/posts";
import Link from "next/link";

export default async function Page() {
  const posts =  await getMakdowns();
  console.log(posts);
  
  return (
    <div className=" w-full h-full flex justify-start mt-16 flex-col gap-5 ">
      {posts.reverse().map((post) => (
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
              Découvrir
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
