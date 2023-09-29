import { useDispatch, useSelector } from 'react-redux';
import { getCampaigns } from '../../redux/actions';
import React, { useState } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import style from './filterBar.module.css';

const FilterBar = () => {
    const dispatch = useDispatch();

    // const [selectedTeam, setSelectedTeam] = useState(""); // Estado local para el equipo seleccionado



    // function handleFilterTeam(e) {
    //     const selectedValue = e.target.value;
    //     setSelectedTeam(selectedValue); // Actualiza el estado local
    //     dispatch(filterByTeam(selectedValue)); // Despacha la acción para filtrar por equipo
    // }



    return (
        <div className="filterBar-Container">
            <select className="filter-teams" value={selectedTeam} onChange={handleFilterTeam}>
                <option className="italic" value="" disabled>Filter by team</option>
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
