

import style from "./buys.module.css"
import { CardInfoUser } from "../userComponents/cardInfo/cardInfoUser"
import { getAllBuysForUser } from "../../redux/actions/action"
import React, { useState, useEffect } from 'react';


 export default function UserBuys() {

const searchParams = new URLSearchParams(window.location.search);
const email = searchParams.get('email');
console.log(email)
  const [buys, setBuys] = useState([]);

  console.log(buys)
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
console.log(buys)
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <h1>Historial de compras</h1>
        <div className={style.cardCont}>
          {buys.length > 0 ? (
            buys.map((buy) => (
              <CardInfoUser key={buy.id} 
              icon={buy.products.items[0].picture_url}
              h5={buy.products.items[0].title}
              p={`Cantidad: ${buy.products.items[0].quantity} Precio unitario: ${buy.products.items[0].unit_price}`}
              check={buy.products.status}
              />
            ))
          ) : (
            <h1>No hay compras</h1>
          )}
        </div>
      </div>
    </div>
  );
}







