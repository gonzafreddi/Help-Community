import { useDispatch, useSelector } from 'react-redux';
import { filterByState } from '../../redux/actions/action';
import React, { useState } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import style from './FilterBar.module.css';

const FilterBar = ({ campaigns }) => {
    const dispatch = useDispatch();

    const [selectedState, setSelectedState] = useState(""); // Estado local 
    const [selectedCategory, setSelectedCategory] = useState(""); // Estado local 

    function handleFilterState(e) {
        const selectedValue = e.target.value;
        setSelectedState(selectedValue); // Actualiza el estado local
        dispatch(filterByState(selectedValue)); // Despacha la acción para filtrar por equipo
    }



    return (
        <div className={style.filterBarContainer}>
            <select className={style.filterState} value={selectedState} onChange={handleFilterState}>
                <option className={style.italic} value="" disabled>Filtros por provincia</option>
                <option value="Todos">Todas las provincias</option>
                {campaigns.map((campaña) => (
                    <option key={campaña.id} value={campaña.state}>
                        {campaña.state}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default FilterBar;
