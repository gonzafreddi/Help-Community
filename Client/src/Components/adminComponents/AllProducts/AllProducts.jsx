import style from "./AllProducts.module.css";
import { useState } from 'react';
import { useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import CardProduct from "../CardProduct/CardProduct";
import UsersSB from "../../SearchBar/UsersSB";

export const AllProducts = () => {

    const [page, setPage] = useState(1);
    
    const products = useSelector((state)=>state.products);
    
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        setSearchInput(event.target.value)
    }

    const filterProducts = (searchInput) => {
        if (!searchInput) {
          // Si el input está vacío, mostramos todos los usuarios
          return products;
        }
    
        // Filtramos los usuarios basados en el searchInput
        const filteredUsers = products.filter(product => {
          const { id, name } = product;
          const lowerCaseInput = searchInput.toLowerCase();
    
          // Comprobamos si el id, nombre o email contiene el input de búsqueda
          return id.includes(lowerCaseInput) || name.toLowerCase().includes(lowerCaseInput);
        });
    
        return filteredUsers;
      };

    // Número de tarjetas por página
    const cardsPerPage = 6;
    const totalItems = products.length;

    // Función para obtener las tarjetas en la página actuaw
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedData = filterProducts(searchInput).slice(startIndex, endIndex);
    
    
    return (
        <div className={style.allProdscontainer}>
            <div className={style.productsCards}>
                <h1>Productos</h1>
                <UsersSB handleInputChange={handleInputChange} placeholder={"Busca productos por nombre o por id"}/>
                <div className={style.prodCardCont}>
                {products.length > 0 ? (
                    displayedData.map((product) => (
                        <CardProduct
                            key={product.name}
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
