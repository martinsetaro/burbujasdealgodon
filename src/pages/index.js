import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image';
import style from '../styles/index.module.scss';
import logo from '../../public/img/header.png';
import bienvenidos from 'public/img/bienvenidos.png'
import Nosotros from '@/components/Nosotros';
import 'animate.css';

export default function Index() {

 
 


  return (
    <Layout>


      <div className={style.containerIndex}>
      <Image className={`${style.bienvenidos} animate__animated animate__lightSpeedInLeft`} src={bienvenidos} alt="burbujas"/>
      <Image className='animate__animated animate__lightSpeedInLeft ' src={logo} alt="burbujas" title="burbujas"/>
      </div>
      <Nosotros/>
    </Layout>
  )
}
