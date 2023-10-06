import React from "react";
import { Card } from "../Card/Card";
import style from "./Cards.module.css";
import ong from "../../../../Api/dataApi/ong.js";

export const Cards = () => {
  // Obtener todas las campañas de todas las ONG en una lista plana
  const campañas = ong.flatMap((ongItem) =>
    ongItem.campañas.map((campaña) => ({
      ...campaña,
      ongId: ongItem.id, // Agregar la propiedad ongId para identificar la ONG
    }))
  );

  return (
    <div className={style.cardsContainer}>
      {campañas.map((campaña) => (
        <div key={campaña.id}>
          <Card
            key={campaña.id}
            nombreOng={ong.find((ongItem) => ongItem.id === campaña.ongId).name} // Encontrar la ONG correspondiente por ongId
            nombre={campaña.name}
            descripcion={campaña.short_description}
            imagen={campaña.image}
            fechaInicio={campaña.startDate}
            fechaFin={campaña.endDate}
            objetivo={campaña.finalAmount}
            categoria={campaña.category}
            provincia={campaña.province}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;