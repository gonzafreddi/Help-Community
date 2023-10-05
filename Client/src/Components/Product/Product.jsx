import React from 'react';
import { Link } from "react-router-dom";
import style from "./Product.module.css";
// import FilterProducts from '../FilterProducts/FilterProducts';

export const Product = (props) => {
  const { nombre, descripcion, imagen, precio, categoria } = props;

  const capitalizeFirstLetter = (str) => { //para poner la primera letra de la lista de categs en mayuscula
    if (str.length === 0) {
        return str; // Devuelve una cadena vacía si la cadena de entrada es vacía
    }
    const firstLetter = str.charAt(0).toUpperCase(); // Convierte la primera letra en mayúscula
    const restOfString = str.slice(1).toLowerCase(); // Convierte el resto de la cadena en minúscula
    return firstLetter + restOfString; // Devuelve la cadena resultante
    };

  return (
    <div className={style.contenedor}>
      {/* <FilterProducts category={categoria}/> */}
        <div className={style.contenedorImagen}>
          <img className={style.imagen} src={imagen} alt={nombre} />
        </div>
    <p className={style.nombre}>{nombre}</p>
      <p className={style.descripcion}>{descripcion}</p>
      <p className={style.precio}>$ {precio}</p>
      <p className={style.categoria}>{capitalizeFirstLetter(categoria)}</p>
      <Link to={`/detail/${nombre}`} className={style.link}>
      <p className={style.verMas}>Comprar</p>
      </Link>
    </div>
  )
}