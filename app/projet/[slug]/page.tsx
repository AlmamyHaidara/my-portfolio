import { Mdx } from "@/features/mdx/Mdx";
import { getMakdown }  from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// export const dynamic = "force-static";

// export const generateMetadata = async (props: {
//   params: { slug: string };
// }): Promise<Metadata> => {
//   const post =  await getMakdown(props.params.slug,"/app/content/projets");

//   if (!post) {
//     return {
//       title: "404 - Page Not Found",
//       description: "Page not found",
//     };
//   }

//   return {
//     title: post.title,
//     description: post.description,
//   };
// };

export default async function RoutePage(props: { params: { slug: string } }) {
  const post =  await getMakdown(props.params.slug,"/app/content/projets");

  if (!post) {
    notFound();
  }

  return (
    // <div className="prose prose-sm lg:prose-lg text-muted-foreground ">
    
    <div className="prose prose-lg lg:prose-2xl text-muted-foreground ">
      
      <div className="text-muted-foreground pt-10">
        <h1 className="text-muted-foreground ">{post.title}</h1>
        <Mdx >{post.content}</Mdx>
      </div>
    </div>
    
  );
}
