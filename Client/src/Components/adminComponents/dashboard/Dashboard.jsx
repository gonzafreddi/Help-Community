
import "./dashboard.css"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function Card({ title, value,value2, text1, text2, progress, chartData }) {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <div className="flex-container">
        <p className="value">{value}</p>
        <p className="value">{value2}</p>
      </div>
      <div className="cont-text">
        <p className="text1">{text1}</p>
        <p className="text2">{text2} </p>
      </div>
      {progress && (
        <div className="flex-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: progress }}></div>
          </div>
        </div>
      )}

    </div>
  );
}

function ChartCard({ title, text, chartData }) {
  return (
    <div className="chart-card">
      <p className="chart-title">{title}</p>
      <p className="chart-text">{text}</p>
      <div className="chart">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
}

function Dashboard() {

  const chartData1 = {
    labels: ['Anteriores', 'Nuevos'],
    datasets: [
      {
        data: [776, 224],
        backgroundColor: ['#333', '#007bff'], // Cambia los colores según tus preferencias
      },
    ],
  };

  const chartData2 = {
    labels: ['Inactivos', 'Activos'],
    datasets: [
      {
        data: [322, 678],
        backgroundColor: ['#dc3545', '#28a745'], // Cambia los colores según tus preferencias
      },
    ],
  };

  return (
    <div className="general-content">
    <div className="content">
      <Card title="Promedio de compras por usuario" value="1.2" value2="0.7" text1="Mensuales" text2="Anuales" />
      <Card title="Ventas mensuales" value="$12,699" text1="Productos vendidos: 23" text2="Objetivo: $80.000" progress="15.9%" />
      <Card title="Ingresos anuales (2023)" value="$300,068" text1="Productos vendidos: 43" text2="Objetivo: $1.220.500" progress="24.9%" />
    </div>
    <div className="content-charts">
        <ChartCard
          title="Nivel de registros"
          text="Sobre usuarios acumulados en este mes"
          chartData={chartData1}
        />
        <ChartCard
          title="Nivel de actividad"
          text="Sobre el total de usuarios en este mes"
          chartData={chartData2}
        />
    </div>
    </div>
  );
}


export default Dashboard;






