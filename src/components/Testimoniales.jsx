
import React, { useState, useEffect } from 'react'
import style from '../components/styles.module.scss'
import star from '../../public/img/star.png'
import Image from 'next/image'
import axios from 'axios'
import 'animate.css'


const Testimoniales = () => {

    const [test,setTest] = useState([])
    const [nombre,setNombre] = useState('')
    const [nota,setNota] = useState('')
    const [load,setLoad] = useState(false)

       async function datos(){
       const recibir = await fetch('https://ultimoburbujas.vercel.app/testimonios')
       const data = await recibir.json()
       setTest(data)
       }

       function postear() {
             
        axios.post('https://ultimoburbujas.vercel.app/testimonios', {
          nombre: nombre,
          nota: nota
        })
        .then((response) => {
          setTimeout(() => {
               window.location.reload();
              }, 1000);
        })
        .catch(function (error) {
          console.log(error);
        });

 






      
          // try {
          //   await axios.post("https://ultimoburbujas.vercel.app/testimonios", {
          //     nombre: nombre,
          //     nota: nota
          //   }, {
          //     headers: {
          //       "Content-Type": "application/json",

          //     }
          //   });
      
          //   setTimeout(() => {
          //     window.location.reload();
          //   }, 1000);
          // } catch (error) {
          //   console.error("Error:", error);
          // }
        }
      
   
   
useEffect(()=>{

datos();

   },[])

const handlerEnviar = (e)=>{
e.preventDefault();
if ([nombre, nota].includes('')) {
  alert("hay campos vacios");
} else {

postear();
}

}



  return (
    <div className={style.containerTestimoniales}>
      <h2>Testimoniales</h2>
      {load && <div className={`${style.modalTestimoniales} animate__animated animate__zoomIn`}>
        <form>
            <label>Nombre</label>
            <input 
            onChange={(e)=>{setNombre(e.target.value)}}
            type="text" name='nombre' placeholder="Ingrese su nombre"/>
            <label>Nota</label>
            <textarea 
            name='nota'
            onChange={(e)=>{setNota(e.target.value)}}
            rows={4} cols={10} placeholder="Ingrese una nota"></textarea>
            <button
            onClick={handlerEnviar}
            >Enviar!</button>
        </form>

      </div>}
      <h3
      onClick={()=> { setLoad(true)}}
      >Agregar nota</h3>
      <div className={style.containerCardTestimonios}>
        {test.map( item => {
            return(
                <div className={style.cardTestimonios} key={item.Id}>
                 <Image src={star} alt="star" loading='lazy'/>
                 <h2>{item.nombre}</h2>
                 <p>&quot; {item.nota} &quot;</p>
                </div>
            )
        })}
       
      </div>
      
    </div>
  )
}



export default Testimoniales
