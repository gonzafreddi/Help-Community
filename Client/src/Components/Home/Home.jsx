import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Pagination from '../Pagination/Pagination';
import { Nav } from "../Nav/Nav"

export const Home = () => {

  // -------PAGINADO
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getCampaigns());
  //  //     dispatch(getCategory())   
  // }, [dispatch]);

  //  // const categories = useSelector(state => state.category);

  // const allCampaigns = useSelector((state) => state.campaigns);
  // const [page, setPage] = useState(1);

  // // Número de tarjetas por página
  // const cardsPerPage = 9;

  // // Función para obtener las tarjetas en la página actual
  // const getCurrentPageCampaigns = () => {
  //     const startIndex = (page - 1) * cardsPerPage;
  //     const endIndex = startIndex + cardsPerPage;
  //     console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`);
  //     return allCampaigns.slice(startIndex, endIndex);
  // };
  //-----





  return (
    <div>
        <Nav/>

        <Cards campaigns={getCurrentPageCampaigns()} />
        
        {/* // <Pagination
        //       page={page}
        //       setPage={setPage}
        //       itemsPerPage={cardsPerPage}
        //       totalItems={allCampaigns.length}
        // />    */}

    </div>
  )
}



