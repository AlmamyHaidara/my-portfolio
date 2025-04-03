"use client"

import { cn } from "@/utils";
import {
  ArrowBigDown,
  ArrowBigRight,
  Code,
  Github,
  Infinity,
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
  Server
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Spacing from "../src/components/Spacing";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CONTACTME, RealisationData, WORKS } from "@/lib/data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const styleClass = {
  badge:
    "relative rounded bg-primary/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary/20 transition-colors hover:underline text-primary",
};

export default function Home() {
  // Technologies principales
  const mainTechnologies = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-black" },
    { name: "Nest.js", color: "bg-red-600" },
    { name: "React Native", color: "bg-sky-600" },
    { name: "Tailwind CSS", color: "bg-cyan-500" },
    { name: "Azure", color: "bg-blue-600" },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Hero améliorée */}
        <motion.section 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-20"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
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
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Almamy Ali Haïdara
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-primary mb-6"
            >
              Fullstack Developer & DevOps
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              Je suis un développeur{" "}
              <Link href={"#"} className={cn(`${styleClass.badge}`)}>
                <Code size={16} />
                fullstack
              </Link>{" "}
              et junior{" "}
              <Link href={"https://www.atlassian.com/fr/devops/what-is-devops/devops-engineer#:~:text=Un%20ing%C3%A9nieur%20DevOps%20aura%20de,des%20r%C3%A9seaux%20internes%20et%20externes."} target="_blank" className={cn(`${styleClass.badge}`)}>
                {" "}
                <Infinity size={16} /> DevOps
              </Link>
              , passionné par la création d'applications performantes et
              sécurisées.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link href="/mon-cv.pdf" target="_blank" download>
                <Button
                  className="px-6 py-6 font-semibold bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" /> Télécharger Mon CV
                </Button>
              </Link>
              
              <Link href="/a-propos">
                <Button
                  variant="outline"
                  className="px-6 py-6 font-semibold border-primary text-primary hover:bg-primary/10"
                  size="lg"
                >
                  <ArrowRight className="mr-2 h-5 w-5" /> En savoir plus
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
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Mes réseaux</h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link href="https://github.com/AlmamyHaidara" target="_blank">
              <Button
                variant="outline"
                className="px-5 py-6 border-border/50 hover:border-primary hover:bg-primary/5"
                size="lg"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Button>
            </Link>
            
            <Link href="https://www.linkedin.com/in/almamy-ha%C3%AFdara-612028210/" target="_blank">
              <Button
                variant="outline"
                className="px-5 py-6 border-border/50 hover:border-primary hover:bg-primary/5"
                size="lg"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
            </Link>
            
            <Link href="mailto:almamyh27@gmail.com">
              <Button
                variant="outline"
                className="px-5 py-6 border-border/50 hover:border-primary hover:bg-primary/5"
                size="lg"
              >
                <ExternalLink className="mr-2 h-5 w-5" /> almamyh27@gmail.com
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
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Réalisations</h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg mb-8 text-muted-foreground max-w-3xl">
            Je crée des applications et des outils performants pour répondre aux besoins
            des utilisateurs et offrir des solutions innovantes et efficaces.
          </motion.p>
          
          {/* Remplacement simplifié du composant Status */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col lg:flex-row items-start gap-6 w-full"
          >
            <div className="flex flex-col gap-6 w-full lg:w-2/3">
              <Card className="p-4 h-full w-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold">Travail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {WORKS.slice(0, 3).map((work, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-4 p-3 rounded-lg border border-border/50 hover:bg-accent/10 transition-colors"
                      >
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-background">
                          <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg flex items-center gap-2">
                            {work.title}
                            {work.freelance && (
                              <Badge className="bg-primary text-white">Freelance</Badge>
                            )}
                          </h3>
                          <p className="text-sm text-muted-foreground">{work.role}</p>
                          <p className="text-xs text-muted-foreground mt-1">{work.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              <Card className="p-4 h-full w-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold">Contactez-moi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {CONTACTME.map((contact, index) => (
                      <motion.a 
                        href={contact.url}
                        target="_blank"
                        key={index}
                        variants={itemVariants}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-accent/10 transition-colors"
                      >
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-background">
                          <Image
                            src={contact.mediumImage}
                            alt={contact.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-sm text-muted-foreground">{contact.description}</p>
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
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Comment puis-je vous aider?</h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg mb-8 text-muted-foreground max-w-3xl">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="relative w-16 h-16 mb-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <div className="mt-4 flex justify-center">
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
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Laptop className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Mon expertise</h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="bg-card/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Développement Web
              </h3>
              <p className="text-muted-foreground">
                Création d'applications web modernes et performantes avec Next.js, React et TypeScript,
                en utilisant des approches comme le Server-Side Rendering et les API Routes.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-card/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                Applications Mobiles
              </h3>
              <p className="text-muted-foreground">
                Développement d'applications mobiles cross-platform avec React Native et Expo,
                offrant une expérience native sur iOS et Android.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-card/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                DevOps
              </h3>
              <p className="text-muted-foreground">
                Mise en place de pipelines CI/CD, containerisation avec Docker et gestion
                d'infrastructure avec Terraform sur Azure.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-card/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Coffee className="h-5 w-5 text-primary" />
                Support & Formation
              </h3>
              <p className="text-muted-foreground">
                Accompagnement et conseil technique pour vos équipes, avec une approche pédagogique
                et des formations adaptées à vos besoins spécifiques.
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
          className="mb-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">À propos de moi</h2>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 to-primary/20 p-8 rounded-xl border border-primary/10 mb-8"
          >
            <p className="text-lg mb-4 text-muted-foreground">
              Développeur Full-Stack passionné et certifié{" "}
              <span className="font-semibold">Azure Administrator (AZ-104)</span>,
              je conçois des applications modernes et sécurisées, tout en
              garantissant une expérience utilisateur optimale.
            </p>
            
            <p className="text-lg mb-6 text-muted-foreground">
              En tant que professionnel DevOps, je maîtrise des outils tels que l'
              <span className="font-semibold"> Infrastructure as Code (IaC)</span>,
              avec <span className="font-semibold"> Terraform</span>, la création
              de pipelines CI/CD avec{" "}
              <span className="font-semibold">Azure Pipelines</span>, et la
              gestion des conteneurs via Docker.
            </p>
            
            <Link 
              href={"/a-propos"}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              En savoir plus <ArrowBigRight size={16} />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center"
          >
            <Link href="/a-propos">
              <Button
                className="px-8 py-6 font-semibold bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                Découvrir mon parcours <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
