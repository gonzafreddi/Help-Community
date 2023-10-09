const express = require("express");
const webhooRouter = express.Router();

const receiveWebhook = require("../controllers/mercadoPago/webhook.js");



webhooRouter.post("/webhook", receiveWebhook)// ? router.post por si el usuario cierra mercado pago sin volver a nuestra app

module.exports = webhooRouter;
