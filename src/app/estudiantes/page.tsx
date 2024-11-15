import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";
import Image from "next/image";
import { HiClipboardDocumentCheck, HiPencil, HiTrash } from "react-icons/hi2";

export default function Estudiantes() {
  return (
    <article className="flex flex-col gap-4">
      <div>
        <CustomTitle text="Estudiantes" />
        <p>Este es un módulo dedicado a la gestión y creación de estudiantes</p>
      </div>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Creación de un estudiante" />
        <p>
          Para crear un estudiante es necesario ir a la sección de estudiantes,
          y después hacer click en{" "}
          <span className="font-medium">Añadir un estudiante</span> en este
          momento veremos el siguiente formulario:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/8WUwsRJ.png"
          alt="Formulario de creación de estudiantes"
          width={600}
          height={600}
        />
        <p>
          Lo siguiente es rellenar todos los campos solicitados y una vez
          finalizado se debe hacer click en{" "}
          <span className="font-medium">Crear estudiante.</span>
        </p>
        <p>
          Una vez creado el estudiante, deberás poder visualizar en la parte
          superior de tu pantalla un aviso de confirmación con el nombre del
          estudiante que acabas de crear:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/Yj5V7we.png"
          alt="Confirmación de creación de estudiante "
          width={600}
          height={600}
        />
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Carga masiva de estudiantes" />
        <p>
          En ocasiones se necesita subir más de un estudiante a la plataforma, y
          realizar el proceso de creación uno por uno puede resultar poco
          eficiente, por esta razón Optima permite la carga masiva de
          estudiantes.
        </p>
        <p>
          Para subir varios estudiantes al sistema es necesario ir a la sección
          de estudiantes, y después hacer click en el siguiente ícono, el cual
          está situado a la derecha del botón de Añadir Estudiante:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/FCk0G98.png"
          alt="Icono de subir desde excel"
          width={50}
          height={50}
        />
        <p>Al hacer click, veremos la siguiente ventana emergente:</p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/DpbuhW4.png"
          alt="Ventana de subir información desde excel "
          width={600}
          height={600}
        />
        <p>
          Lo primero será hacer click en{" "}
          <span className="font-medium">Descargar plantilla de ejemplo,</span>{" "}
          esto descargará un archivo de Excel el cual deberá ser rellenado con
          la información de los estudiantes que se deseen registrar. La
          plantilla se ve de la siguiente manera:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/O8Z2Kp3.png"
          alt="Tabla de estudiantes en excel "
          width={600}
          height={600}
        />
        <p>
          Es muy importante no modificar ni eliminar la fila 1, la cual contiene
          los encabezados de las columnas. Cada columna hace referencia a un
          dato del estudiante.
        </p>
        <ul className="px-8 list-disc">
          <li>ced: Hace referencia a la cédula del estudiante</li>
          <li>name: Hace referencia al nombre completo del estudiante</li>
          <li>email: Hace referencial correo electrónico del estudiante</li>
          <li>carreer: Hace referencia a la carrera del estudiante</li>
          <li>
            hquarter: Hace referencia a la sede a la cual pertenece el
            estudiante
          </li>
        </ul>
        <p>
          Cada fila hace referencia a un estudiante, y para añadir varios
          estudiantes es necesario rellenar la información de cada columna con
          los datos que se explicaron anteriormente.
        </p>
        <p>
          Una vez se hayan rellenado la cantidad de estudiantes que se desean
          registrar, se deberá guardar el archivo y dirigirse nuevamente a la
          pantalla donde se descargó la plantilla, esta vez haremos click en{" "}
          <span className="font-medium">Seleccionar archivo</span> y
          seleccionaremos el archivo de excel que acabamos de guardar y daremos
          click en Aceptar, finalmente daremos click en el botón{" "}
          <span className="font-medium">Añadir usuarios</span>.
        </p>
        <p>
          Una vez subidos los estudiantes, deberás poder visualizar en la parte
          superior de tu pantalla un aviso de confirmación con el nombre del
          estudiante que acabas de crear.
        </p>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Visualizar información de estudiantes" />
        <p>
          Una vez hayas registrado estudiantes en el sistema, podrás visualizar
          una tabla que contiene a todos los estudiantes que están registrados
          en el sistema:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/cFdlYgu.png"
          alt="Tabla de estudiantes en Optima "
          width={600}
          height={600}
        />
        <p>
          En dicha tabla podremos ver la siguiente información de un estudiante:
          nombre, correo, carrera, si está asignado a un proyecto, y la cantidad
          de proyectos a la que ha pertenecido.
        </p>
        <p>
          Al hacer click en el ícono{" "}
          <HiClipboardDocumentCheck className="mx-1" />
        </p>
        <p>verás una tabla como la siguiente:</p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/oFz3XGT.png"
          alt="Lista de proyectos de un estudiante "
          width={600}
          height={600}
        />
        <p>
          En esta tabla se encuentran los proyectos que han sido asignados al
          estudiante, en caso de ser un estudiante que no tiene ningún proyecto,
          la tabla se mostrará vacía. Los proyectos que aparecen en color negro,
          son proyectos en los que participó el estudiante, y el proyecto que
          aparece en color verde, es el proyecto actual del estudiante.
        </p>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Detalle de un estudiante" />
        <p>
          Al hacer click en el ícono <HiPencil />
        </p>
        <p>
          Serás redireccionado a una página que contiene la información del
          estudiante. En esta página es posible editar la información del
          estudiante, así como borrar el registro del estudiante.
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/AmRn2Rz.png"
          alt="Detalle de un estudiante"
          width={600}
          height={600}
        />
        <CustomSubtitle text="Editar un estudiante" />
        <p>
          Para editar cualquier dato del estudiante, es necesario cambiar toda
          la información que se necesite modificar, y luego dar click en el
          botón <span className="font-medium">Editar información</span>, al
          hacer esto, la información modificada, se guardará, y veremos un
          mensaje de confirmación en la parte superior de la pantalla, deberás
          poder ver los cambios efectuados en el detalle del estudiante.
        </p>

        <CustomSubtitle text="Borrar un estudiante" />
        <p>
          Al hacer click en el ícono <HiTrash />
        </p>
        <p>
          Veremos un aviso, preguntando si realmente deseas borrar el
          estudiante, es muy importante tener cuidado, ya que al borrar un
          estudiante, toda su información se borrará del sistema. Sólo se debe
          usar esta funcionalidad cuando se desee eliminar permanentemente la
          información de un estudiante.
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/o5BVu8u.png"
          alt="Eliminar un estudiante"
          width={600}
          height={600}
        />
        <p>
          Al hacer click en Confirmar, veremos un mensaje de confirmación en la
          parte superior de la pantalla, y serás redirigido a la página
          principal de estudiantes.
        </p>
      </section>
    </article>
  );
}
