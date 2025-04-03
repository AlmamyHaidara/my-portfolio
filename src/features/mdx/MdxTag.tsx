import { Alert } from "@/components/ui/alert";
import { cn } from "@/utils";
import {  Hash } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export type MdxTagProps = {
  children: ReactNode;
  href:string ;
};

const styleClass = {
  badge:
    "relative rounded-md flex-wrap bg-transparent px-[0.3rem]  no-underline  py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-2 transition-colors  text-primary",
    // "relative font-mono text-sm font-semibold inline-flex items-center gap-6 text-primary bg-white shadow-md rounded-sm overflow-hidden transition-all transform hover:scale-105 hover:bg-primary/20

};
export const MdxTag = (props: MdxTagProps) => {
  return (
   

<Link href={props.href} className={cn(`${styleClass.badge}`)}>
<Hash size={16} />
{props.children}
</Link>
  );
};
