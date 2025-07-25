// Types centralisés pour l'application

export type WorkType = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export type SideProjectType = {
  logo: any; // Remplacé LucideIcon par any pour éviter les erreurs d'importation
  title: string;
  description: string;
  url: string;
};

export type ContactMeType = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
};

export type ProjectTye = {
  [x: string]: any; // Remplacé Url par any pour éviter les erreurs d'importation
  image: string;
  name: string;
  mediumImage: string;
  description?: string;
  path?: string; // Ajouté pour être cohérent avec l'usage dans Realisation.tsx
};

export type Tool = {
  techno: string;
  link: string;
};

export type ToolsData = {
  category: string;
  tools: Tool[];
};

// Types supplémentaires
export type NetworkType = {
  img: string;
  alt: string;
  path: string;
}; 