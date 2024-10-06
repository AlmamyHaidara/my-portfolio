import React from "react";
import Link from "next/link";
import { SideProjectType } from "@/lib/types"; // Assurez-vous que le chemin est correct
import { Post } from "@/lib/posts";
import Image from "next/image";

function SideProject(props: Post) {
  return (
    <Link
      href={`/projet/${props.slug}`}
      className="inline-flex items-center gap-4 hover:bg-primary/10 rounded-sm transition-colors p-1"
    >
      <span className="w-[15%] h-20  text-accent-foreground p-3 rounded-full">
        {/* <props.logo /> */}
        <img
        src={props.cover || "/default-cover.jpg"}
        alt={props.title}
        className="w-full h-full object-cover rounded-md"
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