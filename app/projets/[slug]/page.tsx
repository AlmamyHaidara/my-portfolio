import { Mdx } from "@/features/mdx/Mdx";
import {  allProjets } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: { slug: string };
}): Promise<Metadata> => {
  const projet = allProjets.find(r => r.url.replace(/projets\/\d+-/, '') === props.params.slug);

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

export default async function RoutePage(props: { params: { slug: string } }) {
  // const projet =  await getMakdown(props.params.slug,"/app/content/projets");
  const projet = allProjets.find(r => r.url.replace(/projets\/\d+-/, '') === props.params.slug);
  console.log('allPosts22:', allProjets[0].url);



  if (!projet) {
    notFound();
  }

  return (    
    <div className="prose prose-lg text-muted-foreground lg:prose-2xl ">
      
      <div className="pt-10 text-muted-foreground">
        <h1 className="text-muted-foreground ">{projet.title}</h1>
        <Mdx >{projet.body.raw}</Mdx>
      </div>
    </div>
    
  );
}
