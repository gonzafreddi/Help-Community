const { Router } = require("express");
const { getbuysHandler, postbuysHandler } = require("../handlers/buysHandler");

const buysRouter = Router();

buysRouter.get("/", getbuysHandler);
buysRouter.post("/", postbuysHandler);

module.exports = buysRouter;