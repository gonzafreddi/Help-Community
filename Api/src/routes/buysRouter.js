const { Router } = require("express");
const { getbuysHandler, getBuysForUserHandler } = require("../handlers/buysHandler");

const buysRouter = Router();

buysRouter.get("/", getbuysHandler);
buysRouter.get("/user/:email", getBuysForUserHandler);
// buysRouter.post("/", postbuysHandler);

module.exports = buysRouter;