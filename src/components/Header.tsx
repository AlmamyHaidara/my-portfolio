"use client";
import { cn } from "@/utils";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";

const navigation = [
  {
    id: 1,
    path: "/",
    title: "Acceuil",
  }, {
    id: 2,
    path: "/a-propos",
    title: "À propos",
  },
  {
    id: 3,
    path: "/outil",
    title: "Outil",
  },
  {
    id: 4,
    path: "/projets",
    title: "Mes projets",
  },
  {
    id: 5,
    path: "/blog",
    title: "Blog",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = usePathname();
  const isActivate = (path: string) =>
    currentPath === path
      ? "border-b-3 max-md:rounded-none shadow-sl shadow-primary/10 bg-primary/15 text-primary  rounded-md "
      : "";
  const visibilityClass = isOpen ? "max-md:!block" : "";

  const isMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      className="flex items-center gap-2 px-16"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/"
        className="rounded-full flex md:w-[4%] max-md:w-full justify-between items-center"
        aria-label="Accueil - CodeCraft"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/assets/images/logo1.png"
            alt="Logo CodeCraft"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
        </motion.div>
        <p className="font-extrabold text-3xl sm:text-xl max-lg:hidden ">
          Code<span className=" text-primary">Craft</span>
        </p>
      </Link>

      <div className="ml-auto "> </div>
      <div className="flex justify-between">
        <button
          className="absolute right-5 top-10 z-50 max-md:block md:hidden cursor-pointer"
          onClick={isMenuOpen}
          aria-expanded={isOpen}
          aria-label="Menu principal"
          aria-controls="main-navigation"
        >
          {isOpen ? (
            <X
              size={32}
              className={cn(
                `transform transition-all duration-500 ease-in-out ${visibilityClass}`
              )}
            />
          ) : (
            <AlignRight
              size={32}
              className={cn(
                `transform transition-all duration-500 ease-in-out ${visibilityClass}`
              )}
            />
          )}
        </button>

        <motion.nav
          id="main-navigation"
          className={`flex justify-between gap-5 max-md:bg-[#11151d] max-md:absolute max-md:left-0 max-md:top-0 max-md:right-0 max-md:py-20 max-md:bg-muted max-md:z-40 max-md:flex-col transform transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-md:max-w-full max-md:translate-x-0 max-md:opacity-100 max-md:visible"
              : "max-md:max-w-0 max-md:translate-x-full max-md:opacity-0 max-md:invisible"
          }`}
          variants={navVariants}
          initial="hidden"
          animate="visible"
          role="navigation"
          aria-label="Navigation principale"
        >
          {navigation.map((nav, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={nav.path}
                className={cn(
                  `${"text-primary border-primary transition-colors duration-500 p-2 max-md:hover:bg-primary/20 max-md:hover:transition-colors max-md:hover:duration-500 flex max-md:justify-start max-md:pl-10 "}  ${isActivate(
                    nav.path
                  )}`
                )}
                aria-current={currentPath === nav.path ? "page" : undefined}
              >
                {nav.title}
              </Link>
            </motion.div>
          ))}
          <div className=" max-md:pl-10 max-md:w-full ">
            <ModeToggle />
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}

export default Header;
