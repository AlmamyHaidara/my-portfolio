import Status from "@/components/Status";
import { cn } from "@/lib/utils";
import { Code, Github, Infinity, Linkedin } from "lucide-react";
import Link from "next/link";

const styleClass = {
  badge:
    "relative rounded bg-primary/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-2 hover:bg-primary/20 transition-colors hover:underline text-primary",
};
export default function Home() {
  return (
    <div className=" w-full h-full flex justify-start mt-16 flex-col ">
      
        <section className=" w-full h-96 flex justify-start flex-col my-5 items-start">
          <div className="flex justify-start mt-5 items-center">
            <div className="rounded-full  ">
              <img
                src={"/assets/images/logo.png"}
                className="rounded-[100%] object-cover w-[100px] h-[100px]"
                alt="alt"
              />
            </div>

            <span className="flex flex-col">
              <p className="text-3xl max-sm:text-xl font-semibold">Almamy Ali Haïdara</p>
              <p className="text-xl  max-sm:text-base  font-extralight text-primary">
                Fullstack Developer and Devops
              </p>
            </span>
          </div>
          <div className="w-full h-auto  text-lg font-sans font-light pl-8 ">
            <p className="text-2xl max-sm:text-xl font-medium my-2 ">
              Fullstack Developer and Devops
            </p>
            <p className="italic text-pretty font-sans">
              Je suis un développeur{" "}
              <Link href={"#"} className={cn(`${styleClass.badge}`)}>
                <Code size={16} />
                fullstack
              </Link>{" "}
              et junior{" "}
              <Link href={"#"} className={cn(`${styleClass.badge}`)}>
                {" "}
                <Infinity size={16} /> DevOps
              </Link>
              , passionné par la création d'applications performantes et
              sécurisées. J’aime partager mes connaissances à travers mes
              projets et mes réseaux comme{" "}
              <Link href={"#"} className={cn(`${styleClass.badge}`)}>
                <Github size={16} /> GitHub
              </Link>
              ,
              <Link href={"#"} className={cn(`${styleClass.badge}`)}>
                <Linkedin size={16} /> LinkedIn
              </Link>
              .
            </p>
          </div>
        </section>

      <section>
      <Status />

      </section>
    </div>
  );
}
