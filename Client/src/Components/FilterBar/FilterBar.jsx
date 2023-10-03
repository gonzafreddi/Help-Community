import { useDispatch, useSelector } from 'react-redux';
import { filterByState, filterByCategory } from '../../redux/actions/action';
import React, { useEffect, useState } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import style from './FilterBar.module.css';
import axios from "axios";

const FilterBar = ({ campaigns }) => {
    const dispatch = useDispatch();

    const states = useSelector((state) => state.states);
    const category = useSelector((state) => state.category);

    console.log("states:", states);
    console.log("category:", category);
    // console.log("campaignBackup:", campaignBackup);

    const [statesDisponibles, setStatesDisponibles] = useState([]);
    const [selectedState, setSelectedState] = useState(""); // Estado local 
    const [selectedCategory, setSelectedCategory] = useState(""); // Estado local 

    
    useEffect(() => {
        // Realiza una solicitud GET para obtener la lista de provincias desde el servidor
        axios
          .get("http://localhost:3001/state")
          .then((response) => {
            setStatesDisponibles(response.data);
          })
          .catch((error) => {
            console.error("Error al obtener las provincias:", error);
          });
      }, []);

      function handleFilterState(event) {
        setSelectedState(event.target.value);
      }

      function handleFilterCategory(event) {
        setSelectedCategory(event.target.value);
      }

      useEffect(() => {
        // Aquí puedes aplicar los filtros en el estado de Redux
        dispatch(filterByState(selectedState));
        dispatch(filterByCategory(selectedCategory));
      }, [selectedState, selectedCategory]);


    return (
        <div className={style.filterBarContainer}>
            <select className={style.filters} value={selectedState} onChange={handleFilterState}>
                <option className={style.italic} value="" disabled>Filtrar por provincia</option>
                <option className={style.casillero} value="Todos">Todas las provincias</option>
                {statesDisponibles.map((state) => (
                    <option className={style.opciones} key={state.id} value={state.StateId}>
                        {state.name}
                    </option>
                ))}
            </select>
            <select className={style.filters} value={selectedCategory} onChange={handleFilterCategory}>
                <option className={style.italic} value="" disabled>Filtrar por categoría</option>
                <option className={style.casillero} value="Todos">Todas las categorías</option>
                {category.map((categoria) => (
                    <option className={style.opciones} key={categoria.id} value={categoria.CategoryId}>
                        {categoria.name}
            </option>
                ))}
            </select>
        </div>
    );
};

export default FilterBar;