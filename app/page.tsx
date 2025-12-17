"use client";

import { cn } from "@/utils";
import {
  ArrowBigRight,
  Code,
  Github,
  Linkedin,
  ArrowRight,
  ExternalLink,
  Download,
  CheckCircle2,
  Sparkles,
  Coffee,
  Laptop,
  Globe,
  Smartphone,
  Server,
  Infinity,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACTME, RealisationData, WORKS } from "@/lib/data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const styleClass = {
  badge:
    "relative rounded bg-primary/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary/20 transition-colors hover:underline text-primary",
};

export default function Home() {
  // Technologies principales
  const mainTechnologies = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "Spring Boot", color: "bg-green-500" },
    { name: "Next.js", color: "bg-black" },
    { name: "Nest.js", color: "bg-red-600" },
    { name: "React Native", color: "bg-sky-600" },
    { name: "Tailwind CSS", color: "bg-cyan-500" },
    { name: "Ansible", color: "bg-red-500" },
    { name: "Azure", color: "bg-blue-600" },
    { name: "Angular", color: "bg-indigo-500" },
    { name: "Jenkins", color: "bg-yellow-500" },
  ];

  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Hero améliorée */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
          >
            <Image
              src="/assets/images/logo1.png"
              alt="Almamy Ali Haïdara"
              fill
              className="object-cover"
              priority
              quality={95}
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4"
            >
              Almamy Ali Haïdara
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-primary mb-4 md:mb-6"
            >
              Fullstack Developer & DevOps
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-4 md:mb-6 justify-center md:justify-start current-color text-sm sm:text-base cursor-pointer"
            >
              {mainTechnologies.map((tech, index) => (
                <Badge
                  key={index}
                  className={cn(
                    "px-2 py-1 sm:px-3 text-xs sm:text-sm text-white",
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
              Je suis un développeur{" "}
              <Link href={"#"} className={cn(`${styleClass.badge}`)}>
                <Code size={16} />
                fullstack
              </Link>{" "}
              et {" "}
              <Link
                href={
                  "https://www.atlassian.com/fr/devops/what-is-devops/devops-engineer#:~:text=Un%20ing%C3%A9nieur%20DevOps%20aura%20de,des%20r%C3%A9seaux%20internes%20et%20externes."
                }
                target="_blank"
                className={cn(`${styleClass.badge}`)}
              >
                {" "}
                <Infinity size={16} /> Référent DevOps
              </Link>
              , j'accompagne les projets de la ligne de code jusqu'au déploiement orchestré. Mon expertise se concentre sur la création d'architectures microservices robustes et la mise en place de chaînes CI/CD sécurisées.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
            >
              <Link
                href="/mon-cv.pdf"
                target="_blank"
                download
                className="w-full sm:w-auto"
              >
                <Button
                  className="w-full sm:w-auto px-4 py-4 sm:px-6 sm:py-6 font-semibold bg-primary hover:bg-primary/90 text-white text-sm sm:text-base"
                  size="lg"
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />{" "}
                  Télécharger Mon CV
                </Button>
              </Link>

              <Link href="/a-propos" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-4 py-4 sm:px-6 sm:py-6 font-semibold border-primary text-primary hover:bg-primary/10 text-sm sm:text-base"
                  size="lg"
                >
                  <ArrowRight className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> En
                  savoir plus
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Section Réseaux sociaux */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Mes réseaux</h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4"
          >
            <Link
              href="https://github.com/AlmamyHaidara"
              target="_blank"
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full px-4 py-4 sm:px-5 sm:py-5 text-sm sm:text-base border-border/50 hover:border-primary hover:bg-primary/5"
                size="lg"
              >
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> GitHub
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/almamy-ha%C3%AFdara-612028210/"
              target="_blank"
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full px-4 py-4 sm:px-5 sm:py-5 text-sm sm:text-base border-border/50 hover:border-primary hover:bg-primary/5"
                size="lg"
              >
                <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> LinkedIn
              </Button>
            </Link>

            <Link href="mailto:almamy_haidara@outlook.fr" className="w-full">
              <Button
                variant="outline"
                className="w-full px-4 py-4 sm:px-5 sm:py-5 text-sm sm:text-base border-border/50 hover:border-primary hover:bg-primary/5"
                size="lg"
              >
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />{" "}
                almamy_haidara@outlook.fr
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        {/* Section Réalisations */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Réalisations</h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg mb-6 md:mb-8 text-muted-foreground max-w-3xl"
          >
            Je crée des applications et des outils performants pour répondre aux
            besoins des utilisateurs et offrir des solutions innovantes et
            efficaces.
          </motion.p>

          {/* Remplacement simplifié du composant Status */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 w-full"
          >
            <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-2/3">
              <Card className="p-3 sm:p-4 h-full w-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-1 sm:pb-2 px-2 sm:px-4">
                  <CardTitle className="text-lg sm:text-xl font-semibold">
                    Travail
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-2 sm:px-4">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {WORKS.slice(0, 3).map((work, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg border border-border/50 hover:bg-accent/10 transition-colors"
                      >
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-background shrink-0">
                          <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <h3 className="font-semibold text-base sm:text-lg flex flex-wrap items-center gap-2">
                            {work.title}
                            {work.freelance && (
                              <Badge className="bg-primary text-white text-xs mt-1 sm:mt-0">
                                Freelance
                              </Badge>
                            )}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                            {work.role}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {work.date}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/3">
              <Card className="p-3 sm:p-4 h-full w-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-1 sm:pb-2 px-2 sm:px-4">
                  <CardTitle className="text-lg sm:text-xl font-semibold">
                    Contactez-moi
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-2 sm:px-4">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {CONTACTME.map((contact, index) => (
                      <motion.a
                        href={contact.url}
                        target="_blank"
                        key={index}
                        variants={itemVariants}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border border-border/50 hover:bg-accent/10 transition-colors"
                      >
                        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-background shrink-0">
                          <Image
                            src={contact.mediumImage}
                            alt={contact.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-medium text-sm sm:text-base">
                            {contact.name}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">
                            {contact.description}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.section>

        {/* Section Compétences */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Comment puis-je vous aider?
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg mb-6 md:mb-8 text-muted-foreground max-w-3xl"
          >
            Je peux vous aider à créer des applications sécurisées, offrant une
            expérience utilisateur optimale, en utilisant des technologies de
            pointe telles que <span className="font-semibold">TypeScript</span>,{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">Nestjs</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>,{" "}
            <span className="font-semibold">PostgreSQL</span>, et{" "}
            <span className="font-semibold">Vercel</span>.
          </motion.p>

          {/* Remplacement simplifié du composant Realisation */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {RealisationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={item.path} target="_blank">
                  <Card className="h-full hover:shadow-md transition-all hover:border-primary/50">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col items-center text-center mb-3 sm:mb-4">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                        {item.description}
                      </p>
                      <div className="mt-3 sm:mt-4 flex justify-center">
                        <Badge variant="outline" className="text-xs">
                          En savoir plus
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Expertise */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <Laptop className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Mon expertise</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-card/30 p-4 sm:p-6 rounded-xl border border-border/50"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Développement Web
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Création d'applications web modernes et performantes avec
                Next.js, React et TypeScript, en utilisant des approches comme
                le Server-Side Rendering et les API Routes.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card/30 p-4 sm:p-6 rounded-xl border border-border/50"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Applications Mobiles
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Développement d'applications mobiles cross-platform avec React
                Native et Expo, offrant une expérience native sur iOS et
                Android.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card/30 p-4 sm:p-6 rounded-xl border border-border/50"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                <Server className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                DevOps
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Mise en place de pipelines CI/CD, containerisation avec Docker
                et gestion d'infrastructure avec Terraform sur Azure.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card/30 p-4 sm:p-6 rounded-xl border border-border/50"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                <Coffee className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Support & Formation
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Accompagnement et conseil technique pour vos équipes, avec une
                approche pédagogique et des formations adaptées à vos besoins
                spécifiques.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section À propos de moi */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">À propos de moi</h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 to-primary/20 p-4 sm:p-6 md:p-8 rounded-xl border border-primary/10 mb-6 md:mb-8"
          >
            <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-muted-foreground">
              Développeur Full-Stack passionné et certifié{" "}
              <span className="font-semibold">
                Azure Administrator (AZ-104)
              </span>
              , je conçois des applications modernes et sécurisées, tout en
              garantissant une expérience utilisateur optimale.
            </p>

            <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 text-muted-foreground">
              En tant que professionnel DevOps, je maîtrise des outils tels que
              l'
              <span className="font-semibold">
                {" "}
                Infrastructure as Code (IaC)
              </span>
              , avec <span className="font-semibold"> Terraform</span>, la
              création de pipelines CI/CD avec{" "}
              <span className="font-semibold">Azure Pipelines</span>, et la
              gestion des conteneurs via Docker.
            </p>

            <Link
              href={"/a-propos"}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm sm:text-base"
            >
              En savoir plus <ArrowBigRight size={16} />
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <Link href="/a-propos" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto px-4 py-4 sm:px-6 md:px-8 sm:py-5 md:py-6 font-semibold bg-primary hover:bg-primary/90 text-white text-sm sm:text-base"
                size="lg"
              >
                Découvrir mon parcours{" "}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
