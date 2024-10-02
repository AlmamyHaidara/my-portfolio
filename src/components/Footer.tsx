"use client";
import { NetWorkData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Footer() {
  return (
    <footer className="bg-muted5 p-5 h-40">
      <p className="text-primary text-xl font-semibold">Contacter moi</p>

      <p className="text-muted-foreground text-sm ">
        Trouvez moi sur les reseaux sociaux ou envoie moi un mail
      </p>
      <div className="flex gap-4">
     {
      NetWorkData.map((item,index)=>(
        <span className="py-5 " key={index}>
          <Link href={item.path} className="text-primary" target="_blank">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-10 hover:h-12 transform duration-500 object-contain"
            />
          </Link>
        </span>

      ))
     }
      </div>
    </footer>
  );
}

export default Footer;
