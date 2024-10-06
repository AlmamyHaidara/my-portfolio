
import { ReactNode } from "react";

export type MdxCodeProps = {
  children: ReactNode;
};

export const MdxCode = (props: MdxCodeProps) => {
  return (
    <span className="border-blue-500 bg-[#ececec] rounded-sm text-[#0d0d0d] text-base p-1 px-2">
    {props.children}
    </span>
  );
};
