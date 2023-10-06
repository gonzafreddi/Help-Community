import { Link } from "react-router-dom"
import { Cards } from "../Cards/Cards"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from '../Pagination/Pagination';
import { getCampaign } from '../../redux/actions/action';


export default function Landing(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCampaign());
        // dispatch(getStates());
        // dispatch(getCategory())
    }, [dispatch]);
  
  
  
    // const states = useSelector(state => state.states);
    // const category = useSelector(state => state.category);
    const allCampaigns = useSelector((state) => state.campaign);
  
    const [page, setPage] = useState(1);
  
   // Número de tarjetas por página
   const cardsPerPage = 3;
  
   const totalItems = allCampaigns.length;
  
  
   // Función para obtener las tarjetas en la página actual
  
     const getCurrentPageCampaigns = () => {
     const startIndex = (page - 1) * cardsPerPage;
     const endIndex = startIndex + cardsPerPage;
     const displayedData = allCampaigns.slice(startIndex, endIndex);
     return displayedData;
  
   };

    return(
    
    <div>
        <h1>Bienvenidos</h1>
        <Link to={"/products"}>
        <button>INGRESAR</button>
        </Link>
        <div>
        <Cards data={getCurrentPageCampaigns()}/>
        <Pagination page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/>
        </div>
    </div>

    )
}