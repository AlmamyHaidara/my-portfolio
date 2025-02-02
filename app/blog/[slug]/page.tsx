import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { SlugContent } from "./SlugContent";
export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = allPosts.find(
    (r) => r.url.replace(/blog\/\d+-/, "") === props.params.slug
  );

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
  console.log("allPosts:", props.params.slug);
  const post = allPosts.find(
    (r) => r.url.replace(/blog\/\d+-/, "") === props.params.slug
  );
  if (!post) {
    notFound();
  }

  return <SlugContent post={post} params={props.params} />;
}
