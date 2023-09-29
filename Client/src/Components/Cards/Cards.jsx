import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Card/Card"
import datosONG from "../../../../Api/ong/ong";
import style from "./Cards.module.css"
import axios from "axios";
import { getCampaign } from "../../redux/actions/action";


export const Cards = ({data}) => {

  console.log("data:", data)
 
  return (
    <div className={style.cardsContainer}>
      {data.map((campaña) => (
          <div>
              <Card
                key={campaña.id}
                //nombreOng={ong.name} 
                nombre={campaña.name}
                descripcion={campaña.description}
                imagen={campaña.image}
                fechaInicio={campaña.startDate}
                fechaFin={campaña.endDate}
                objetivo={campaña.finalAmount}
                estado={campaña.state}
                categoria={campaña.category}
              />
          </div>
      ))}
    </div>
  )
}


export default Cards;


// const dispatch = useDispatch()

  // Datos de las ONG y campañas
  // const datosCampaignONG = useSelector((state) => state.campaign);
  
  // useEffect(() => {
  //   // Llama a la acción para obtener las campañas usando Redux
  //   dispatch(getCampaign());
  // }, [dispatch]);
      // <div key={ong.id}>
          {/* <h2>{ong.name}</h2>
          <p>Estado: {ong.state ? 'Activa' : 'Inactiva'}</p>
          <h3>Campañas:</h3> */}