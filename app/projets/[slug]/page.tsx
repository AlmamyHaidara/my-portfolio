import { allProjets } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import {ViewCount} from "../../blog/[slug]/ViewCount";
import { SlugContent } from "./SlugContent";

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: { slug: string };
}): Promise<Metadata> => {
  const projet = allProjets.find(
    (r) => r.url.replace(/projets\/\d+-/, "") === props.params.slug
  );

  if (!projet) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: projet.title,
    description: projet.description,
  };
};

export default async function Page(props: { params: { slug: string } }) {
  const projet = allProjets.find(
    (r) => r.url.replace(/projets\/\d+-/, "") === props.params.slug
  );

  if (!projet) {
    notFound();
  }

  return <SlugContent projet={projet} params={props.params} />;
}
