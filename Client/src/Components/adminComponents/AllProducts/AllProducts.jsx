import style from "./AllProducts.module.css";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/actions/action";
import Pagination from "../../Pagination/Pagination";
import CardProduct from "../CardProduct/CardProduct";

export const AllProducts = () => {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            await dispatch(getProduct());
        }
        fetchProducts();
    }, [dispatch]);
    
    const products = useSelector((state)=>state.products);
    
    // console.log(products);

    // Número de tarjetas por página
    const cardsPerPage = 6;
    const totalItems = products.length;
    // Función para obtener las tarjetas en la página actuaw

    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedData = products.slice(startIndex, endIndex);
    
    
    return (
        <div className={style.container}>
            <div className={style.cards}>
                <h1>Productos</h1>
                <div className={style.cardCont}>
                {products.length > 0 ? (
                    displayedData.map((product) => (
                        <CardProduct
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            stock={product.stock}
                            state={product.state}
                        />
                    ))
                ) : (
                    <h1>No hay productos cargados</h1>
                )}
                
                </div>
                <div className={style.pagination}><Pagination  page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/></div>
            </div>
        
        </div>
    );
}

export default AllProducts
