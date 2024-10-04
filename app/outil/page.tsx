// pages/contact.js

import { toolsData } from "@/lib/data";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

export default function Outils() {
  return (
    <div className="min-h-screen  text-white py-16 px-6  text-muted-foreground ">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-start space-x-4 mb-8">
          <img
            src="/assets/images/logo1.png"
            alt="Profile"
            className="rounded-full w-20 h-20"
          />
          <div>
            <h1 className="text-3xl font-bold  text-muted-foreground ">Almamy Ali Haïdara</h1>
            <p className="text-xl italic  text-muted-foreground ">L'outil que j'utilise au quotidien.</p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mt-16">
          {toolsData.map((categoryData: { category: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; tools: any[]; }, index: Key | null | undefined) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-2 text-start  text-muted-foreground">
                {categoryData.category}
              </h2>
              <ul className="space-y-2  text-start">
                <Link href="#" >
                {categoryData.tools.map((tool, i) => (
                  <li key={i} className="list-disc hover:underline hover:text-primary text-muted-foreground transition-colors py-1">{tool}</li>
                ))}</Link>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
