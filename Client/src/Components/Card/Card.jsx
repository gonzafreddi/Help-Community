import React from 'react';
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export const Card = () => {
  return (
    <div className={style.contenedor}>
        <div className={style.contenedorImagen}>
          <p className={style.ong}>NOMBRE DE LA ONG</p>
          <img className={style.imagen} src="https://images.pexels.com/photos/5340266/pexels-photo-5340266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen" />
        </div>
      <p className={style.nombre}>Juntos por Caminar</p>
      <p className={style.descripcion}>Con tu ayuda, brindaremos sonrisas a través de la entrega de alimentos nutritivos y útiles escolares esenciales.</p>
      <p className={style.recaudado}>Recaudado:</p>
      <p className={style.objetivo}>$8.560 <span className={style.de}>de</span> $25.000</p>
      <p className={style.finalizaDia}>Esta campaña finaliza el día:</p>
      <p className={style.fechas}>24/02/2024</p>
      <Link className={style.link}>
      <p className={style.verMas}>Ver mas</p>
      </Link>
    </div>
  )
}
