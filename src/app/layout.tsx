import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manual de usuario | Optima",
  description:
    "Esta página es el manual de usuario para utilizar el aplicativo web Optima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header className="bg-primaryColor px-48 lg:px-96 py-2 text-white">
          <span className=" text-4xl font-bold">OPTIMA </span>
          <Link href="/">Inicio</Link>
          <Link href="/estudiantes">Estudiantes</Link>
          <span>Tutores</span>
          <span>Proyectos</span>
          <span>Reportes</span>
        </header>
        <div className="flex px-56 lg:px-96 py-2">
          <main className="py-2">{children}</main>
        </div>
      </body>
    </html>
  );
}
