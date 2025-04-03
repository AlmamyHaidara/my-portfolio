"use client"
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Server, 
  ChevronRight, 
  Award, 
  Calendar, 
  Building, 
  Code, 
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/utils";

// Les technologies principales
const mainTechnologies = [
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-black" },
  { name: "Nest.js", color: "bg-red-600" },
  { name: "React Native", color: "bg-sky-600" },
  { name: "Tailwind CSS", color: "bg-cyan-500" },
  { name: "PostgreSQL", color: "bg-blue-700" },
  { name: "Azure", color: "bg-blue-600" },
  { name: "Docker", color: "bg-blue-600" },
  { name: "Terraform", color: "bg-purple-700" },
];

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section d'en-tête avec photo et titre */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
          >
            <Image
              src="/assets/images/logo1.png"
              alt="Almamy Ali Haïdara"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-3"
            >
              À propos de moi
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {mainTechnologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  className={cn("px-3 py-1 text-white", tech.color)}
                >
                  {tech.name}
                </Badge>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Développeur Full-Stack passionné et certifié{" "}
              <span className="font-semibold text-primary">Azure Administrator (AZ-104)</span>,
              je conçois des applications modernes et sécurisées, tout en
              garantissant une expérience utilisateur optimale.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Introduction améliorée */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show" 
          className="mb-16 bg-card/30 rounded-xl p-6 border border-border/50 backdrop-blur-sm"
        >
          <motion.p variants={itemVariants} className="text-lg leading-relaxed">
            Mon expertise couvre non seulement le développement web avec des technologies telles que{" "}
            <span className="font-semibold text-primary">TypeScript</span>,{" "}
            <span className="font-semibold text-primary">Next.js</span>,{" "}
            <span className="font-semibold text-primary">Nest.js</span>,{" "}
            <span className="font-semibold text-primary">Tailwind CSS</span>,{" "}
            <span className="font-semibold text-primary">PostgreSQL</span>, et{" "}
            <span className="font-semibold text-primary">Vercel</span>, mais également le
            développement mobile avec{" "}
            <span className="font-semibold text-primary">React Native</span> et {" "}
            <span className="font-semibold text-primary">Expo</span>; l'automatisation des tâches avec{" "} 
            <span className="font-semibold text-primary">Python</span> et{" "}
            <span className="font-semibold text-primary">Azure Pipelines</span>.
          </motion.p>
        </motion.div>
        
        {/* Section Parcours Professionnel */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Parcours Professionnel</h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg mb-8 text-muted-foreground">
            J'ai acquis une solide expérience dans le développement Full-Stack au
            fil des années, travaillant sur une variété de projets allant des
            applications web et mobiles aux solutions DevOps complexes.
          </motion.p>
          
          <div className="space-y-6">
            {/* Expérience Samina */}
            <motion.div variants={timelineItemVariants} className="relative">
              <Card className="border-l-4 border-l-blue-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">Samina</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Building size={14} className="text-muted-foreground" />
                        <span>Entreprise informatique</span>
                        <span className="mx-1">•</span>
                        <span>Actuel</span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600/80 text-white">Actuel</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Samina est une entreprise informatique de premier plan,
                    offrant une gamme complète de services. J'y occupe un rôle clé en contribuant au
                    développement et au déploiement d'applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-card/60">Angular</Badge>
                    <Badge variant="outline" className="bg-card/60">ASP.NET</Badge>
                    <Badge variant="outline" className="bg-card/60">MySQL</Badge>
                    <Badge variant="outline" className="bg-card/60">Azure</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Expérience MKParis Concept */}
            <motion.div variants={timelineItemVariants} className="relative">
              <Card className="border-l-4 border-l-purple-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">MKParis Concept</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Building size={14} className="text-muted-foreground" />
                        <span>Application mobile</span>
                        <span className="mx-1">•</span>
                        <span>2023</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Développement backend et front-end d'une application mobile pour la vente de produits et services de beauté.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-card/60">React Native</Badge>
                    <Badge variant="outline" className="bg-card/60">TypeScript</Badge>
                    <Badge variant="outline" className="bg-card/60">Firebase</Badge>
                    <Badge variant="outline" className="bg-card/60">MySQL</Badge>
                    <Badge variant="outline" className="bg-card/60">Azure</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Expérience Freelance */}
            <motion.div variants={timelineItemVariants} className="relative">
              <Card className="border-l-4 border-l-amber-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">Projets Freelance</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Code size={14} className="text-muted-foreground" />
                        <span>Applications diverses</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Développement d'applications diverses, notamment une application d'archivage
                    et l'application mobile 'Sugu' pour mettre en relation fournisseurs et clients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-card/60">Next.js</Badge>
                    <Badge variant="outline" className="bg-card/60">TypeScript</Badge>
                    <Badge variant="outline" className="bg-card/60">React Native</Badge>
                    <Badge variant="outline" className="bg-card/60">Firebase</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section Parcours Scolaire */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Formation</h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg mb-8 text-muted-foreground">
            Mon parcours scolaire m'a permis de développer une solide base en
            informatique et en gestion de projet, avec un accent particulier sur
            les nouvelles technologies.
          </motion.p>
          
          <div className="space-y-6">
            <motion.div variants={timelineItemVariants}>
              <Card className="border-l-4 border-l-green-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">Licence en génie logiciel</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Building size={14} className="text-muted-foreground" />
                        <span>Institut Supérieur des Technologies Appliquées (ISTA)</span>
                        <span className="mx-1">•</span>
                        <span>2020-2024</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Formation complète en développement logiciel, algorithmique, bases de données et conception d'applications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={timelineItemVariants}>
              <Card className="border-l-4 border-l-blue-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">Certification Azure Administrator (AZ-104)</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Award size={14} className="text-muted-foreground" />
                        <span>Microsoft</span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-blue-600/80 text-white">Certifié</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compétences avancées en administration de solutions cloud sur la plateforme Azure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section Expertise DevOps */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Expertise DevOps</h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Infrastructure as Code
              </h3>
              <p className="text-muted-foreground">
                Maîtrise de Terraform pour la gestion automatisée des infrastructures cloud, permettant un déploiement reproductible et sécurisé.
              </p>
            </div>
            
            <div className="bg-card/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                CI/CD Pipelines
              </h3>
              <p className="text-muted-foreground">
                Création et optimisation de pipelines d'intégration et de déploiement continus avec Azure Pipelines pour automatiser les tests et déploiements.
              </p>
            </div>
            
            <div className="bg-card/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Conteneurisation
              </h3>
              <p className="text-muted-foreground">
                Utilisation de Docker pour créer des environnements isolés et portables, facilitant le déploiement d'applications dans différents contextes.
              </p>
            </div>
            
            <div className="bg-card/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Automatisation
              </h3>
              <p className="text-muted-foreground">
                Scripts Python et PowerShell pour automatiser les tâches répétitives et optimiser les processus de développement et de déploiement.
              </p>
            </div>
          </motion.div>
        </motion.section>
        
        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-primary/5 to-primary/20 p-8 rounded-xl border border-primary/10"
        >
          <h2 className="text-2xl font-bold mb-4">Ma philosophie</h2>
          <p className="text-lg text-muted-foreground">
            Grâce à ces compétences techniques et une approche axée sur la
            collaboration et l'optimisation continue, je suis en mesure de mener à
            bien des projets complexes, en respectant les délais et les objectifs
            commerciaux. Je suis toujours à la recherche de nouveaux défis pour
            perfectionner mes compétences et contribuer à la réussite des
            entreprises avec lesquelles je collabore.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
