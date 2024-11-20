import React from "react";
interface Props {
  children: React.ReactNode;
}

export const Bold = ({ children }: Props) => {
  return <span className="font-bold">{children}</span>;
};
