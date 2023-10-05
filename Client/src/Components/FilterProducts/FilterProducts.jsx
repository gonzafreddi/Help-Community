import { filterByCateg, productOrdenPrecio } from '../../redux/actions/action';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './FilterProducts.module.css';

const FilterProducts = ({ categ }) => {

    const dispatch = useDispatch();

    const [selectedCateg, setSelectedCateg] = useState(""); // Estado local 

    // console.log("selectedCateg", selectedCateg)
    
    const handleFilterCateg = (event) => {
        const selectedValue = event.target.value;
        setSelectedCateg(selectedValue);
    
        // Si seleccionas "Todas las categorías," pasamos una cadena vacía como filtro.
        // De lo contrario, pasamos la categoría seleccionada.
        const filterValue = selectedValue === 'Todos' ? '' : selectedValue;
        
        dispatch(filterByCateg(filterValue));
      };
      

    const ordenPrecio = (event) => {
        dispatch(productOrdenPrecio(event.target.name))
}
        // console.log("categorias: ", categ)

    const capitalizeFirstLetter = (str) => { //para poner la primera letra de la lista de categs en mayuscula
        if (str.length === 0) {
            return str; // Devuelve una cadena vacía si la cadena de entrada es vacía
        }
        const firstLetter = str.charAt(0).toUpperCase(); // Convierte la primera letra en mayúscula
        const restOfString = str.slice(1).toLowerCase(); // Convierte el resto de la cadena en minúscula
        return firstLetter + restOfString; // Devuelve la cadena resultante
        };

    return (
        <div className={style.filterBarContainer}>
            <select className={style.filters} value={selectedCateg} onChange={handleFilterCateg}>
                <option className={style.italic} value="Todos" disabled>Filtrar por Categoria</option>
                <option className={style.casillero} value="">Todas las categorias</option>
                {categ.map((category) => (
                    <option className={style.opciones} key={category} value={category}>
                        {capitalizeFirstLetter(category)}
                    </option>
                ))}
            </select>
            <button className={style.boton} name="precioMenor" onClick={ordenPrecio}>Menor precio</button>
            <button className={style.boton} name="precioMayor" onClick={ordenPrecio}>Mayor precio</button>

        </div>
    );
};

export default FilterProducts;