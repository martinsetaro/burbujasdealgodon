import React , { useState , useEffect } from 'react'
import style from './galeria.module.scss';
import CountUp from 'react-countup';
import 'animate.css';


export default function Counter() {

const [load,setLoad] = useState(false);



useEffect(()=>{

window.addEventListener("scroll",()=>{
if(document.documentElement.scrollTop > 3000){
  setLoad(true)
}

});


},[])



  return (
    <div  className={style.containerCounter}>
      {!load ? null : <div className={`${style.contador} animate__animated animate__fadeInUp`}>
        <div className={style.tarjetaContador}>
        <h2>Horas de estudio</h2>
       <span><CountUp 
      duration={10}
      prefix="+"
      end={20} />
      </span>
      </div>
      <div className={style.tarjetaContador}>
        <h2>Profesionales</h2>
       <span><CountUp 
      duration={10}
      prefix="+"
      end={25} />
      </span>
      </div>
      <div className={style.tarjetaContador}>
        <h2>Niños aprendiendo</h2>
       <span><CountUp 
       className={style.countup}
      duration={10}
      prefix="+"
      end={500} />
      </span>
      </div>
      </div>  }      
    </div>
  )
}
