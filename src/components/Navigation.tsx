"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    text: "Inicio",
    path: "/",
  },
  {
    text: "Estudiantes",
    path: "/estudiantes",
  },
  {
    text: "Tutores",
    path: "/tutores",
  },
  {
    text: "Proyectos",
    path: "/proyectos",
  },
  {
    text: "Reportes",
    path: "/reportes",
  },
];

export const Navigation = () => {
  return (
    <header className="flex items-center gap-2 px-24 py-2 text-white md:px-56 lg:px-72 bg-primaryColor ">
      <span className="mr-auto text-4xl font-bold">OPTIMA</span>
      <div className="hidden gap-2 sm:flex">
        {navItems.map((item) => (
          <NavItem key={item.path} path={item.path} text={item.text} />
        ))}
      </div>
      <div className="flex sm:hidden">hamburger</div>
    </header>
  );
};

interface Props {
  text: string;
  path: string;
}
const NavItem = ({ text, path }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${
        pathName === path ? "text-secondaryColor" : ""
      } hover:text-secondaryColor font-semibold`}
      href={path}
    >
      {text}
    </Link>
  );
};
