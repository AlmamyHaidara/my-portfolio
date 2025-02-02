"use client"
import { cn } from "@/lib/utils";
import {
  ArrowBigDown,
  ArrowBigRight,
  Code,
  Github,
  Infinity,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Spacing from "../src/components/Spacing";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { motion } from "motion/react";

// Importations dynamiques
const Status = dynamic(() => import('@/components/Status/Status'), {
  ssr: false,
  loading: () => <p>Chargement en cours...</p>,
});
const Realisation = dynamic(() => import('@/components/Realisation'), {
  ssr: false,
  loading: () => <p>Chargement en cours...</p>,
});

const styleClass = {
  badge:
    "relative rounded bg-primary/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary/20 transition-colors hover:underline text-primary",
};
export default function Home() {


  return (
    <motion.div
        // L’état initial au chargement
        initial={{ opacity: 0, y: -50 }}
        // L’état final (après l’animation)
        animate={{ opacity: 1, y: 0 }}
        // La durée et autres paramètres de transition
        transition={{ duration: 0.8 }}
        className=" w-full h-full flex justify-start mt-16 flex-col ">
      <section className=" w-full h-96 flex justify-center flex-col my-5 items-start">
        <div className="flex justify-start mt-5 items-center">
          <div className="rounded-full  mr-5">
            <img
              src={"/assets/images/logo1.png"}
              className="rounded-[100%] object-cover w-[100px] h-[100px]"
              alt="alt"
             
            />
          </div>

          <span className="flex flex-col">
            <p className="text-3xl max-sm:text-xl font-semibold">
              Almamy Ali Haïdara
            </p>
            <p className="text-xl  max-sm:text-base  font-extralight text-primary">
              Fullstack Developer and Devops
            </p>
          </span>
        </div>
        <div className="w-full h-auto  text-lg font-sans font-light  ">
          <p className="text-2xl max-sm:text-xl font-medium my-2 ">
            Fullstack Developer and Devops
          </p>
          <p className="italic text-pretty font-sans">
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
            sécurisées. J’aime partager mes connaissances à travers mes projets
            et mes réseaux comme{" "}
            <Link href={"https://github.com/AlmamyHaidara"} target="_blank" className={cn(`${styleClass.badge}`)}>
              <Github size={16} /> GitHub
            </Link>
            ,
            <Link href={"https://www.linkedin.com/in/almamy-ha%C3%AFdara-612028210/"} target="_blank" className={cn(`${styleClass.badge}`)}>
              <Linkedin size={16} /> LinkedIn
            </Link>
            .
          </p>
        </div>
        <div className="pt-8 w-auto">
          <Link href="/mon-cv.pdf" target="_blank" download>
            {/* <a download> */}
              <Button
                className="w-52 flex items-center justify-between font-semibold "
              >
                Telecharger Mon CV <ArrowBigDown className="animate-bounce" />{" "}
              </Button>
            {/* </a> */}
          </Link>
        </div>
      </section>
      <section className="">
        <Spacing size="md" />
        <div>
          <span className="text-lg font-semibold pb-2">Realisations</span>
          <p className="text-lg pb-2 text-muted-foreground">
            Je crée des applications et des outils pour être rentable et aider
            les gens avec mes compétences.
          </p>
        </div>
        <Status />
      </section>

      <section className="">
        <Spacing size="md" />
        <div className="my-5">
          <span className="text-lg font-semibold pb-2">
            Comment puis-je vous aider?{" "}
          </span>
          <p className="text-lg pb-2 text-muted-foreground">
            {/* Je peux vous creer des application securiser avec une <span className="font-semibold">meuilleur</span> expériences pour vos utilisateur avec des technologie de haut niveau telque:  */}
            Je peux vous aider à créer des applications sécurisées, offrant une
            expérience utilisateur optimale, en utilisant des technologies de
            pointe telles que <span className="font-semibold">TypeScript</span>,{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">Nestjs</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>,{" "}
            <span className="font-semibold">PostgreSQL</span>, et{" "}
            <span className="font-semibold">Vercel</span>. Mon expertise dans
            ces outils me permet de développer des solutions performantes,
            évolutives et parfaitement adaptées à vos besoins.
          </p>
        </div>
        <Realisation />
      </section>

      <section className="">
        <Spacing size="md" />
        <div className="my-5">
          <span className="text-lg font-semibold pb-2">À propos de moi</span>
          <p className="text-lg pb-5 text-muted-foreground">
            Développeur Full-Stack passionné et certifié{" "}
            <span className="font-semibold">Azure Administrator (AZ-104)</span>,
            je conçois des applications modernes et sécurisées, tout en
            garantissant une expérience utilisateur optimale. Mon expertise
            couvre non seulement le développement web avec des technologies
            telles que
            <span className="font-semibold">TypeScript</span>,{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">Nest.js</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>,
            <span className="font-semibold">PostgreSQL</span>, et{" "}
            <span className="font-semibold">Vercel</span>,mais également le
            développement mobile avec{" "}
            <span className="font-semibold">React Native</span>, et{" "}
            <span className="font-semibold">Expo</span>.
          </p>

          <p className="text-lg pb-2 text-muted-foreground">
            En tant que professionnel DevOps, je maîtrise des outils tels que l’
            <span className="font-semibold">Infrastructure as Code (IaC)</span>,
            avec <span className="font-semibold">Terraform</span>, la création
            de pipelines CI/CD avec{" "}
            <span className="font-semibold">Azure Pipelines</span>, azure pipeline et la
            gestion des conteneurs via Docker. Cette combinaison de compétences
            me permet de gérer l’intégralité du cycle de vie d’un projet, du
            concept initial au déploiement, aussi bien sur des environnements
            web que mobiles...{" "}
          </p>
          <Link href={"/a-propos"} className={cn(`${styleClass.badge}`)}>
            En savoir plus
            <ArrowBigRight size={16} />
          </Link>
        </div>
        {/* <Status /> */}
      </section>
    </motion.div>
  );
}
