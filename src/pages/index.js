import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import style from '../styles/index.module.scss';
import Nosotros from '@/components/Nosotros';
import 'animate.css';
import Galeria from '@/components/Galeria';
import Servicios from '@/components/Servicios';

export default function Index() {

 
 


  return (
    <Layout>


      <div className={style.containerIndex}>
      <div className={style.tarjetaPresentacion}>
        <h2>Aprender juntos es</h2>
        <h2> mucho mejor</h2>
      </div>
      
      </div>
      <Servicios/>
      <Nosotros/>
      <Galeria/>
    </Layout>
  )
}
