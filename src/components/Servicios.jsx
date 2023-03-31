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
          La educación especial es un enfoque educativo diseñado para satisfacer las necesidades únicas de los estudiantes con discapacidades físicas, mentales o emocionales. Su objetivo es proporcionar una educación adaptada y personalizada que les permita alcanzar su máximo potencial y participar plenamente en la sociedad. La educación especial se centra en brindar apoyo y servicios especializados, como terapia del habla, terapia ocupacional y asesoramiento, para ayudar a los estudiantes a superar cualquier barrera que puedan tener en su aprendizaje.
          </p>
        </div>
        <div className={`${style.tarjeta} ${style.dos}`}>
          <Image src={libro} alt="logo" />
          <h2>Jornada completa</h2>
          <p>
          El término &quot;jornada completa&quot; se refiere a un horario de trabajo o escolar que cubre todo el día, desde la mañana hasta la tarde. Por lo general, implica trabajar o estudiar durante un período de ocho horas o más. Las jornadas completas pueden ser beneficiosas para aquellos que buscan maximizar su tiempo productivo y obtener un salario completo, o para los estudiantes que necesitan cumplir con los requisitos académicos en un período de tiempo más corto. Sin embargo, es importante tener en cuenta que trabajar o estudiar durante largos períodos de tiempo puede ser agotador y afectar la salud y el bienestar de las personas.
          </p>
        </div>
        <div className={`${style.tarjeta} ${style.tres}`}>
          <Image src={usuario} alt="logo" />
          <h2>Maestras calificadas</h2>
          <p>
          Nuestras docentes han obtenido títulos universitarios en educación o en un área específica de conocimiento, además de cumplir con los requisitos de formación y certificación exigidos por las autoridades educativas. La presencia de maestras calificadas en las aulas es esencial para garantizar una educación de calidad y para apoyar el desarrollo integral de los estudiantes. Estas profesionales poseen habilidades pedagógicas avanzadas y están comprometidas con el aprendizaje y el bienestar de sus alumnos, lo que les permite brindar un ambiente de enseñanza y aprendizaje seguro.
          </p>
        </div>
        <div className={`${style.tarjeta} ${style.cuatro}`}>
          <Image src={calendario} alt="logo" />
          <h2>Eventos</h2>
          <p>
          Los eventos son una parte importante de la vida en un jardín de infantes. Estas actividades son oportunidades para que los niños exploren, aprendan y se diviertan en un ambiente social y lúdico. Algunos eventos comunes en los jardines de infantes incluyen excursiones, festivales, ferias, espectáculos y celebraciones de días festivos. Estos eventos pueden ayudar a los niños a desarrollar habilidades sociales y emocionales, a aumentar su confianza y autoestima, y a fomentar su creatividad y curiosidad.
          </p>
        </div>
      </div>
    </div>
  );
}
