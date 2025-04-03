import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Almamy Ali Haïdara | Développeur Full Stack & DevOps",
  description: "Portfolio d'Almamy Ali Haïdara, développeur Full Stack et DevOps spécialisé en Next.js, React, Node.js, TypeScript et Azure.",
  keywords: ["développeur full stack", "devops", "next.js", "react", "typescript", "portfolio"],
  authors: [{ name: "Almamy Ali Haïdara" }],
  creator: "Almamy Ali Haïdara",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.almamyhaidara.com/",
    title: "Almamy Ali Haïdara | Développeur Full Stack & DevOps",
    description: "Portfolio d'Almamy Ali Haïdara, développeur Full Stack et DevOps spécialisé en Next.js, React, Node.js, TypeScript et Azure.",
    siteName: "Portfolio d'Almamy Ali Haïdara",
    images: [
      {
        url: "/assets/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Almamy Ali Haïdara - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almamy Ali Haïdara | Développeur Full Stack & DevOps",
    description: "Portfolio d'Almamy Ali Haïdara, développeur Full Stack et DevOps spécialisé en Next.js, React, Node.js, TypeScript et Azure.",
    images: ["/assets/images/logo1.png"],
    creator: "@almamyhaïdara",
  },
}; 