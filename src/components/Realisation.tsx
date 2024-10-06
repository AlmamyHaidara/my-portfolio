import React from "react";
import { Card } from "./ui/card";
import { ProjectTye } from "@/lib/types";
import { RealisationData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

function Realisation() {
  return (
    <section className={"flex flex-col  items-start gap-2 w-full"}>
      <div className={"flex flex-wrap gap-4 w-full"}>
        {RealisationData.map((item, index) => (
          <div className="flex-[1] p-4 w-full flex flex-col gap-2 min-w-52" key={index}>
            <div className="flex flex-col gap-4">
              <Project {...item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Realisation;

function Project(props: ProjectTye) {
  return (
    <Link href={props.path}>
    <Card className="p-3 bg-accent/10 hover:bg-primary/10  transition-colors group flex flex-col items-center gap-4 ">
      <div className="relative w-full flex flex-col items-center justify-center">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-20  object-contain"
        />
      </div>
      <div className="mr-auto">
        <div className="flex flex-col">
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-6 h-6 object-contain"
          />

          <p className="text-lg font-semibold mr-5 ">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
    </Card>
    </Link>
  );
}
