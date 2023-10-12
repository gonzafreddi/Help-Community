// * La información que envía mercado pago, la envía por query
const mercadopago = require('mercadopago');
const getUserByEmail = require("../getUserByEmail")
const createBuys = require("../createBuys")
require('dotenv').config();

// crear funcion para crear la compra en base al id del usuario 
//llamar a la funcion en webhook y pasarle all data que contiene el comprobante y el id del usuario
//crear rutas get para poder traer las compras que coreespondan a cada usuario en base a su id que lo sacas con la funcion getUserByEmail
// crear ruta get de todas las compras de todos los usuarios para que el admin pueda ver todas las transacciones 

const receiveWebhook = async(req,res) => {
   const payment = req.query
   const emailUser = req.query.email
   console.log(emailUser)
   const userUuId = await getUserByEmail(emailUser)
   console.log(userUuId)

    try {
    if(payment.type === "payment"){
        const data = await mercadopago.payment.findById(payment["data.id"])
        const orderId = data.body.order.id
        const items =  await data.response.additional_info.items
        const payer = await data.response.payer
        const transaction = data.response.transaction_details
        const status = data.response.status
        const statusDetail = data.response.status_detail  

        
        let allData = [{ items, payer, transaction, status, statusDetail}]    

        allData = [[...allData], [userUuId]]  
        // crear compra function
        // const function almacenar(allData) {
        //     llamar a la funcion de crear compra
        // }
        

        console.log(allData)
        createBuys(allData)
        res.sendStatus(204)
    }
    } catch (error) {
        console.log(error)
    }
};
module.exports = receiveWebhook;





   