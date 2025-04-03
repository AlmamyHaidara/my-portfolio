import React from "react";
import { Card } from "./ui/card";
import { ProjectTye } from "@/types";
import { RealisationData } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Realisation() {
  // Animation variants pour le conteneur
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

  return (
    <motion.section 
      className={"flex flex-col items-start gap-2 w-full"}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={"flex flex-wrap gap-4 w-full"}>
        {RealisationData.map((item, index) => (
          <div 
            className="flex-[1] p-4 w-full flex flex-col gap-2 min-w-52" 
            key={index}
          >
            <div className="flex flex-col gap-4">
              <Project {...item} index={index} />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Realisation;

function Project(props: ProjectTye & { index: number }) {
  // Utilisation de react-intersection-observer pour détecter quand l'élément est visible
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Animation variants pour chaque projet
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={props.index}
    >
      <Link 
        href={props.path as string} 
        target="_blank"
        aria-label={`Voir le projet ${props.name}: ${props.description}`}
      >
        <Card className="p-3 bg-accent/10 hover:bg-primary/10 transition-colors group flex flex-col items-center gap-4">
          <motion.div 
            className="relative w-full flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={props.image}
              alt={`Image du projet ${props.name}`}
              className="w-full h-20 object-contain"
            />
          </motion.div>
          <div className="mr-auto">
            <div className="flex flex-col">
              <img
                src={props.mediumImage}
                alt={`Logo de ${props.name}`}
                className="w-6 h-6 object-contain"
              />

              <p className="text-lg font-semibold mr-5">{props.name}</p>
            </div>
            <p className="text-xs text-muted-foreground">{props.description}</p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
