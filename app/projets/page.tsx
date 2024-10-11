import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {  allProjets } from "contentlayer/generated";
import Link from "next/link";

export default async function Page() {
  // const posts = await getMakdowns("/app/content/projets");
  
  console.table(allProjets[0].url)
  return (
    <div className="mt-16 flex size-full justify-center gap-5 px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {allProjets.map((projet) => (
          <Card
          key={projet.url.replace(/\d+-/g, "").replace(".mdx", "")}
            className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
          >
            <CardHeader className="p-0">
              <div className="flex h-[150px] w-full items-center justify-center bg-gray-200">
                {projet.cover ? (
                  <img
                    src={projet.cover}
                    className="size-full object-cover"
                    alt={projet.title}
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-gray-100 text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {projet.title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-gray-600">
                  {projet.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="p-4">
              <Link
                className="text-blue-500 hover:text-blue-700 hover:underline"
                href={`${projet.url.replace(/\d+-/g, "").replace(".mdx", "")}`}
                >
                En savoir plus
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
  
}
