import style from "./buys.module.css"
import { CardInfoUser } from "../userComponents/cardInfo/cardInfoUser"
import { getAllBuysForUser } from "../../redux/actions/action"
import React, { useState, useEffect } from 'react';
import Comprobante from "./comprobante/comporbante";

export default function UserBuys() {
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get('email');
  const [selectedBuyIndex, setSelectedBuyIndex] = useState(-1); // -1 significa que no se ha seleccionado ningún elemento
  const [buys, setBuys] = useState([]);
  const [isOpen , setIsOpen] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buyData = await getAllBuysForUser(email);
        setBuys(buyData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleBuyClick = (index) => {
    setSelectedBuyIndex(index);
  }
  const handlerClose=()=>{
    setSelectedBuyIndex(-1)
    console.log("anda")
  }

  return (
    <div className={style.container}>
      <div className={style.cards}>
        <h1>Historial de compras</h1>
        <div className={style.cardCont}>
          {buys.length > 0 ? (
            buys.map((buy, index) => (
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
      </div>
    </div>
  );
}
