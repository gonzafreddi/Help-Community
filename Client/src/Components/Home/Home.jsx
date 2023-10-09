import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaign, getStates, getCategory } from '../../redux/actions/action';
import Pagination from '../Pagination/Pagination';
import { Cards } from "../Cards/Cards";
import style from "./Home.module.css"
// import FilterBar from '../FilterBar/FilterBar';


export const Home = () => {


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
 const cardsPerPage = 2;

 const totalItems = allCampaigns.length;


 // Función para obtener las tarjetas en la página actual

   const getCurrentPageCampaigns = () => {
   const startIndex = (page - 1) * cardsPerPage;
   const endIndex = startIndex + cardsPerPage;
   const displayedData = allCampaigns.slice(startIndex, endIndex);
   return displayedData;

 };



 return (
   <div className={style.conteiner}>
       {/* <FilterBar states={states} category={category} /> */}

       <Cards className={style.contenedor} data={getCurrentPageCampaigns()}/>
     <div className={style.pagination}>
     <Pagination  page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/>
     </div>
   </div>
 )
}