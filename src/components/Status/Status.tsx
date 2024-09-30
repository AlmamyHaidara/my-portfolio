import React from "react";
import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ContactMeType, WorkType } from "@/lib/types";
import { CONTACTME, SIDE_PROJECT, WORKS } from "@/lib/data";
import SideProject from "./SideProject";
import Work from "./Work";
import ContactMe from "./ContactMe";


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

export default Status;
