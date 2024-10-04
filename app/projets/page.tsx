import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMakdowns } from "@/lib/posts";
import Link from "next/link";

export default async function Page() {
  const posts = await getMakdowns("/app/content/projets");
  // console.table(posts)
  return (
    <div className="w-full h-full flex justify-center mt-16 gap-5 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <CardHeader className="p-0">
              <div className="flex justify-center items-center w-full h-[150px] bg-gray-200">
                {post.cover ? (
                  <img
                    src={post.cover}
                    className="object-cover w-full h-full"
                    alt={post.title}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 mt-2">
                  {post.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="p-4">
              <Link
                className="text-blue-500 hover:text-blue-700 hover:underline"
                href={`/projet/${post.slug}`}
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
