import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getCateg } from "../../redux/actions/action";
import { Product } from "../Product/Product";
// import products from "../../../../Api/dataApi/products";
// import prodCategory from "../../../../Api/dataApi/productCategory";
import style from "./Products.module.css";
import FilterProducts from '../FilterProducts/FilterProducts';




export const Products = () => {



const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getProduct());
    dispatch(getCateg())
},[dispatch])


const categ = useSelector(state => state.categ);

const products = useSelector((state) => state.product);
console.log("products: ", products)

    return (
        <div className={style.cardsContainer}>
        {/* <FilterProducts categ={categ}/> */}
        {products?.map((producto) => (
            <div key={producto.id}>
                <Product
                  key={producto.id}
                  nombre={producto.title}
                  descripcion={producto.description}
                  imagen={producto.images[0]}
                  precio={producto.price}
                  categoria={producto.category}
                  
                />
            </div>
        ))}
        </div>
    )
  }

  export default Products;