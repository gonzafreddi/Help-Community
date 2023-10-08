const express = require("express");
const paymentRouter = express.Router();
const success = require('../controllers/mercadoPago/success');
//const receiveWebhook = require('../controllers/mercadoPago/webhook');
const {createOrder, receiveWebhook} = require("../controllers/mercadoPago/paymentController");

paymentRouter.post("/create_order", createOrder);

paymentRouter.get('/success', success)// ? Redirigir al usuario si el pago sale bien
paymentRouter.post('/webhook', receiveWebhook)// ? router.post por si el usuario cierra mercado pago sin volver a nuestra app

module.exports = paymentRouter;
