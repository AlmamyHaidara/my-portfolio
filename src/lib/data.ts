import { Car, Code } from "lucide-react";
import {
  ContactMeType,
  NetworkType,
  SideProjectType,
  ToolsData,
  WorkType,
} from "@/types";

export const WORKS: WorkType[] = [
  {
    image:
      "https://w7.pngwing.com/pngs/450/470/png-transparent-node-js-angularjs-react-javascript-npm-node-js-angle-text-trademark-thumbnail.png",
    title: "Mk paris concept",
    role: "Est une application mobile, permetant de ventre des produits et des services de beaute",
    date: "0..01.2024",
    url: "#",
    freelance: false,
  },
  {
    image:
      "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png",
    title: "Consultant",
    role: "J'ai eu une mission de consultant senior dans une boite finTech",
    date: "01.08.2024",
    url: "#",
    freelance: true,
  },
  {
    image:
      "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo-thumbnail.png",
    title: "Market place Sugu",
    role: "Sugu est une application mobile, permetent de mettre en relation fournisseur et les clients",
    date: "20.07.2024",
    url: "#",
    freelance: true,
  },
];

export const SIDE_PROJECT: SideProjectType[] = [
  {
    title: "MaliAutoHub",
    description:
      "Est une saas qui permettra de mettre en relation les parkings de vehicule et les client et une gestion complete des du parking",
    logo: Car,
    url: "#",
  },
];

export const CONTACTME: ContactMeType[] = [
  {
    image: "/assets/images/logo1.png",
    mediumImage:
      "https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png",
    name: "Github",
    description: "AlmamyHaidara",
    url: "https://github.com/AlmamyHaidara",
  },
  {
    image: "/assets/images/logo1.png",
    mediumImage: "/assets/images/linkedin.svg",
    name: "Linkdin",
    description: "01.01.2024",
    url: "https://www.linkedin.com/in/almamy-ha%C3%AFdara-612028210/",
  },
  {
    image: "/assets/images/logo1.png",
    mediumImage: "/assets/images/yahoo-v2.svg",
    name: "Yahoo",
    description: "almamy_haidara@yahoo.com",
    url: "mailto:almamy_haidara@yahoo.com",
  },
];

export const RealisationData = [
  {
    image: "/assets/images/typescript.svg",
    name: "TypeScript",
    mediumImage: "/assets/images/typescript.svg",
    description: `Je suis un expert en TypeScript, un langage qui renforce la fiabilité de vos projets JavaScript grâce à la gestion statique des types.`,
    path: "https://www.typescriptlang.org",
  },
  {
    image: "/assets/images/nextjs.svg",
    name: "Next.js",
    mediumImage: "/assets/images/nextjs.svg",
    description: `Je suis un expert en Next.js, un framework basé sur React, et je peux créer des applications web performantes et optimisées pour le SEO.`,
    path: "https://nextjs.org",
  },
  {
    image: "/assets/images/Nest.js.svg",
    name: "Next.js",
    mediumImage: "/assets/images/Nest.js.svg",
    description: `Je suis un expert en Nest.js, un framework basé sur Nodejs, et je peux créer des applications web performantes, robuste et sécurisé.`,
    path: "https://docs.nestjs.com/",
  },
  {
    image: "/assets/images/Angular.svg",
    name: "Angular",
    mediumImage: "/assets/images/Angular.svg",
    description: `Je suis un expert en Angular, un framework basé sur TypeScript, et je peux créer des applications web performantes, robuste et sécurisé.`,
    path: "https://angular.io",
  },
  {
    image: "/assets/images/spring-boot.svg",
    name: "Spring Boot",
    mediumImage: "/assets/images/spring-boot.svg",
    description: `Je suis un expert en Spring Boot, un framework basé sur Java, et je peux créer des applications web performantes, robuste et sécurisé.`,
    path: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
  },
  {
    image: "/assets/images/tailwind.svg",
    name: "Tailwind CSS",
    mediumImage: "/assets/images/tailwind.svg",
    description: `Je suis un expert en Tailwind CSS, un framework de styles utilitaire, et je peux styliser des interfaces modernes et réactives efficacement.`,
    path: "https://tailwindcss.com",
  },
  {
    image: "/assets/images/postgresql-plain-wordmark.svg",
    name: "PostgreSQL",
    mediumImage: "/assets/images/postgresql-original.svg",
    description: `Je peux gérer vos infrastructures de bases de données avec PostgreSQL en utilisant des pratiques comme l'Infrastructure as Code (IaC).`,
    path: "https://www.postgresql.org",
  },
  {
    image: "/assets/images/mysql.svg",
    name: "MySQL",
    mediumImage: "/assets/images/mysql-original.svg",
    description: `Je peux gérer vos infrastructures de bases de données avec MySQL en utilisant des pratiques comme l'Infrastructure as Code (IaC).`,
    path: "https://www.mysql.com",
  },
  {
    image: "/assets/images/brand-vercel.svg",
    name: "Vercel",
    mediumImage: "/assets/images/vercel.svg",
    description: `Je maîtrise le déploiement d'applications sur Vercel, une plateforme optimisée pour héberger des applications web modernes avec facilité et performance.`,
    path: "https://vercel.com/",
  },
];

export const NetWorkData = [
  {
    path: "https://www.linkedin.com/in/almamy-ha%C3%AFdara-612028210/",
    alt: "https://www.linkedin.com/in/almamy-ha%C3%AFdara-612028210/",
    img: "/assets/images/linkedin.svg",
  },
  {
    path: "mailto:almamy_haidara@outlook.fr",
    alt: "almamy_haidara@outlook.fr",
    img: "/assets/images/outlook.svg",
  },
  {
    path: "mailto:almamyh27@gmail.com",
    alt: "almamyh27@gmail.com",
    img: "/assets/images/gmail.svg",
  },
  {
    path: "mailto:almamy_haidara@yahoo.com",
    alt: "almamy_haidara@yahoo.com",
    img: "/assets/images/yahoo-v2.svg",
  },
  {
    path: "#",
    alt: "whatsapp",
    img: "/assets/images/whatsapp.svg",
  },
];

// data/tools.js
export const toolsData: ToolsData[] = [
  {
    category: "Code",
    tools: [
      { techno: "VSCode", link: "https://code.visualstudio.com/" },
      { techno: "Tabnine", link: "https://www.tabnine.com/" },
      { techno: "GitHub", link: "https://github.com/" },
      { techno: "GitLab", link: "https://about.gitlab.com/" },
      {
        techno: "Azure DevOps",
        link: "https://azure.microsoft.com/en-us/services/devops/",
      },
      { techno: "Git", link: "https://git-scm.com/" },
    ],
  },
  {
    category: "Design",
    tools: [
      { techno: "Figma", link: "https://www.figma.com/" },
      { techno: "Adobe XD", link: "https://www.adobe.com/fr/products/xd.html" },
      { techno: "Sketch", link: "https://www.sketch.com/" },
    ],
  },
  {
    category: "Testing",
    tools: [
      { techno: "Jest", link: "https://jestjs.io/" },
      { techno: "Cypress", link: "https://www.cypress.io/" },
      { techno: "Mocha", link: "https://mochajs.org/" },
    ],
  },

  {
    category: "Deployment & Infrastructure",
    tools: [
      { techno: "Vercel", link: "https://vercel.com/" },
      { techno: "Netlify", link: "https://www.netlify.com/" },
      { techno: "Ansible", link: "https://www.ansible.com/" },
      { techno: "Docker", link: "https://www.docker.com/" },
      { techno: "Kubernetes", link: "https://kubernetes.io/" },
      { techno: "Terraform", link: "https://www.terraform.io/" },
      { techno: "Vagrant", link: "https://www.vagrantup.com/" },
      { techno: "Heroku", link: "https://www.heroku.com/" },
      { techno: "Render", link: "https://render.com/" },
      { techno: "Azure portal", link: "https://portal.azure.com/" },
    ],
  },

  {
    category: "Monitoring & Analytics",
    tools: [
      { techno: "Prometheus", link: "https://prometheus.io/" },
      { techno: "Grafana", link: "https://grafana.com/" },
      { techno: "Loki", link: "https://grafana.com/oss/loki/" },
    ],
  },
];
