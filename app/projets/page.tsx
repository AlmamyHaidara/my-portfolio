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
// import { getAllProjects } from "@/lib/mock-data";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Briefcase } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useState, useEffect } from "react";

export default function Page() {
  const [projets, setProjets] = useState<Projets[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement asynchrone
    setIsLoading(true);
    
    // Obtenir les projets depuis Contentlayer
    const filteredProjets = allProjets.filter(projet => projet.published);
    setProjets(filteredProjets);
    
    setIsLoading(false);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez une sélection de mes projets professionnels et personnels.
          Chaque projet représente un défi unique et des compétences variées.
        </p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      ) : (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projets.map((projet) => (
            <motion.div 
              key={projet._id}
              variants={item}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden rounded-xl border-none bg-card shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-card/80 dark:backdrop-blur-sm">
                <div className="relative">
                  {/* Image de couverture */}
                  <div className="h-[200px] w-full overflow-hidden">
                    {projet.cover ? (
                      <img
                        src={projet.cover}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        alt={projet.title}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <span className="text-muted-foreground">Aucune image</span>
                      </div>
                    )}
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
                  <Link
                    href={`/projets/${projet._raw.flattenedPath.replace('projets/', '')}`}
                    className="group inline-flex items-center gap-1 text-primary font-medium hover:underline"
                  >
                    Découvrir le projet
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
