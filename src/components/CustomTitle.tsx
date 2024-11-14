import React from "react";
interface Props {
  text: string;
}

export const CustomTitle = ({ text }: Props) => {
  return <h1 className="font-bold text-2xl">{text}</h1>;
};
