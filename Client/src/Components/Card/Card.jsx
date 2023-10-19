import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = (props) => {
  const { nombreOng, nombre, descripcion, imagen, fechaInicio, fechaFin, objetivo, provincia, categoria } = props;

  return (
    <div className={styles.contenedor}>
      {/* <button>agg</button> */}
        <div className={styles.contenedorImagen}>
          <p className={styles.ong}>{nombreOng.toUpperCase()}</p>
          <img className={styles.imagen} src="https://img.freepik.com/foto-gratis/usted-puede-ayudar-dar-concepto-donacion-bienestar_53876-121039.jpg?w=2000" alt={nombre} />
        </div>
      <p className={styles.nombre}>{nombre}</p>
      <p className={styles.descripcion}>{descripcion}.</p>
      <p className={styles.provincia}>{provincia.toUpperCase()}</p>
      <p className={styles.categoria}>{categoria.toUpperCase()}</p>
      <p className={styles.recaudado}>Objetivo: </p>
      {/* <p className={style.objetivo}>$8.560 <span className={style.de}>de</span> ${objetivo}</p> */}
      <p className={styles.objetivo}>$ {objetivo}</p>
      <p className={styles.finalizaDia}>Esta campaña finaliza el día:</p>
      <p className={styles.fechas}>{fechaFin}</p>
      <Link to={`/detail/${nombre}`} className={styles.link}>
      <p className={styles.verMas}>Ver mas</p>
      </Link>
     
    </div>
  )
}


export default Card;