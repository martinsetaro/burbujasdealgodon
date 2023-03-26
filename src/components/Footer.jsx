import React from 'react'
import style from './styles.module.scss'
import Image from 'next/image'
import facebook from '../../public/img/facebook.png'
import instagram from '../../public/img/instagram.png'
import whatsapp from '../../public/img/whatsapp.png'

export default function Footer() {




  return (

    <div className={style.containerFooter}>
      <h2>Jardin de infantes " Burbujas de algodón"</h2>
      <div className={style.sociales}>
        <Image src={facebook} alt="facebook" width={200} height={200}/>
        <Image src={instagram} alt="instagram" width={200} height={200}/>
        <Image src={whatsapp} alt="whatsapp" width={200} height={200}/>
      </div>
     
    </div>
  )
}
