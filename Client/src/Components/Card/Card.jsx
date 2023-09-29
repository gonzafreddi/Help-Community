import React from 'react';
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export const Card = (props) => {
  const { nombreOng, nombre, descripcion, imagen, fechaInicio, fechaFin, objetivo, estado, categoria } = props;

  return (
    <div className={style.contenedor}>
        <div className={style.contenedorImagen}>
          <p className={style.ong}>{nombreOng}</p>
          <img className={style.imagen} src="https://img.freepik.com/foto-gratis/usted-puede-ayudar-dar-concepto-donacion-bienestar_53876-121039.jpg?w=2000" alt={nombre} />
        </div>
      <p className={style.nombre}>{nombre}</p>
      <p className={style.descripcion}>{descripcion}</p>
      <p className={style.recaudado}>Objetivo: </p>
      {/* <p className={style.objetivo}>$8.560 <span className={style.de}>de</span> ${objetivo}</p> */}
      <p className={style.objetivo}>$ {objetivo}</p>
      <p className={style.finalizaDia}>Esta campaña finaliza el día:</p>
      <p className={style.fechas}>{fechaFin}</p>
      <Link to={`/detail/${nombre}`} className={style.link}>
      <p className={style.verMas}>Ver mas</p>
      </Link>
    </div>
  )
}


export default Card;