import { ContactMeType } from "@/lib/types";
import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";

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

export default ContactMe