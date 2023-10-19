import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { addToCart } from '../../redux/actions/action';
import { useDispatch } from "react-redux";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


export const Product = (props) => {
  const { name, description, image, price, category } = props;
  const dispatch = useDispatch()
  
 console.log(name)

  const hancleAddtoCart = ()=>{
    const quantityToadd = 1
    dispatch(addToCart(props, quantityToadd))
  }
  // console.log(props, "props log")

  const capitalizeFirstLetter = (str) => { //para poner la primera letra de la lista de categs en mayuscula
    if (str.length === 0) {
        return str; // Devuelve una cadena vacía si la cadena de entrada es vacía
    }
    const firstLetter = str.charAt(0).toUpperCase(); // Convierte la primera letra en mayúscula
    const restOfString = str.slice(1).toLowerCase(); // Convierte el resto de la cadena en minúscula
    return firstLetter + restOfString; // Devuelve la cadena resultante
    };

  return (
    <div className={styles.contenedor}>
        <div className={styles.contenedorImagen}>
          <img className={styles.imagen} src={image} alt={name} />
        </div>
    <p className={styles.nombre}>{name}</p>
      <p className={styles.descripcion}>{description}</p>
      <p className={styles.precio}>$ {price}</p>
      <p className={styles.categoria}>{capitalizeFirstLetter(category)}</p>
      
      
     <div className={styles.btnCont}>
     <button  className={styles.btnCart} onClick={hancleAddtoCart}>Añadir al carrito</button>
      

      <Link to={`/products/detail/${name}`} className={styles.link}>
      <button className={styles.btnBuy}>Comprar</button>

      </Link>
     
     </div>
    </div>
  )
}