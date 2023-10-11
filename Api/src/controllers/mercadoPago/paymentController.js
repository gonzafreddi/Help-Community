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
    // console.log(req.body[0].price)
    console.log(req.body)

    const result = await mercadopago.preferences.create({
        items:[{
            title: req.body[0].name,
            id: req.body[0].id,
            unit_price: req.body[0].price,
            currency_id: "ARS",
            quantity: req.body.quantity || 1,
            userEmail: req.body[0].email
        }],

    // ? Darle el control a mercado pago...
        back_urls:{
            success:'http://localhost:3001/payment/success',
            failure:'http://localhost:3001/payment/failure',
            pending: 'http://localhost:3001/payment/pending', //cuando el usuario no ha pagado
            },
        notification_url:`https://pmcmwdd1-3001.brs.devtunnels.ms/payment/webhook?email=${req.body[0].email}`,

    })
    // console.log(result.body);
    res.send(result.body);

   
};



module.exports = createOrder;