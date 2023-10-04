import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getCampaign } from "../../redux/actions/action";
import './SearchBar.css';

const SearchBar = () => {

    const campaigns = useSelector((state) => state.campaignBackup);
    // console.log('CAMPAÑAS ========');
    // console.log(campaigns);

    //TODO --- Manejo de busqueda

    const navigate = useNavigate();

    const [selectedCampaign, setSelectedCampaign] = useState('');
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)

    const onSearch = (campaign) => {
    
        setSelectedCampaign(campaign.name);
        console.log(selectedCampaign);
        navigate(`detail/${selectedCampaign}`);
    
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
        onSearch(campaign);
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
                        placeholder='Busca una campaña'
                    />

                    <button className='search-button' onClick={handleSearchButton} disabled={suggestions.length === 0} >
                        <i className="material-icons">
                            search
                        </i>

                    </button>

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

export default SearchBar;


// const mapStateToProps = (state) => {
//     return {
//         allCampaigns: state.allCampaigns
//     }
// };



// export default connect (
//     mapStateToProps
// ) (SearchBar);