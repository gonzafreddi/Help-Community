import { useDispatch, useSelector } from 'react-redux';
import { getCampaigns } from '../../redux/actions';
import React, { useState } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import style from './filterBar.module.css';

const FilterBar = () => {
    const dispatch = useDispatch();

    const [selectedState, setSelectedState] = useState(""); // Estado local 
    const [selectedCategory, setSelectedCategory] = useState(""); // Estado local 

    // function handleFilterState(e) {
    //     const selectedValue = e.target.value;
    //     setSelectedState(selectedValue); // Actualiza el estado local
    //     dispatch(filterByState(selectedValue)); // Despacha la acción para filtrar por equipo
    // }



    return (
        <div className={filterBarContainer}>
            <select className={filterProvince} value={selectedState} onChange={handleFilterState}>
                <option className={italic} value="" disabled>Filter by team</option>
                <option value="Todos">All Teams</option>
                {sortedTeams.map((team) => (
                    <option key={team.id} value={team.name}>
                        {team.name}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default FilterBar;
