import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Pagination from '../../components/Pagination/Pagination';
import { Nav } from "../Nav/Nav"

export const Home = () => {

  // PAGINADO
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getDrivers());
  //     dispatch(getTeams())
  // }, [dispatch]);

  // const teams = useSelector(state => state.teams);

  // const allDrivers = useSelector((state) => state.drivers);
  // const [page, setPage] = useState(1);

  // // Número de tarjetas por página
  // const cardsPerPage = 9;

  // // Función para obtener las tarjetas en la página actual
  // const getCurrentPageDrivers = () => {
  //     const startIndex = (page - 1) * cardsPerPage;
  //     const endIndex = startIndex + cardsPerPage;
  //     console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`);
  //     return allDrivers.slice(startIndex, endIndex);
  // };





  return (
    <div>
        <Nav/>
    </div>
  )
}
