import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import { MDX_COMPONENTS } from "./mdx-components";

export const Mdx = ({ children }: { children: string }) => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <MDXRemote source={children} components={MDX_COMPONENTS} />
    </Suspense>
  );
};
