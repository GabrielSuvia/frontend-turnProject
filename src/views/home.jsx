import React from 'react';
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import styles from './home.module.css';

const Home = ()=>{
    return(<div className={styles.homeContainer}>
     <br/>
     <br/>
    <h1 style={{top:"150px"}}>Bienvenido a tu Banco</h1>

    <div className={styles.imageContainer}>
    <div className={styles.imageTtem}>
    <img src={imagen1} alt="NH" style={{width:"500px" , height:"500px", margin:"70px"}} />
    <p style={{color:"black"}}>Los bancos reciben y tienen en custodia el dinero que las personas y empresas depositan,
       otorgan préstamos usando esos recursos y realizan inversiones entre otras actividades que la ley les autoriza.</p>
    </div>
    </div>

    <div className={styles.imageContainer}>
    <div className={styles.imageTtem}>
    <img src={imagen2} alt="NH" style={{width:"500px" , height:"500px" , margin:"70px"}} />
    <p style={{color:"black"}}>La manera más obvia de reducir las filas es aumentar los puntos de servicio disponibles- por ejemplo,
       abra más cajas al por menor o cajeros bancarios. ¿Pero es el costo efectivo?
       Un sistema de manejo de filas le da la información que necesita a comprobar cuáles medidas reducen las filas y cuáles son las más rentables. 
       El sistema de manejo de filas informa.</p>
    </div>
    </div>
    </div>)
}

export default Home