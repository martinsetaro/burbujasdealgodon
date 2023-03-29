import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';




export default function Header() {



  return (
    <div className={style.containerHeader}>
      <div className={style.logo}>
      <Image src={logo} alt="burbujas de algodon"/>
      </div>
      <nav className={style.navegador}>
      <Link href="/">Inicio</Link>
        <Link href="/Contacto">Sobre Nosotros</Link>
        <Link href="/Contacto">Contacto</Link>
        <Link href='/Login' className={style.inscripciones}>Registros</Link>
      </nav>
    </div>
  )
}
