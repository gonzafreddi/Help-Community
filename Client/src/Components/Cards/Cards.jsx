import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card } from "../Card/Card"
import style from "./Cards.module.css"
import { getCampaign } from "../../redux/actions/action";



export const Cards = ({data}) => {
  
  const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCampaign());  // Llama a la acción para obtener las campañas usando Redux
    }, [dispatch]);

  

  return (
    <div className={style.cardsContainer}>
      {data.map((campaña) => (
          <div key={campaña.id}>
              <Card
                key={campaña.id}
                nombreOng={campaña.ong} 
                nombre={campaña.name}
                descripcion={campaña.short_description}
                imagen={campaña.image}
                fechaInicio={campaña.startDate}
                fechaFin={campaña.endDate}
                objetivo={campaña.finalAmount}
                provincia={campaña.state}
                categoria={campaña.category}
              />
          </div>
      ))}
    </div>
  )
}


export default Cards;