
import "./dashboard.css"
import React from 'react';

function Card({ title, value, text1, text2, progress }) {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <div className="flex-container">
        <p className="value">{value}</p>
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

function Dashboard() {
  return (
    <div className="content">
      <Card title="Promedio de compras por usuario" value="1.2" />
      <Card title="Ventas mensuales" value="$12,699" text1="Productos vendidos: 23" text2="Objetivo: $80.000" progress="15.9%" />
      <Card title="Ingresos anuales (2023)" value="$300,068" text1="Productos vendidos: 43" text2="Objetivo: $1.220.500" progress="15.9%" />
      {/* Repite el patrón para las otras tarjetas */}
    </div>
  );
}


export default Dashboard;









// <div class="content"><div class="tremor-Grid-root grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//     <div class="tremor-Card-root relative w-full text-left ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-yellow-500 border-l-4 p-6 max-w-lg mx-auto">
//         <p class="font-medium text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">Promedio de compras por usuario</p>
//         <div class="tremor-Flex-root flex w-full flex-row justify-between items-center mt-4">
//             <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content"><b class="text-inherit font-bold">Este mes</b></p><p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
//                 <b class="text-inherit font-bold">En el año</b></p></div><div class="tremor-Flex-root flex w-full flex-row justify-between items-center">
//                     <p class="font-semibold text-tremor-metric text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">1.2</p>
//                     <p class="font-semibold text-tremor-metric text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">0.7</p>
//                     </div>
//                     </div>
                    
//                     <div class="tremor-Card-root relative w-full text-left ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-neutral-500 border-l-4 p-6 max-w-lg mx-auto">
//                         <div class="tremor-Flex-root flex w-full flex-row justify-between items-start">
//                             <div><p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Ventas mensuales</p><p class="font-semibold text-tremor-metric text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">$ 12,699</p></div>
//                             <span class="tremor-BadgeDelta-root w-max flex-shrink-0 inline-flex justify-center items-center cursor-default rounded-tremor-full bg-opacity-20 dark:bg-opacity-25 bg-emerald-500 text-emerald-500 px-2.5 py-0.5 text-sm">
//                                 <svg class="tremor-BadgeDelta-icon shrink-0 -ml-1 mr-1.5 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg>
//                                 <p class="tremor-BadgeDelta-text text-sm whitespace-nowrap">13.2%</p></span></div><div class="tremor-Flex-root flex w-full flex-row justify-between items-center mt-4">
//                                     <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content truncate">Productos vendidos: 32</p>
//                                     <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Objetivo: $ 220,500</p></div><div class="tremor-ProgressBar-root flex items-center w-full mt-2">
//                                         <div class="tremor-ProgressBar-progressBarWrapper relative flex items-center w-full rounded-tremor-full bg-opacity-20 bg-tremor-brand-muted/50 dark:bg-dark-tremor-brand-muted h-2">
//                                             <div class="tremor-ProgressBar-progressBar flex-col h-full rounded-tremor-full bg-tremor-brand dark:bg-dark-tremor-brand" style="width: 15.9%;"></div></div></div></div><div class="tremor-Card-root relative w-full text-left ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-stone-500 border-l-4 p-6 max-w-lg mx-auto">
//                                                 <div class="tremor-Flex-root flex w-full flex-row justify-between items-end"><div><p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Ingresos anuales (2023) </p>
//                                                 <p class="font-semibold text-tremor-metric text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">$300,068</p></div></div><div class="tremor-Flex-root flex w-full flex-row justify-between items-center mt-4">
//                                                     <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content truncate">Productos vendidos: 43</p>
//                                                     <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content"> Objetivo: $ 1,220,500</p></div>
//                                                     <div class="tremor-ProgressBar-root flex items-center w-full mt-2">
//                                                         <div class="tremor-ProgressBar-progressBarWrapper relative flex items-center w-full rounded-tremor-full bg-opacity-20 bg-tremor-brand-muted/50 dark:bg-dark-tremor-brand-muted h-2">
//                                                             <div class="tremor-ProgressBar-progressBar flex-col h-full rounded-tremor-full bg-tremor-brand dark:bg-dark-tremor-brand" style="width: 15.9%;"></div></div></div></div></div>
//                                                             <div class="tremor-Grid-root grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
//                                                                 <div class="tremor-Card-root relative w-full text-left ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-tremor-brand dark:border-dark-tremor-brand p-6 max-w-lg mx-auto mt-6">
//                                                                     <p class="font-medium text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">Nivel de registros</p>
//                                                                     <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Usuarios acomulados en este mes</p><div class="tremor-Flex-root flex w-full flex-row justify-between items-center">
//                                                                         <div class="w-full h-40 mt-6"><div class="recharts-responsive-container h-full w-full" width="464" height="160" style="width: 100%; height: 100%; min-width: 0px;"><div class="recharts-wrapper" role="region" style="position: relative; cursor: default; width: 464px; height: 160px;"><svg cx="50%" cy="50%" class="recharts-surface" width="464" height="160" viewBox="0 0 464 160">
//                                                                             <title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="0" y="0" height="160" width="464"></rect></clipPath></defs><text class="fill-tremor-content-emphasis dark:fill-dark-tremor-content-emphasis" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"> 678</text><g class="recharts-layer recharts-pie stroke-tremor-background dark:stroke-dark-tremor-background cursor-default" tabindex="0"><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="232" cy="80" tabindex="-1" name="Nuevos" class="recharts-sector fill-slate-500" stroke="" stroke-linejoin="round" fill="" color="slate" d="M 232,0
//     A 80,80,0,
//     0,1,
//     311.75193036049006,86.29520482395483
//   L 291.8139477703675,84.72140361796612
//             A 60,60,0,
//             0,0,
//             232,20 Z" role="img" style="outline: none;"></path></g><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="232" cy="80" tabindex="-1" name="Anteriores" class="recharts-sector fill-indigo-500" stroke="" stroke-linejoin="round" fill="" color="indigo" d="M 311.75193036049006,86.29520482395483
//     A 80,80,0,
//     1,1,
//     231.99999999999997,0
//   L 232,20
//             A 60,60,0,
//             1,0,
//             291.8139477703675,84.72140361796612 Z" role="img" style="outline: none;"></path></g></g></svg><div tabindex="-1" role="dialog" class="recharts-tooltip-wrapper" style="pointer-events: none; visibility: hidden; position: absolute; top: 0px; left: 0px; outline: none;"></div></div></div></div></div></div><div class="tremor-Card-root relative w-full text-left ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-tremor-brand dark:border-dark-tremor-brand p-6 max-w-lg mx-auto mt-6"><p class="font-medium text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">Nivel de actividad</p><p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Usuarios en este mes</p><div class="tremor-Flex-root flex w-full flex-row justify-between items-center"><div class="w-full h-40 mt-6"><div class="recharts-responsive-container h-full w-full" width="464" height="160" style="width: 100%; height: 100%; min-width: 0px;"><div class="recharts-wrapper" role="region" style="position: relative; cursor: default; width: 464px; height: 160px;"><svg cx="50%" cy="50%" class="recharts-surface" width="464" height="160" viewBox="0 0 464 160"><title></title><desc></desc><defs><clipPath id="recharts3-clip"><rect x="0" y="0" height="160" width="464"></rect></clipPath></defs><text class="fill-tremor-content-emphasis dark:fill-dark-tremor-content-emphasis" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"> 678</text><g class="recharts-layer recharts-pie stroke-tremor-background dark:stroke-dark-tremor-background cursor-default" tabindex="0"><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="232" cy="80" tabindex="-1" name="Activos" class="recharts-sector fill-green-500" stroke="" stroke-linejoin="round" fill="" color="green" d="M 232,0
//     A 80,80,0,
//     0,1,
//     306.1561791847066,110.01434804765351
//   L 287.61713438852996,102.51076103574013
//             A 60,60,0,
//             0,0,
//             232,20 Z" role="img" style="outline: none;"></path></g><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="232" cy="80" tabindex="-1" name="Inactivos" class="recharts-sector fill-red-500" stroke="" stroke-linejoin="round" fill="" color="red" d="M 306.1561791847066,110.01434804765351
//     A 80,80,0,
//     1,1,
//     231.99999999999997,0
//   L 232,20
//             A 60,60,0,
//             1,0,
//             287.61713438852996,102.51076103574013 Z" role="img" style="outline: none;"></path></g></g></svg><div tabindex="-1" role="dialog" class="recharts-tooltip-wrapper" style="pointer-events: none; visibility: hidden; position: absolute; top: 0px; left: 0px; outline: none;"></div></div></div></div></div></div></div></div>