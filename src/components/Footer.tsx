"use client";
import { NetWorkData } from "@/lib/data";
import { cn } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.footer 
      className="bg-muted5 p-5 h-40"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p 
        className="text-primary text-xl font-semibold"
        variants={itemVariants}
      >
        Contacter moi
      </motion.p>

      <motion.p 
        className="text-muted-foreground text-sm"
        variants={itemVariants}
      >
        Trouvez moi sur les reseaux sociaux ou envoie moi un mail
      </motion.p>
      
      <motion.div 
        className="flex gap-4"
        variants={itemVariants}
      >
      {
        NetWorkData.map((item, index) => (
          <motion.span 
            className="py-5" 
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={item.path} 
              className="text-primary" 
              target="_blank"
              aria-label={`Visiter mon profil ${item.alt}`}
              title={`Visiter mon profil ${item.alt}`}
            >
              <div className="relative w-10 h-10">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-contain hover:h-12 transform duration-500"
                  sizes="40px"
                />
              </div>
            </Link>
          </motion.span>
        ))
      }
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
