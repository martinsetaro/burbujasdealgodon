import React from "react";
import style from "./galeria.module.scss";
import Image from "next/image";
import logo from "../../public/img/brush.png";
import libro from "../../public/img/libro.png";
import usuario from "../../public/img/usuario.png";
import calendario from "../../public/img/calendario.png";



export default function Servicios() {
  return (
    <div className={style.containerServicios}>
      <div className={style.containerCard}>
        <div className={`${style.tarjeta}`}>
          <Image src={logo} alt="logo" />
          <h2>Educacion especial</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            nemo amet perspiciatis. Maxime molestias tempora laboriosam rem nam,
            vitae quod, dicta obcaecati, doloribus cumque quisquam sed et ut
            similique corrupti.
          </p>
        </div>
        <div className={`${style.tarjeta} ${style.dos}`}>
          <Image src={libro} alt="logo" />
          <h2>Jornada completa</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            nemo amet perspiciatis. Maxime molestias tempora laboriosam rem nam,
            vitae quod, dicta obcaecati, doloribus cumque quisquam sed et ut
            similique corrupti.
          </p>
        </div>
        <div className={`${style.tarjeta} ${style.tres}`}>
          <Image src={usuario} alt="logo" />
          <h2>Maestras calificadas</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            nemo amet perspiciatis. Maxime molestias tempora laboriosam rem nam,
            vitae quod, dicta obcaecati, doloribus cumque quisquam sed et ut
            similique corrupti.
          </p>
        </div>
        <div className={`${style.tarjeta} ${style.cuatro}`}>
          <Image src={calendario} alt="logo" />
          <h2>Eventos</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            nemo amet perspiciatis. Maxime molestias tempora laboriosam rem nam,
            vitae quod, dicta obcaecati, doloribus cumque quisquam sed et ut
            similique corrupti.
          </p>
        </div>
      </div>
    </div>
  );
}
