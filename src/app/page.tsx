import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";

export default function Home() {
  return (
    <article className="flex flex-col gap-2">
      <CustomTitle text="Introducción" />
      <p>Bienvenido al manual de usuario de Optima</p>

      <section className="flex flex-col gap-2">
        <CustomSubtitle text="¿Qué es Optima?" />
        <p>
          Optima es una plataforma web diseñada para la Institución
          Universitaria Visión de las Américas. Es una herramienta de gestión de
          proyectos formativos, que busca apoyar a la coordinación de proyectos
          facilitando el registro, seguimiento y asignación de tutores y
          estudiantes a proyectos formativos, así como la custodia de
          documentación relacionada con los proyectos de los y estudiantes. A
          partir de las funciones descritas, la herramienta es capaz de generar
          automáticamente reportes estadísticos.
        </p>

        <CustomSubtitle text="Carácteristicas principales" />
        <ul className="list-disc px-8 flex flex-col gap-2">
          <li>
            <span className="font-bold">Registro y gestión de proyectos:</span>{" "}
            Permite monitorear el progreso de proyectos formativos de los
            estudiantes y visualizar su estado en tiempo real. El coordinador de
            proyectos registra los proyectos formativos, los actualiza y obtiene
            la información necesaria para su seguimiento.
          </li>
          <li>
            <span className="font-bold">
              Registro y gestión de tutores y estudiantes:
            </span>{" "}
            Permite organizar la información y los datos de los proyectos,
            facilitando la organización de los actores del proceso de formación
            y los proyectos. El coordinador de proyectos asigna los actores y
            los gestiona a partir de las necesidades del proyecto.
          </li>
          <li>
            <span className="font-bold">Custodia de documentación:</span>{" "}
            Permite almacenar de forma segura y organizada todos los documentos
            clave relacionados con los proyectos, como entregables, reportes,
            actas y la documentación necesaria que los proyectos puedan generar,
            garantizando la debida custodia de la información.
          </li>
          <li>
            <span className="font-bold">Reportes estadísticos:</span> Permite
            generar automáticamente reportes estadísticos basados en la
            información de los proyectos, tutores y estudiantes. Estos reportes
            proporcionarán métricas de apoyo administrativo, permitiendo la
            evaluación del rendimiento de los proyectos y facilitando la mejora
            continua de los procesos de formación.
          </li>
        </ul>
        <a
          href="https://optima-front.vercel.app/"
          target="_blank"
          className="px-4 py-2 bg-primaryColor w-fit rounded-md text-white font-bold"
        >
          Ir a Optima
        </a>
        <a
          href={"/manual_tecnico.pdf"}
          download
          className="px-4 py-2 bg-primaryColor w-fit rounded-md text-white font-bold"
        >
          Manual técnico
        </a>
      </section>
    </article>
  );
}
