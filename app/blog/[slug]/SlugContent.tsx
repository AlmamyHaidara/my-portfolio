"use client";
import { ViewCount } from "../../blog/[slug]/ViewCount";
import { Mdx } from "@/features/mdx/Mdx";
import { Post } from "contentlayer/generated";
import { motion } from "framer-motion";

export function SlugContent(props: { post: Post; params: { slug: string } }) {
  console.log();

  return (
    <div className="prose prose-lg text-muted-foreground lg:prose-2xl ">
      <motion.div
        // L’état initial au chargement
        initial={{ opacity: 0, y: -50 }}
        // L’état final (après l’animation)
        animate={{ opacity: 1, y: 0 }}
        // La durée et autres paramètres de transition
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2"
      >
        <div className="flex items-center gap-2">
          <p className="text-xs text-muted-foreground ">
            {new Date(props.post.publishedAt).toLocaleDateString()}
          </p>
          <ViewCount slug={props.params.slug} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-muted-foreground"
      >
        <h1 className="text-muted-foreground ">{props.post?.title}</h1>
        <div className="!text-muted-foreground">
          <Mdx>{props.post?.body.raw}</Mdx>
        </div>
      </motion.div>
    </div>
  );
}
