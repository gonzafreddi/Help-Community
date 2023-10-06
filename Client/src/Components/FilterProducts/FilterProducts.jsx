import { filterByCateg } from '../../redux/actions/action';
import React, { useEffect, useState } from 'react';
import style from './FilterProducts.module.css';
import { useDispatch, useSelector } from 'react-redux';

const FilterProducts = ({ categ, setSelectedCategory }) => {

    const dispatch = useDispatch();



    function handleFilterCateg(e) {
        const selectedValue = e.target.value;
        setSelectedCategory(selectedValue);
        dispatch(filterByCateg(selectedValue))
        }       
    


    return (
        <div className={style.filterBarContainer}>
            <select className={style.filters} onChange={handleFilterCateg}>
                <option className={style.italic} value="" disabled>Filtrar por categoria</option>
                <option className={style.casillero} value="Todos">Todas las categorias</option>
                {categ.map((category) => (
                    <option className={style.opciones} key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>


        </div>
    );
};

export default FilterProducts;