const { Router } = require('express');
const { postOng_donorHandler } = require("../handlers/ongdonorHandler");

const ongdonorRouter = Router();

//ongdonorRouter.get("/", getOng_donorHandler);
ongdonorRouter.post("/create", postOng_donorHandler);

module.exports = ongdonorRouter;