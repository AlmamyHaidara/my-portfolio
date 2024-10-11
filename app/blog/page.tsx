import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { allPosts } from 'contentlayer/generated';


export default async function Page() {

  return (
    <div className=" mt-16 flex size-full flex-col justify-start gap-5 ">
      {allPosts.reverse().map((post) => (
        <Card key={post.url.replace(/\d+-/g, "").replace(".mdx", "")}>
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
              href={`${post.url.replace(/\d+-/g, "").replace(".mdx", "")}`}
            >
              Découvrir
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
