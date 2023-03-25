import React from 'react'
import style from './styles.module.scss';
import Image from 'next/image';
import pic1 from '../../public/img/pic1.jpg'
import pic2 from '../../public/img/planetas.jpg'




export default function Nosotros() {





  return (
    <div className={style.containerNosotros}>
     <div className={style.contenedorInfo}>
      <div className={style.left}>
        <Image src={pic1} alt="pic1"/>
      </div>
      <div className={style.right}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, id totam. Corporis voluptates veritatis fugiat cupiditate reprehenderit optio atque culpa praesentium sunt at. Aut fugit soluta itaque voluptatum similique! Aperiam.
      Ipsa quisquam error laboriosam ratione voluptatem molestiae perferendis vitae, id adipisci quod quidem distinctio provident asperiores? Aliquid vitae, sint quis nam culpa voluptatibus, voluptas modi, eum quae facere mollitia sit.</p>
      </div>
      </div>
      <div className={style.contenedorInfo}>
      <div className={`${style.right}  ${style.rightBlue}`}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, id totam. Corporis voluptates veritatis fugiat cupiditate reprehenderit optio atque culpa praesentium sunt at. Aut fugit soluta itaque voluptatum similique! Aperiam.
      Ipsa quisquam error laboriosam ratione voluptatem molestiae perferendis vitae, id adipisci quod quidem distinctio provident asperiores? Aliquid vitae, sint quis nam culpa voluptatibus, voluptas modi, eum quae facere mollitia sit.</p>
      </div>
      <div className={style.left}>
        <Image src={pic2} alt="pic2"/>
      </div>

      
     </div>
    </div>
  )
}
