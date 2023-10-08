// * La información que envía mercado pago, la envía por query
const mercadopago = require('mercadopago');
require('dotenv').config();


const receiveWebhook = async(req,res) => {
    const payment =req.query;
    //const objeto = JSON.parse(payment);
    console.log("EStoy en webhook", req.query);

    
    try {
        
        //if (type === "payment"){
          //const datos_pago = await mercadopago.payment.findById(data.id);
            //console.log(datos_pago);
    
        //};

        console.log(payment);
            //return data;
            //res.sendstatus(204);
        
    } catch (error) {
        console.log(error);
        //return res.sendstatus(500).json({error: error.message});
        
    }
   
};
module.exports = receiveWebhook;
