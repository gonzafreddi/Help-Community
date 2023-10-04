import { filterByCateg } from '../../redux/actions/action';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './FilterProducts.module.css';

const FilterProducts = ({ categ, selectedCategory, setSelectedCategory }) => {

    const dispatch = useDispatch();

    const [selectedCateg, setSelectedCateg] = useState(""); // Estado local 

    console.log("selectedCateg", selectedCateg)
    
    const handleFilterCateg = (event) => {
        const selectedValue = event.target.value;
        setSelectedCateg(selectedValue);
    
        // Si seleccionas "Todas las categorías," pasamos una cadena vacía como filtro.
        // De lo contrario, pasamos la categoría seleccionada.
        const filterValue = selectedValue === 'Todos' ? '' : selectedValue;
        
        dispatch(filterByCateg(filterValue));
      };
        // console.log("categorias: ", categ)

    return (
        <div className={style.filterBarContainer}>
            <select className={style.filters} value={selectedCateg} onChange={handleFilterCateg}>
                <option className={style.italic} value="" disabled>Filtrar por Categoria</option>
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