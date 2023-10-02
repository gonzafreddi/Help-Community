import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getCampaign } from "../../redux/actions/action";
import './SearchBar.css';

const SearchBar = () => {

    // const getCampaings = async () => {
    //     const result = await axios.get('localhost:3000/campaing');
    //     const campaigns = result.data;
    //     return campaigns;
    // }

    const campaigns = useSelector((state) => state.campaignBackup);


    // const dispatch = useDispatch();

    // useEffect(() => {
    
    //     dispatch(getCampaign());
    // }, [dispatch]);

    //TODO --- Manejo de busqueda

    const navigate = useNavigate();

    const [selectedCampaign, setSelectedCampaign] = useState('');
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)

    const onSearch = (campaign) => {
    
        setSelectedCampaign(campaign.name);

        navigate(`detail/${selectedCampaign.name}`);
    
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
                        className='input'
                        type='search'
                        value={searchText}
                        onChange={handleInputChange}
                        onKeyPress={handleEnterPress}
                        placeholder='Busca una campaña'
                    />

                    <button className='search-button' onClick={handleSearchButton} disabled={suggestions.length === 0} >
                        {/* <svg className="lupa" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="5" cy="5" r="4"></circle>
                            <line x1="11" y1="11" x2="7.7" y2="7.65"></line>
                        </svg> */}
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