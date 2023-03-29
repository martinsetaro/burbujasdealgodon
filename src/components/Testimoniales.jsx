
import React, { useState, useEffect } from 'react'
import style from '../components/styles.module.scss'
import star from '../../public/img/star.png'
import Image from 'next/image'
import 'animate.css'


const Testimoniales = () => {

    const [test,setTest] = useState([])
    const [nombre,setNombre] = useState('')
    const [nota,setNota] = useState('')
    const [load,setLoad] = useState(false)

       async function datos(){
       const recibir = await fetch('http://localhost:3000/api/testimonios')
       const data = await recibir.json()
       setTest(data)
       }

        async function postear (){

            if([nombre,nota].includes('')){
                alert("hay campos vacios")
            }else{


        await fetch("/api/testimonios", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
         body:JSON.stringify({
              
              "nombre": nombre,
              "nota": nota 
            })
        })
        .then(data => {
         setTimeout(() => {
            window.location.reload();
         }, 2000);
         })
        .catch(error => {
         console.error("Error:", error);
         });

          }
         
        }
   
   
useEffect(()=>{

datos();

   },[])

const handlerEnviar = (e)=>{
e.preventDefault();

postear();

}



  return (
    <div className={style.containerTestimoniales}>
      <h2>Testimoniales</h2>
      {!load ? null : <div className={`${style.modalTestimoniales} animate__animated animate__zoomIn`}>
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
                <div className={style.cardTestimonios} key={item.nombre}>
                 <Image src={star} alt="star"/>
                 <h2>{item.nombre}</h2>
                 <p>" {item.nota} "</p>
                </div>
            )
        })}
       
      </div>
      
    </div>
  )
}



export default Testimoniales
