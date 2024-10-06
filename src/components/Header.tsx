"use client";
import { cn } from "@/lib/utils";
import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";

const navigation = [
  {
    id: 1,
    path: "/",
    title: "Acceuil",
  }, {
    id: 2,
    path: "/a-propos",
    title: "À propos",
  },
  {
    id: 3,
    path: "/outil",
    title: "Outil",
  },
  {
    id: 4,
    path: "/projets",
    title: "Mes projets",
  },
  {
    id: 5,
    path: "/blog",
    title: "Blog",
  },
];
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = usePathname();
  const isActivate = (path: string) =>
    currentPath === path
      ? "border-b-3 max-md:rounded-none shadow-sl shadow-primary/10 bg-primary/15 text-primary  rounded-md "
      : "";
  const visibilityClass = isOpen ? "max-md:!block" : "";

  const isMenuOpen = () => {
    setIsOpen((prev) => !prev);
    console.log("oi", isOpen);
  };
  return (
    <header className="flex items-center gap-2 px-16 ">
      <Link
        href="/"
        className="rounded-full flex md:w-[4%] max-md:w-full justify-between items-center"
      >
        <img
          src={"/assets/images/logo1.png"}
          alt="alt"
          width={50}
          height={20}
          className="rounded-full"
        />
        <p className="font-extrabold text-3xl sm:text-xl max-lg:hidden ">
          Code<span className=" text-primary">Craft</span>
        </p>
      </Link>

      <div className="ml-auto "> </div>
      <div className="  flex justify-between">
        <div
          className="absolute right-5 top-10 z-50 max-md:block md:hidden cursor-pointer"
          onClick={isMenuOpen}
        >
          {isOpen ? (
            <X
              size={32}
              className={cn(
                `transform transition-all duration-500 ease-in-out ${visibilityClass}`
              )}
            />
          ) : (
            <AlignRight
              size={32}
              className={cn(
                `transform transition-all duration-500 ease-in-out ${visibilityClass}`
              )}
            />
          )}
        </div>

        <div
          className={`flex justify-between gap-5  max-md:bg-[#11151d] max-md:absolute max-md:left-0 max-md:top-0 max-md:right-0 max-md:py-20 max-md:bg-muted max-md:z-40 max-md:flex-col transform transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-md:max-w-full max-md:translate-x-0 max-md:opacity-100 max-md:visible"
              : "max-md:max-w-0 max-md:translate-x-full max-md:opacity-0 max-md:invisible"
          }`}
        >
          {navigation.map((nav, index) => (
            <Link
              href={nav.path}
              key={index}
              className={cn(
                `${"text-primary border-primary transition-colors duration-500 p-2 max-md:hover:bg-primary/20 max-md:hover:transition-colors max-md:hover:duration-500 flex max-md:justify-start max-md:pl-10 "}  ${isActivate(
                  nav.path
                )}`
              )}
            >
              {nav.title}
            </Link>
          ))}
          <div className=" max-md:pl-10 max-md:w-full ">
            <ModeToggle />
          </div>
        </div>
        {/* <Link href="/" className='text-primary'>Acceuil</Link>
    <Link href="/blog"  className={cn(`${'text-primary border-b-2  border-blue-700'} ${({ isActive }:{isActive:boolean}) => (isActive ? "bg-red-500" : "")} `)}>Blog</Link>
    <Link href="#" className='text-primary' >Contact</Link> */}
      </div>
    </header>
  );
}

export default Header;
