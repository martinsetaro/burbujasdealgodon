import React, { useState , useEffect } from 'react';
import Layout from '../components/Layout';
import style from '../styles/login.module.scss';
import axios from 'axios';



const Registros = () => {


  const [datos,setDatos] = useState([]);
  const [load,setLoad] = useState(true);

  async function getDatos() {
    try {
      const response = await axios.get('https://ultimoburbujas.vercel.app/formulario');
      const data = response.data;
      console.log(data);
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
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
      </div>
    </Layout>
  )
}

export default Registros
