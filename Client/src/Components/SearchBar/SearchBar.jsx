import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './SearchBar.css';

function SearchBar() {

    //TODO --- Manejo de busqueda
    
    const campaigns = useSelector(state => state.allCampaigns);
    const navigate = useNavigate();

    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)

    const onSearch = (campaign) => {
    
        setSelectedCampaign(campaign);
    
        navigate(`/details/${selectedCampaign.id}`);
    
    }

    const handleInputChange = (event) => {
        
        const value = event.target.value;
        setSearchText(value.toUpperCase());
        setShowSuggestions(value !== '');

        if(searchText === '') {
            setShowSuggestions(false);
        }

        const filtered = campaigns.filter((campaign) => 
            campaign.name.toUpperCase().includes(value.toUpperCase())
        );

        setSuggestions(filtered.slice(0, 10));

    };

    const handleSuggestionClick = (campaign) => {
        setSearchText('');
        setSuggestions([]);
        setShowSuggestions(false);
        onSearch(campaign);

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
                        className='input'
                        type='search'
                        value={searchText}
                        onChange={handleInputChange}
                        onKeyPress={handleEnterPress}
                        placeholder='Busca una campaña'
                    />

                    <button className='search-button' onClick={handleSearchButton} disabled={suggestions.length === 0} >Buscar</button>

                    <ul className={`suggestion-list ${showSuggestions ? 'showSuggestions' : ''}`}>
                        {suggestions.map((campaign, index) => (
                            <li className='suggestionItem' key={index} onClick={() => handleSuggestionClick(campaign)}>
                                {campaign.name.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>


    )

}

const mapStateToProps = (state) => {
    return {
        allCampaigns: state.allCampaigns
    }
};



export default connect (
    mapStateToProps
) (SearchBar);