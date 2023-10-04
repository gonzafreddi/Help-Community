
// import { useDispatch, useSelector } from 'react-redux';
// import { filterByState, filterByCategory } from '../../redux/actions/action';
// import React, { useEffect, useState } from 'react';
// // import SearchBar from '../SearchBar/SearchBar';
// import style from './FilterBar.module.css';
// import axios from "axios";


// const FilterBar = ({ states, category }) => {

//     const [selectedState, setSelectedState] = useState(""); // Estado local 
//     const [selectedCategory, setSelectedCategory] = useState(""); // Estado local 

//     function handleFilterState(e) {
//         const selectedValue = e.target.value;
//         setSelectedState(selectedValue); // Actualiza el estado local
//         // Aplicar el filtro sin importar mayúsculas o minúsculas
//         const filteredState = selectedValue.toLowerCase();
//         dispatch(filterByState(filteredState));
//     }

//     function handleFilterCategory(e) {
//         const selectedValue = e.target.value;
//         setSelectedCategory(selectedValue); // Actualiza el estado local
//          // Normalizar el nombre de la categoría
//         const firstWord = selectedValue.split(" ")[0]; // Obtener la primera palabra
//         const normalizedCategory = category.find(cat => cat.name.toLowerCase().startsWith(firstWord.toLowerCase()));
//         if (normalizedCategory) {
//         dispatch(filterByCategory(normalizedCategory.name));
//         }       
//     }
    


//     return (
//         <div className={style.filterBarContainer}>
//             <select className={style.filters} value={selectedState} onChange={handleFilterState}>
//                 <option className={style.italic} value="" disabled>Filtrar por provincia</option>
//                 <option className={style.casillero} value="Todos">Todas las provincias</option>

//                 {states.map((state) => (
//                     <option className={style.opciones} key={state.id} value={state.name}>

//                         {state.name}
//                     </option>
//                 ))}
//             </select>

//             <select className={style.filters} value={selectedCategory} onChange={handleFilterCategory}>
//                 <option className={style.italic} value="" disabled>Filtrar por categoría</option>
//                 <option className={style.casillero} value="Todos">Todas las categorías</option>

//                 {category.map((category) => (
//                     <option className={style.opciones} key={category.id} value={category.name}>
//                         {category.name}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };

// export default FilterBar;