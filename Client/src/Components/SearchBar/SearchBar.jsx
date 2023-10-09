import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProduct } from "../../redux/actions/action";
import { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct());
    },[dispatch])

    const products = useSelector((state) => state.products);

    //TODO --- Manejo de busqueda

    const navigate = useNavigate();

    const [selectedProduct, setSelectedProduct] = useState('');
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)

    const onSearch = (product) => {
    
        setSelectedProduct(product.title);
        console.log(selectedProduct);
        navigate(`products/detail/${product.title}`);
    
    }

    const handleInputChange = (event) => {
        
        const value = event.target.value;
        setSearchText(value.toUpperCase());
        setShowSuggestions(value !== '');

        if(searchText === '') {
            setShowSuggestions(false);
        }

        const filtered = products.filter((product) => 
            product.title.toUpperCase().includes(value.toUpperCase())
        );

        setSuggestions(filtered.slice(0, 10));

    };

    const handleSuggestionClick = (product) => {
        onSearch(product);
        setSearchText('');
        setSuggestions([]);
        setShowSuggestions(false);

    }

    const handleEnterPress = (event) => {

        if(event.key  === 'Enter') {

            if (suggestions.length > 0) {
                handleSuggestionClick(suggestions[0]);
            }

        }

    }

    const handleSearchButton = () => {

        if (suggestions.length > 0) {
            handleSuggestionClick(suggestions[0]);
        }

    }

    return(

        <div className='SearchBar'>

            <div className='containerSB'>

                
                <div className='input-container'>
                    <input 
                        className='searchInput'
                        type='search'
                        value={searchText}
                        onChange={handleInputChange}
                        onKeyPress={handleEnterPress}
                        placeholder='Busca un producto'
                    />

                    <button className='search-button' onClick={handleSearchButton} disabled={suggestions.length === 0} >
                        <i className="material-icons">
                            search
                        </i>

                    </button>

                    <ul className={`suggestion-list ${showSuggestions ? 'showSuggestions' : ''}`}>
                        {suggestions.map((product, index) => (
                            <li className='suggestionItem' key={index} onClick={() => handleSuggestionClick(product)}>
                                {product.title.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>


    )

}

export default SearchBar;