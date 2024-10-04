import React from "react";

function Page() {
  return (
    <div className="flex justify-start w-full items-start mt-10">
      <div className="w-full mx-auto py-6">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>

        {/* Introduction */}
        <p className="text-lg pb-5 text-muted-foreground w-full">
          Développeur Full-Stack passionné et certifié{" "}
          <span className="font-semibold">Azure Administrator (AZ-104)</span>,
          je conçois des applications modernes et sécurisées, tout en
          garantissant une expérience utilisateur optimale. Mon expertise couvre
          non seulement le développement web avec des technologies telles que{" "}
          <span className="font-semibold">TypeScript</span>,{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>,{" "}
          <span className="font-semibold">PostgreSQL</span>, et{" "}
          <span className="font-semibold">Vercel</span>, mais également le
          développement mobile avec{" "}
          <span className="font-semibold">React Native</span> et{" "}
          <span className="font-semibold">Expo</span>.
        </p>

        {/* Section Parcours Professionnel */}
        <h2 className="text-2xl font-bold mb-4">Parcours Professionnel</h2>
        <p className="text-lg pb-4">
          J'ai acquis une solide expérience dans le développement Full-Stack au
          fil des années, travaillant sur une variété de projets allant des
          applications web et mobiles aux solutions DevOps complexes. Voici
          quelques-unes des étapes marquantes de mon parcours :
        </p>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>
            <span className="font-semibold">Samina</span> : Actuellement, je
            travaille chez Samina, une entreprise informatique de premier plan,
            offrant une gamme complète de services tels que le développement de
            logiciels, la conception de sites Web, des solutions de commerce
            électronique, ainsi que la gestion de projets, la sécurité et le
            stockage de données. Samina a pour mission de fournir des solutions
            logicielles de pointe propulsées par l'intelligence artificielle
            pour résoudre des défis complexes et optimiser les processus dans
            divers domaines. J'y occupe un rôle clé en contribuant au
            développement et au déploiement d'applications avec{" "}
            <span className="font-semibold">Angular</span>,{" "}
            <span className="font-semibold">ASP.NET</span>,{" "}
            <span className="font-semibold">MySQL</span> et{" "}
            <span className="font-semibold">Azure</span>.
          </li>
          <li>
            <span className="font-semibold">MKParis Concept</span> :
            Développement backend et front-end d'une application mobile en{" "}
            <span className="font-semibold">React Native</span> et{" "}
            <span className="font-semibold">TypeScript</span>, déployée avec{" "}
            <span className="font-semibold">Firebase</span> et{" "}
            <span className="font-semibold">MySQL sur Azure</span>.
          </li>
          <li>
            En tant que freelance : Développement d'applications, notamment une
            application d'archivage en{" "}
            <span className="font-semibold">Next.js</span> et{" "}
            <span className="font-semibold">TypeScript</span>, ainsi que
            l'application mobile 'Sugu' (React Native, Firebase).
          </li>
        </ul>

        {/* Section Parcours Scolaire */}
        <h2 className="text-2xl font-bold mb-4">Parcours Scolaire</h2>
        <p className="text-lg pb-4">
          Mon parcours scolaire m'a permis de développer une solide base en
          informatique et en gestion de projet, avec un accent particulier sur
          les nouvelles technologies :
        </p>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>
            Licence en génie logiciel obtenue à{" "}
            <span className="font-semibold">
              l'Institut Supérieur des Technologies Appliquées (ISTA)
            </span>{" "}
            de 2020 à 2024.
          </li>
          <li>
            Certification{" "}
            <span className="font-semibold">Azure Administrator (AZ-104)</span>{" "}
            : Compétences avancées en administration de solutions cloud sur la
            plateforme Azure.
          </li>
          <li>
            Formations en développement Full-Stack :{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Node.js</span>,{" "}
            <span className="font-semibold">Angular</span>, et intégration avec
            des bases de données telles que{" "}
            <span className="font-semibold">PostgreSQL</span> et{" "}
            <span className="font-semibold">MySQL</span>.
          </li>
        </ul>

        {/* Section Expertise DevOps */}
        <h2 className="text-2xl font-bold mb-4">Expertise DevOps</h2>
        <p className="text-lg pb-4">
          En tant que professionnel DevOps, je maîtrise des outils tels que l’{" "}
          <span className="font-semibold">Infrastructure as Code (IaC)</span>{" "}
          avec <span className="font-semibold">Terraform</span>, la création de
          pipelines CI/CD avec{" "}
          <span className="font-semibold">Azure Pipelines</span>, et la gestion
          des conteneurs via <span className="font-semibold">Docker</span>.
          Cette combinaison de compétences me permet de gérer l’intégralité du
          cycle de vie d’un projet, du concept initial au déploiement, aussi
          bien sur des environnements web que mobiles.
        </p>

        {/* Conclusion */}
        <p className="text-lg pb-6">
          Grâce à ces compétences techniques et une approche axée sur la
          collaboration et l'optimisation continue, je suis en mesure de mener à
          bien des projets complexes, en respectant les délais et les objectifs
          commerciaux. Je suis toujours à la recherche de nouveaux défis pour
          perfectionner mes compétences et contribuer à la réussite des
          entreprises avec lesquelles je collabore.
        </p>
      </div>
    </div>
  );
}

export default Page;
