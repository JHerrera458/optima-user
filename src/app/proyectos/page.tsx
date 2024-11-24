import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";

export default function Proyectos() {
  return (
    <article className="flex flex-col gap-4">
      <div>
        <CustomTitle text="Proyectos" />
        <p>Este es un módulo dedicado a la gestión y creación de proyectos.</p>
      </div>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Creación de un proyecto" />
        <p>Para crear un proyecto es necesario seguir los siguientes pasos:</p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/qh9a8z-kpfo?si=WtzueAWR1mTnUHx2"
          title="Crear un proyecto | Tutorial"
          allowFullScreen
        ></iframe>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Visualización de proyectos" />
        <p>
          En la página principal de proyectos, encontrarás una tabla con la
          información de todos los proyectos que se hayan registrado:
        </p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/TE2MWndHqDQ?si=ESbDormmTHbQj6nG"
          title="Visualización de proyectos | Tutorial"
          allowFullScreen
        ></iframe>
      </section>
      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Detalle de un proyecto" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/gW5tw6V0KDo?si=wbarD8z4eldOoH0t"
          title="Detalle y edición de proyectos | Tutorial"
          allowFullScreen
        ></iframe>

        <CustomSubtitle text="Borrar un proyecto" />
        <span className="text-red-500 font-bold">NOTA:</span>
        <p>
          Es muy importante tener cuidado, ya que al borrar un proyecto, toda su
          información se eliminará del sistema. Sólo se debe usar esta
          funcionalidad cuando se desee eliminar permanentemente la información
          de un proyecto.
        </p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/Ff4E6mAeb0M?si=meAf-ndMyHJutdt5"
          title="Eliminación de un proyecto | Tutorial"
          allowFullScreen
        ></iframe>
      </section>
      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Añadir estudiantes y tutores a un proyecto" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/TXLcsgFOLMg?si=ZIsvpayrpndRTTQ0"
          title="Añadir estudiantes a un proyecto | Tutorial"
          allowFullScreen
        ></iframe>
        El proceso para añadir un tutor es igual al de añadir estudiantes, con
        la diferencia de tener que agregarlo en la sección de añadir tutor.
      </section>
      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Subir documentos y Aval a un proyecto" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/1VjnZefbkog?si=RFn9Sf8emSjoE30q"
          title="Subir documentos y aval | Tutorial"
          allowFullScreen
        ></iframe>
      </section>
      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Subir producciones a un proyecto" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/39AabjB4jwI?si=IPqc65QgFwkGWgWW"
          title="Subir producción | Tutorial"
          allowFullScreen
        ></iframe>
      </section>
    </article>
  );
}
