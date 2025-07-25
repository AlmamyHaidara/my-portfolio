import { ReactNode } from "react";

export type MdxCodeProps = {
  children: ReactNode;
};

export const MdxCode = (props: MdxCodeProps) => {
  return (
    <span className="border-blue-500 bg-transparent rounded-sm text-[#ececec] text-base p-1 px-2">
      {props.children}
    </span>
  );
};
