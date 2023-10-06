const express = require("express");
const paymentRouter = express.Router();
const success = require('../controllers/mercadoPago.js/success');
const webhook = require('../controllers/mercadoPago.js/webhook');
const createOrder = require("../controllers/mercadoPago.js/paymentController");

paymentRouter.post("/create_preference", createOrder);

paymentRouter.get('/success', success)// ? Redirigir al usuario si el pago sale bien
paymentRouter.post('/webhook', webhook)// ? router.post por si el usuario cierra mercado pago sin volver a nuestra app

module.exports = paymentRouter;
