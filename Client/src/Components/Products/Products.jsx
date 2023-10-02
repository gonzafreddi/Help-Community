import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/action";
import { Product } from "../Product/Product";
import style from "./Products.module.css"


export const Products = () => {

const dispatch = useDispatch();

const product = useSelector((state) => state.product);

console.log("products: ", product)

useEffect(()=>{
    dispatch(getProduct())
},[dispatch])


    return (
        <div className={style.cardsContainer}>
        {product.map((producto) => (
            <div key={producto.id}>
                <Product
                  key={producto.id}
                  nombre={producto.name}
                  descripcion={producto.description}
                  imagen={producto.image}
                  precio={producto.price}
                  categoria={producto.category}
                />
            </div>
        ))}
      </div>
    )
  }

  export default Products;