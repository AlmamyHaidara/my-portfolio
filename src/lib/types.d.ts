export type WorkType = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export type SideProjectType = {
  logo: LucideIcon;
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
  [x: string]: Url;
  image: string;
  name:string;
  mediumImage: string;
  description?: string;
};

export type Tool = {
  techno: string;
  link: string;
};

export type ToolsData = {
  category: string;
  tools: Tool[];
};
