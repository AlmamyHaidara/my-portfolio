import { cn } from "@/utils";
import { ComponentPropsWithoutRef } from "react";

export type MdxPreProps = ComponentPropsWithoutRef<"pre"> & {
  "data-language"?: string;
  "data-file-name"?: string;
};

export const MdxPre = ({ children, className, ...props }: MdxPreProps) => {
  console.log({ props });
  return (
    <div className="mb-4 ml-2.5 rounded-t-lg bg-primary/50">
      <div className="flex items-center gap-2 px-2 py-1.5">
        <div className="flex items-center space-x-1.5">
          <span className="block size-2.5 rounded-full bg-red-500"></span>
          <span className="block size-2.5 rounded-full bg-yellow-500"></span>
          <span className="block size-2.5 rounded-full bg-green-500"></span>
        </div>
        <div className="ml-auto"></div>
        {props["data-language"] ? <code>{props["data-language"]}</code> : null}
      </div>
      <pre
        className={cn("relative mt-0 overflow-auto lg:text-base !my-0", className)}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};
