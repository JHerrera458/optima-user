import { Bold } from "@/components/Bold";
import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";

export default function Tutores() {
  return (
    <article className="flex flex-col gap-4">
      <div>
        <CustomTitle text="Tutores" />
        <p>Este es un módulo dedicado a la gestión y creación de tutores</p>
      </div>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Creación de un tutor" />
        <p>Estos son los pasos para registrar un tutor en el sistema.</p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/R6VwbmYBEcs?si=hPARgaCSKH5UM_qY"
          title="Creación de tutores | Tutorial"
          allowFullScreen
        ></iframe>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Carga masiva de tutores" />
        <p>
          En ocasiones se necesita subir más de un tutor a la plataforma, y
          realizar el proceso de creación uno por uno puede resultar poco
          eficiente, por esta razón Optima permite la carga masiva de tutores.
        </p>

        <iframe
          height={600}
          src="https://www.youtube.com/embed/wHATivJxEoI?si=LuKrmh53jQZcNdbD"
          title="Carga masiva de tutores | Tutorial"
          allowFullScreen
        ></iframe>

        <span className="text-red-500 font-bold">NOTA:</span>
        <p>
          Es muy importante no modificar ni eliminar la fila 1 de la plantilla
          de Excel, la cual contiene los encabezados de las columnas. Cada
          columna hace referencia a un dato del estudiante y cada fila hace
          referencia a un estudiante. La explicación de cada columna se muestra
          a continuación:
        </p>
        <ul className="px-8 list-disc">
          <li>
            <Bold>ced:</Bold> Hace referencia a la cédula del tutor
          </li>
          <li>
            <Bold>name:</Bold> Hace referencia al nombre completo del tutor
          </li>
          <li>
            <Bold>email:</Bold> Hace referencial correo electrónico del tutor
          </li>
          <li>
            <Bold>grade:</Bold> Hace referencia a la carrera del tutor
          </li>
          <li>
            <Bold>cvlac:</Bold> Hace referencia al enlace del cvlac del tutor
          </li>
          <li>
            <Bold>hquarter:</Bold> Hace referencia a la sede a la cual pertenece
            el tutor
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Visualizar información de tutores" />
        <p>
          Una vez hayas registrado tutores en el sistema, podrás visualizar una
          tabla que contiene a todos los tutores que están registrados en el
          sistema:
        </p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/QpybSNGhwJ4?si=nMa7MNozlQPPZ9Ex"
          title="Visualización de tutores | Tutorial"
          allowFullScreen
        ></iframe>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Detalle y edición de un tutor" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/UvUiCzaI83A?si=17wrLSnSKVx_Q7K8"
          title="Detalle y edición de un tutor | Tutorial"
          allowFullScreen
        ></iframe>

        <CustomSubtitle text="Borrar un tutor" />
        <span className="text-red-500 font-bold">NOTA:</span>
        <p>
          Es muy importante tener cuidado, ya que al borrar un tutor, toda su
          información se eliminará del sistema. Sólo se debe usar esta
          funcionalidad cuando se desee eliminar permanentemente la información
          de un tutor.
        </p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/cGzqmdP551g?si=EViqrJMqWwkzzbBC"
          title="Borrar un tutor | Tutorial"
          allowFullScreen
        ></iframe>
      </section>
    </article>
  );
}
