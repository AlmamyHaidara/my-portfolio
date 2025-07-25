"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const iconVariants = {
    initial: { scale: 0.6, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.6, opacity: 0 },
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label={`Changer de thème, thème actuel: ${theme}`}
          title="Changer de thème"
        >
          <motion.div
            className="relative h-full w-full"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <motion.div
              variants={iconVariants}
              className="absolute inset-0 flex items-center justify-center"
              animate={theme === "dark" ? "exit" : "animate"}
            >
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="absolute inset-0 flex items-center justify-center"
              animate={theme === "dark" ? "animate" : "exit"}
            >
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            </motion.div>
          </motion.div>
          <span className="sr-only">Changer le thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          aria-checked={theme === "light"}
          role="menuitemradio"
        >
          <Sun className="w-4 h-4 mr-2" />
          Clair
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          aria-checked={theme === "dark"}
          role="menuitemradio"
        >
          <Moon className="w-4 h-4 mr-2" />
          Sombre
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          aria-checked={theme === "system"}
          role="menuitemradio"
        >
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Système
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
