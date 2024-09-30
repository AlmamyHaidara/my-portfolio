import { WorkType } from "@/lib/types";
import Link from "next/link";
import { Badge } from "../ui/badge";

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

export default Work