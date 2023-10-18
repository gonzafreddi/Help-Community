import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getCateg } from "../../redux/actions/action";
import { Product } from "../Product/Product";
import style from "./Products.module.css"
// import FilterProducts from '../FilterProducts/FilterProducts';
import Pagination from "../Pagination/Pagination";
import { saveCartDb } from "../../utils/localStorage";
import { useAuth } from "../../context/AuthContext";

export const Products = () => {

const dispatch = useDispatch();
const auth = useAuth()
const cart = useSelector((state)=>{state.cartShop})
const {email} = auth.user
useEffect(()=>{
    dispatch(getProduct());
    
    dispatch(getCateg())
},[email, cart])



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
        {/* <FilterProducts categ={categ}/> */}

        
        </div>


        <div className={style.cardsContainer}>
        {currentCards?.map((producto) => {
        return  <Product
                  key={producto.id}
                  id={producto.id}
                  name={producto.name}
                  description={producto.description}
                  image={producto?.image}
                  price={producto.price}
                  category={producto.category}
                />
        })}
         
      </div>
      <div className={style.paginationCont}><Pagination className={style.pagin} page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/></div>
    </div>
    )
  }

  export default Products;