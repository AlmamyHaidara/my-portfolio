import React from "react";
import { Card } from "./ui/card";
import { ArrowUpRight, Code, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

function Status() {
  return (
    <section className={"flex max-md:flex-col items-start gap-4   w-full"}>
      <Card className="flex-[3] p-4 w-full flex flex-col gap-2 ">
      <p className="text-lg pb-2 text-muted-foreground">Les projets a cote</p>

        <div className="flex flex-col gap-4">
          {SIDE_PROJECT.map((item, index) => (
            <SideProject {...item} key={index} />
          ))}
        </div>
      </Card>
      <div className="flex-[2] w-full  flex flex-col gap-4">
        <Card className="h-full w-full p-4 flex-1">
        <p className="text-lg pb-2 text-muted-foreground">Travail</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((item, index) => (
              <Work {...item} key={index} />
            ))}
          </div>
        </Card>
        <Card className="h-full w-full p-4 flex-1 ">
        <p className="text-lg pb-2 text-muted-foreground">Contacter moi</p>
<div className="flex flex-col gap-4">
          {
            CONTACTME.map((item,index)=>(
              <ContactMe  {...item} key={index}/>
            ))
          }
        </div>
        </Card>
      </div>
    </section>
  );
}

const SIDE_PROJECT = [
  {
    id: 1,
    title: "Projet1",
    description: "Description 1",
    logo: Code,
    url: "/",
  },
  {
    id: 1,
    title: "Projet1",
    description: "Description 1",
    logo: Code,
    url: "/",
  },
  {
    id: 1,
    title: "Projet1",
    description: "Description 1",
    logo: Code,
    url: "/",
  },
  {
    id: 1,
    title: "Projet1",
    description: "Description 1",
    logo: Code,
    url: "/",
  },
];

function SideProject(props: {
  logo: LucideIcon;
  title: string;
  description: string;
  url: string;
}) {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-primary/10 rounded-sm transition-colors p-1"
    >
      <span className="bg-primary/10  text-accent-foreground p-3 rounded-sm">
        <props.logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
}

type WorkType = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};
const WORKS: WorkType[] = [
  {
    image:
      "https://w7.pngwing.com/pngs/450/470/png-transparent-node-js-angularjs-react-javascript-npm-node-js-angle-text-trademark-thumbnail.png",
    title: "Tile1",
    role: "Description 1",
    date: "01.01.2024",
    url: "/",
    freelance: false,
  },
  {
    image:
      "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png",
    title: "Tile1",
    role: "Description 1",
    date: "01.01.2024",
    url: "/",
    freelance: true,
  },
  {
    image:
      "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo-thumbnail.png",
    title: "Tile1",
    role: "Description 1",
    date: "01.01.2024",
    url: "/",
    freelance: true,
  },
];

function Work(props: WorkType) {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-primary/10 rounded-sm transition-colors p-1"
    >
      {/* <span className='bg-primary/10  text-accent-foreground p-3 rounded-sm'> */}
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-6 object-contain"
      />
      {/* </span> */}
      <div className="mr-auto">
        <div className="flex">
          <p className="text-lg font-semibold mr-5">{props.title}</p>
          {props.freelance && <Badge variant={"outline"} >Misson</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>

        <p className="text-sm text-muted-foreground text-end">{props.date}</p>
    </Link>
  );
}

type ContactMeType = {
  image: string;
  mediumImage: string;
  name : string;
  description: string;
  url:string;
};
const CONTACTME: ContactMeType[] = [
  {
    image:
      "/assets/images/logo1.png",
    mediumImage: "https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png",
    name: "Github 1",
    description: "01.01.2024",
    url: "/",
  },{
    image:
      "/assets/images/logo1.png",
    mediumImage: "https://w7.pngwing.com/pngs/602/665/png-transparent-in-icon-social-media-linkedin-computer-icons-linkedin-blue-text-trademark-thumbnail.png",
    name: "Linkdin 1",
    description: "01.01.2024",
    url: "/",
  }
];

function ContactMe(props: ContactMeType) {
  return (
   <Card className="p-3 bg-accent/10 hover:bg-primary/10  transition-colors group flex items-center gap-4 ">
    <div className="relative">
      <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain"/>
      <img src={props.mediumImage } alt={props.name} className="w-5 h-5 absolute -bottom-2 -right-1"/>
      
      </div>
      <div className="mr-auto">
        <div className="flex">
          <p className="text-lg font-semibold mr-5 ">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight size={16} className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"/>
   </Card>
  );
}
export default Status;
