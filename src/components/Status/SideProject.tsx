import React from "react";
import Link from "next/link";
import { SideProjectType } from "@/lib/types"; // Assurez-vous que le chemin est correct

function SideProject(props: SideProjectType) {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-primary/10 rounded-sm transition-colors p-1"
    >
      <span className="bg-primary/10  text-accent-foreground p-3 rounded-sm">
        <props.logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
}

export default SideProject;