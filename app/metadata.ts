import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://www.codecraft.ml";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Almamy Aly Haïdara | Ingénieur Systèmes, Cloud & DevOps",
    template: "%s | Almamy Aly Haïdara",
  },

  description:
    "Portfolio d'Almamy Aly Haïdara, Ingénieur DevOps et Fullstack basé à Bamako, Mali. Expert en automatisation Cloud (Azure, Kubernetes, Docker), CI/CD et développement d'applications critiques (Spring Boot, Next.js).",

  keywords: [
    "Ingénieur DevOps Mali",
    "Développeur Full Stack",
    "Kubernetes",
    "Docker",
    "Azure Cloud",
    "CI/CD Pipelines",
    "Spring Boot",
    "Next.js",
    "TypeScript",
    "Ansible",
    "Almamy Aly Haïdara",
    "Bamako",
  ],

  authors: [{ name: "Almamy Aly Haïdara", url: baseUrl }],
  creator: "Almamy Aly Haïdara",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    title: "Almamy Aly Haïdara | Ingénieur Systèmes, Cloud & DevOps",
    description:
      "Expertise en architectures microservices, conteneurisation (K8s/Docker) et développement Fullstack. Découvrez mes projets et mon parcours.",
    siteName: "Portfolio d'Almamy Aly Haïdara",
    images: [
      {
        url: "/assets/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Almamy Aly Haïdara - Ingénieur DevOps & Fullstack",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Almamy Aly Haïdara | Ingénieur Cloud & DevOps",
    description:
      "Ingénieur basé au Mali. Spécialiste Azure, Kubernetes et développement Fullstack.",
    images: ["/assets/images/logo1.png"],
    creator: "@almamyhaïdara",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
