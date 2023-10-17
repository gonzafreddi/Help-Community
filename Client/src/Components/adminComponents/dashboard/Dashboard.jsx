"use client";

import { BadgeDelta, Card, Flex, Metric, ProgressBar, Text, Col, Grid, DonutChart, Title, BarList, Bold } from "@tremor/react";
import styles from "./dashboard.module.css"

const usuariosActivos = [
    {
      name: "Activos",
      quantity: 211,
    },
    {
      name: "Inactivos",
      quantity: 467,
    },
];
const usuariosNuevos = [ 
    {
      name: "Nuevos",
      quantity: 178,
    },
    {
      name: "Anteriores",
      quantity: 500,
    },

  ];

  const promedioCompra=[
    {
        name: "mensual",
        value: 2 ,
},
    {
        name: "anual",
        value: 1,
    },
  ]
  
  const valueFormatter = (number) => ` ${new Intl.NumberFormat("us").format(number).toString()}`;


  function Dashboard() {
    return (
      <>
        <div className={`${styles.dashboardContainer} ${styles.dashboardBackgroundBlue}`}>
          <div className={styles.dashboardTitle}>Promedio de compras por usuario</div>
          {/* Otro contenido */}
        </div>
        <div className={`${styles.dashboardContainer} ${styles.dashboardBackgroundNeutral}`}>
          <div className={styles.dashboardTitle}>Ventas mensuales</div>
          {/* Otro contenido */}
        </div>
        <div className={`${styles.dashboardContainer} ${styles.dashboardBackgroundStone}`}>
          <div className={styles.dashboardTitle}>Ingresos anuales (2023)</div>
          {/* Otro contenido */}
        </div>
        {/* Más tarjetas */}
      </>
    );
  }
  
  export default Dashboard;















// export default function Dashboard() {
//   return (
//     <>
//     <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">


//     <Card className="max-w-lg mx-auto" decoration="left" decorationColor="yellow">
//     <Title>Promedio de compras por usuario</Title>
//     <Flex className="mt-4">
//       <Text>
//         <Bold>Este mes</Bold>
//       </Text>
//       <Text>
//         <Bold>En el año</Bold>
//       </Text>
//     </Flex>
//     <Flex>
//     <Metric>1.2</Metric>
//     <Metric>0.7</Metric>
//     </Flex>
//     </Card>

//     <Card className="max-w-lg mx-auto" decoration="left" decorationColor="neutral">
//       <Flex alignItems="start">
//         <div>
//           <Text>Ventas mensuales</Text>
//           <Metric>$ 12,699</Metric>
//         </div>
//         <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
//       </Flex>
//       <Flex className="mt-4">
//         <Text className="truncate">Productos vendidos: 32</Text>
//         <Text>Objetivo: $ 220,500</Text>
//       </Flex>
//       <ProgressBar value={15.9} className="mt-2" />
//     </Card>

//      <Card className="max-w-lg mx-auto" decoration="left" decorationColor="stone">
//      <Flex alignItems="end">
//        <div>
//          <Text>Ingresos anuales (2023) </Text>
//          <Metric>$300,068</Metric>
//        </div>
//        {/* <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta> */}
//      </Flex>
//      <Flex className="mt-4">
//        <Text className="truncate">Productos vendidos: 43</Text>
//        <Text> Objetivo: $ 1,220,500</Text>
//      </Flex>
//      <ProgressBar value={15.9} className="mt-2" />
//    </Card>

//    </Grid>

//    <Grid numItems={1} numItemsSm={1} numItemsLg={2} className="gap-2">
//    {/* <Col numColSpan={2} numColSpanLg={2}> */}

//     <Card className="max-w-lg mx-auto mt-6">
    
//     <Title>Nivel de registros</Title>
//     <Text>Usuarios acomulados en este mes</Text>
//     <Flex>
//     <DonutChart
//       className="mt-6"
//       data={usuariosNuevos}
//       category="quantity"
//       index="name"
//       valueFormatter={valueFormatter}
//       colors={["slate", "indigo",]}
//     />
//     </Flex>
//     </Card>

//     <Card className="max-w-lg mx-auto mt-6">
    
//     <Title>Nivel de actividad</Title>
//     <Text>Usuarios en este mes</Text>
//     <Flex>
//     <DonutChart
//       className="mt-6"
//       data={usuariosActivos}
//       category="quantity"
//       index="name"
//       valueFormatter={valueFormatter}
//       colors={["green", "red",]}
//     />
//     </Flex>
//     </Card>

//     {/* </Col> */}
//    </Grid>
//    </>


//   );
// }