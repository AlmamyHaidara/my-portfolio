import React from "react";
import Link from "next/link";
import { Projets } from "contentlayer/generated";

function SideProject(props: Projets) {
  return (
    <Link
    href={`${props.url.replace(/\d+-/g, "").replace(".mdx", "")}`}
    className="inline-flex items-center gap-4 rounded-sm p-1 transition-colors hover:bg-primary/10"
    >
      <span className="h-20 w-[15%]  rounded-full p-3 text-accent-foreground">
        {/* <props.logo /> */}
        <img
        src={props.cover || "/default-cover.jpg"}
        alt={props.title}
        className="size-full rounded-md object-cover"
      />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
}

export default SideProject;