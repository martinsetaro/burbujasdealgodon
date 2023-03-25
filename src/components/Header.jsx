import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';
import logo from 'public/img/logoFinal.png';




export default function Header() {



  return (
    <div className={style.containerHeader}>
      <div className={style.logo}>
      <Image src={logo} alt="burbujas de algodon"/>
      </div>
      <nav className={style.navegador}>
        <a href='#'>Inicio</a>
        <a href='#'>Sobre nosotros</a>
        <a href='#'>Contacto</a>
        <a className={style.inscripciones}href='#'>Inscripciones</a>
      </nav>
    </div>
  )
}
