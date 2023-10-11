// * La información que envía mercado pago, la envía por query
const { response } = require('express');
const mercadopago = require('mercadopago');
require('dotenv').config();


const receiveWebhook = async(req,res) => {
   const payment = req.query
   console.log(req.query.email)
    try {
        
    if(payment.type === "payment"){
        const data = await mercadopago.payment.findById(payment["data.id"])
        const orderId = data.body.order.id
       const items =  await data.response.additional_info.items
        const payer = await data.response.payer
        const transaction = data.response.transaction_details
        const status = data.response.status
        const statusDetail = data.response.status_detail  

        
        const allData = [{ items, payer, transaction, status, statusDetail}]      
        // const function almacenar(allData) {
        //     create.allData
        // }
        console.log(allData)
        console.log(items)
        res.sendStatus(204)
    }
    } catch (error) {
        console.log(error)
    }
};
module.exports = receiveWebhook;




//     // const objeto = JSON.parse(payment);
  
// //    try {
// //     console.log(req.body, req.query );
// //     res.sendstatus(204);
// //    } catch (error) {
// //     console.log("webhokk error")
// //    }
    
//     try {
//         if (type === "payment"){
//           const datos_pago = await mercadopago.payment.findById(data.id);
//             console.log(datos_pago);
    
//         };
     
//             // return data;
//             res.sendstatus(204);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({error: error.message});
        
//     }
   