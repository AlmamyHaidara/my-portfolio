import React from "react";
import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ContactMeType, WorkType } from "@/lib/types";
import { CONTACTME, SIDE_PROJECT, WORKS } from "@/lib/data";
import SideProject from "./SideProject";


function Status() {
  return (
    <section className={"flex max-md:flex-col items-start gap-4   w-full"}>
     
        <Card className="h-full w-full p-4 flex-1">
        <p className="text-lg pb-2 text-muted-foreground">Travail</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((item, index) => (
              <Work {...item} key={index} />
            ))}
          </div>
        </Card>
      <div className="flex-[2] w-full  flex flex-col gap-4">

        <Card className="flex-[1] p-4 w-full flex flex-col gap-2 ">
      <p className="text-lg pb-2 text-muted-foreground">Les projets a cote</p>

        <div className="flex flex-col gap-4">
          {SIDE_PROJECT.map((item, index) => (
            <SideProject {...item} key={index} />
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
