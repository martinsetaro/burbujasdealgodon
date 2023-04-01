import React from 'react'
import style from './styles.module.scss';
import Image from 'next/image';
import pic1 from '../../public/img/pic1.webp'
import pic2 from '../../public/img/planetas.webp'



export default function Nosotros() {



  return (
    <div className={style.containerNosotros}>
      <h2 id='sobreNosotros'>Nuestro servicio escolar</h2>
     <div className={style.contenedorInfo}>
      <div className={style.left}>
        <Image src={pic1} alt="pic" loading='lazy'/>
      </div>
      <div className={style.right}>
      <p>En nuestro jardín, creemos que la educación y el aprendizaje deben ser divertidos y emocionantes para los niños. Es por eso que hemos creado un ambiente acogedor y lleno de juegos y actividades, para que nuestros pequeños estudiantes puedan aprender jugando y disfrutando al mismo tiempo.

       En nuestro jardín, contamos con un equipo altamente capacitado de maestros y profesionales de la educación infantil, que estarán encantados de guiar y apoyar a sus hijos durante su proceso de aprendizaje..</p>
      </div>
      </div>
      <div className={style.contenedorInfo}>
      <div className={`${style.right}  ${style.rightBlue}`}>
      <p>Además, ofrecemos una variedad de programas educativos para cada edad y nivel de desarrollo, desde actividades motoras y de estimulación temprana para los más pequeños, hasta programas de preescolar más estructurados para preparar a los niños para su futuro académico.

      No solo eso, también contamos con un amplio espacio al aire libre, para que los niños puedan disfrutar del sol y la naturaleza mientras aprenden y juegan.

      ¿Por qué deberías inscribir a tu hijo en nuestro jardín de infantes? Porque aquí, su hijo tendrá la oportunidad de aprender y desarrollarse en un ambiente divertido, seguro y emocionante. ¡No esperes más, únete a nuestra familia educativa hoy!.</p>
      </div>
      <div className={style.left}> 
        <Image src={pic2} alt="pic2"  loading='lazy'/>
      </div>

      
     </div>
    </div>
  )
}
