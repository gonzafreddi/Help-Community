const express = require("express");
const paymentRouter = express.Router();
const success = require('../controllers/mercadoPago/success');
//const receiveWebhook = require("../controllers/mercadoPago/webhook.js");
const createOrder = require("../controllers/mercadoPago/paymentController");
const failure = require("../controllers/mercadoPago/failure");

paymentRouter.post("/create_order", createOrder);
paymentRouter.get("/failure", failure)
paymentRouter.get('/success', success)// ? Redirigir al usuario si el pago sale bien
//paymentRouter.post("/webhook", receiveWebhook)// ? router.post por si el usuario cierra mercado pago sin volver a nuestra app

module.exports = paymentRouter;
