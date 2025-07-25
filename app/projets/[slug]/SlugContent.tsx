"use client";
import { ViewCount } from "../../blog/[slug]/ViewCount";
import { Mdx } from "@/features/mdx/Mdx";
import { Projets } from "contentlayer/generated";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Image from "next/image";
import { useMemo } from "react";

export function SlugContent(props: {
  projet: Projets;
  params: { slug: string };
}) {
  // Optimisation avec useMemo pour les données formatées
  const formattedDate = useMemo(() => {
    return format(new Date(props.projet.publishedAt), "dd MMMM yyyy", {
      locale: fr,
    });
  }, [props.projet.publishedAt]);

  // Optimisation: préparer l'URL de l'image une seule fois
  const imageUrl = useMemo(() => {
    if (!props.projet.cover) return "/assets/images/logo1.png";
    if (props.projet.cover.startsWith("http")) return props.projet.cover;
    return props.projet.cover.startsWith("/")
      ? props.projet.cover
      : `/${props.projet.cover}`;
  }, [props.projet.cover]);

  return (
    <div className="prose prose-lg max-w-none">
      {/* En-tête du projet avec informations principales */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">{props.projet.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <time dateTime={new Date(props.projet.publishedAt).toISOString()}>
              {formattedDate}
            </time>
          </div>

          <ViewCount slug={props.params.slug} />

          {props.projet.freelance && (
            <Badge className="flex items-center gap-1 bg-primary text-primary-foreground">
              <Briefcase size={14} />
              <span>Projet Freelance</span>
            </Badge>
          )}
        </div>

        {/* Image de couverture */}
        {imageUrl && (
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src={imageUrl}
              alt={props.projet.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1024px, 1280px"
            />
          </div>
        )}

        {/* Tags du projet */}
        {props.projet.tags && props.projet.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {props.projet.tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="bg-muted/50">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </motion.div>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-muted-foreground"
      >
        <Mdx>{props.projet.body.raw}</Mdx>
      </motion.div>
    </div>
  );
}
