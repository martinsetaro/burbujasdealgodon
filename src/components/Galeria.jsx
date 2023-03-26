import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from '../dbImages'
import style from '../components/galeria.module.scss';
import Image from 'next/image';



export default function Galeria() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    
      };
  return (
    <div className={style.containerSlider}>
      <h2>Recorramos el camino juntos...!</h2>
    <Slider className={style.sliderImg} {...settings}>
      {images.map((image) => (
        <div className={style.card} key={image.id}>
          <Image className={style.cardImg} src={image.src} alt="img" width={400} height={400}/>
        </div>
      ))}
    </Slider>
    </div>
  )
}
