"use client";

import { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Empêche le rendu côté client tant que le thème n'est pas monté
  if (!mounted) return <div />;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
