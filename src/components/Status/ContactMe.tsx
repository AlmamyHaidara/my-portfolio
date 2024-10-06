import { ContactMeType } from "@/lib/types";
import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ContactMe(props: ContactMeType) {
  return (
    <Link href={props.url}>

    <Card className="p-4 flex items-center gap-4 hover:bg-primary/10 group transition-colors">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-5 h-5 absolute -bottom-2 -right-1"
        />
      </div>
      <div className="mr-auto">
        <h3 className="text-lg font-semibold">{props.name}</h3>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      {/* <ArrowUpRight
        size={16}
        className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
      /> */}
            <ArrowUpRight size={16} className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"/>

    </Card>
    </Link>
  );
}

export default ContactMe