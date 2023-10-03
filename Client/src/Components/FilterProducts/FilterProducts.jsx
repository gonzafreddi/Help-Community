import { filterByCateg } from '../../redux/actions/action';
import React, { useEffect, useState } from 'react';
import style from './FilterProducts.module.css';

const FilterProducts = ({ categ }) => {

    const [selectedCateg, setSelectedCateg] = useState(""); // Estado local 


    function handleFilterCateg(e) {
        const selectedValue = e.target.value;
        setSelectedCateg(selectedValue);
        dispatch(filterByCateg(selectedValue))
        }       
    


    return (
        <div className={style.filterBarContainer}>
            <select className={style.filters} value={selectedCateg} onChange={handleFilterCateg}>
                <option className={style.italic} value="" disabled>Filtrar por provincia</option>
                <option className={style.casillero} value="Todos">Todas las provincias</option>
                {categ.map((category) => (
                    <option className={style.opciones}  value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>


        </div>
    );
};

export default FilterProducts;