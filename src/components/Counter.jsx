import React , { useState , useEffect } from 'react'
import style from './galeria.module.scss';


export default function Counter() {

const [contador,setContador] = useState(0);




useEffect(() => {
    const handleClick = () => {
     
      if(document.documentElement.scrollTop === 3000){
        const intervalo = setInterval(() => {
          setContador(c => c + 1);
        }, 10);
       
      }; // Mostramos la posición de desplazamiento vertical del usuario
    };

    document.addEventListener('scroll', handleClick);

    return () => document.removeEventListener('scroll', handleClick);
  }, [contador]);

function contar(){
    if(contador <= 4000){
      setTimeout(()=>{
        setContador(contador + 1)
      },2)
      
    }
}



  return (
    <div className={style.containerCounter}>
       <h2>Contador prueba</h2>
       <p>{contador}</p>
    </div>
  )
}
