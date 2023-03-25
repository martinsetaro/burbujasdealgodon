import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image';
import style from '../styles/index.module.scss';
import logo from '../../public/img/header.png';
import bienvenidos from 'public/img/header.png'
import Nosotros from '@/components/Nosotros';
import 'animate.css';
import Galeria from '@/components/Galeria';

export default function Index() {

 
 


  return (
    <Layout>


      <div className={style.containerIndex}>
      <Image className='animate__animated animate__backInDown' src={bienvenidos} alt="img"/>
      
      </div>
      <Nosotros/>
      <Galeria/>
    </Layout>
  )
}
