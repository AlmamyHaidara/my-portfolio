"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { allProjets, Projets } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Briefcase, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [projets, setProjets] = useState<Projets[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigatingTo, setNavigatingTo] = useState("");
  const router = useRouter();

  // Optimisation: Utiliser useMemo pour filtrer les projets
  const filteredProjets = useMemo(() => {
    return allProjets.filter(projet => projet.published);
  }, []);

  useEffect(() => {
    // Chargement immédiat sans timeout artificiel
    setProjets(filteredProjets);
    // Ajout d'un petit délai pour éviter un flash du loader en cas de chargement trop rapide
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [filteredProjets]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Réduit pour rendre l'animation plus rapide
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  // Animation du loader
  const loaderVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      transition: { duration: 0.3 }
    }
  };

  // Fonction pour vérifier si une URL d'image est valide
  const getImageUrl = (cover: string | undefined) => {
    if (!cover) return "/assets/images/logo1.png";
    
    // Si l'image commence par http, c'est une URL externe
    if (cover.startsWith('http')) {
      return cover;
    }
    
    // Sinon utiliser l'image locale en ajoutant le préfixe si nécessaire
    return cover.startsWith('/') ? cover : `/${cover}`;
  };

  // Fonction de navigation avec état de chargement
  const handleNavigation = (slug: string) => {
    setIsNavigating(true);
    setNavigatingTo(slug);
    
    // Navigation programmée
    setTimeout(() => {
      router.push(`/projets/${slug}`);
    }, 100); // Délai court pour permettre l'affichage de l'indicateur
  };

  // Préchargement des pages au survol
  const handleHover = (slug: string) => {
    router.prefetch(`/projets/${slug}`);
  };

  return (
    <div className="py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez une sélection de mes projets professionnels et personnels.
          Chaque projet représente un défi unique et des compétences variées.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-[3px] border-primary/30"></div>
              <div className="absolute inset-0 rounded-full border-t-[3px] border-primary animate-spin"></div>
            </div>
            <p className="mt-4 text-muted-foreground">Chargement des projets...</p>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projets.map((projet) => {
              const slug = projet._raw.flattenedPath.replace("projets/", "");
              return (
              <motion.div 
                key={projet._id}
                variants={item}
                whileHover={{ y: -5 }}
                onHoverStart={() => handleHover(slug)}
              >
                <Card className="h-full flex flex-col overflow-hidden rounded-xl border-none bg-card shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-card/80 dark:backdrop-blur-sm">
                  <div className="relative">
                    {/* Image de couverture */}
                    <div className="h-[200px] w-full overflow-hidden bg-muted/40">
                      <div className="relative h-full w-full">
                        <Image
                          src={getImageUrl(projet.cover)}
                          alt={projet.title}
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            // Fallback sur une image par défaut en cas d'erreur
                            const target = e.target as HTMLImageElement;
                            target.src = "/assets/images/logo1.png";
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Badge Freelance si applicable */}
                    {projet.freelance && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="flex items-center gap-1 bg-primary text-primary-foreground">
                          <Briefcase size={14} />
                          <span>Freelance</span>
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <time dateTime={new Date(projet.publishedAt).toISOString()}>
                        {format(new Date(projet.publishedAt), 'dd MMMM yyyy', { locale: fr })}
                      </time>
                    </div>
                    
                    <CardTitle className="text-xl font-bold tracking-tight">
                      {projet.title}
                    </CardTitle>
                    
                    <CardDescription className="mt-3 line-clamp-3 text-muted-foreground">
                      {projet.description}
                    </CardDescription>
                  </CardHeader>
                  
                  {/* Tags du projet */}
                  {projet.tags && projet.tags.length > 0 && (
                    <div className="px-5 pb-3">
                      <div className="flex flex-wrap gap-2">
                        {projet.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="bg-muted/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <CardFooter className="mt-auto border-t p-5">
                    <button
                      onClick={() => handleNavigation(slug)}
                      className="group inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      disabled={isNavigating && navigatingTo === slug}
                    >
                      {isNavigating && navigatingTo === slug ? (
                        <>
                          <span>Chargement en cours</span>
                          <Loader2 size={16} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Découvrir le projet
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            )})}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Indicateur de navigation global */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-8 rounded-xl shadow-xl flex flex-col items-center max-w-xs w-full"
            >
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                <div className="absolute inset-0 rounded-full border-t-4 border-r-4 border-primary animate-spin"></div>
              </div>
              <p className="text-center font-medium">Navigation vers le projet...</p>
              <p className="text-sm text-muted-foreground text-center mt-2">Préparation du contenu en cours</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
