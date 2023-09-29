import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Card/Card"
import style from "./Cards.module.css"
import { getCampaign } from "../../redux/actions/action";


export const Cards = () => {
  
  const dispatch = useDispatch()

  // Datos de las ONG y campañas
  const campaignBackup = useSelector((state) => state.campaignBackup);
  
  useEffect(() => {
    // Llama a la acción para obtener las campañas usando Redux
    dispatch(getCampaign());
  }, [dispatch]);
  
  console.log("campaign: ", campaignBackup)
 
  return (
    <div className={style.cardsContainer}>
      {campaignBackup.map((campaña) => (
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
                categoria={campaña.CategoryId}
              />
          </div>
      ))}
    </div>
  )
}


export default Cards;

