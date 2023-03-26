import React, { useState } from 'react';
import style from '../styles/contacto.module.scss';
import Image from 'next/image';
import Layout from '@/components/Layout';
import logo from '../../public/img/logoFinal.png';
import error from '../../public/img/error2.png'
import success from '../../public/img/success.png'
import 'animate.css';


export default function Contacto() {


const [modalError,setModalError] = useState(false);
const [modalSuccess,setModalSuccess] = useState(false);
const [prueba,setPrueba] = useState('')


const handlerEnviar = (e)=>{
e.preventDefault();

if(prueba == ''){

    setModalError(true);
    setTimeout(() => {
        setModalError(false)
    },4000);
}else 
{
    setModalSuccess(true);
    setTimeout(() => {
        setModalSuccess(false)
    },4000);

}

    


}







  return (
    <Layout>
        <div className={style.containerFormulario}>
<h3>¡Gracias por visitarnos! Si tiene alguna pregunta o comentario, no dude en ponerse en contacto con nosotros utilizando el siguiente formulario. Por favor, asegúrese de proporcionar la información necesaria para que podamos responder a su consulta de manera efectiva. Nos comprometemos a responder a su solicitud lo antes posible. ¡Esperamos tener noticias suyas!</h3>
          <div className={style.containerForm}>
            <Image src={logo} alt="logo"/>
            <h2>Formulario de contacto</h2>
            <form className={style.form}>
                <label>Nombre</label>
                <input 
                onChange={(e)=> setPrueba(e.target.value)}
                type="text" placeholder="Ingrese su nombre"/>
                <label>Apellido</label>
                <input type="text" placeholder="Ingrese su nombre"/>
                <label>Telefono</label>
                <input type="text" placeholder="Ingrese su nombre"/>
                <label>Email</label>
                <input type="text" placeholder="Ingrese su nombre"/>
                <label>Consulta</label>
                <textarea rows="4" cols="50"></textarea>
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
