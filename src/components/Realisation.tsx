import React from "react";
import { Card } from "./ui/card";
import { ProjectTye } from "@/lib/types";
import { RealisationData } from "@/lib/data";

function Realisation() {
  return (
    <section className={"flex flex-col items-start gap-4   w-full"}>
      <div className={"flex max-md:flex-col items-start gap-4   w-full"}>
        <Card className="flex-[2] p-4 w-full flex flex-col gap-2 ">
          <p className="text-lg pb-2 text-muted-foreground">
            Les projets a cote
          </p>

          <div className="flex flex-col gap-4">
            <Project {...RealisationData[0]} />
            {/* {SIDE_PROJECT.map((item, index) => (
            <SideProject {...item} key={index} />
          ))} */}
          </div>
        </Card>
        <Card className="flex-[2] p-4 w-full flex flex-col gap-2 ">
          <p className="text-lg pb-2 text-muted-foreground">
            Les projets a cote
          </p>

          <div className="flex flex-col gap-4">
          <Project {...RealisationData[1]} />

            {/* {SIDE_PROJECT.map((item, index) => (
            <SideProject {...item} key={index} />
          ))} */}
          </div>
        </Card>
        <Card className="flex-[2] p-4 w-full flex flex-col gap-2 ">
          <p className="text-lg pb-2 text-muted-foreground">
            Les projets a cote
          </p>

          <div className="flex flex-col gap-4">
          <Project {...RealisationData[2]} />

            {/* {SIDE_PROJECT.map((item, index) => (
            <SideProject {...item} key={index} />
          ))} */}
          </div>
        </Card>
      </div>
      <div className=" flex w-full gap-4  max-md:flex-col">

      <Card className="flex-[4] p-4 w-full flex flex-col gap-2 ">
          <p className="text-lg pb-2 text-muted-foreground">
            Les projets a cote
          </p>

          <div className="flex flex-col gap-4">
          <Project {...RealisationData[3]} />

            {/* {SIDE_PROJECT.map((item, index) => (
            <SideProject {...item} key={index} />
          ))} */}
          </div>
        </Card>

        <Card className="flex-[2] p-4 w-full flex flex-col gap-2 ">
          <p className="text-lg pb-2 text-muted-foreground">

            Les projets a cote
          </p>

          <div className="flex flex-col gap-4">
          <Project {...RealisationData[0]} />
            {/* {SIDE_PROJECT.map((item, index) => (
            <SideProject {...item} key={index} />
          ))} */}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Realisation;


function Project(props: ProjectTye) {
  return (
   <Card className="p-3 bg-accent/10 hover:bg-primary/10  transition-colors group flex flex-col items-center gap-4 ">
    <div className="relative w-full flex flex-col items-center justify-center">
      <img src={props.image} alt={props.name} className="w-full h-20  object-contain"/>
      
      </div>
      <div className="mr-auto">
        <div className="flex flex-col">
        <img src={props.mediumImage} alt={props.name} className="w-6 h-6 object-contain"/>

          <p className="text-lg font-semibold mr-5 ">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
   </Card>
  );
}
