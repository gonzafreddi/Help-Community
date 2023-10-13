

import style from "./buys.module.css"
import { CardInfoUser } from "../userComponents/cardInfo/cardInfoUser"
// import { useEffect, useState } from "react"
import { getAllBuys } from "../../redux/actions/action"

import React, { useState, useEffect } from 'react';


 export function AllBuys() {
  const [buys, setBuys] = useState([]);


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
  }, []); // No debes usar 'buys' como dependencia

  return (
    <div className={style.container}>
      <div className={style.cards}>
        <h1>Historial de compras</h1>
        <div className={style.cardCont}>
          {buys.length > 0 ? (
            buys.map((buy) => {
                return(
                    <CardInfoUser key={buy.id} 
                    icon={buy.products.items[0].picture_url}
                    h5={buy.products.items[0].title}
                    p={`Cantidad: ${buy.products.items[0].quantity} Precio unitario: ${buy.products.items[0].unit_price}`}
                    check={buy.products.statusDetail}
                    />
                  )
            })
          ) : (
            <h1>No hay compras</h1>
          )}
        </div>
      </div>
    </div>
  );
}


















// import style from "./buys.module.css"
// import { CardInfoUser } from "../userComponents/cardInfo/cardInfoUser"
// import { useEffect, useState } from "react"
// import { getAllBuys } from "../../redux/actions/action"
// export function AllBuys(){
// const [buys, setBuys] = useState()
// useEffect(async()=>{
// const buyData = await getAllBuys()
// setBuys(buyData)
// },[buys])

//     return(<div className={style.conteiner}>
        
//       <div className={style.cards}> 
//       <h1>Historial de compras</h1>
//     <div className={style.cardCont}>

//     {
//         buys? buys.map((e)=>{
//             return (<CardInfoUser/>)
//         }): <h1>No hay compras</h1>
//     }
//     <CardInfoUser
//         icon={"https://i.dummyjson.com/data/products/2/1.jpg"}
//         h5={"ipone x"}
//         p={"Cantidad: 1 Precio: $299"}
//         check={"https://tse1.mm.bing.net/th?id=OIP.8WbIrvh6UlckcGsf7-m2JQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"}
//         />
//     </div>
//     <div className={style.cardCont}>
//     <CardInfoUser
//         icon={"https://i.dummyjson.com/data/products/2/1.jpg"}
//         h5={"ipone x"}
//         p={"Cantidad: 1 Precio: $299"}
//         check={"https://tse1.mm.bing.net/th?id=OIP.8WbIrvh6UlckcGsf7-m2JQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"}
//         />
//     </div>
//     </div>
//     </div>)
// }