import React , { useState} from 'react'
import Layout from '../components/Layout'
import style from '../styles/login.module.scss';
import styles from '../styles/contacto.module.scss';
import Link from 'next/link';
import error from '../../public/img/error2.png'
import success from '../../public/img/success.png'
import Image from 'next/image';
import 'animate.css'






const Login = () => {

const [user,setUser] = useState('');
const [pass,setPass] = useState('');
const [modalError,setModalError] = useState(false);
const [modalSuccess,setModalSuccess] = useState(false);



const handlerEnviar = (e)=> {
  e.preventDefault();

if(user.toUpperCase() === "BURBUJAS" && pass.toUpperCase() === "USER"){
     setModalSuccess(true);
     setTimeout(() => {
      window.location.href="/Registros";
     }, 3000);
     
}else{
  setModalError(true)
  setTimeout(() => {
     setModalError(false)
  }, 2000);
 
}
}

  return (
    <Layout>
      <div className={style.containerLogin}>
          <h2>Intranet</h2>
          <h5>Usuario: burbujas</h5>
          <h5>Password: user</h5>
          <form>
            <label>Usuario</label>
            <input 
            onChange={(e)=>{setUser(e.target.value)}}
            type='text' placeholder='Ingrese usuario'/>
            <label>Contraseña</label>
            <input 
            onChange={(e)=>{setPass(e.target.value)}}
            type='password' placeholder='Ingrese usuario'/>
            <Link href="/Registros"><button onClick={handlerEnviar} className={style.btn}>ingresar</button></Link> 
          </form>
      </div>
      
      {modalError ? <div className={`${styles.modal} animate__animated animate__fadeInDown`}>
            <Image src={error} alt="error"/>
            <h2>Ooopss!</h2>
            <h2>Intentalo de nuevo!</h2>
            <h2>Algun dato es incorrecto.</h2>
        </div> : null}
        {modalSuccess ? <div className={`${styles.modal} animate__animated animate__fadeInDown`}>
            <Image src={success} alt="error"/>
            <h2>Logueado correctamente!</h2>
           
        </div> : null}

      
    </Layout>
  )
}

export default Login
