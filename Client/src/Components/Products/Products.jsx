import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getCateg } from "../../redux/actions/action";
import { Product } from "../Product/Product";
import style from "./Products.module.css"
import FilterProducts from '../FilterProducts/FilterProducts';
import Pagination from "../Pagination/Pagination";


export const Products = () => {

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getProduct());
    dispatch(getCateg())
},[dispatch])


const categ = useSelector(state => state.categ);
// console.log(categ)


const products = useSelector((state) => state.products);


const [page, setPage] = useState(1);

// Número de tarjetas por página
const cardsPerPage = 20;

const totalItems = products.length;


// Función para obtener las tarjetas en la página actual

  const getCurrentPageCampaigns = () => {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedData = products.slice(startIndex, endIndex);
  return displayedData;

};

// console.log("products: ", products)
// const products = useSelector((state) => state.products); //state.productsFiltered ver si cambio para filtros
// // console.log("products: ", products)




const currentCards = getCurrentPageCampaigns();

    return (
      <div>

        <div className={style.barra}>
        <FilterProducts categ={categ}/>

        <Pagination page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/>
        </div>


        <div className={style.cardsContainer}>
        {currentCards?.map((producto) => {
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