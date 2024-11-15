import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";
import Image from "next/image";
import { HiClipboardDocumentCheck, HiPencil, HiTrash } from "react-icons/hi2";

export default function Tutores() {
  return (
    <article className="flex flex-col gap-4">
      <div>
        <CustomTitle text="Tutores" />
        <p>Este es un módulo dedicado a la gestión y creación de tutores</p>
      </div>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Creación de un tutor" />
        <p>
          Para crear un tutor es necesario ir a la sección de tutores, y después
          hacer click en <span className="font-medium">Añadir un tutor</span> en
          este momento veremos el siguiente formulario:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/Ew238cc.png"
          alt="Formulario de creación de tutores"
          width={600}
          height={600}
        />
        <p>
          Lo siguiente es rellenar todos los campos solicitados, el campo de
          CvLac es opcional y puede dejarse vacío. Una vez finalizado se debe
          hacer click en <span className="font-medium">Crear tutor.</span>
        </p>
        <p>
          Una vez creado el tutor, deberás poder visualizar en la parte superior
          de tu pantalla un aviso de confirmación con el nombre del tutor que
          acabas de crear:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/D0RahEv.png"
          alt="Confirmación de creación de tutor "
          width={600}
          height={600}
        />
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Carga masiva de tutores" />
        <p>
          En ocasiones se necesita subir más de un tutor a la plataforma, y
          realizar el proceso de creación uno por uno puede resultar poco
          eficiente, por esta razón Optima permite la carga masiva de tutores.
        </p>
        <p>
          Para subir varios tutores al sistema es necesario ir a la sección de
          tutores, y después hacer click en el siguiente ícono, el cual está
          situado a la derecha del botón de Añadir tutor:
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
          src="https://i.imgur.com/x2UUhHf.png"
          alt="Ventana de subir información desde excel "
          width={600}
          height={600}
        />
        <p>
          Lo primero será hacer click en{" "}
          <span className="font-medium">Descargar plantilla de ejemplo,</span>{" "}
          esto descargará un archivo de Excel el cual deberá ser rellenado con
          la información de los tutores que se deseen registrar. La plantilla se
          ve de la siguiente manera:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/S5fkNYA.png"
          alt="Tabla de tutores en excel "
          width={600}
          height={600}
        />
        <p>
          Es muy importante no modificar ni eliminar la fila 1, la cual contiene
          los encabezados de las columnas. Cada columna hace referencia a un
          dato del tutor.
        </p>
        <ul className="px-8 list-disc">
          <li>ced: Hace referencia a la cédula del tutor</li>
          <li>name: Hace referencia al nombre completo del tutor</li>
          <li>email: Hace referencial correo electrónico del tutor</li>
          <li>grade: Hace referencia a la carrera del tutor</li>
          <li>cvlac: Hace referencia al enlace del cvlac del tutor</li>
          <li>
            hquarter: Hace referencia a la sede a la cual pertenece el tutor
          </li>
        </ul>
        <p>
          Cada fila hace referencia a un tutor, y para añadir varios tutores es
          necesario rellenar la información de cada columna con los datos que se
          explicaron anteriormente.
        </p>
        <p>
          Una vez se hayan rellenado la cantidad de tutores que se desean
          registrar, se deberá guardar el archivo y dirigirse nuevamente a la
          pantalla donde se descargó la plantilla, esta vez haremos click en{" "}
          <span className="font-medium">Seleccionar archivo</span> y
          seleccionaremos el archivo de excel que acabamos de guardar y daremos
          click en Aceptar, finalmente daremos click en el botón{" "}
          <span className="font-medium">Añadir usuarios</span>.
        </p>
        <p>
          Una vez subidos los tutores, deberás poder visualizar en la parte
          superior de tu pantalla un aviso de confirmación con el nombre del
          tutor que acabas de crear.
        </p>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Visualizar información de tutores" />
        <p>
          Una vez hayas registrado tutores en el sistema, podrás visualizar una
          tabla que contiene a todos los tutores que están registrados en el
          sistema:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/JpcHU7C.png"
          alt="Tabla de tutores en Optima "
          width={600}
          height={600}
        />
        <p>
          En dicha tabla podremos ver la siguiente información de un tutor:
          nombre, profesión, estado, si está asignado a un proyecto, y la
          cantidad de proyectos a la que ha pertenecido.
        </p>
        <p>
          Al hacer click en el ícono{" "}
          <HiClipboardDocumentCheck className="mx-1" />
        </p>
        <p>verás una tabla como la siguiente:</p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/Vkjmemq.png"
          alt="Lista de proyectos de un tutor "
          width={600}
          height={600}
        />
        <p>
          En esta tabla se encuentran los proyectos que han sido asignados al
          tutor, en caso de ser un tutor que no tiene ningún proyecto, la tabla
          se mostrará vacía. Los proyectos que aparecen en color negro, son
          proyectos en los que participó el tutor, y los proyectos que aparece
          en color verde, son los proyectos actuales del tutor.
        </p>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Detalle de un tutor" />
        <p>
          Al hacer click en el ícono <HiPencil />
        </p>
        <p>
          Serás redireccionado a una página que contiene la información del
          tutor. En esta página es posible editar la información del tutor, así
          como borrar el registro del tutor.
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/NuOBCLG.png"
          alt="Detalle de un tutor"
          width={600}
          height={600}
        />
        <CustomSubtitle text="Editar un tutor" />
        <p>
          Para editar cualquier dato del tutor, es necesario cambiar toda la
          información que se necesite modificar, y luego dar click en el botón{" "}
          <span className="font-medium">Editar información</span>, al hacer
          esto, la información modificada, se guardará, y veremos un mensaje de
          confirmación en la parte superior de la pantalla, deberás poder ver
          los cambios efectuados en el detalle del tutor.
        </p>

        <CustomSubtitle text="Borrar un tutor" />
        <p>
          Al hacer click en el ícono <HiTrash />
        </p>
        <p>
          Veremos un aviso, preguntando si realmente deseas borrar el tutor, es
          muy importante tener cuidado, ya que al borrar un tutor, toda su
          información se borrará del sistema. Sólo se debe usar esta
          funcionalidad cuando se desee eliminar permanentemente la información
          de un tutor.
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/in2DT2M.png"
          alt="Eliminar un tutor"
          width={600}
          height={600}
        />
        <p>
          Al hacer click en Confirmar, veremos un mensaje de confirmación en la
          parte superior de la pantalla, y serás redirigido a la página
          principal de tutores.
        </p>
      </section>
    </article>
  );
}
