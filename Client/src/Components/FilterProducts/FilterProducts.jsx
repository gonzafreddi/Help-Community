import { filterByCateg, productOrdenPrecio, productsFiltrosPrecio, resetProducts } from '../../redux/actions/action';
import React, { useEffect, useState } from 'react';
import style from './FilterProducts.module.css';
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

    
        // console.log("categorias: ", categ)
    
    const capitalizeFirstLetter = (str) => {            // Para poner la primera letra de la lista de categs en mayuscula
        if (str.length === 0) {
        return str; }                                   // Devuelve una cadena vacía si la cadena de entrada es vacía

    const firstLetter = str.charAt(0).toUpperCase();    // Convierte la primera letra en mayúscula
    const restOfString = str.slice(1).toLowerCase();    // Convierte el resto de la cadena en minúscula
        return firstLetter + restOfString;              // Devuelve la cadena resultante
        };

    return (
        <div className={style.filterBarContainer}>
            <select className={style.filters} value={selectedCateg} onChange={handleFilterCateg}>
                <option className={style.italic} value="" disabled>Filtrar por categoria</option>
                <option className={style.casillero} value="Todos">Todas las categorias</option>
                {categ.map((category) => (
                    <option className={style.opciones} key={category} value={category}>
                        {capitalizeFirstLetter(category)}
                    </option>
                ))}
            </select>
            
            <select className={style.filters}>
            <option className={style.casillero} name="precioMenor" onClick={ordenPrecio}>Menor precio</option>
            <option className={style.casillero} name="precioMayor" onClick={ordenPrecio}>Mayor precio</option>
            </select>

            <select className={style.filters}>         
            <option className={style.casillero} name="menor100" onClick={filtrosPrecio}>Menor a $100</option>
            <option className={style.casillero} name="menor500" onClick={filtrosPrecio}>Menor a $500</option>
            <option className={style.casillero} name="menor1000" onClick={filtrosPrecio}>Menor a $1000</option>
            <option className={style.casillero} name="mayor1000" onClick={filtrosPrecio}>Mayor a $1000</option>
            </select>  
            
            <button className={style.reset} onClick={reset}>RESET FILTERS</button>
        </div>
    );
};

export default FilterProducts;