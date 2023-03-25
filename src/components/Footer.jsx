import React from 'react'
import style from './styles.module.scss'
import Image from 'next/image'
import logo from '../../public/img/bienvenidos.png'

export default function Footer() {




  return (

    <div className={style.containerFooter}>
      <h2>Footer</h2>
      <Image src={logo} alt="bienvenidos"/>
    </div>
  )
}
