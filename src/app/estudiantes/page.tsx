import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";
import Image from "next/image";

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
          alt="Confirmación de creación de estudiante "
          width={50}
          height={50}
        />
        <p>Al hacer click, veremos la siguiente ventana emergente:</p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/DpbuhW4.png"
          alt="Confirmación de creación de estudiante "
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
          alt="Confirmación de creación de estudiante "
          width={600}
          height={600}
        />
        <p>
          Es muy importante no modificar ni eliminar la fila 1, la cual contiene
          los encabezados de las columnas. Cada columna hace referencia a un
          dato del estudiante.
        </p>
        <ul className="list-disc px-8">
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
        <p></p>
      </section>
    </article>
  );
}
