import React from 'react';
import { Link } from "react-router-dom";
import style from "./Product.module.css";
import { addToCart } from '../../redux/actions/action';
import { useDispatch } from "react-redux";


export const Product = (props) => {
  const { nombre, descripcion, imagen, precio, categoria } = props;
  const dispatch = useDispatch()
  

  return (
    <div className={style.contenedor}>
        <div className={style.contenedorImagen}>
          <img className={style.imagen} src={imagen} alt={nombre} />
        </div>
    <p className={style.nombre}>{nombre}</p>
      <p className={style.descripcion}>{descripcion}</p>
      <p className={style.precio}>$ {precio}</p>
      <p className={style.categoria}>{categoria}</p>
      <button onClick={() => dispatch(addToCart(props))}>agg</button>

      <Link to={`/products/detail/${nombre}`} className={style.link}>
      <p className={style.verMas}>Comprar</p>

      </Link>
    </div>
  )
}