import { Bold } from "@/components/Bold";
import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";

export default function Estudiantes() {
  return (
    <article className="flex flex-col gap-4">
      <div>
        <CustomTitle text="Estudiantes" />
        <p>
          Este es un módulo dedicado a la gestión y creación de estudiantes.
        </p>
      </div>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Creación de un estudiante" />
        <p>Este es el proceso para crear un estudiante en la plataforma</p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/LIyVZmmF2Tg?si=CjyXb5ZsTntkZ1cu"
          title="Crear estudiantes | Tutorial"
          allowFullScreen
        ></iframe>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Carga masiva de estudiantes" />
        <p>
          En ocasiones se requiere subir multiples estudiantes, y realizar este
          proceso por medio del paso anterior puede resultar poco eficiente, por
          esto Optima ofrece la opción de subir distintos estudiantes desde una
          plantilla de Excel.
        </p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/KlE-4p6S_yA?si=vz0Xnhql9a7NpeYr"
          title="Carga masiva de estudiantes | Tutorial"
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
            <Bold>ced:</Bold> Hace referencia a la cédula del estudiante.
          </li>
          <li>
            <Bold>name:</Bold> Hace referencia al nombre completo del
            estudiante.
          </li>
          <li>
            <Bold>email:</Bold> Hace referencia al correo electrónico del
            estudiante.
          </li>
          <li>
            <Bold>carreer:</Bold> Hace referencia a la carrera del estudiante.
          </li>
          <li>
            <Bold>hquarter:</Bold> Hace referencia a la sede a la cual pertenece
            el estudiante.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Visualizar información de estudiantes" />
        <p>
          Una vez hayas registrado estudiantes en el sistema, podrás visualizar
          una tabla que contiene a todos los estudiantes registrados en el
          sistema:
        </p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/k0_-5bPpFw8?si=Re30rD0JyM-CdtsG"
          title="Visualización de estudiantes | Tutorial"
          allowFullScreen
        ></iframe>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Detalle de un estudiante" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/FouAsQkBENI?si=lkjWgKPQ1apVRylp"
          title="Detalle de estudiantes | Tutorial"
          allowFullScreen
        ></iframe>
        <CustomSubtitle text="Borrar un estudiante" />
        <span className="text-red-500 font-bold">NOTA:</span>
        <p>
          Es muy importante tener cuidado, ya que al borrar un estudiante, toda
          su información se eliminará del sistema. Sólo se debe usar esta
          funcionalidad cuando se desee eliminar permanentemente la información
          de un estudiante.
        </p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/Ydobi50Kdx0?si=1pIRKAc0XF8wUoJN"
          title="Borrar un estudiante | Tutorial"
          allowFullScreen
        ></iframe>
      </section>
    </article>
  );
}
