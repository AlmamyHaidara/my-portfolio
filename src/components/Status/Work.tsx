import Link from "next/link";
import { Badge } from "../ui/badge";
import {  Projets } from "contentlayer/generated";

function Work(props: Projets) {
  return (
    <Link href={`${props.url.replace(/\d+-/g, "").replace(".mdx", "")}`} className="flex items-center gap-4 p-1 rounded-lg hover:bg-primary/10 transition-colors">
      <img
        src={props.cover || "/default-cover.jpg"}
        alt={props.title}
        className="w-12 h-12 object-cover rounded-md"
      />
      <div className="mr-auto">
      <div className="flex gap-5">
        
        <h3 className="text-base font-medium text-gray-800 ">{props.title}</h3>
      {props.freelance && <Badge variant="outline">Mission</Badge>}</div>
        <p className="text-sm text-muted-foreground w-[95%] line-clamp-2 text-ellipsis">{props.description}</p>
      </div>
      {/* <p className="text-sm text-muted-foreground">{props.publishedAt}</p> */}
    </Link>
  );
}

export default Work