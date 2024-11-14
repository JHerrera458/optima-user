import React from "react";
interface Props {
  text: string;
}

export const CustomSubtitle = ({ text }: Props) => {
  return <h1 className="font-bold text-1xl">{text}</h1>;
};
