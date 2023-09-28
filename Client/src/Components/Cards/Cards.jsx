// import { useEffect, useState } from "react";
import { Card } from "../Card/Card"
import datosONG from "../../../../Api/ong/ong";
import style from "./Cards.module.css"
// import axios from "axios";


export const Cards = () => {

console.log("datosONG:", datosONG)
  
  return (
    <div className={style.cardsContainer}>
      {datosONG.map((ong) => (
        <div key={ong.id}>
          {/* <h2>{ong.name}</h2>
          <p>Estado: {ong.state ? 'Activa' : 'Inactiva'}</p>
          <h3>Campañas:</h3> */}
          <div>
            {ong.campañas.map((campaña) => (
              <Card
                key={campaña.id}
                nombreOng={ong.name}
                nombre={campaña.name}
                descripcion={campaña.description}
                imagen={campaña.image}
                fechaInicio={campaña.startDate}
                fechaFin={campaña.endDate}
                objetivo={campaña.finalAmount}
                estado={campaña.state}
                categoria={campaña.category}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


export default Cards;



// const [ datosONG, setDatosONG ] = useState([]);
// console.log("datosONG: ",datosONG)

// useEffect(()=>{
//   axios.get("http://localhost:3001/Api/ong/ong.js")
//   .then((response)=>{
//     setDatosONG(response.data);
//   })
//   .catch((error)=>{
//     console.error("Error al obtener los Datos de la API:", error);
//   });
// },[]);