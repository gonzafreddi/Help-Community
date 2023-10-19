
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getProduct, getCateg } from "../../redux/actions/action";
  import { Product } from "../Product/Product";
  import styles from "./Products.module.css";
  import FilterProducts from '../FilterProducts/FilterProducts';
  import PaginationProducts from "../Pagination/PaginationProducts";
  import Kv from "../../assets/Compra-dona-4.png";
  
  export const Products = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({}); // Mantener los filtros como estado
    const [input, setInput] = useState(1); 
  
    useEffect(() => {
      dispatch(getProduct());
      dispatch(getCateg());
    }, [dispatch]);
  
    const categ = useSelector(state => state.categ);
    const products = useSelector(state => state.products);
  
 

  const cardsPerPage = 20;

  const totalItems = products.length;

  //Aplicar borrado logico
  const activeProducts = products.filter(product => product.state === true);
  
  // Función para obtener las tarjetas en la página actual

  const getCurrentPageCampaigns = () => {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedData = activeProducts.slice(startIndex, endIndex);
    return displayedData;

  };
  const currentCards = getCurrentPageCampaigns();
  
    // Función para aplicar los filtros y actualizar la página a 1
    const applyFilters = (newFilters) => {
      setFilters(newFilters);
      setPage(1); // Reiniciar la página a 1
      setInput(1); // Reiniciar el input a 1
    };
  
 
    return (
      <div>

        <div>
          <img className={styles.KeyVisual} src={Kv} alt="image-donaciones" width="100%" />
        </div>

        <div className={styles.barra}>
        <FilterProducts categ={categ} products={products} applyFilters={applyFilters}/>

        
        </div>


        <div className={styles.cardsContainer}>
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
        <div className={styles.paginationCont}><PaginationProducts className={styles.pagin} page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems} input={input} setInput={setInput}/></div>
      </div>
    )

}

  export default Products;

