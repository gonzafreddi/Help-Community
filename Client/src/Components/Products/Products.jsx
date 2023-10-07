import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getCateg } from "../../redux/actions/action";
import { Product } from "../Product/Product";
import style from "./Products.module.css"
import FilterProducts from '../FilterProducts/FilterProducts';


export const Products = () => {

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getProduct());
    dispatch(getCateg())
},[dispatch])


const categ = useSelector(state => state.categ);
// console.log(categ)

const products = useSelector((state) => state.products); //state.productsFiltered ver si cambio para filtros
// console.log("products: ", products)

    return (
      <div>
        <FilterProducts categ={categ}/>
        <div className={style.cardsContainer}>
        {products?.map((producto) => {
        return  <Product
                  key={producto.id}
                  id={producto.id}
                  name={producto.title}
                  description={producto.description}
                  image={producto.images[0]}
                  price={producto.price}
                  category={producto.category}
                />
        })}
      </div>
    </div>
    )
  }

  export default Products;