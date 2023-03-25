import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';
import logo from 'public/img/logogNube.png';
import facebook from 'public/img/facebook.png';
import instagram from 'public/img/instagram.png';
import whatsapp from 'public/img/whatsapp.png';



export default function Header() {



  return (
    <div className={style.containerHeader}>
      <div className={style.logo}>
        <h2>Jardin de infantes</h2>
       
        <Image className={style.sociales} src={facebook} alt="logo"/>
        <Image className={style.sociales} src={instagram} alt="logo"/>
        <Image className={style.sociales} src={whatsapp} alt="logo"/>
      </div>
      <nav className={style.navegador}>
        <a href='#'>Inicio</a>
        <a href='#'>Sobre nosotros</a>
        <a href='#'>Reglas</a>
        <a className={style.inscripciones}href='#'>Inscripciones</a>
      </nav>
    </div>
  )
}
