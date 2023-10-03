import { useDispatch, useSelector } from 'react-redux';
import { filterByState, getCategory, getStates } from '../../redux/actions/action';
import React, { useEffect, useState } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import style from './FilterBar.module.css';

const FilterBar = ({ campaignBackup }) => {
    const dispatch = useDispatch();

    const states = useSelector((state) => state.states);
    const category = useSelector((state) => state.category);

    console.log("states:", states);
    console.log("category:", category);


    const [selectedState, setSelectedState] = useState(""); // Estado local 
    const [selectedCategory, setSelectedCategory] = useState(""); // Estado local 

    function handleFilterState(event) {
        setSelectedState(event.target.value); // Actualiza el estado local
        dispatch(filterByState(event.target.value)); // Despacha la acción para filtrar por state(provincia)
    }

    function handleFilterCategory(event) {
        setSelectedCategory(event.target.value);
        dispatch(filterByCategory(event.target.value));
      }

    useEffect(() => {
          dispatch(getStates());
          dispatch(getCategory());
      }, [dispatch]);
    


    return (
        <div className={style.filterBarContainer}>
            <select className={style.filters} value={selectedState} onChange={handleFilterState}>
                <option className={style.italic} value="" disabled>Filtrar por provincia</option>
                <option className={style.casillero} value="Todos">Todas las provincias</option>
                {states.map((campaña) => (
                    <option className={style.opciones} key={campaña.id} value={campaña.name}>
                        {campaña.name}
                    </option>
                ))}
            </select>
            <select className={style.filters} value={selectedCategory} onChange={handleFilterCategory}>
                <option className={style.italic} value="" disabled>Filtrar por categoría</option>
                <option className={style.casillero} value="Todos">Todas las categorías</option>
                {category.map((categoria) => (
                    <option className={style.opciones} key={categoria.id} value={categoria.name}>
                        {categoria.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterBar;