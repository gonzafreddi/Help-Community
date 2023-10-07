const express = require("express");
const paymentRouter = express.Router();
const success = require('../controllers/mercadoPago/success');
const webhook = require('../controllers/mercadoPago/webhook');
const createOrder = require("../controllers/mercadoPago/paymentController");

paymentRouter.post("/create_order", createOrder);

paymentRouter.get('/success', success)// ? Redirigir al usuario si el pago sale bien
paymentRouter.post('/webhook', webhook)// ? router.post por si el usuario cierra mercado pago sin volver a nuestra app

module.exports = paymentRouter;
