import { Alert } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Code, Notebook, Tag, Tags } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export type MdxTagProps = {
  children: ReactNode;
  href:string ;
};

const styleClass = {
  badge:
    "relative rounded bg-primary/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary/20 transition-colors hover:underline text-primary",
};
export const MdxTag = (props: MdxTagProps) => {
  return (
   

<Link href={props.href} className={cn(`${styleClass.badge}`)}>
<Tags size={16} />
{props.children}
</Link>
  );
};
