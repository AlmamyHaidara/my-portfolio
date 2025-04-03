import { allProjets } from "contentlayer/generated";
// import { getProjectBySlug, getAllProjects } from "@/lib/mock-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import {ViewCount} from "../../blog/[slug]/ViewCount";
import { SlugContent } from "./SlugContent";
import { ViewCount } from "../../blog/[slug]/ViewCount";

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: { slug: string };
}): Promise<Metadata> => {
  const projet = allProjets.find((p) => p._raw.flattenedPath === `projets/${props.params.slug}`);

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

export async function generateStaticParams() {
  return allProjets.map((projet) => ({
    slug: projet._raw.flattenedPath.replace("projets/", ""),
  }));
}

export default async function Page(props: { params: { slug: string } }) {
  const projet = allProjets.find((p) => p._raw.flattenedPath === `projets/${props.params.slug}`);

  if (!projet) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <SlugContent projet={projet} params={props.params} />
    </article>
  );
}
