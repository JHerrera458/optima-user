"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

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
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header className="flex items-center gap-2 px-24 py-2 text-white md:px-56 lg:px-72 bg-primaryColor ">
        <span className="mr-auto text-4xl font-bold">OPTIMA</span>
        <div className="hidden gap-2 lg:flex">
          {navItems.map((item) => (
            <NavItem key={item.path} path={item.path} text={item.text} />
          ))}
        </div>
        <div className="flex lg:hidden">
          <HiBars3
            onClick={() => {
              setShowNav(!showNav);
            }}
            size={30}
            className="cursor-pointer hover:text-secondaryColor"
          />
        </div>
      </header>
      {showNav && (
        <div className="flex justify-center gap-2">
          {navItems.map((item) => (
            <NavItem key={item.path} path={item.path} text={item.text} />
          ))}
        </div>
      )}
    </>
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
