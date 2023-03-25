import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';
import logo from 'public/img/logogNube.png';



export default function Header() {



  return (
    <div className={style.containerHeader}>
      <div className={style.logo}>
        <Image src={logo} alt="logo"/>
        <h2>Jardin de infantes</h2>
      </div>
      <nav className={style.navegador}>
        <a href='#'>Inicio</a>
        <a href='#'>Sobre nosotros</a>
        <a href='#'>Reglas</a>
      </nav>
    </div>
  )
}
