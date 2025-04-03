"use client";

import type { Metadata } from "next";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToolsData } from "@/types";
import { toolsData } from "@/lib/data";
import { cn } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Paintbrush, 
  Beaker, 
  Cloud, 
  ExternalLink, 
  Search, 
  ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Fonction pour obtenir l'icône correspondant à la catégorie
const getCategoryIcon = (category: string) => {
  switch(category) {
    case "Code":
      return <Code className="h-5 w-5 text-blue-500" />;
    case "Design":
      return <Paintbrush className="h-5 w-5 text-purple-500" />;
    case "Testing":
      return <Beaker className="h-5 w-5 text-amber-500" />;
    case "Deployment":
      return <Cloud className="h-5 w-5 text-green-500" />;
    default:
      return <Code className="h-5 w-5 text-primary" />;
  }
};

// Fonction pour obtenir la couleur associée à la catégorie
const getCategoryColor = (category: string) => {
  switch(category) {
    case "Code":
      return "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40";
    case "Design":
      return "bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40";
    case "Testing":
      return "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40";
    case "Deployment":
      return "bg-green-500/10 border-green-500/20 hover:border-green-500/40";
    default:
      return "bg-primary/10 border-primary/20 hover:border-primary/40";
  }
};

export default function Outils() {
  // État local pour la recherche
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filtrer les outils en fonction de la recherche
  const filteredToolsData = toolsData.map(category => ({
    ...category,
    tools: category.tools.filter(tool => 
      tool.techno.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.tools.length > 0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const toolVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        {/* Header amélioré */}
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.1 
            }}
            className="relative w-24 h-24 mb-4 overflow-hidden"
          >
            <Image
              src="/assets/images/logo1.png"
              alt="Logo CodeCraft"
              fill
              className="rounded-full object-cover"
              priority
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-2"
          >
            Ma Boîte à Outils
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            Voici les technologies et outils que j'utilise au quotidien pour concevoir et développer des applications performantes.
          </motion.p>
        </div>

        {/* Barre de recherche */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative max-w-md mx-auto mb-12"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher un outil..."
            className="pl-10 bg-card/50 border-border/40 focus:border-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>

        {/* Grille d'outils */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredToolsData.map((categoryData, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className={cn(
                "relative overflow-hidden rounded-lg border p-5",
                getCategoryColor(categoryData.category)
              )}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-md bg-card mr-3">
                  {getCategoryIcon(categoryData.category)}
                </div>
                <h2 className="text-xl font-bold">
                  {categoryData.category}
                </h2>
              </div>
              
              <motion.ul 
                variants={containerVariants}
                className="space-y-2"
              >
                <AnimatePresence>
                  {categoryData.tools.map((tool, i) => (
                    <motion.li
                      key={i}
                      variants={toolVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-2 rounded-md hover:bg-card/80 transition-all"
                    >
                      <span className="font-medium">{tool.techno}</span>
                      <Link 
                        href={tool.link}
                        target="_blank"
                        className="flex items-center text-sm text-primary hover:underline"
                      >
                        <span className="mr-1">Explorer</span>
                        <ExternalLink size={14} />
                      </Link>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Section "Pourquoi ces outils" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 text-left"
        >
          <h2 className="text-2xl font-bold mb-4">Pourquoi ces outils ?</h2>
          <p className="mb-4 text-muted-foreground">
            Le choix des outils est crucial dans le développement de projets performants et maintenables. 
            Ma sélection est basée sur plusieurs critères :
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <span><strong>Efficacité</strong> : Des outils qui augmentent la productivité et réduisent le temps de développement.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <span><strong>Fiabilité</strong> : Technologies éprouvées et supportées par une communauté active.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <span><strong>Évolutivité</strong> : Solutions qui s'adaptent à la croissance des projets.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <span><strong>Compatibilité</strong> : Outils qui fonctionnent bien ensemble dans un écosystème cohérent.</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
