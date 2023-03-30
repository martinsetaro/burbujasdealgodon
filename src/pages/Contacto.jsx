import React, { useEffect, useState , useRef } from 'react';
import style from '../styles/contacto.module.scss';
import Image from 'next/image';
import Layout from '@/components/Layout';
import logo from '../../public/img/logofinal.png';
import error from '../../public/img/error2.png'
import success from '../../public/img/success.png'
import 'animate.css';
import emailjs from '@emailjs/browser';






export default function Contacto() {


const [modalError,setModalError] = useState(false);
const [modalSuccess,setModalSuccess] = useState(false);
const [nombre,setNombre] = useState('')
const [apellido,setApellido] = useState('')
const [telefono,setTelefono] = useState('')
const [email,setEmail] = useState('')
const [consulta,setConsulta] = useState('')
const form = useRef(); 
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



// hacer el POST del formulario

async function enviarForm(){

    const url = 'https://dbburbujas-production.up.railway.app/formulario';
    await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
         body:JSON.stringify({
              
              "nombre": nombre,
              "apellido": apellido,
              "telefono":telefono,
              "email":email,
              "nota":consulta
            })
        })
        .then(data => {
            setModalSuccess(true)
            sendCorreo();
            setTimeout(() => {
                window.location.reload();
            }, 3000);
         })
        .catch(error => {
         console.error("Error:", error);
         });

          }

// enviar correo electronico
const sendCorreo = () => {
    emailjs.sendForm('service_phazy5k', 'template_v2w2uv7', form.current, 'PdiULx1w49pbi0vUP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}





const handlerEnviar = (e)=>{
e.preventDefault();

if(!regex.test(email)){
    setModalError(true)
    setTimeout(() => {
        setModalError(false)
    }, 2000);
}else if([nombre,apellido,telefono,email,consulta].includes('')){
    setModalError(true)
    setTimeout(() => {
        setModalError(false)
    }, 2000);
}else 
{
    enviarForm();
   
    
}


}


  return (
    <Layout>
        <div className={style.containerFormulario}>
<h3>¡Gracias por visitarnos! Si tiene alguna pregunta o comentario, no dude en ponerse en contacto con nosotros utilizando el siguiente formulario. Por favor, asegúrese de proporcionar la información necesaria para que podamos responder a su consulta de manera efectiva. Nos comprometemos a responder a su solicitud lo antes posible. ¡Esperamos tener noticias suyas!</h3>
          <div className={style.containerForm}>
            <Image src={logo} alt="logo"/>
            <h2>Formulario de contacto</h2>
            <form className={style.form} ref={form} >
                <label>Nombre</label>
                <input 
                onChange={(e)=> setNombre(e.target.value)}
                type="text" placeholder="Ingrese su nombre" name='nombre'/>
                <label>Apellido</label>
                <input 
                onChange={(e)=> setApellido(e.target.value)}
                type="text" placeholder="Ingrese su nombre" name='apellido'/>
                <label>Telefono</label>
                <input
                onChange={(e)=> setTelefono(e.target.value)} 
                type="text" placeholder="Ingrese su nombre" name='telefono'/>
                <label>Email</label>
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                type="text" placeholder="Ingrese su nombre" name='email'/>
                <label>Consulta</label>
                <textarea
                onChange={(e)=> setConsulta(e.target.value)}
                rows="4" cols="50" name='consulta'></textarea>
                <button
                onClick={handlerEnviar}
                className={style.btn}
                >Enviar!</button>
            </form>

          </div>

        </div>
        {modalError ? <div className={`${style.modal} animate__animated animate__fadeInDown`}>
            <Image src={error} alt="error"/>
            <h2>Ooopss!</h2>
            <h2>Intentalo de nuevo!</h2>
            <h2>Algun dato es incorrecto.</h2>
        </div> : null}
        {modalSuccess ? <div className={`${style.modal} animate__animated animate__fadeInDown`}>
            <Image src={success} alt="error"/>
            <h2>Muy Bien!</h2>
            <h2>Ya recibimos tu mensaje!</h2>
            <h2>Pronto nos comunicaremos contigo.</h2>
        </div> : null}




    </Layout>
  )

  }