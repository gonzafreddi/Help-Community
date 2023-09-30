import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { Cards } from "../Cards/Cards";
import FilterBar  from '../FilterBar/FilterBar';

export const Home = () => {

const campaignBackup = useSelector((state) => state.campaignBackup);

const [page, setPage] = useState(1);

 // Número de tarjetas por página
 const cardsPerPage = 8;
 const totalItems = campaignBackup.length;

 // Función para obtener las tarjetas en la página actual

   const getCurrentPageCampaigns = () => {
   const startIndex = (page - 1) * cardsPerPage;
   const endIndex = startIndex + cardsPerPage;
   const displayedData = campaignBackup.slice(startIndex, endIndex);
   return displayedData;

 };

 return (

   <div>  
       <FilterBar campaigns={campaigns}/>
       <Cards data={getCurrentPageCampaigns()}/>
       <Pagination page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/>
   </div>
 )
}