import React from 'react';
import { Link } from "react-router-dom";
import style from "./Product.module.css";
import { addToCart } from '../../redux/actions/action';
import { useDispatch } from "react-redux";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { addCartDb, saveCartDb } from '../../utils/localStorage';
import { useAuth } from '../../context/AuthContext';


export const Product = (props) => {
  const { name, description, image, price, category } = props;
  const dispatch = useDispatch()
  const auth = useAuth()
  const email = auth.user.email

  

  const hancleAddtoCart = ()=>{
    const quantityToadd = 1
    saveCartDb(email)
    dispatch(addToCart(props, quantityToadd))
    if(email){
      addCartDb(props, email)
    }
    
    
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
    <div className={style.contenedor}>
        <div className={style.contenedorImagen}>
          <img className={style.imagen} src={image} alt={name} />
        </div>
    <p className={style.nombre}>{name}</p>
      <p className={style.descripcion}>{description}</p>
      <p className={style.precio}>$ {price}</p>
      <p className={style.categoria}>{capitalizeFirstLetter(category)}</p>
      
      
     <div className={style.btnCont}>
     <button  className={style.btnCart} onClick={hancleAddtoCart}>Añadir al carrito</button>
      

      <Link to={`/products/detail/${name}`} className={style.link}>
      <button className={style.btnBuy}>Comprar</button>

      </Link>
     
     </div>
    </div>
  )
}