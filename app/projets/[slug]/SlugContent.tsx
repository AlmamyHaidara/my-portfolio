"use client";
import { ViewCount } from "../../blog/[slug]/ViewCount";
import { Mdx } from "@/features/mdx/Mdx";
import { Projets } from "contentlayer/generated";
import { motion } from "motion/react";

export function SlugContent(props: {
  projet: Projets;
  params: { slug: string };
}) {
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
        <p className="text-xs text-muted-foreground ">
          {new Date(props.projet.publishedAt).toLocaleDateString()}
        </p>
        <ViewCount slug={props.params.slug} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-10 text-muted-foreground"
      >
        <h1 className="text-muted-foreground ">{props.projet.title}</h1>
        <Mdx>{props.projet.body.raw}</Mdx>
      </motion.div>
    </div>
  );
}
