import { allProjets } from "contentlayer/generated";
// import { getProjectBySlug, getAllProjects } from "@/lib/mock-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SlugContent } from "./SlugContent";

// Forcer la génération statique de ces pages pour un chargement plus rapide
export const dynamic = "force-static";
export const revalidate = 3600; // Revalider le cache toutes les heures

// Utiliser une fonction de cache pour récupérer un projet par son slug
const getProjetBySlug = (slug: string) => {
  return allProjets.find((p) => p._raw.flattenedPath === `projets/${slug}`);
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const projet = getProjetBySlug(params.slug);

  if (!projet) {
    return {
      title: "Projet non trouvé",
      description: "Le projet que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${projet.title} | Projets | Almamy Ali Haïdara`,
    description: projet.description,
    openGraph: {
      title: projet.title,
      description: projet.description,
      type: "article",
      url: `https://www.codecraft.ml/projets/${params.slug}`,
      images: projet.cover
        ? [{ url: projet.cover, width: 1200, height: 630, alt: projet.title }]
        : [],
    },
  };
};

// Générer toutes les pages de projets statiquement
export async function generateStaticParams() {
  return allProjets
    .filter((projet) => projet.published)
    .map((projet) => ({
      slug: projet._raw.flattenedPath.replace("projets/", ""),
    }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const projet = getProjetBySlug(params.slug);

  if (!projet) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 mdx-content prose dark:prose-invert">
      <SlugContent projet={projet} params={params} />
    </article>
  );
}
