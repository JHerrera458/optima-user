import "./globals.css";
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";

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
      <body className="sm:bg-green-100 md:bg-yellow-100 lg:bg-red-100">
        <Navigation />
        <div className="flex px-16 py-2 md:px-48 lg:px-64">
          <main className="py-2">{children}</main>
        </div>
      </body>
    </html>
  );
}
