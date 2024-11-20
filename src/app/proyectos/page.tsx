import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";
import Image from "next/image";
import {
  HiDocument,
  HiPencil,
  HiTrash,
  HiUser,
  HiUserGroup,
} from "react-icons/hi2";

export default function Estudiantes() {
  return (
    <article>
      <div>
        <CustomTitle text="Proyectos" />
        <p>Este es un módulo dedicado a la gestión y creación de proyectos.</p>
      </div>

      <div>
        <CustomTitle text="Índice" />
        <ol className="list-decimal px-8">
          <li>Crear un proyecto</li>
          <li>Ver información de un proyecto</li>
          <li>Editar o borrar un proyecto</li>
          <li>Añadir estudiantes y tutores</li>
          <li>Subir documentos a un proyecto</li>
          <li>Subir producción a un proyecto</li>
        </ol>
      </div>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Creación de un proyecto" />
        <p>
          Para crear un proyecto es necesario ir a la sección de proyectos y
          después hacer clic en{" "}
          <span className="font-medium">Registrar un proyecto.</span> En este
          momento veremos el siguiente formulario:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/ERTh3EH.png"
          alt="Formulario de creación de proyectos"
          width={600}
          height={600}
        />
        <p>
          Lo siguiente es rellenar todos los campos solicitados, es importante
          prestar especial atención al campo{" "}
          <span className="font-medium">Requisito de Aval</span>, tener este
          campo desactivado significa, que se quiere registrar proyecto que no
          requiere un aval por parte del comité de ética. En este mismo
          formulario si se desea se pueden añadir estudiantes y el tutor para el
          proyecto. Una vez rellenada toda la información se deberá dar click en{" "}
          <span className="font-medium">Registrar proyecto.</span>
        </p>
        <p>
          Una vez creado el proyecto, deberás visualizar en la parte superior de
          tu pantalla un aviso de confirmación con el nombre del proyecto que
          acabas de crear.
        </p>
      </section>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Ver información de un proyecto" />
        <p>
          En la página principal de proyectos, encontrarás una tabla con la
          información de todos los proyectos que se hayan registrado:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/gV5JYni.png"
          alt="Tabla de proyectos"
          width={600}
          height={600}
        />
        <p>
          En esta tabla podrás ver el código, nombre, tipología, categoría,
          etapa y cohorte de los proyectos registrados. Adicionalmente podremos
          ver 4 botones para realizar ciertas acciones:
        </p>
        <p>
          <HiPencil /> Para entrar al detalle del proyecto y poder editar o
          borrar un proyecto; subir documentos o producciones; y añadir o
          retirar estudiantes o docentes.
        </p>
        <p>
          <HiUser /> Para ver el tutor que hace parte del proyecto, es
          importante tener en cuenta que un proyecto sólo puede tener un tutor.
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/VCiZAae.png"
          alt="Tutor de un proyecto"
          width={600}
          height={600}
        />
        <p>
          <HiUserGroup /> Para ver los estudiantes que hacen parte del proyecto.
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/9TnA8yq.png"
          alt="Estudiantes de un proyecto"
          width={600}
          height={600}
        />
        <p>
          <HiDocument /> Para ver los documentos que se han subido al proyecto
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/ds3hi9Z.png"
          alt="Documentos de un proyecto"
          width={600}
          height={600}
        />
      </section>
      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Editar o borrar un proyecto" />
        <p>
          Al entrar al detalle de un proyecto veremos la siguiente pantalla:
        </p>
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/stozUgI.png"
          alt="Detalle del proyecto"
          width={600}
          height={600}
        />
        <p>
          Aquí podremos visualizar y editar la información del proyecto
          seleccionado. Para editar información se modifican los campos que
          requieran cambiar y una vez cambiada la información necesaria, se dará
          click en <span className="font-medium">Editar información </span>
          observaremos en la parte superior un aviso de confirmación al editar
          el proyecto, y veremos la información nueva reflejada en el detalle
          del proyecto.
        </p>

        <CustomSubtitle text="Borrar un estudiante" />
        <p>
          Al hacer clic en el ícono <HiTrash />
        </p>
        <p>
          veremos un aviso preguntando si realmente deseas borrar el proyecto.
          Es muy importante tener cuidado, ya que al borrar un proyecto, toda su
          información se eliminará del sistema. Sólo se debe usar esta
          funcionalidad cuando se desee eliminar permanentemente la información
          de un proyecto.
        </p>
        <p>
          Al hacer clic en Confirmar, veremos un mensaje de confirmación en la
          parte superior de la pantalla, y serás redirigido a la página
          principal de proyectos.
        </p>
      </section>
      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Añadir estudiantes y tutores" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/TXLcsgFOLMg?si=ZIsvpayrpndRTTQ0"
          title="Añadir estudiantes a un proyecto | Tutorial"
          allowFullScreen
        ></iframe>
      </section>
    </article>
  );
}
