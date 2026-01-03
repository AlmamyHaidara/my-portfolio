"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Server,
  Award,
  Building,
  Code,
  CheckCircle2,
  Infinity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils";
import Link from "next/link";

const styleClass = {
  badge:
    "relative rounded bg-primary/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary/20 transition-colors hover:underline text-primary",
};
// Les technologies principales
const mainTechnologies = [
  { name: "Kubernetes", color: "bg-blue-600" },
  { name: "Docker", color: "bg-cyan-600" },
  { name: "Azure", color: "bg-blue-500" },
  { name: "Ansible", color: "bg-red-500" },
  { name: "Jenkins", color: "bg-yellow-600" },

  { name: "Spring Boot", color: "bg-green-600" },
  { name: "PostgreSQL", color: "bg-indigo-700" },
  { name: "Nest.js", color: "bg-red-700" },
  { name: "TypeScript", color: "bg-blue-700" },

  { name: "Next.js", color: "bg-zinc-900" },
  { name: "Angular", color: "bg-indigo-600" },
  { name: "React Native", color: "bg-sky-600" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section d'en-tête avec photo et titre */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
          >
            <Image
              src="/assets/images/logo1.png"
              alt="Almamy Aly Haïdara"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3"
            >
              À propos de moi
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 md:mb-4 justify-center md:justify-start"
            >
              {mainTechnologies.map((tech, index) => (
                <Badge
                  key={index}
                  className={cn(
                    "px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm text-white",
                    tech.color
                  )}
                >
                  {tech.name}
                </Badge>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl"
            >
              Je suis Almamy Aly Haïdara, ingénieur DevOps & développeur{" "}
              <Link href={"#"} className={cn(`${styleClass.badge}`)}>
                <Code size={16} /> Full-Stack
              </Link>{" "}
              basé à Bamako, Mali. Je conçois et sécurise des architectures
              cloud modernes, j’automatise des pipelines CI/CD, et j’aide les
              équipes à livrer des logiciels de manière plus rapide, sûre et
              scalable.
            </motion.p>
          </div>
        </motion.div>

        {/* Introduction améliorée */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-10 md:mb-16 bg-card/30 rounded-xl p-4 sm:p-6 border border-border/50 backdrop-blur-sm"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Mon expertise couvre non seulement le développement web et DevOps
            avec des technologies telles que{" "}
            <span className="font-semibold text-primary">TypeScript</span>,{" "}
            <span className="font-semibold text-primary">Angular</span>,{" "}
            <span className="font-semibold text-primary">Kubernetes</span>,{" "}
            <span className="font-semibold text-primary">Docker</span>,{" "}
            <span className="font-semibold text-primary">Ansible</span>,{" "}
            <span className="font-semibold text-primary">Jenkins</span>,{" "}
            <span className="font-semibold text-primary">Spring Boot</span>,{" "}
            <span className="font-semibold text-primary">Azure</span>,{" "}
            <span className="font-semibold text-primary">Next.js</span>,{" "}
            <span className="font-semibold text-primary">Nest.js</span>,{" "}
            <span className="font-semibold text-primary">Tailwind CSS</span>,{" "}
            <span className="font-semibold text-primary">PostgreSQL</span>, et{" "}
            <span className="font-semibold text-primary">Vercel</span>, mais
            également le développement mobile avec{" "}
            <span className="font-semibold text-primary">React Native</span> et{" "}
            <span className="font-semibold text-primary">Expo</span>;
            l'automatisation des tâches avec{" "}
            <span className="font-semibold text-primary">Python</span> et{" "}
            <span className="font-semibold text-primary">Azure Pipelines</span>.
          </motion.p>
        </motion.div>

        {/* Section Parcours Professionnel */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-10 md:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Parcours Professionnel
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-muted-foreground"
          >
            J'ai acquis une solide expérience dans le développement Full-Stack
            au fil des années, travaillant sur une variété de projets allant des
            applications web et mobiles aux solutions DevOps complexes.
          </motion.p>

          <div className="space-y-4 sm:space-y-6">
            {/* Expérience Samina */}
            <motion.div variants={timelineItemVariants} className="relative">
              <Card className="border-l-4 border-l-blue-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-bold">
                        Samina
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                        <Building size={12} className="text-muted-foreground" />
                        <span>Entreprise informatique</span>
                        <span className="mx-1">•</span>
                        <span>Actuel</span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600/80 text-white text-xs">
                      Actuel
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 py-2 sm:py-3">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Samina est une entreprise informatique de premier plan,
                    offrant une gamme complète de services. J'y occupe un rôle
                    clé en contribuant au développement et au déploiement
                    d'applications.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Angular
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      ASP.NET
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      MySQL
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Terraform
                    </Badge>

                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Azure
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Expérience MKParis Concept */}
            <motion.div variants={timelineItemVariants} className="relative">
              <Card className="border-l-4 border-l-purple-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-bold">
                        MKParis Concept
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                        <Building size={12} className="text-muted-foreground" />
                        <span>Application mobile</span>
                        <span className="mx-1">•</span>
                        <span>2023</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 py-2 sm:py-3">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Développement backend et front-end d'une application mobile
                    pour la vente de produits et services de beauté.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      React Native
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Firebase
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Java
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      MySQL
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Azure
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Expérience Freelance */}
            <motion.div variants={timelineItemVariants} className="relative">
              <Card className="border-l-4 border-l-amber-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-bold">
                        Projets Freelance
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                        <Code size={12} className="text-muted-foreground" />
                        <span>Applications diverses</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 py-2 sm:py-3">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Réalisation de plusieurs projets freelances incluant des
                    applications web et mobiles, avec conception d’APIs backend
                    robustes basées sur{" "}
                    <span className="font-medium text-primary">NestJS</span>.
                    Mise en place de l’architecture serveur, gestion de
                    l’authentification, des bases de données relationnelles et
                    intégration avec des applications front-end et mobiles.
                    Déploiement et maintenance des applications en environnement
                    cloud.
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      NestJS
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      React Native
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="bg-card/60 text-xs">
                      Azure
                    </Badge>
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
          className="mb-10 md:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Formation</h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-muted-foreground"
          >
            Mon parcours scolaire m'a permis de développer une solide base en
            informatique et en gestion de projet, avec un accent particulier sur
            les nouvelles technologies.
          </motion.p>

          <div className="space-y-4 sm:space-y-6">
            <motion.div variants={timelineItemVariants}>
              <Card className="border-l-4 border-l-green-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-bold">
                        Licence en génie logiciel
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                        <Building size={12} className="text-muted-foreground" />
                        <span>
                          Institut Supérieur des Technologies Appliquées (ISTA)
                        </span>
                        <span className="mx-1">•</span>
                        <span>2020-2024</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 py-2 sm:py-3">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Formation complète en développement logiciel, algorithmique,
                    bases de données et conception d'applications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={timelineItemVariants}>
              <Card className="border-l-4 border-l-indigo-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-bold">
                        Master1 en génie logiciel
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                        <Building size={12} className="text-muted-foreground" />
                        <span>Supmanagements</span>
                        <span className="mx-1">•</span>
                        <span>2024-2025</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 py-2 sm:py-3">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Formation complète en développement logiciel, algorithmique,
                    bases de données du cloud , de DevOps et conception
                    d'applications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/*<motion.div variants={timelineItemVariants}>
              <Card className="border-l-4 border-l-blue-600 hover:shadow-md transition-shadow">
                <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-bold">
                        Certification Azure Administrator (AZ-104)
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                        <Award size={12} className="text-muted-foreground" />
                        <span>Microsoft</span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-blue-600/80 text-white text-xs">
                      Certifié
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 py-2 sm:py-3">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Compétences avancées en administration de solutions cloud
                    sur la plateforme Azure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>*/}
          </div>
        </motion.section>

        {/* Section Expertise DevOps */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-10 md:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <Server className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Expertise DevOps</h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8"
          >
            <div className="bg-card/30 p-4 md:p-6 rounded-xl border border-border/50">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                Infrastructure as Code
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Conception et gestion d’infrastructures cloud avec{" "}
                <span className="font-medium text-primary">Terraform</span>,
                permettant des environnements reproductibles, versionnés et
                sécurisés tout en réduisant les erreurs humaines.
              </p>
            </div>

            <div className="bg-card/30 p-4 md:p-6 rounded-xl border border-border/50">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                CI/CD Pipelines
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Mise en place de pipelines CI/CD pour des applications{" "}
                <span className="font-medium text-primary">NestJS</span>, ou{" "}
                <span className="font-medium text-primary">Spring Boot</span>,
                ou <span className="font-medium text-primary">ASP .Net</span>,ou{" "}
                <span className="font-medium text-primary">Angular</span>,etc...{" "}
                incluant build, tests automatisés, création d’images Docker et
                déploiement sur des environnements cloud afin d’assurer des
                livraisons continues et fiables.
              </p>
            </div>

            <div className="bg-card/30 p-4 md:p-6 rounded-xl border border-border/50">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                Conteneurisation & Orchestration
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Conteneurisation d’APIs backend avec{" "}
                <span className="font-medium text-primary">Docker</span> et
                orchestration avec{" "}
                <span className="font-medium text-primary">Kubernetes</span>,
                facilitant la scalabilité, la portabilité et la gestion des
                environnements.
              </p>
            </div>

            <div className="bg-card/30 p-4 md:p-6 rounded-xl border border-border/50">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                Automatisation & Scripting
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Automatisation des tâches de déploiement et d’administration
                backend à l’aide de scripts{" "}
                <span className="font-medium text-primary">Python</span> et{" "}
                <span className="font-medium text-primary">Bash</span>,
                améliorant la fiabilité et la répétabilité des opérations.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-primary/5 to-primary/20 p-4 sm:p-6 md:p-8 rounded-xl border border-primary/10"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
            Ma philosophie
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Grâce à ces compétences techniques et une approche axée sur la
            collaboration et l'optimisation continue, je suis en mesure de mener
            à bien des projets complexes, en respectant les délais et les
            objectifs commerciaux. Je suis toujours à la recherche de nouveaux
            défis pour perfectionner mes compétences et contribuer à la réussite
            des entreprises avec lesquelles je collabore.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
