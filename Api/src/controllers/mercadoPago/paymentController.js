const mercadopago = require('mercadopago');
require('dotenv').config();

const { ACCESS_TOKEN } = process.env;

// * Configurar mercado pago


// const createOrder = (req,res) => {
//     console.log("createOrder")
//     // const {
//     //     id, buyOut, totalAmount
//     // } = req.body;

//     // ? Crear preferencias
//     let preference = {
//         items:[
//             {
//                 id,
//                 buyOut,
//                 totalAmount,
//             }
//         ],
//         // ? Darle el control a mercado pago...
//         back_urls:{
//             success:'http://localhost:3001/payment/success',
//             failure:'http://localhost:3001/payment/failure',
//             pending: 'http://localhost:3001/payment/pending' //cuando el usuario no ha pagado
//         },
//         notification_url:'https://pmcmwdd1-3001.brs.devtunnels.ms'
//     }

//     mercadopago.preferences.create(preference)
//     .then(response => res.status(200).json(response))
//     .catch(error => res.status(400).json({error:error.message}))
// };


// esto vendria a ser un post de creae una orden 


const createOrder = async(req, res)=>{
    mercadopago.configure({
        access_token:"TEST-6850757546672488-100711-50177e634a355fb71db241599efdb0f3-1503945548"
    })

    const result = await mercadopago.preferences.create({
        items:[{
            title: "laptop lenovo",
            id: 23,
            unit_price: 500,
            currency_id: "ARS",
            quantity: 1
        }]
    })
    console.log(result.body)
}
module.exports = createOrder;