import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";

export default function Reportes() {
  return (
    <article className="flex flex-col gap-4">
      <div>
        <CustomTitle text="Reportes" />
        <p>Este es un módulo dedicado a los reportes de Óptima</p>
        <span className="text-red-500 font-bold">NOTA 1:</span>
        <p>
          Antes de empezar con esta sección, se mostrará el proceso paso a paso
          de como instalar y configurar la puerta de enlace. Es de suma
          importancia asegurarse de que exista una puerta de enlace debidamente
          configurada, para así asegurar que los reportes muestren información
          actualizada.
        </p>
        <span className="text-red-500 font-bold">NOTA 2:</span>
        <p>
          En la reunión de entrega se instaló y configuró la puerta de enlace en
          el PC designado, no obstante, si en el futuro se requiere cambiar el
          equipo en el cual opera la puerta de enlace será necesario seguir los
          pasos de esta sección.
        </p>
      </div>

      <section className="flex flex-col gap-1">
        <CustomSubtitle text="Instalación de la puerta de enlace" />
        A continuación se describen los pasos para instalar y configurar la
        puerta de enlace en un equipo local.
        <CustomSubtitle text="¿Qué es una puerta de enlace?" />
        <p>
          La puerta de enlace actua como un puente de datos entre PowerBI
          Service y un origen de datos, para el caso de Optima, el origen de
          datos se encuentra en servidores de MongoAtlas.
        </p>
        <CustomSubtitle text="¿Por qué es importante?" />
        <p>
          Este puente de datos, es el que permite que PowerBI Service pueda
          actualizar la información con la que se construyen los reportes. Sin
          una puerta de enlace, los reportes de Optima no podrán ser
          actualizados y como resultado se mostrarían reportes antiguos.
        </p>
        <CustomSubtitle text="Instalación y configuración del controlador ODBC" />
        <p>
          Para el siguiente tutorial será necesario descargar el controlador
          ODBC de Atlas SQL.
        </p>
        <a
          href={"https://www.mongodb.com/try/download/odbc-driver"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Atlas SQL ODBC Driver
        </a>
        <p>
          También tendremos que haber iniciado sesión en MongoAtlas con el
          correo de Optima.
        </p>
        <a
          href={"https://account.mongodb.com/account/login"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Mongo Atlas Log in
        </a>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/jGjA1_-2Q80?si=l-aXvUBc-V1D6Qtt"
          title="Instalación ODBC Mongo Atlas | Tutorial"
          allowFullScreen
        ></iframe>
        <CustomSubtitle text="Instalación y configuración de la Puerta de Enlace" />
        <p>
          Para el siguiente tutorial será necesario descargar el instalador de
          la puerta de enlace de PowerBI:
        </p>
        <a
          href={
            "https://learn.microsoft.com/es-es/power-bi/connect-data/service-gateway-personal-mode"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Puerta de enlace PowerBI
        </a>
        <span className="text-red-500 font-bold">NOTA:</span>
        <p>
          Al momento de iniciar sesión en la instalación de la puerta de enlace
          es indispensable contar con una cuenta institucional que esté
          registrada en PowerBI Service.
        </p>
        <iframe
          height={600}
          src="https://www.youtube.com/embed/-0I7NYKleno?si=WRJj5CWyuTvebquW"
          title="Instalación Puerta de Enlace | Tutorial"
          allowFullScreen
        ></iframe>
        <CustomSubtitle text="Subir tablero a PowerBI Service y usar la puerta de enlace" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/s1TikHQX-GE?si=ob8Z4M3zv4ZasZ_u"
          title="Agregar puerta de enlace | Tutorial"
          allowFullScreen
        ></iframe>
        <CustomSubtitle text="Reportes dentro de Optima" />
        <iframe
          height={600}
          src="https://www.youtube.com/embed/Xps8T5OlJKg?si=e1GbsQALH2IU9Oop"
          title="Reportes Optima | Tutorial"
          allowFullScreen
        ></iframe>
      </section>
    </article>
  );
}
