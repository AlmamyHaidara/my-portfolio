import React from "react";
import { Card } from "../ui/card";
import { CONTACTME } from "@/lib/data";
import Work from "./Work";
import ContactMe from "./ContactMe";
import { allProjets } from "contentlayer/generated";


async function Status() {

  return (
    <section className="flex flex-col lg:flex-row items-start gap-6 w-full mt-8">
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        <Card className="p-4 h-full w-full">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Travail</h2>
          <div className="flex flex-col gap-4">
            {allProjets.map((post, index) => (
              <Work {...post} key={index} />
            ))}
          </div>
        </Card>

        {/* <Card className="p-6 w-full">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Projets annexes</h2>
          <div className="flex flex-col gap-4">
            {annexes.map((project, index) => (
              <SideProject {...project} key={index} />
            ))}
          </div>
        </Card> */}
      </div>

      <div className="flex flex-col gap-6 w-full lg:w-1/3">
        <Card className="p-6 w-full">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Contactez-moi</h2>
          <div className="flex flex-col gap-4">
            {CONTACTME.map((contact, index) => (
              <ContactMe {...contact} key={index} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}


export default Status;
