import React, { useState , useEffect } from 'react';
import Layout from '../components/Layout';
import style from '../styles/login.module.scss';



const Registros = () => {


  const [datos,setDatos] = useState([]);
  const [load,setLoad] = useState(true);

  async function getDatos(){
  
   const response = await fetch('http://localhost:3000/api/formulario')
   const respuesta = await response.json();
   setDatos(respuesta); 
  
  }
  
  useEffect(()=>{
  
    getDatos();
    
  },[])
  
  console.log(datos)




  return (
    <Layout>
      <div className={style.containerRegistro}>
       <h2>Registro de formularios</h2>
       {datos.length === 0 ? <h2 className={style.sinRegistro}>No hay registros</h2> : 
       <div className={style.registros}>
          {datos.map( item => {
            return(
              <div className={style.cardRegistro} key={item.nombre}>
                <h3>Nombre: <span>{item.nombre} </span></h3>
                <h3>Apellido: <span>{item.apellido} </span></h3>
                <h3>Telefono: <span>{item.telefono} </span></h3>
                <h3>Email: <span>{item.email} </span></h3>
                <p>Consulta: <span>{item.nota} </span></p>
              </div>
            )
          })}
       </div>}
       <button className={`${style.btn} ${style.out}`}>Log Out</button>
      </div>
    </Layout>
  )
}

export default Registros
