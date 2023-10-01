const { Router } = require('express');
const { postOng_donorHandler } = require("../handlers/ongdonorHandler");

const ongdonorRouter = Router();

ongdonorRouter.post("/", postOng_donorHandler);

module.exports = ongdonorRouter;