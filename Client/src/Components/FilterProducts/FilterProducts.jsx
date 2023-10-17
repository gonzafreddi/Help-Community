import { filterByCateg, productOrdenPrecio, productsFiltrosPrecio, resetProducts } from '../../redux/actions/action';
import React, { useEffect, useState } from 'react';
import styles from './FilterProducts.module.css';
import { useDispatch, useSelector } from 'react-redux';

const FilterProducts = ({ categ }) => {

    const dispatch = useDispatch();
    const [selectedCateg, setSelectedCateg] = useState("");


    function handleFilterCateg(e) {
        const selectedValue = e.target.value;
        setSelectedCateg(selectedValue);
        dispatch(filterByCateg(selectedValue))
        }       
    
    const ordenPrecio = (event) => {
        dispatch(productOrdenPrecio(event.target.name))
        }

    const filtrosPrecio = (event) => {
        dispatch(productsFiltrosPrecio(event.target.name))
        }

    const reset = (event) => {
        dispatch(resetProducts(event.target.name))
    }

    
        console.log("categ: ", categ)
    
    const capitalizeFirstLetter = (str) => {            // Para poner la primera letra de la lista de categs en mayuscula
        if (str.length === 0) {
        return str; }                                   // Devuelve una cadena vacía si la cadena de entrada es vacía

    const firstLetter = str.charAt(0).toUpperCase();    // Convierte la primera letra en mayúscula
    const restOfString = str.slice(1).toLowerCase();    // Convierte el resto de la cadena en minúscula
        return firstLetter + restOfString;              // Devuelve la cadena resultante
        };

    return (
        <div className={styles.filterBarContainer}>
            <select className={styles.filters} value={selectedCateg} onChange={handleFilterCateg}>
                <option className={styles.italic} value="" disabled>Filtrar por categoria</option>
                <option className={styles.casillero} value="Todos">Todas las categorias</option>
                {categ.map((category) => (
                <option className={styles.opciones} key={category} value={category}>{capitalizeFirstLetter(category)}</option>
                ))}
            </select>
            <button className={styles.boton} name="menor100" onClick={filtrosPrecio}>Menor a $100</button>
            <button className={styles.boton} name="menor500" onClick={filtrosPrecio}>Menor a $500</button>
            <button className={styles.boton} name="menor1000" onClick={filtrosPrecio}>Menor a $1000</button>
            <button className={styles.boton} name="mayor1000" onClick={filtrosPrecio}>Mayor a $1000</button>
            <button className={styles.boton} name="precioMenor" onClick={ordenPrecio}>Menor precio</button>
            <button className={styles.boton} name="precioMayor" onClick={ordenPrecio}>Mayor precio</button>
            <button className={styles.reset} onClick={reset}>RESET FILTERS</button>
        </div>
    );
};

export default FilterProducts;