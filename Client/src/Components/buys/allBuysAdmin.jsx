import style from "./buys.module.css";
import { CardInfoUser } from "../userComponents/cardInfo/cardInfoUser";
import { getAllBuys } from "../../redux/actions/action";
import React, { useState, useEffect } from 'react';
import StatusBuyFilter from "./statusBuyFilter";
import Pagination from "../Pagination/Pagination";
import Comprobante from "./comprobante/comporbante";

export function AllBuys() {
  const [buys, setBuys] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buyData = await getAllBuys();
        setBuys(buyData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (value) => {
    setPage(1)
    setSelectedFilter(value);
  };
  // Filtra las compras según el valor del filtro seleccionado

  const filteredBuys = selectedFilter
    ? buys.filter((buy) => buy.products.status === selectedFilter)
    : buys;
    console.log(filteredBuys)
  console.log(buys)


  const [page, setPage] = useState(1);

  // Número de tarjetas por página
  const cardsPerPage = 6;
  const totalItems = filteredBuys.length;
  // Función para obtener las tarjetas en la página actuaw

    // const startIndex = (page - 1) * cardsPerPage;
    // const endIndex = startIndex + cardsPerPage;
    // const displayedData = filteredBuys.slice(startIndex, endIndex);
    const [selectedBuyIndex, setSelectedBuyIndex] = useState(-1);
    const handleBuyClick = (index) => {
      setSelectedBuyIndex(index);
    }
    const handlerClose=()=>{
      setSelectedBuyIndex(-1)
      console.log("anda")
    }
    console.log(page)
    const getCurrentPageCampaigns = () => {
      const startIndex = (page - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      const displayedData = filteredBuys.slice(startIndex, endIndex);
      return displayedData;
  
    };
    const currentCards = getCurrentPageCampaigns();
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <h1>Historial de ventas</h1>
        <StatusBuyFilter buys={buys} onFilterChange={handleFilterChange} />
        {/* <div className={style.cardCont}>
          {filteredBuys.length > 0 ? (
            displayedData.map((buy, index) => (
              
              <CardInfoUser
                key={buy.id}
                icon={buy.products.items[0].picture_url}
                h5={buy.products.items[0].title}
                p={`Cantidad: ${buy.products.items[0].quantity} Precio unitario: ${buy.products.items[0].unit_price}`}
                check={buy.products.status}
              />
            ))
          ) : (
            <h1>No hay ventas</h1>
          )}
          
        </div> */}
        <div className={style.cardCont}>
          {filteredBuys.length > 0 ? (
            currentCards.map((buy, index) => (
              <div key={buy.id}>
                {selectedBuyIndex === index ? (
                <div className={style.comprobante}>
                  <Comprobante 
                  handlerClose={handlerClose}
                  props={buy}
                  />
                </div>
                ) : (
                  <div onClick={() => handleBuyClick(index)}>
                    <CardInfoUser
                      icon={buy.products.items[0].picture_url}
                      h5={buy.products.items[0].title}
                      p={`Cantidad: ${buy.products.items[0].quantity} Precio unitario: ${buy.products.items[0].unit_price}`}
                      check={buy.products.status}
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <h1>No hay compras</h1>
          )}
        </div>
        <div className={style.pagination}><Pagination  page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/></div>
      </div>
    
    </div>
  );
}
