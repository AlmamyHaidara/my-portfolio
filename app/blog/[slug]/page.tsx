/* eslint-disable @typescript-eslint/no-explicit-any */
import { Mdx } from "@/features/mdx/Mdx";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewCount } from "./ViewCount";
import { allPosts } from "contentlayer/generated";

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = allPosts.find(r => r.url.replace(/blog\/\d+-/, '') === props.params.slug);

  if (!post) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
};

export default async function RoutePage(props: { params: { slug: string } }) {
  console.log('allPosts:', props.params.slug);
  const post = allPosts.find(r => r.url.replace(/blog\/\d+-/, '') === props.params.slug);
  if (!post) {
    notFound();
  }

  return (
    // <div className="prose prose-sm lg:prose-lg text-muted-foreground">
    <div className="prose prose-lg text-muted-foreground lg:prose-2xl ">

    {/* <div className="prose prose-lg lg:prose-xl text-muted-foreground"> */}
      <div className="flex items-center gap-2">
        <p className="text-xs text-muted-foreground ">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <ViewCount slug={props.params.slug} />
      </div>
      <div className="w-full text-muted-foreground">
        <h1 className="text-muted-foreground ">{post?.title}</h1>
        <div className="!text-muted-foreground">

        <Mdx>{post?.body.raw}</Mdx>
        </div>
      </div>
    </div>
  );
}
