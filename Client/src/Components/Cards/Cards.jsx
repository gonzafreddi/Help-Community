import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Card/Card"
import style from "./Cards.module.css"
import { getCampaign } from "../../redux/actions/action";


export const Cards = ({data}) => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    // Llama a la acción para obtener las campañas usando Redux
    dispatch(getCampaign());
  }, [dispatch]);
  
  
  return (
    <div className={style.cardsContainer}>
      {data.map((campaña) => (
          <div key={campaña.id}>
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
                categoria={campaña.CategoryId}
              />
          </div>
      ))}
    </div>
  )
}


export default Cards;